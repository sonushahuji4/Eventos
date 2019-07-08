const Sequelize = require('sequelize');
module.exports = (sequelize, type) => {
    return sequelize.define('MessageBox', 
    {
        message_id 	     : {type : Sequelize.INTEGER(11), allowNull : false, autoIncrement: true, primaryKey: true},
        user_id 	     : {type : Sequelize.INTEGER(11), required : true, unique : false, allowNull : false, trim : true}, //  user => who's sending the message
        msg_receiver_id 	     :{type : Sequelize.INTEGER(11), required : true, unique : false, allowNull : false, trim : true}, // user => who's receiving the message
        message_content 	 : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true},
        status_seen_unseen 	 : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true}
    })
}

