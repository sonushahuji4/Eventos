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

    upload(req,res,function(err) 
    {

        if(err) 
        {
            console.log("errrrrr..........",err)
            return res.end("Error uploading file.");
        }
        if(req.file)
        {
            const imagepath = req.file.filename;
            const user_id = req.session.user_id;
            const s_date = moment(new Date,'YYYY-MM-DD');
            
            Posts.create({user_id:user_id,event_message:req.body.event_title,e_imagepath:imagepath,event_name:req.body.event_name,event_type:req.body.event_type,event_location:req.body.event_city,event_description:req.body.event_description,event_organization:req.body.event_organization,event_start_date:req.body.event_start_date,event_end_date:req.body.event_end_date,registeration_closed_for_event:req.body.event_register_clase_date})
            .then((data)=>
            {
                res.send("success");
            })
            .catch((err)=>
            {

            })


       
        }
    });             
       
   
});


module.exports = router;
