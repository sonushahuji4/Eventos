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

router.get('/editprofile', function(req, res)
{
    const user_id = req.session.user_id; 
    res.render('editProfile',{title:'editProfile'})   
	
});

module.exports = router;
