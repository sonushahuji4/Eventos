const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');
const dateFormat = require('dateformat');
var dateTime = require('node-datetime');

const Sequelize = require('sequelize');
const Op = Sequelize.Op
const sequelize = require('../../config/db');

const {Users,Posts,Likes,Comments,Login_Details} = require('../../model/model_index');
const expressValidator = require('express-validator');
router.use(expressValidator())


//router.use(passport.initialize());
//router.use(passport.session());

const title ="Evento ";
const baseUrl = "http://localhost:4000/";

router.get('/login', (req, res, next)=>
{
    console.log("inside login get")
    if(!req.session.email)
	{
		res.render('login', { title: 'login' });
	}
	else if(req.session.email)
	{
        res.redirect("http://localhost:4000/posts");
	} 
   

    
});

router.post('/login', (req, res, next)=>
{
    console.log("inside logi post")
    const username    = req.body.username;
    const password    = req.body.password;
    console.log(req.body.username);
     //req.checkBody(username, 'Firtname cannot be empty').notEmpty();
     //req.checkBody(password, 'Firtname cannot be empty').notEmpty();

    const errors = req.validationErrors();
    if(errors)
    { 
        console.log(errors);
        res.status(400).send({ "message": errors });
    }
    else
    {
      Users.findOne({ where:{user_username:username,user_password:password}})
       .then((users)=>
       {
            if(users)
            {
                if(users.user_username == username && users.user_password == password)
                {
                    req.session.email = users.user_email;
                    req.session.user_id = users.user_id;

                    Login_Details.findOne({where:{user_id:users.user_id}}) // if you find then update else create new one
                    .then((user_data)=>
                    {
                        var dt = dateTime.create();
                        var formatted = dt.format('Y-m-d H:M:S');
                        console.log("formatted",formatted);
                        const online = "online";

                        if(user_data) // update
                        {
                            Login_Details.update({last_activity:formatted,offline_online_status:online},{where:{user_id:req.session.user_id}})
                            .then((data)=>
                            {

                                //res.send(data);
                                res.redirect("http://localhost:4000/posts");
                               
                            })
                            .catch((err)=>
                            {
                                console.error(err)
                                res.status(501).send({
                                    error : "error..... check console log"
                                })
                            })
                        }
                        else{ // create new one
                            Login_Details.create({user_id:req.session.user_id,last_activity:formatted,offline_online_status:online})
                            .then((data)=>
                            {

                                res.redirect("http://localhost:4000/posts");
                                //res.send(data);
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

                    })
                    // req.session.email = users.user_email;
                    // req.session.user_id = users.user_id;
                    // res.redirect("http://localhost:4000/posts");
                    //res.render('home', { title: 'home' }); 
                }
                
            }
            else{
                res.status(400).send({ "message": "username or password is incorrect" });
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

router.post('/login/register', (req, res, next)=>
{
    console.log("inside registeration api")
    const firstname   = req.body.firstname;
    const lastname    = req.body.lastname;
    const dob         = req.body.dob;
    var gender        = req.body.gender;
    const mobile      = req.body.mobile;
    const email       = req.body.email;
    const username    = req.body.username;
    const password    = req.body.password;
    const pic         = req.body.pic;
    gender= 'male';

    
    // req.checkBody('lastname', 'Lastname cannot be empty').notEmpty();
    // req.checkBody('dob', 'Dob cannot be empty').notEmpty();
    // req.checkBody('gender', 'gender cannot be empty').notEmpty();
    // req.checkBody('mobile', 'Firtname cannot be empty').notEmpty();
    // req.checkBody('email', 'Firtname cannot be empty').isEmail();
    // req.checkBody('username', 'Firtname cannot be empty').notEmpty();
    // req.checkBody('password', 'Firtname cannot be empty').len(8,100);
    //req.checkBody('firstname', 'Firtname cannot be empty').notEmpty();

    const errors = req.validationErrors();
    if(errors)
    { 
        console.log(errors);
        res.status(400).send({ "message": errors });
    }
    else
    {
       Users.findOne({ where:{user_username:username,user_email:email}})
       .then((users)=>
       {
            if(users)
            {
                res.status(400).send({ "message": "User already exits..." });
            }
            else{
                Users.create({user_firstname:firstname, user_lastname:lastname, user_dob:dob, user_gender:gender,user_mobile_no:mobile,user_email:email,user_username:username,user_password:password,user_profile_pic:pic})
                .then((user)=>
                {

                    res.render('login', { title: 'login' });
                    //res.status(201).send(user)
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

// const datasess = function passdata(user_id)
// {
//     return user_id;
// }

router.post('/login/get_lat_and_lon', (req, res, next)=>
{
    const user_id = req.session.user_id;
    const lat = req.body.latitude;
    const lon = req.body.longitude;
    const miles = 3959;
    const km = 6371;
    const radius_input = 25;
    const post_limit_display = 20;
    var distance = 8;

const query = '( '+km+' * acos( cos( radians('+lat+') ) * cos( radians( event_latitude ) ) * cos( radians( event_logitude ) - radians('+lon+') ) + sin( radians('+lat+') ) * sin( radians( event_latitude ) ) ) ) '
Posts.findAll({include:[{ model: Likes},{ model: Comments},{ model: Users}],
    where:{[Op.or]:[{user_id:{[Op.in]:[sequelize.literal('(SELECT `Follows`.receiver_id FROM `follows` AS `Follows` WHERE `Follows`.user_id='+user_id+' and `Follows`.status="accept")')]}},{user_id:user_id}]},
    attributes: ['event_id','user_id','e_imagepath','event_message','event_name','event_description','event_read_more_option','event_type','event_organization','event_country_name','event_state_name','event_sub_city_name','event_main_city_name','event_area_1_name','event_area_2_name','event_postal_code','event_full_address','event_latitude','event_logitude','event_start_date','event_start_time','event_start_am_or_pm','event_end_date','event_end_time','event_end_am_or_pm','event_registeration_date_close','event_registeration_time_close','event_registeration_am_or_pm_close',[sequelize.literal(query),'distance']],
    order: [[sequelize.literal('distance')]],
  limit: post_limit_display
})
.then((data)=>
    {

     res.send(data);
        
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

module.exports = router;
