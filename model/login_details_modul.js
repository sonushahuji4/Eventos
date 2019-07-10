const Sequelize = require('sequelize');
module.exports = (sequelize, type) => {
    return sequelize.define('Login_Details', {
        login_id 	     : {type : Sequelize.INTEGER(11), allowNull : false, autoIncrement: true, primaryKey: true},
        user_id 	     : {type : Sequelize.INTEGER(11), allowNull : false}, 
        last_activity 	     : {type : 'TIMESTAMP', defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), allowNull : false},
        is_type 	 : {type : Sequelize.STRING,trim : true},
        offline_online_status 	 : {type : Sequelize.STRING,allowNull : false,trim : true},
    })
}
