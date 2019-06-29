const Sequelize = require('sequelize');
module.exports = (sequelize, type) => {
    return sequelize.define('Likes', {
        like_id 	     : {type : Sequelize.INTEGER(11), allowNull : false, autoIncrement: true, primaryKey: true},
        user_id 	     : {type : Sequelize.INTEGER(11), allowNull : false}, 
        event_id 	     : {type : Sequelize.INTEGER(11), allowNull : false},
        like_status 	 : {type : Sequelize.STRING,trim : true},
    })
}



// const db = require('../config/db') // including db.js from config folder
// const Sequelize = require('sequelize');

// const Like = db.define('likes',
// {
//     like_id 	     : {type : Sequelize.INTEGER(11), allowNull : false, autoIncrement: true, primaryKey: true},
//     user_id 	     : {type : Sequelize.INTEGER(11), allowNull : false}, 
//     event_id 	     : {type : Sequelize.INTEGER(11), allowNull : false}
// });

// db.sync()
// .then(()=> console.log("Database has been created"))
// .catch((err)=> console.error("check err =>",err))

// module.exports = Like;  



