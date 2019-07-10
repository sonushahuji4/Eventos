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

router.get('/', function(req, res)
{
    const user_id = req.session.user_id;
    
        
    res.render('event_page',{title:'Event'}); 
    
	
});

// upload post api
router.post('/event', upload.single('feedsposts'),function (req,res)
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


module.exports = router;
