const Sequelize = require('sequelize');
module.exports = (sequelize, type) => {
    return sequelize.define('Posts', {
        event_id  	     : {type : Sequelize.INTEGER(11), allowNull : false, autoIncrement: true, primaryKey: true},
        user_id 	     : {type : Sequelize.INTEGER(11), required : true, unique : false, allowNull : false, trim : true},
        event_message 	 : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true},
        e_imagepath      :{type : Sequelize.STRING, required : true, allowNull : false}
    })
}


// const db = require('../config/db') // including db.js from config folder
// const Sequelize = require('sequelize');

// const User = require('./user_model');

// const Posts = db.define('posts',
// {
    // event_id  	     : {type : Sequelize.INTEGER(11), allowNull : false, autoIncrement: true, primaryKey: true},
    // user_id 	     : {type : Sequelize.INTEGER(11), required : true, unique : false, allowNull : false, trim : true},
    // event_message 	     : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true},
    // e_imagepath        :{type : Sequelize.STRING, required : true, allowNull : false}
//     // event_name 	     : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true}, 
//     // event_type 	     : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true}, 
//     // event_location 	     : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true}, 
//     // event_description 	     : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true}, 
//     // event_organization 	     : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true}, 
//     // event_start_date   : {type : Sequelize.DATEONLY, required : true, allowNull : false},
//     // event_end_date     : {type : Sequelize.DATEONLY, required : true, allowNull : false},
//     // e_imagepath        :{type : Sequelize.STRING, required : true, allowNull : false},
//     // event_start_date   : {type : Sequelize.DATETIME },
//     // event_end_date     : {type : Sequelize.DATETIME},
// });

// User.hasMany(Posts);
// db.sync()
// .then(()=> console.log("Database has been created"))
// .catch((err)=> console.error("check err =>",err))

// module.exports = Posts;  