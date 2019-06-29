// const db = require('../config/db') // including db.js from config folder
// const Sequelize = require('sequelize');

// const SessionsModel = db.define('sessionsData',
// {
//     session_id 	     : {type : Sequelize.INTEGER(11), allowNull : false,  unique : true, primaryKey: true},
//     mobile 	         : {type : Sequelize.STRING, required : true, unique : true, allowNull : false, trim : true},                    
//     email    	     : {type : Sequelize.STRING, required : true, unique : true, allowNull : false, trim : true},
// });

// db.sync()
// .then(()=> console.log("Database has been created"))
// .catch((err)=> console.error("check err =>",err))

//module.exports = SessionsModel;  