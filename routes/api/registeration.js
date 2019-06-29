const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');
const dateFormat = require('dateformat');
const db = require('../../config/db');
//const User = require('../../model/user_model');
const {Users,Posts,Likes,Comments} = require('../../model/model_index');
//const dboperation = require('../../DbOperation/DbOperation');

const Sequelize = require('sequelize');
const expressValidator = require('express-validator');
router.use(expressValidator())


//registeration
router.get('/', (req, res, next)=>
{
    res.render('register', { title: 'Registeration' });
    
});

router.post('/', (req, res, next)=>
{
    const firstname   = req.body.firstname;
    const lastname    = req.body.lastname;
    const dob         = req.body.dob;
    var gender      = req.body.gender;
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
                    res.render('login', { title: 'Login' });
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


module.exports = router;


// for testing purpose
// firstname:David
// lastname:Wasawa
// dob:12-04-1998
// gender:male
// mobile:9999999999
// email:davide@gmail.com
// username:david
// password:1234
// pic:D:\Evento\public\image\david