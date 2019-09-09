const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const Op = Sequelize.Op
const {Users,Posts,Likes,Comments,Follows} = require('../../model/model_index');
const sequelize = require('../../config/db');


const path = require('path');

router.use('/public', express.static(path.join(__dirname, 'public')));
router.use('/views', express.static(path.join(__dirname, 'views')));


router.get('/viewprofile', function(req, res)
{
    var onlyDate = new Date();
    onlyDate = onlyDate.toISOString().slice(0,10)
    const otheruserid = req.session.otheruserid;
    console.log("////////////////////////////////////////////////////////////////////// ",otheruserid)
    Users.findAll({where:{user_id:otheruserid},include:[{model:Posts,include:[{model:Likes,include:[{model:Users}]},{model:Comments,include:[{model:Users}]}]}]})
    .then((user)=>
    {
      // res.send(user)
      res.render('viewprofile',{title:'viewprofile',items:user,onlyDate:onlyDate});
        
    })
    .catch((err)=>
    {
        console.error(err)
        res.status(501).send({
            error : "error..... check console log"
        })
    })
    
});



// // I am following other user
// router.post('/viewprofile/countFollowing', function(req, res)
// {
    
//     const status = "accept";
//     Users.findAll({where:{user_id:{[Op.in]:[sequelize.literal('(SELECT `Follows`.receiver_id FROM `follows` AS `Follows` WHERE `Follows`.user_id='+view_user_id+' and `Follows`.status="accept")')]}}})
//     .then((followingData)=>
//     {
//         console.log('////////////////////////////////////////////////////////////////////////////////////////////')
//         console.log(followingData);
//         res.send(followingData)

//     })
//     .catch((err)=>
//     {
//         console.error(err)
//         res.status(501).send({
//             error : "error..... check console log"
//         })
//     })
    
	
// });




module.exports = router;
