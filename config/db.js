const Sequelize = require('sequelize'); // accessing sequelize library

//creating database connection
const db = new Sequelize('events','root',null,{
    host : 'localhost',
    dialect: 'mysql'
    //operatorsAliases: false
});
module.exports = db; // by exporting db.js it can be accessed in other directory or files