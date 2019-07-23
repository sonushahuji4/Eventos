const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const Op = Sequelize.Op
const sequelize = require('../../config/db');
const {Users,Posts,Likes,Comments,Follows,MessageBox,Login_Details} = require('../../model/model_index');
var dateTime = require('node-datetime');


const multer = require('multer');
const path = require('path');

router.use('/public', express.static(path.join(__dirname, 'public')));
router.use('/views', express.static(path.join(__dirname, 'views')));

var storage = multer.diskStorage({
    destination: function(req, file, cb)
    {
        cb(null,path.join(__dirname,'../../public/image'))
    },
    filename: function(req, file, cb)
    {
        cb(null,Date.now() + path.extname(file.originalname))
    }
});

var upload = multer({ 
    storage: storage, 
    fileFilter: function (req, file, cb) {
            var types = ['image/jpeg','image/png'];
                type  = types.find(type => type == file.mimetype);
                  
                  if(!type){
                      return cb(null,false);
                  }

                  return cb(null,true);
          
    }
});

// find user_id
// whoever I follow, I must see their posts
// go to follow table
// get that particular user_id(reciever_id) and status should be "accept"
// then go to post table and find that particular user_id ka post

router.get('/posts', function(req, res)
{
    const user_id = req.session.user_id;
    console.log("user_id in GET=>",user_id)
    const status = "accept";
    var onlyDate = new Date();
    onlyDate = onlyDate.toISOString().slice(0,10)
    Posts.findAndCountAll({include:[{ model: Likes},{ model: Comments},{ model: Users}],
        where:{[Op.or]:[{user_id:{[Op.in]:[sequelize.literal('(SELECT `Follows`.receiver_id FROM `follows` AS `Follows` WHERE `Follows`.user_id='+user_id+' and `Follows`.status="accept")')]}},
        {user_id:user_id}],
        [Op.and]:{[Op.or]:[{event_start_date:{[Op.gte]:onlyDate}},{event_registeration_date_close:{[Op.gte]:onlyDate}}]}
            
        }

        })
    .then((postdata)=>
    {

        Users.findAll({where:{user_id:user_id}})
        .then((userdata)=>
        {
            //res.send(postdata.rows)
           res.render('home',{title:'home',items:postdata.rows,user:userdata});
        }) 
        .catch((err)=>
        {
            console.error(err)
            res.status(501)
            .send({
                    error : "error..... check console log"
                  })    
        })
        
    })
    .catch((err)=>
    {
        console.error(err)
        res.status(501)
        .send({
                error : "error..... check console log"
              })
    })
    
	
});

// upload post api
router.post('/posts', upload.single('feedsposts'),function (req,res)
{
    console.log("image path short => ", req.file)
    if(req.file)
    {
        const user_id = req.session.user_id;
        Users.findOne({ where:{user_id:user_id}})
        .then((users)=>
        {

                 if(users)
                 {
                     const user_id = users.user_id;
                     const message = req.body.message;
                     const imagepath = req.file.filename;

                    Posts.create({user_id:user_id, event_message: message, e_imagepath: imagepath})
                    .then((user)=>
                    {
                        res.redirect("http://localhost:4000/posts");
                        //res.render('home',{title:'home',items:user});
                    })
                    .catch((err)=>
                    {
                        console.error(err)
                        res.status(501).send({
                            error : "error..... check console log"
                        })
                    })
                 }
             
        })
        .catch((err)=>
        {
             console.error(err)
             res.status(501).send({
                 error : "error..... check console log"
             })
        })
    }
    else
    {
        //query +=  " '"+req.file.path+"')";
        res.status("sent file");

    }
});

// like post api
router.post('/posts/like/:id', function(req, res, next)
{
    const post_id = req.params.id;
    const user_id = req.session.user_id;
    const like_status = "liked";
    console.log("insede likes api")
    Likes.findOrCreate({where:{user_id:user_id,event_id:post_id,like_status:like_status}})
    .then((likedata)=>
    {
        if(likedata[1] == false) // if user has already liked the post then return false
        {
            res.send(likedata[1])
        }
        else if(likedata[1] == true) // if user has not liked a post then, create like and then return true
        {
            //res.send(likedata[1])
            Likes.findAndCountAll({where:{event_id:post_id}})
            .then((all_likes)=>
            {
                res.send(all_likes);
            })
            .catch((err)=>
            {
                console.error(err)
                res.status(501).send({error : "error..... check console log"})
            })
        }
        
                            
    })
    .catch((err)=>
    {
        console.error(err)
        res.status(501).send({error : "error..... check console log"})
    })
});

