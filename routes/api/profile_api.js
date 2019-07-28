const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const Op = Sequelize.Op
const {Users,Posts,Likes,Comments} = require('../../model/model_index');

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

                    Users.findAll({where:{user_id:user_id},include:[{model:Posts,include:[{model:Likes},{model:Comments}]}]})
                    .then((user)=>
                    {
                        //res.send(user)
                        res.render('profile',{title:'profile',items:user,onlyDate:onlyDate});
                        
                    })
                    .catch((err)=>
                    {
                        console.error(err)
                        res.status(501).send({
                            error : "error..... check console log"
                        })
                    })

    // console.log("home id => ", req.params.id)
	// res.render('home',{title:'home'});
    
	
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
    Posts.findAll()
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


module.exports = router;






