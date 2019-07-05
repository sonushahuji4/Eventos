const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const Op = Sequelize.Op
const {Users,Posts,Likes,Comments,Follows} = require('../../model/model_index');

const path = require('path');

router.use('/public', express.static(path.join(__dirname, 'public')));
router.use('/views', express.static(path.join(__dirname, 'views')));


router.get('/viewprofile/:id', function(req, res)
{
    const view_user_id = req.params.id;
    
    console.log("view_user_id",view_user_id);
    
    Users.findAll({where:{user_id:view_user_id},include:[{model:Posts,include:[{model:Likes,include:[{model:Users}]}]}]})
    .then((user)=>
    {
        console.log(user)
        //res.send(user)
        res.render('viewprofile',{title:'viewprofile',items:user});
        
    })
    .catch((err)=>
    {
        console.error(err)
        res.status(501).send({
            error : "error..... check console log"
        })
    })
});

module.exports = router;
