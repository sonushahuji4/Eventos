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


router.get('/editprofile', function(req, res)
{
    const user_id = req.session.user_id; 
    Users.findAll({where:{user_id:user_id},})
    .then((user)=>
    {
        //res.send(user)
        res.render('editProfile',{title:'editProfile',items:user})  
                        
    })
    .catch((err)=>
    {
        console.error(err)
        res.status(501).send({
            error : "error..... check console log"
        })
    })  
	
});

router.post('/editprofile', function(req, res)
{
    console.log("in seide backend err -------------------------------------------")
    const user_id = req.session.user_id;
    const user_firstname = req.body.user_firstname;
    const user_lastname = req.body.user_lastname;
    const user_dob = req.body.user_dob;
    const user_gender = req.body.user_gender;
    const user_mobile_no = req.body.user_mobile;
    const user_email = req.body.user_emailid;
    const user_username = req.body.user_username;
    const user_password = req.body.user_confirmPassword;
    const user_bio = req.body.user_bio;
    const user_country = req.body.user_country;
    const user_state = req.body.user_state;
    const user_city = req.body.user_city;

    Users.update({user_firstname:user_firstname,user_lastname:user_lastname,user_dob:user_dob,user_gender:user_gender,user_mobile_no:user_mobile_no,user_email:user_email,user_username:user_username,user_password:user_password,user_bio:user_bio,user_country:user_country,user_state:user_state,user_city:user_city},{where:{user_id:user_id}})
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
	
});


router.post('/editprofile/profileImage',function (req,res)
{
    upload(req,res,function(err) 
    {
        if(err) 
        {
            return res.end("Error uploading file.");
        }
        if(req.file)
        {
        const user_id = req.session.user_id;
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

module.exports = router;
