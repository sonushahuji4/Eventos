const Sequelize = require('sequelize');
module.exports = (sequelize, type) => {
    return sequelize.define('Users', 
    {
        user_id 	     : {type : Sequelize.INTEGER(11), allowNull : false, autoIncrement: true, primaryKey: true},
        user_firstname 	 : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true},
        user_lastname 	 : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true}, 
        user_dob 	     : {type : Sequelize.DATEONLY, required : true, unique : false, allowNull : false, trim : true},        
        user_gender 	 : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim:true},
        user_mobile_no 	 : {type : Sequelize.STRING, required : true, unique : true, allowNull : false, trim : true},                    
        user_email    	 : {type : Sequelize.STRING, required : true, unique : true, allowNull : false, trim : true},
        user_username    : {type : Sequelize.STRING, required : true, unique : true, allowNull : false, trim : true},
        user_password    : {type : Sequelize.STRING, required : true, allowNull : false, trim : true},
        user_profile_pic : {type:Sequelize.STRING}
    })
}

// const db = require('../config/db') // including db.js from config folder
// const Sequelize = require('sequelize');

// const User = db.define('users',
// {
    // user_id 	     : {type : Sequelize.INTEGER(11), allowNull : false, autoIncrement: true, primaryKey: true},
    // user_firstname 	 : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true},
    // user_lastname 	 : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true}, 
    // user_dob 	     : {type : Sequelize.DATEONLY, required : true, unique : false, allowNull : false, trim : true},        
    // user_gender 	 : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim:true},
    // user_mobile_no 	 : {type : Sequelize.STRING, required : true, unique : true, allowNull : false, trim : true},                    
    // user_email    	 : {type : Sequelize.STRING, required : true, unique : true, allowNull : false, trim : true},
    // user_username    : {type : Sequelize.STRING, required : true, unique : true, allowNull : false, trim : true},
    // user_password    : {type : Sequelize.STRING, required : true, allowNull : false, trim : true},
    // user_profile_pic : {type:Sequelize.STRING}
// });

// const Comment = db.define('comments',
// {
//     comment_id 	     : {type : Sequelize.INTEGER(11), allowNull : false, autoIncrement: true, primaryKey: true},
//     user_id 	     : {type : Sequelize.INTEGER(11), allowNull : false}, 
//     event_id 	     : {type : Sequelize.INTEGER(11), allowNull : false},
//     comment  	     : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true}
// });

// const Like = db.define('likes',
// {
//     like_id 	     : {type : Sequelize.INTEGER(11), allowNull : false, autoIncrement: true, primaryKey: true},
//     user_id 	     : {type : Sequelize.INTEGER(11), allowNull : false}, 
//     event_id 	     : {type : Sequelize.INTEGER(11), allowNull : false}
// });


// const Posts = db.define('posts',
// {
//     event_id  	     : {type : Sequelize.INTEGER(11), allowNull : false, autoIncrement: true, primaryKey: true},
//     user_id 	     : {type : Sequelize.INTEGER(11), required : true, unique : false, allowNull : false, trim : true},
//     event_message 	     : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true},
//     e_imagepath        :{type : Sequelize.STRING, required : true, allowNull : false}
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

// User.hasMany(Posts, {foreignKey: 'user_id'});
// User.hasMany(Comment, {foreignKey: 'user_id'});
// User.hasMany(Like, {foreignKey: 'user_id'});
// Posts.hasMany(Like, {foreignKey: 'event_id'});
// Posts.hasMany(Comment, {foreignKey: 'event_id'});

// db.sync()
// .then(()=> console.log("Database has been created"))
// .catch((err)=> console.error("check err =>",err))

//module.exports = User;
// module.exports = Comment;
// module.exports = Like;
// module.exports = Posts;  