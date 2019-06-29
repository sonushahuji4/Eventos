const Sequelize = require('sequelize');
module.exports = (sequelize, type) => {
    return sequelize.define('Comments', {
        comment_id 	     : {type : Sequelize.INTEGER(11), allowNull : false, autoIncrement: true, primaryKey: true},
        user_id 	     : {type : Sequelize.INTEGER(11), allowNull : false}, 
        event_id 	     : {type : Sequelize.INTEGER(11), allowNull : false},
        comment  	     : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true}
    })
}



// const db = require('../config/db') // including db.js from config folder
// const Sequelize = require('sequelize');

// const Comment = db.define('comments',
// {
    // comment_id 	     : {type : Sequelize.INTEGER(11), allowNull : false, autoIncrement: true, primaryKey: true},
    // user_id 	     : {type : Sequelize.INTEGER(11), allowNull : false}, 
    // event_id 	     : {type : Sequelize.INTEGER(11), allowNull : false},
    // comment  	     : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true}
// });

// // db.sync()
// // .then(()=> console.log("Database has been created"))
// // .catch((err)=> console.error("check err =>",err))

// module.exports = Comment;  



