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


router.get('/event', function(req, res)
{
    const user_id = req.session.user_id;
    
    Users.findOne({where:{user_id:user_id}})
    .then((user_data)=>
    {
       // res.send(user_data);
        res.render('event_page',{title:'Event',items:user_data});
    })
    .catch((err)=>{

    }) 
    
});

// upload post api
router.post('/event',function (req,res)
{
    const user_id = req.session.user_id;
    const event_name = req.body.event_name;
    console.log(event_name);
    res.send(event_name);
    // Posts.create({user_id:user_id, event_message: message, e_imagepath: imagepath})
    // .then((user)=>
    // {
    //     res.redirect("http://localhost:4000/posts");
    //     //res.render('home',{title:'home',items:user});
    // })
    // .catch((err)=>
    // {
    //     console.error(err)
    //     res.status(501).send({
    //         error : "error..... check console log"
    //     })
    // })               
       
   
});


module.exports = router;
