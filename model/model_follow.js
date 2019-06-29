const Sequelize = require('sequelize');
module.exports = (sequelize, type) => {
    return sequelize.define('Follow', {
        follow_id 	     : {type : Sequelize.INTEGER(11), allowNull : false, autoIncrement: true, primaryKey: true},
        user_id 	     : {type : Sequelize.INTEGER(11), allowNull : false}, 
        receiver_id 	     : {type : Sequelize.INTEGER(11), allowNull : false},
        status  	     : {type : Sequelize.STRING, required : true, unique : false, allowNull : false, trim : true}
    })
}




// // db.sync()
// // .then(()=> console.log("Database has been created"))
// // .catch((err)=> console.error("check err =>",err))

//module.exports = Follow;  



