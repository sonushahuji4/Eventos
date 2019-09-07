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


router.get('/showActivity/images', function(req, res)
{
    const user_id = req.session.user_id;
    

    Posts.findAll({where: [{user_id: user_id }]})
    .then((viewimages)=>
    {

        res.render('showActivity',{title:'showActivity',data:viewimages});
        //res.send(viewimages)

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
    
});

module.exports = router;