// add comment to post api
router.post('/posts/add_comment/:id', function(req, res, next)
{
    console.log("inside comment api")
    const post_id = req.params.id;
    const user_id = req.session.user_id;
    const comment_content = req.body.comment_content;
    console.log(comment_content);

    Comments.create({comment:comment_content,user_id:user_id,event_id:post_id})
    .then((comment_response)=>
    {
        //console.log(comment_response)
        //res.send("success")
            Comments.findAndCountAll({where:{event_id:post_id}})
            .then((comment_data)=>
            {
                res.send(comment_data);
            })
            .catch((err)=>
            {
                console.error(err)
                res.status(501).send({error : "error..... check console log"})
            })
        
        
                            
    })
    .catch((err)=>
    {
        console.error(err)
        res.status(501).send({error : "error..... check console log"})
    })
});
// Comments.findAll(
//     {include:[{ model: Users}],where:{event_id:post_id}
//     }
// )

// fetch all comments
router.post('/posts/fetch_add_comment', function(req, res, next)
{
    //console.log("fetch all comments api")
    const post_id = req.body.post_id;
    const user_id = req.session.user_id;
    const action = req.body.action;
    //const comment_content = req.body.comment_content;
    //console.log(post_id,action);
    if(action == "fetch_all_comment")
    {
        Comments.findAll(
            {include:[{ model: Users}],where:{event_id:post_id}
            }
        )
        .then((comment_response)=>
        {
            //console.log(comment_response)
            res.send(comment_response) 
                                
        })
        .catch((err)=>
        {
            console.error(err)
            res.status(501).send({error : "error..... check console log"})
        })
    }
    else
    {
        res.send("click on comment to view all comments");    
    }
});

// add submit comment to server database
router.post('/posts/add_comment', function(req, res, next)
{
    console.log("add_comment api")
    const user_id = req.session.user_id;
    const post_id = req.body.post_id;
    const comment = req.body.comment;
    const action = req.body.action;
    
    
    if(action == "submit_comment")
    {
        Comments.create({comment:comment,user_id:user_id,event_id:post_id})
        .then((comment_response)=>
        {
                res.send("success");
        })
        .catch((err)=>
        {
            console.error(err)
            res.status(501).send({error : "error..... check console log"})
        })
    }
});

router.get('/posts/user_id',function(req,res,next)
{
    console.log("get user id");
    const user_id = req.session.user_id
    res.send(user_id.toString());
})

router.get('/posts/get_user',function(req,res,next)
{
                                   
    console.log("get_user data");
    console.log("user_id",req.session.user_id);
    const user_id = req.session.user_id
    const status = "accept"
    Users.findAll( {
                        where:
                        {
                            user_id:{[Op.notIn]:[user_id]}
                        },
                        include:[{model:Follows}]
                        //limit: 3
                    })
    .then((get_user)=>
    {
        console.log(get_user)
        res.send(get_user);
    })
    .catch((err)=>
    {
        console.error(err)
        res.status(501).send(
        {
            error : "error..... check console log"
        })
    })
})

