// Relationship between tables

// Comment belongs to some posts
comments.belongsTo(Posts,{foreignKey: 'event_id'})
// event_id => is foriegn key in comment table

// Posts can have many comments
posts.hasMany(comments,{foreignKey: 'event_id'})
// event_id => is foriegn key in comment table

SELECT `Follow`.`follow_id`, `Follow`.`user_id`, `Follow`.`receiver_id`, `Follow`.`status`, `Follow`.`createdAt`, `Follow`.`updatedAt`, `User`.`user_id` AS `User.user_id`, `User`.`user_firstname` AS `User.user_firstname`, `User`.`user_lastname` AS `User.user_lastname`, `User`.`user_dob` AS `User.user_dob`, `User`.`user_gender` AS `User.user_gender`, `User`.`user_mobile_no` AS `User.user_mobile_no`, `User`.`user_email` AS `User.user_email`, `User`.`user_username` AS `User.user_username`, `User`.`user_password` AS `User.user_password`, `User`.`user_profile_pic` AS `User.user_profile_pic`, `User`.`createdAt` AS `User.createdAt`, `User`.`updatedAt` AS `User.updatedAt` FROM `Follows` AS `Follow` LEFT OUTER JOIN `Users` AS `User` ON `Follow`.`user_id` = `User`.`user_id` WHERE `Follow`.`user_id` NOT IN (1);

SELECT count(`Posts`.`event_id`) AS `count` FROM `Posts` AS `Posts` LEFT OUTER JOIN `Likes` AS `Likes` ON `Posts`.`event_id` = `Likes`.`event_id` LEFT OUTER JOIN `Comments` AS `Comments` ON `Posts`.`event_id` = `Comments`.`event_id` LEFT OUTER JOIN `Users` AS `User` ON `Posts`.`user_id` = `User`.`user_id`;
Executing (default): SELECT `Posts`.`event_id`, `Posts`.`user_id`, `Posts`.`event_message`, `Posts`.`e_imagepath`, `Posts`.`createdAt`, `Posts`.`updatedAt`, `Posts`.`receiver_id`, `Likes`.`like_id` AS `Likes.like_id`, `Likes`.`user_id` AS `Likes.user_id`, `Likes`.`event_id` AS `Likes.event_id`, `Likes`.`like_status` AS `Likes.like_status`, `Likes`.`createdAt` AS `Likes.createdAt`, `Likes`.`updatedAt` AS `Likes.updatedAt`, `Comments`.`comment_id` AS `Comments.comment_id`, `Comments`.`user_id` AS `Comments.user_id`, `Comments`.`event_id` AS `Comments.event_id`, `Comments`.`comment` AS `Comments.comment`, `Comments`.`createdAt` AS `Comments.createdAt`, `Comments`.`updatedAt` AS `Comments.updatedAt`, `User`.`user_id` AS `User.user_id`, `User`.`user_firstname` AS `User.user_firstname`, `User`.`user_lastname` AS `User.user_lastname`, `User`.`user_dob` AS `User.user_dob`, `User`.`user_gender` AS `User.user_gender`, `User`.`user_mobile_no` AS `User.user_mobile_no`, `User`.`user_email` AS `User.user_email`, `User`.`user_username` AS `User.user_username`, `User`.`user_password` AS `User.user_password`, `User`.`user_profile_pic` AS `User.user_profile_pic`, `User`.`createdAt` AS `User.createdAt`, `User`.`updatedAt` AS `User.updatedAt` FROM `Posts` AS `Posts` LEFT OUTER JOIN `Likes` AS `Likes` ON `Posts`.`event_id` = `Likes`.`event_id` LEFT OUTER JOIN `Comments` AS `Comments` ON `Posts`.`event_id` = `Comments`.`event_id` LEFT OUTER JOIN `Users` AS `User` ON `Posts`.`user_id` = `User`.`user_id` WHERE `Posts`.user_id IN (SELECT `Follows`.receiver_id FROM `follows` AS `Follows` WHERE `Follows`.user_id=1 and `Follows`.status="accept");
Executing (default): SELECT `user_id`, `user_firstname`, `user_lastname`, `user_dob`, `user_gender`, `user_mobile_no`, `user_email`, `user_username`, `user_password`, `user_profile_pic`, `createdAt`, `updatedAt` FROM `Users` AS `Users` WHERE `Users`.`user_id` = 1;

SELECT `Posts`.`event_id`, `Posts`.`user_id`, `Posts`.`event_message`,
`Likes`.`like_id` AS `Likes.like_id`, `Likes`.`user_id` AS `Likes.user_id`, `Likes`.`event_id` AS `Likes.event_id`, `Likes`.`like_status` AS `Likes.like_status`,
`Comments`.`comment_id` AS `Comments.comment_id`, `Comments`.`user_id` AS `Comments.user_id`, `Comments`.`event_id` AS `Comments.event_id`, `Comments`.`comment` AS `Comments.comment`,
`User`.`user_id` AS `User.user_id`, `User`.`user_firstname` AS `User.user_firstname`,
FROM `Posts` AS `Posts` LEFT OUTER JOIN `Likes` AS `Likes` ON `Posts`.`event_id` = `Likes`.`event_id` 
                        LEFT OUTER JOIN `Comments` AS `Comments` ON `Posts`.`event_id` = `Comments`.`event_id` 
                        LEFT OUTER JOIN `Users` AS `User` ON `Posts`.`user_id` = `User`.`user_id`;

