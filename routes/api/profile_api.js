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
    const user_id = req.session.user_id;

                    Users.findAll({where:{user_id:user_id},include:[{model:Posts,include:[{model:Likes,include:[{model:Users}]}]}]})
                    .then((user)=>
                    {
                            res.render('profile',{title:'profile',items:user});
                        
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
    //var data = [[11, 4, 91],[9, 3, 48],[9, 2, 31],[8, 3, 64],[8, 2, 123],[8, 1, 97],[8, 0, 85],[7, 3, 32],[7, 2, 82],[7, 1, 1],[7, 0, 31],[6, 4, 96],[6, 3, 98],[6, 2, 88],[6, 1, 44],[0, 0, 1],[2, 1, 15],[2, 2, 123],[2, 3, 64],[2, 4, 52], [3, 0, 72],[3, 1, 132],[3, 2, 114],[3, 3, 19],[4, 1, 5],[4, 2, 8],[4, 3, 117],[4, 4, 115],[5, 0, 88],[5, 1, 32],[5, 2, 12],[5, 3, 6]];
    //res.send(data);
})

router.post('/profile/heap_map_event_details', function(req,res)
{
    const year = Number(req.body.year);
    const month = Number(req.body.month);
    Posts.findAll({where:{event_start_date:{[Op.like]:  '%' + '2019-07-29' + '%'}}})
    .then((data)=>
    {
        console.log(data);
        res.send(data);
    })
    .catch((err)=>
    {
        res.send(err);
    })
    
    //res.send("hhhhhh");
})


module.exports = router;