// follow(api) a user
router.post('/posts/follow', function(req,res,next)
{
    console.log("inside follow api")
    const user_id = req.session.user_id; // who's sending the request
    var action = req.body.action;
    const sender_id =req.body.sender_id // to whom you want to send follow request
    if(action == "Follow")
    {
        action = "requested"  // requesting a user to accept the request
        Follows.create({user_id:user_id,receiver_id:sender_id,status:action})
        .then((response)=>
        {
            if(response)
            {
                res.send({msg:"requested",success:true}) // request has been sent to the user
            }
            
        })
        .catch(()=>
        {
            console.error(err)
            res.status(501).send(
            {
                error : "error..... check console log"
            })
        })
    }
    else if(action == "Accept") //   Need to accept the user to follow you and update database from "requested" to "accept"
    {
        action = "requested"

        Follows.findAll({where:{receiver_id:user_id,user_id:sender_id,status:action}})
        .then((response_during_search)=>
        {
            if(response_during_search)
            {
                action = "accept"

                Follows.update({status:action},{where:{receiver_id:user_id,user_id:sender_id}})
                .then((response_after_update)=>
                {
                    console.log(response_after_update)
                    res.send({msg:"accept",success:true}) // user has accept the request
                })
                .catch(()=>
                {
                    console.error(err)
                    res.status(501).send(
                    {
                        error : "error..... check console log"
                    })
                })
            }
            else
            {
                console.log(response_during_search);
                res.send(response_during_search)
            }
        })
        .catch(()=>
        {
            console.error(err)
            res.status(501).send(
            {
                error : "error..... check console log"
            })
        })
    }
    else // just nitify user that he or she is already following or requested the other user
    {
        // ((action == "Following") || (action == "Requested"))
        res.send({msg:action,success:true})
    }
    
    //res.send("success");
}) 

// testing api 
// view home(feed section) api
router.get('/posts/get_follow',function(req,res,next)
{
    //    $or: [{a: 5}, {a: 6}]  // (a = 5 OR a = 6)
    const user_id = req.session.user_id;
    var status = "accept"
                        
    Follows.findAll({
                        where:{user_id:user_id,status:status}
                    })
                    .then((data)=>
                    {
                        // from here  I get the user whom I follow(receiver_id)
                        // Posts.findAndCountAll({where:{user_id:"4"}})
                        // .then((d)=>
                        // {
                        //     res.send(d)
                        // })
                        // .catch((err)=>
                        // {
                        //     console.log(err)
                        // })
                        res.send(data)
                    })
                    .catch((err)=>
                    {
                        console.log(err)
                    })
})

router.get('/posts/findUser',function(req,res,next)
{
    console.log("in findUser API")
    
    Users.findAll()
    .then((find_All_User)=>
    {
        console.log("find_All_User",find_All_User);
        res.send(find_All_User)
    })
    .catch((err)=>
    {

    })
    //res.send("success")
})

router.post('/posts/processSearch', function(req,res,next)
{
    console.log("Inside proessSearch")
    const user_name = req.body.get_content;
    var firstname = user_name.split(" ")
    var name = firstname[0]
    var sur = firstname[1]
    console.log("firstname",name)
    //console.log("firstname",sur)
    //res.send(name,sur)
    Users.findOne({where:{user_firstname:name},attributes:['user_id']})
    .then((user_id)=>
    {
        res.send(user_id)
    })
    .catch((err)=>
    {

    })

    //     Users.findAll({where:{user_firstname:name},include:[{model:Posts,include:[{model:Likes,include:[{model:Users}]}]}]})
    //     .then((user)=>
    //     {
    //         //console.log("user checking api.........")
    //         //console.log(user)
    //         //const data = 'findUserProfile',{items:user}
           
    //         //res.send("user")
    //         res.render('findUserProfile.ejs',{title:'findUserProfile',items:user});
    //         //res.redirect("http://localhost:4000/profile");
    //     })
    //     .catch((err)=>
    //     {

    //     })
    // }
    // else{

    // }
    //console.log("in process Search",data)
});


// chat 
router.post('/posts/get_chat_message',function (req,res)
{
    const user_id = req.session.user_id; // who's sending to message
    const to_user_id = req.body.to_user_id; // to whom the message has been sent
    const chat_message = req.body.chat_message; // chat content
    const status_seen_unseen = "seen";

    MessageBox.create({user_id:user_id, msg_receiver_id:to_user_id, message_content:chat_message,status_seen_unseen:status_seen_unseen})
    .then((user)=>
    { 
        if(user)
        {
            MessageBox.findAll({where: {[Op.or]:[{user_id:user_id,msg_receiver_id:to_user_id},{user_id:to_user_id,msg_receiver_id:user_id}]},order: sequelize.literal('createdAt ASC')})            
            .then((data)=>
            {
                res.send(data)
            })
            .catch((err)=>
            {

            })
        }
        else{

        }
    })
    .catch((err)=>
    {
        console.error(err)
        res.send({err})
    })
    //res.send("success");
    
  
});

