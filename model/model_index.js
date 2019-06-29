const Sequelize = require('sequelize')
const Like_Model = require('./like_model')
const Post_Model = require('./postbody_model')
const User_Model = require('./user_model')
const Comment_Model = require('./comment_model')
const Follow_Model = require('./model_follow')

const sequelize = new Sequelize('events','root',null, {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const Users = User_Model(sequelize, Sequelize)
const Posts = Post_Model(sequelize, Sequelize)
const Likes = Like_Model(sequelize, Sequelize)
const Comments = Comment_Model(sequelize, Sequelize)
const Follows = Follow_Model(sequelize, Sequelize)

Users.hasMany(Posts,{foreignKey: 'user_id'})
Posts.belongsTo(Users,{foreignKey: 'user_id'})
Likes.belongsTo(Users,{foreignKey: 'user_id'})
Users.hasMany(Likes,{foreignKey: 'user_id'})
Users.hasMany(Comments,{foreignKey: 'user_id'})
Posts.hasMany(Likes,{foreignKey: 'event_id'})
Posts.hasMany(Comments,{foreignKey: 'event_id'})
Users.hasMany(Follows,{foreignKey: 'user_id'})
Follows.belongsTo(Users,{foreignKey: 'user_id'})



// sequelize.sync({ force: true })
//   .then(() => {
//     console.log(`Database & tables created!`)
//   })

module.exports = {
    Users,
    Posts,
    Likes,
    Comments,
    Follows
}