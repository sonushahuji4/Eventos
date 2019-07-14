const Sequelize = require('sequelize');
module.exports = (sequelize, type) => {
    return sequelize.define('Posts', {
        event_id  	     : {type : Sequelize.INTEGER(11), allowNull : false, autoIncrement: true, primaryKey: true},
        user_id 	     : {type : Sequelize.INTEGER(11), required : true, unique : false, allowNull : false, trim : true},
        e_imagepath      :{type : Sequelize.STRING, required : true, allowNull : false},
        event_message 	 : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true}, // event title
        event_name 	     : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true}, 
        event_description 	     : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true}, 
        event_read_more_option 	     : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true},  
        event_type 	     : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true}, 
        event_organization 	     : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true}, 

        event_country_name 	     : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true},
        event_state_name 	     : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true}, 
        event_sub_city_name 	     : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true},
        event_main_city_name 	     : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true}, // locality
        event_area_1_name 	     : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true},
        event_area_2_name 	     : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true},
        event_postal_code 	     : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true},
        event_full_address 	     : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true},
        event_latitude 	     : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true},
        event_logitude 	     : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true},
        
        event_start_date   : {type : Sequelize.DATEONLY, required : true, allowNull : false, defaultValue: Sequelize.NOW},
        event_start_time   : {type : Sequelize.TIME, required : true, allowNull : false, defaultValue: Sequelize.NOW},
        event_start_am_or_pm 	 : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true},

        event_end_date   : {type : Sequelize.DATEONLY, required : true, allowNull : false, defaultValue: Sequelize.NOW},
        event_end_time   : {type : Sequelize.TIME, required : true, allowNull : false, defaultValue: Sequelize.NOW},
        event_end_am_or_pm 	 : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true},

        event_registeration_date_close   : {type : Sequelize.DATEONLY, allowNull : true, trim : true},
        event_registeration_time_close   : {type : Sequelize.TIME, allowNull : true, trim : true},
        event_registeration_am_or_pm_close 	 : {type : Sequelize.STRING, allowNull : true, trim : true},




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