router.post('/posts/get_user_chat_history',function (req,res)
{
    const user_id = req.session.user_id; // who's sending to message
    const to_user_id = req.body.to_user_id; // to whom the message has been sent
    //const chat_message = req.body.chat_message; // chat content
    MessageBox.findAll({where: {[Op.or]:[{user_id:user_id,msg_receiver_id:to_user_id},{user_id:to_user_id,msg_receiver_id:user_id}]},order: sequelize.literal('createdAt ASC')})            
    .then((data)=>
    {
        res.send(data)
    })
    .catch((err)=>
    {

    })
    
  
});

router.get('/posts/count_unseen_message', function(req,res){

    const user_id = req.session.user_id;
    const status_seen_unseen = "unseen";
    MessageBox.findAll({where:{msg_receiver_id:user_id,status_seen_unseen:status_seen_unseen}})            
    .then((data)=>
    {
        res.send(data);
    })
    .catch((err)=>
    {

    })
});

router.post('/posts/get_single_user', function(req,res){

    const to_user_id = req.body.to_user_id; 
    
    Users.findOne({where:{user_id:to_user_id}})            
    .then((data)=>
    {
        res.send(data);
    })
    .catch((err)=>
    {

    })
});

// Get all online user (if they are following each other)
router.get('/posts/online_user_list', function(req,res)
{

    const user_id = req.session.user_id; 
    //{include:[{ model: Login_Details}],
    Users.findAll({where:{user_id:{
        [Op.in]:[sequelize.literal('(SELECT `Follows`.receiver_id FROM `follows` AS `Follows` WHERE `Follows`.user_id='+user_id+' and `Follows`.status="accept")')]
                                }},include:[{model:Login_Details}]})    
    .then((user_data)=>
    {

        res.send(user_data);
    })
    .catch((err)=>
    {

    })
});


// Get all online user (if they are following each other)
router.get('/posts/message_notify', function(req,res)
{

    const user_id = req.session.user_id; 
    const unseen = "unseen";
    //{include:[{ model: Login_Details}],
    console.log("inside message notify api =>>>>>")
    Users.findAll({where:{user_id:{
        [Op.in]:[sequelize.literal('(SELECT `Follows`.receiver_id FROM `follows` AS `Follows` WHERE `Follows`.user_id='+user_id+' and `Follows`.status="accept")')]
                                }},include:[{model:MessageBox,where:{status_seen_unseen:unseen}},{model:Login_Details}]})    
    .then((user_data)=>
    {
        if(user_data !="")
        {
            console.log("if not null then",user_data);
            res.send(user_data);
        }
        else{
            Users.findAll({where:{user_id:{
                [Op.in]:[sequelize.literal('(SELECT `Follows`.receiver_id FROM `follows` AS `Follows` WHERE `Follows`.user_id='+user_id+' and `Follows`.status="accept")')]
                                        }},include:[{model:MessageBox},{model:Login_Details}]})   
            .then((data)=>
            {
                console.log("if  null then",data);
                res.send(data)
            }) 
            .catch((err)=>
            {

            })
                                
        }

    })
    .catch((err)=>
    {

    })
});

router.post('/posts/update_unseen_message', function(req,res){

    const to_user_id = req.body.to_user_id; 
    const user_id = req.session.user_id;
    const unseen = "unseen";
    const seen  = "seen";
    console.log("to_user_id ==>",to_user_id);
    
    MessageBox.findAll({where:{user_id:to_user_id,msg_receiver_id:user_id,status_seen_unseen:unseen}})            
    .then((data)=>
    {
        // console.log(data);
        if(data !="")
        {
            if(data)
            {
                MessageBox.update({status_seen_unseen:seen},{where:{user_id:to_user_id,msg_receiver_id:user_id,status_seen_unseen:unseen}})
                .then((updated_message)=>{
                    res.send(updated_message);
                })
                .catch((err)=>
                {

                })
            }
            
        }
        else{
            res.send("success");
        }

    })
    .catch((err)=>
    {

    })
});

