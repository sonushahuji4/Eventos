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
            const user_id = req.session.user_id;
            const imagepath = req.file.filename; // file name
            const event_name = req.body.event_name; 
            const event_title = req.body.event_title;
            const event_description = req.body.event_description;
            const event_read_more = req.body.event_read_more;
            const event_type = req.body.event_type;
            const event_organization = req.body.event_organization;
            
            const country_name = req.body.country_name;
            const state_name = req.body.state_name;
            const city_sub_city_name = req.body.city_sub_city_name;
            const main_city_name = req.body.main_city_name;
            const area1_name = req.body.area1_name;
            const area2_name = req.body.area2_name;
            const postal_code = req.body.postal_code;
            const full_address = req.body.full_address;
            const latitude = req.body.latitude;
            const logitude = req.body.logitude;
            
            const event_start_date = req.body.event_start_date;
            const event_start_time = req.body.event_start_time;
            const event_select_start_am_pa = req.body.event_select_start_am_pa;
            const event_end_date = req.body.event_end_date;
            const event_end_time = req.body.event_end_time;
            const event_select_end_am_pa = req.body.event_select_end_am_pa;
            const event_register_clase_date = req.body.event_register_clase_date;
            const event_register_clase_time = req.body.event_register_clase_time;
            const event_register_am_pa = req.body.event_register_am_pa;
            
            //const s_date = moment(new Date,'YYYY-MM-DD');
            console.log("chekcing data of file =>",req.file);
            console.log("chekcing data of map =>",req.body);
            //const 
           // res.send("success")
            Posts.create({user_id:user_id,e_imagepath:imagepath,event_message:event_title,event_name:event_name,event_description:event_description,event_read_more_option:event_read_more,event_type:event_type,event_organization:event_organization,event_country_name:country_name,event_state_name:state_name,event_sub_city_name:city_sub_city_name,event_main_city_name:main_city_name,event_area_1_name:area1_name,event_area_2_name:area2_name,event_postal_code:postal_code,event_full_address:full_address,event_latitude:latitude,event_logitude:logitude,event_start_date:event_start_date,event_start_time:event_start_time,event_start_am_or_pm:event_select_start_am_pa,event_end_date:event_end_date,event_end_time:event_end_time,event_end_am_or_pm:event_select_end_am_pa,event_registeration_date_close:event_register_clase_date,event_registeration_time_close:event_register_clase_time,event_registeration_am_or_pm_close:event_register_am_pa})
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
