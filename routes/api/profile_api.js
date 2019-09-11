const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const Op = Sequelize.Op
const sequelize = require('../../config/db');
const {Users,Posts,Likes,Comments,Follows} = require('../../model/model_index');

const multer = require('multer');
const path = require('path');

router.use('/public', express.static(path.join(__dirname, 'public')));
router.use('/views', express.static(path.join(__dirname, 'views')));

var storage = multer.diskStorage({
    destination: function(req, file, cb)
    {
        cb(null,path.join(__dirname,'../../public/profile_image'))
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
}).single('userPhoto');

router.get('/profile', function(req, res)
{
    var onlyDate = new Date();
    onlyDate = onlyDate.toISOString().slice(0,10)
    const user_id = req.session.user_id;

                    Users.findAll({where:{user_id:user_id},include:[{model:Posts,include:[{model:Likes,include:[{model:Users}]},{model:Comments,include:[{model:Users}]}]}]})
                    .then((user)=>
                    {
                       // res.send(user)
                       res.render('profile',{title:'profile',items:user,onlyDate:onlyDate});
                        
                    })
                    .catch((err)=>
                    {
                        console.error(err)
                        res.status(501).send({
                            error : "error..... check console log"
                        })
                    })
    
	
});





router.post('/profile/image/:id',function (req,res)
{
    upload(req,res,function(err) 
    {
        if(err) 
        {
            return res.end("Error uploading file.");
        }
        if(req.file)
        {
        var user_id = req.params.id
        Users.findOne({ where:{user_id:user_id}})
        .then((users)=>
        {
                 if(users)
                 {
                     const imagepath = req.file.filename;
                    Users.update({user_profile_pic:imagepath},{where:{user_id:user_id}})
                    .then((user)=>
                    {
                        Users.findAll({where:{user_id:user_id}})
                        .then((userdata)=>
                        {
                            res.send(userdata);
                        }) 
                        .catch((err)=>
                        {
                            console.error(err)
                            res.status(501)
                            .send({
                                    error : "error..... check console log"
                                })    
                        })
                        //res.redirect("http://localhost:4000/posts");
                        //res.render('home',{title:'home',items:user});
                        //res.send("file uploaded successfully")
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
    });
});

// update user bio

router.post('/profile/user_bio_update',function (req,res)
{
    var user_id = req.session.user_id
    Users.update({user_bio:req.body.user_bio},{where:{user_id:user_id}})
    .then((updateddata)=>
    {
        Users.findOne({attributes:['user_bio'],where:{user_id:user_id}})
        .then((user)=>
        {
            res.send(user);      
        })
        .catch((err)=>
        {
            console.error(err)
            res.status(501).send({error : "error..... check console log"})
        })
            //res.send(updateddata);      
    })
    .catch((err)=>
    {
        console.error(err)
        res.status(501).send({error : "error..... check console log"})
    })
    // console.log("success ....\n")
    // res.send('success');      
});

// update user contacts

router.post('/profile/user_contacts_update',function (req,res)
{
    var user_id = req.session.user_id
    Users.update({user_email:req.body.user_email,user_country:req.body.user_country,user_state:req.body.user_state,user_city:req.body.user_city},{where:{user_id:user_id}})
    .then((updateddata)=>
    {
        Users.findOne({attributes:['user_email','user_country','user_state','user_city'],where:{user_id:user_id}})
        .then((user)=>
        {
            res.send(user);      
        })
        .catch((err)=>
        {
            console.error(err)
            res.status(501).send({error : "error..... check console log"})
        })
            //res.send(updateddata);      
    })
    .catch((err)=>
    {
        console.error(err)
        res.status(501).send({error : "error..... check console log"})
    })
    // console.log("success ....\n")
    // res.send('success');      
});

router.put('/profile/updatauserdata/:id',function (req,res)
{
    console.log(req)
    var user_id = req.session.user_id
    Users.update({user_firstname:req.body.name},{where:{user_id:user_id}})
    .then((updateddata)=>
    {
        Users.findAll({where:{user_id:user_id}})
        .then((user)=>
        {
            res.send(user);      
        })
        .catch((err)=>
        {
            console.error(err)
            res.status(501).send({error : "error..... check console log"})
        })
            //res.send(updateddata);      
    })
    .catch((err)=>
    {
        console.error(err)
        res.status(501).send({error : "error..... check console log"})
    })
    // console.log("success ....\n")
    // res.send('success');      
});

router.get('/profile/heap_map_data', function(req,res)
{
    
    console.log("No. of time being called 1")
    const user_id = req.session.user_id;
    // Posts.findAll({where:{user_id:user_id}})
    Posts.findAll({
        attributes: ['event_start_date', [sequelize.fn('count', sequelize.col('event_start_date')), 'count']],
        group: ['event_start_date'],where:{user_id:user_id}
  })
    .then((data)=>
    {
        res.send(data);
    })
    .catch((err)=>
    {
        res.send(err);
    })
  
})

router.post('/profile/heap_map_event_details', function(req,res)
{
    const year = Number(req.body.year);
    var month = Number(req.body.month);
    month = month + 1;
    if(month < 10)
    {
        month = "0"+month;
    }
    
    Posts.findAll({where:{event_start_date:{[Op.endsWith]:  '%' + "2019-"+month+"-" +'%'}}})
    .then((data)=>
    {
        console.log(data);
        res.send(data);
    })
    .catch((err)=>
    {
        res.send(err);
    })
    
    
})

router.get('/profile/slideshow', function(req,res)
{
    var onlyDate = new Date();
    onlyDate = onlyDate.toISOString().slice(0,10)
    const user_id = req.session.user_id;

                    Users.findAll({where:{user_id:user_id},include:[{model:Posts,include:[{model:Likes},{model:Comments}]}]})
                    .then((user)=>
                    {
                        res.send(user)
                        
                        
                    })
                    .catch((err)=>
                    {
                        console.error(err)
                        res.status(501).send({
                            error : "error..... check console log"
                        })
                    })
    
})

router.post('/profile/modeldata', function(req,res)
{
    const user_id = req.session.user_id;
    const event_id = req.body.event_id;

    //res.send("sss")
    Posts.findAll({where:{event_id:event_id},include:[{model:Likes},{model:Comments,include:[{model:Users}]}]})
    .then((event_details)=>
    {
        Users.findAll({where:{user_id:user_id}})
        .then((user)=>
        {
            res.send({event_details:event_details,user:user})
        })
        .catch((err)=>
        {

        })
      // res.render('profile',{title:'profile',items:user,onlyDate:onlyDate});
        
    })
    .catch((err)=>
    {
        console.error(err)
        res.status(501).send({
            error : "error..... check console log"
        })
    })
    
})


router.get('/profile/totalUpcomingEvents', function(req,res)
{
    var onlyDate = new Date();
    onlyDate = onlyDate.toISOString().slice(0,10)
    const user_id = req.session.user_id;

    Posts.findAndCountAll({where:{user_id:user_id,event_start_date:{[Op.gte]:onlyDate}}})
    .then((user)=>
    {
        res.send(user)
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

router.get('/profile/totalActiveEvents', function(req,res)
{
    var onlyDate = new Date();
    onlyDate = onlyDate.toISOString().slice(0,10)
    const user_id = req.session.user_id;

    Posts.findAndCountAll({where:{user_id:user_id,event_start_date:{[Op.eq]:onlyDate}}})
    .then((user)=>
    {
        res.send(user)
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

router.get('/profile/totalPastEvents', function(req,res)
{
    var onlyDate = new Date();
    onlyDate = onlyDate.toISOString().slice(0,10)
    const user_id = req.session.user_id;

    Posts.findAndCountAll({where:{user_id:user_id,event_start_date:{[Op.lt]:onlyDate}}})
    .then((user)=>
    {
        res.send(user)
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

router.get('/profile/totaltotalEvents', function(req,res)
{
    var onlyDate = new Date();
    onlyDate = onlyDate.toISOString().slice(0,10)
    const user_id = req.session.user_id;

    Posts.findAndCountAll({where:{user_id:user_id}})
    .then((user)=>
    {
        res.send(user)
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
// I am following other user
router.get('/profile/countFollowing', function(req, res)
{
    const user_id = req.session.user_id;
    const status = "accept";
    Users.findAll({where:{user_id:{[Op.in]:[sequelize.literal('(SELECT `Follows`.receiver_id FROM `follows` AS `Follows` WHERE `Follows`.user_id='+user_id+' and `Follows`.status="accept")')]}}})
    .then((followingData)=>
    {
        res.send(followingData)

    })
    .catch((err)=>
    {
        console.error(err)
        res.status(501).send({
            error : "error..... check console log"
        })
    })
    
	
});

// other user are following me
router.get('/profile/countFollowers', function(req, res)
{
    const user_id = req.session.user_id;
    const status = "accept";
    Users.findAll({where:{user_id:{[Op.in]:[sequelize.literal('(SELECT `Follows`.user_id FROM `follows` AS `Follows` WHERE `Follows`.receiver_id='+user_id+' and `Follows`.status="accept")')]}}})
    .then((FollowersData)=>
    {
        res.send(FollowersData)

    })
    .catch((err)=>
    {
        console.error(err)
        res.status(501).send({
            error : "error..... check console log"
        })
    })
    
	
});

router.post('/profile/viewimages', function(req, res)
{
    const user_id = req.session.user_id;
    const selectedActivity = req.body.selectedActivity;
    console.log("selectedActivity => 385: ",selectedActivity)
    Posts.findAll({
        attributes:['e_imagepath'],
        where: [{user_id: user_id }]
    })
    .then((viewimages)=>
    {
        // where: [{user_id: 1 }],
        // attributes: ['event_type', [sequelize.fn('count', sequelize.col('event_type')), 'count']],
        // group: ['event_type']
        res.send("images")

    })
    .catch((err)=>
    {
        console.error(err)
        res.status(501).send({
            error : "error..... check console log"
        })
    })
    
	
});
module.exports = router;