router.post('/posts/events_options', function(req,res)
{
    const user_id = req.session.user_id;
    const action_option = req.body.action_option;
    const selected_option_locations = req.body.selected_option;
    var onlyDate = new Date();
    onlyDate = onlyDate.toISOString().slice(0,10)
    
    if(selected_option_locations == "current_location")
    {
    if(selected_option_locations == "current_location")
        if((action_option == "upcoming_events") && (selected_option_locations == "current_location"))
        {
            res.send({action_option,selected_option_locations})
        }
        else if((action_option == "active_events") && (selected_option_locations == "current_location") )
        {
            res.send({action_option,selected_option_locations})
        }
        else if((action_option =="past_events") && (selected_option_locations == "current_location") )
        {
            res.send({action_option,selected_option_locations})
        }
        else
        {
            res.send("some error...events_options api try to fix it..!");
        }
    }
    else
    {
        if(action_option == "upcoming_events")
        {
            res.send({action_option,selected_option_locations})
        }
        else if(action_option == "active_events")
        {
            res.send({action_option,selected_option_locations})
        }
        else if(action_option =="past_events")
        {
            res.send({action_option,selected_option_locations})
        }
        else
        {
            res.send("some error...events_options api try to fix it..!");
        }
    }

})

router.get('/posts/testing', function(req, res)
{
    // this is for upcoming and active events based on event happing date
    // Posts.findAll({
    //     where:{[Op.or]:[{user_id:{[Op.in]:[sequelize.literal('(SELECT `Follows`.receiver_id FROM `follows` AS `Follows` WHERE `Follows`.user_id='+user_id+' and `Follows`.status="accept")')]}},
    //              [{user_id:user_id}]],
    //              [Op.and]:{[Op.or]:[{event_start_date:{[Op.gte]:onlyDate}},{event_registeration_date_close:{[Op.gte]:onlyDate}}]}},
    //              attributes:['event_id','user_id','event_start_date','event_registeration_date_close']

    
    // })

    
    // })


    // active events
    // Posts.findAll({
    //     where:{[Op.or]:[{user_id:{[Op.in]:[sequelize.literal('(SELECT `Follows`.receiver_id FROM `follows` AS `Follows` WHERE `Follows`.user_id='+user_id+' and `Follows`.status="accept")')]}},
    //              [{user_id:user_id}]],
    //              [Op.and]:{event_start_date:onlyDate}},
    //              attributes:['event_id','user_id','event_start_date','event_registeration_date_close']

    
    // })

    // past events
    // Posts.findAll({
    //     where:{[Op.or]:[{user_id:{[Op.in]:[sequelize.literal('(SELECT `Follows`.receiver_id FROM `follows` AS `Follows` WHERE `Follows`.user_id='+user_id+' and `Follows`.status="accept")')]}},
    //              [{user_id:user_id}]],
    //              [Op.and]:{event_start_date:{[Op.lt]:onlyDate}}},
    //              attributes:['event_id','user_id','event_start_date','event_registeration_date_close']

    
    // })

    const user_id = req.session.user_id;
    const status = "accept";
    var onlyDate = new Date();
    onlyDate = onlyDate.toISOString().slice(0,10)
   // var date_ = todayDateTime.getMonth();
//attributes:['event_id','user_id','event_start_date','event_registeration_date_close']
    //res.send(onlyDate);
    Posts.findAll({
        where:{[Op.or]:[{user_id:{[Op.in]:[sequelize.literal('(SELECT `Follows`.receiver_id FROM `follows` AS `Follows` WHERE `Follows`.user_id='+user_id+' and `Follows`.status="accept")')]}},
                 [{user_id:user_id}]],
                 [Op.and]:{event_start_date:{[Op.lt]:onlyDate}}},
                 attributes:['event_id','user_id','event_start_date','event_registeration_date_close']

    
    })
    .then((data)=>
    {
        res.send("data");
    })
    .catch((err)=>
    {
        res.send(err);
    })
	
});


module.exports = router;