SELECT `Posts`.`event_id`, `Posts`.`user_id`, `Posts`.`event_message`, 
`Likes`.`like_id` AS `Likes.like_id`, `Likes`.`user_id` AS `Likes.user_id`, `Likes`.`event_id` AS `Likes.event_id`, `Likes`.`like_status` AS `Likes.like_status`,
`Comments`.`comment_id` AS `Comments.comment_id`, `Comments`.`user_id` AS `Comments.user_id`, `Comments`.`event_id` AS `Comments.event_id`, `Comments`.`comment` AS `Comments.comment`, 
`User`.`user_id` AS `User.user_id`, `User`.`user_firstname` AS `User.user_firstname`, `User`.`user_lastname` AS `User.user_lastname`, `User`.`user_dob` AS `User.user_dob`, `User`.`user_gender` AS `User.user_gender`, `User`.`user_mobile_no` AS `User.user_mobile_no`, `User`.`user_email` AS `User.user_email`, `User`.`user_username` AS `User.user_username`, `User`.`user_password` AS `User.user_password`, `User`.`user_profile_pic` AS `User.user_profile_pic`, `User`.`createdAt` AS `User.createdAt`, `User`.`updatedAt` AS `User.updatedAt`
FROM `posts`AS `Posts` LEFT OUTER JOIN `Likes` AS `Likes` ON `Posts`.`event_id` = `Likes`.`event_id` 
                       LEFT OUTER JOIN `Comments` AS `Comments` ON `Posts`.`event_id` = `Comments`.`event_id` 
                       LEFT OUTER JOIN `Users` AS `User` ON `Posts`.`user_id` = `User`.`user_id`
                       WHERE `Posts`.user_id IN (SELECT `Follows`.receiver_id FROM `follows` AS `Follows` WHERE `Follows`.user_id=1 and `Follows`.status="accept");

// Example of raw query
// router.get('/posts/testapik', function(req, res)
// {
//     const user_id = req.session.user_id;
//     console.log("user_id check =>>",user_id)
//     //{include:[{ model: Likes},{ model: Comments},{ model: Users}]}
//     const status ="accept"
    
//   sequelize.query('SELECT `Posts`.`event_id`, `Posts`.`user_id`, `Posts`.`event_message`, `Posts`.`e_imagepath`, `Posts`.`createdAt`, `Posts`.`updatedAt`, `Likes`.`like_id` AS `Likes.like_id`, `Likes`.`user_id` AS `Likes.user_id`, `Likes`.`event_id` AS `Likes.event_id`, `Likes`.`like_status` AS `Likes.like_status`, `Likes`.`createdAt` AS `Likes.createdAt`, `Likes`.`updatedAt` AS `Likes.updatedAt`, `Comments`.`comment_id` AS `Comments.comment_id`, `Comments`.`user_id` AS `Comments.user_id`, `Comments`.`event_id` AS `Comments.event_id`, `Comments`.`comment` AS `Comments.comment`, `Comments`.`createdAt` AS `Comments.createdAt`, `Comments`.`updatedAt` AS `Comments.updatedAt`, `User`.`user_id` AS `User.user_id`, `User`.`user_firstname` AS `User.user_firstname`, `User`.`user_lastname` AS `User.user_lastname`, `User`.`user_dob` AS `User.user_dob`, `User`.`user_gender` AS `User.user_gender`, `User`.`user_mobile_no` AS `User.user_mobile_no`, `User`.`user_email` AS `User.user_email`, `User`.`user_username` AS `User.user_username`, `User`.`user_password` AS `User.user_password`, `User`.`user_profile_pic` AS `User.user_profile_pic`, `User`.`createdAt` AS `User.createdAt`, `User`.`updatedAt` AS `User.updatedAt` FROM `Posts` AS `Posts` LEFT OUTER JOIN `Likes` AS `Likes` ON `Posts`.`event_id` = `Likes`.`event_id` LEFT OUTER JOIN `Comments` AS `Comments` ON `Posts`.`event_id` = `Comments`.`event_id` LEFT OUTER JOIN `Users` AS `User` ON `Posts`.`user_id` = `User`.`user_id` WHERE `Posts`.user_id IN (SELECT `Follows`.receiver_id FROM `follows` AS `Follows` WHERE `Follows`.user_id=? and `Follows`.status=?); ',  { replacements: [user_id,status], type: sequelize.QueryTypes.SELECT }
//   )
//   .then(users => 
//     {
//         res.json(users);
//   })
//     .catch((err)=>
//     {
//         console.error(err)
//         res.status(501)
//         .send({
//                 error : "error..... check console log"
//               })
//     })
    
	
// });