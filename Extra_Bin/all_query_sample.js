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


// Row Query Example
SELECT *FROM users WHERE user_id IN (SELECT receiver_id FROM follows WHERE user_id = 1 AND status ="accept")




SELECT `User`.`user_id` AS `User.user_id`, `User`.`user_firstname` AS `User.user_firstname`, `User`.`user_lastname` AS `User.user_lastname`, `User`.`user_dob` AS `User.user_dob`, `User`.`user_gender` AS `User.user_gender`, `User`.`user_mobile_no` AS `User.user_mobile_no`, `User`.`user_email` AS `User.user_email`, `User`.`user_username` AS `User.user_username`, `User`.`user_password` AS `User.user_password`, `User`.`user_profile_pic` AS `User.user_profile_pic`, `User`.`createdAt` AS `User.createdAt`, `User`.`updatedAt` AS `User.updatedAt`,
`Logins`.`login_id` AS `Logins.login_id`, `Logins`.`user_id` AS `Logins.user_id`, `Logins`.`last_activity` AS `Logins.last_activity`, `Logins`.`is_type` AS `Logins.is_type`,`Logins`.`offline_online_status` AS `Logins.offline_online_status`
FROM `users`AS `User` LEFT OUTER JOIN `login_details` AS `Logins` ON `User`.`user_id` = `Logins`.`user_id` 
WHERE `User`.user_id IN (SELECT `Follows`.receiver_id FROM `follows` AS `Follows` WHERE `Follows`.user_id=1 and `Follows`.status="accept");



// find near by location
SELECT event_id,event_message,event_area_1_name, ( 3959 * acos( cos( radians(19.1250432) ) * cos( radians( event_latitude ) ) * cos( radians( event_logitude ) - radians(72.93173759999999) ) + sin( radians(19.1250432) ) * sin( radians( event_latitude ) ) ) ) AS distance FROM posts HAVING distance < 25 ORDER BY distance LIMIT 0 , 20;
















SELECT event_id,user_id,event_message,event_area_1_name, ( 3959 * acos( cos( radians(19.1250432) ) * cos( radians( event_latitude ) ) * cos( radians( event_logitude ) - radians(72.93173759999999) ) + sin( radians(19.1250432) ) * sin( radians( event_latitude ) ) ) ) AS distance FROM posts WHERE user_id IN (SELECT receiver_id FROM follows WHERE user_id = 1 AND status ="accept") HAVING distance < 25 ORDER BY distance LIMIT 0 , 20





Posts.findAndCountAll(
                        {
                            include:[{ model: Likes},{ model: Comments},{ model: Users}],
                            where:{
                                    [Op.or]:[
                                    {
                                        user_id:{[Op.in]:[sequelize.literal('(SELECT `Follows`.receiver_id FROM `follows` AS `Follows` WHERE `Follows`.user_id='+user_id+' and `Follows`.status="accept")')]}},
                                        {user_id:user_id}]
        
    }

    })


    SELECT event_id,user_id,event_message,event_area_1_name, ( 3959 * acos( cos( radians(19.1250432) ) * cos( radians( event_latitude ) ) * cos( radians( event_logitude ) - radians(72.93173759999999) ) + sin( radians(19.1250432) ) * sin( radians( event_latitude ) ) ) ) AS distance FROM posts WHERE user_id IN (SELECT receiver_id FROM follows WHERE user_id = 1 AND status ="accept") HAVING distance < 25 ORDER BY distance LIMIT 0 , 20;












'SELECT count(`Posts`.`event_id`) AS `count` FROM `Posts` AS `Posts` LEFT OUTER JOIN `Likes` AS `Likes` ON `Posts`.`event_id` = `Likes`.`event_id` LEFT OUTER JOIN `Comments` AS `Comments` ON `Posts`.`event_id` = `Comments`.`event_id` LEFT OUTER JOIN `Users` AS `User` ON `Posts`.`user_id` = `User`.`user_id` WHERE (`Posts`.`user_id` IN (( 3959 * acos( cos( radians(19.1250432) ) * cos( radians(`Posts`.event_latitude ) ) * cos( radians(`Posts`.event_logitude ) - radians(72.93173759999999) ) + sin( radians(19.1250432) ) * sin( radians(`Posts`.event_latitude ) ) ) ) FROM `Posts` AS Posts WHERE `Posts`.user_id IN (SELECT `Follows`.receiver_id FROM `follows` AS `Follows` WHERE `Follows`.user_id=1 and `Follows`.status="accept") OR `Posts`.user_id = 1 HAVING 8 < 25 ORDER BY distance LIMIT 0 , 20));' },

     'SELECT count(`Posts`.`event_id`) AS `count` FROM `Posts` AS `Posts` LEFT OUTER JOIN `Likes` AS `Likes` ON `Posts`.`event_id` = `Likes`.`event_id` LEFT OUTER JOIN `Comments` AS `Comments` ON `Posts`.`event_id` = `Comments`.`event_id` LEFT OUTER JOIN `Users` AS `User` ON `Posts`.`user_id` = `User`.`user_id` WHERE (`Posts`.`user_id` IN (( 3959 * acos( cos( radians(19.1250432) ) * cos( radians(`Posts`.event_latitude ) ) * cos( radians(`Posts`.event_logitude ) - radians(72.93173759999999) ) + sin( radians(19.1250432) ) * sin( radians(`Posts`.event_latitude ) ) ) ) FROM `Posts` AS Posts WHERE `Posts`.user_id IN (SELECT `Follows`.receiver_id FROM `follows` AS `Follows` WHERE `Follows`.user_id=1 and `Follows`.status="accept") OR `Posts`.user_id = 1 HAVING 8 < 25 ORDER BY distance LIMIT 0 , 20));' }
  [nodemon] restarting due to changes...



'SELECT `Posts`.`event_id`, `Posts`.`user_id`, `Posts`.`e_imagepath`, `Posts`.`event_message`, `Posts`.`event_name`, `Posts`.`event_description`, `Posts`.`event_read_more_option`, `Posts`.`event_type`, `Posts`.`event_organization`, `Posts`.`event_country_name`, `Posts`.`event_state_name`, `Posts`.`event_sub_city_name`, `Posts`.`event_main_city_name`, `Posts`.`event_area_1_name`, `Posts`.`event_area_2_name`, `Posts`.`event_postal_code`, `Posts`.`event_full_address`, `Posts`.`event_latitude`, `Posts`.`event_logitude`, `Posts`.`event_start_date`, `Posts`.`event_start_time`, `Posts`.`event_start_am_or_pm`, `Posts`.`event_end_date`, `Posts`.`event_end_time`, `Posts`.`event_end_am_or_pm`, `Posts`.`event_registeration_date_close`, `Posts`.`event_registeration_time_close`, `Posts`.`event_registeration_am_or_pm_close`, `Posts`.`createdAt`, `Posts`.`updatedAt`, `Likes`.`like_id` AS `Likes.like_id`, `Likes`.`user_id` AS `Likes.user_id`, `Likes`.`event_id` AS `Likes.event_id`, `Likes`.`like_status` AS `Likes.like_status`, `Likes`.`createdAt` AS `Likes.createdAt`, `Likes`.`updatedAt` AS `Likes.updatedAt`, `Comments`.`comment_id` AS `Comments.comment_id`, `Comments`.`user_id` AS `Comments.user_id`, `Comments`.`event_id` AS `Comments.event_id`, `Comments`.`comment` AS `Comments.comment`, `Comments`.`createdAt` AS `Comments.createdAt`, `Comments`.`updatedAt` AS `Comments.updatedAt`, `User`.`user_id` AS `User.user_id`, `User`.`user_firstname` AS `User.user_firstname`, `User`.`user_lastname` AS `User.user_lastname`, `User`.`user_dob` AS `User.user_dob`, `User`.`user_gender` AS `User.user_gender`, `User`.`user_mobile_no` AS `User.user_mobile_no`, `User`.`user_email` AS `User.user_email`, `User`.`user_username` AS `User.user_username`, `User`.`user_password` AS `User.user_password`, `User`.`user_profile_pic` AS `User.user_profile_pic`, `User`.`createdAt` AS `User.createdAt`, `User`.`updatedAt` AS `User.updatedAt` 
FROM `Posts` AS `Posts` LEFT OUTER JOIN `Likes` AS `Likes` ON `Posts`.`event_id` = `Likes`.`event_id` 
LEFT OUTER JOIN `Comments` AS `Comments` ON `Posts`.`event_id` = `Comments`.`event_id` 
LEFT OUTER JOIN `Users` AS `User` ON `Posts`.`user_id` = `User`.`user_id` 
WHERE (`Posts`.`user_id` IN 
(( 3959 * acos( cos( radians(19.1250432) ) * cos( radians(`Posts`.event_latitude ) ) * cos( radians(`Posts`.event_logitude ) - radians(72.93173759999999) ) + sin( radians(19.1250432) ) * sin( radians(`Posts`.event_latitude ) ) ) ) AS distance FROM `Posts` AS Posts WHERE `Posts`.user_id IN (SELECT `Follows`.receiver_id FROM `follows` AS `Follows` WHERE `Follows`.user_id=1 and `Follows`.status="accept") OR `Posts`.user_id = 1 HAVING 8 < 25 ORDER BY distance LIMIT 0 , 20));' }




 SELECT `Posts`.`event_id`, `Posts`.`user_id`, `Posts`.`e_imagepath`, `Posts`.`event_message`, `Posts`.`event_name`, `Posts`.`event_description`, `Posts`.`event_read_more_option`, `Posts`.`event_type`, `Posts`.`event_organization`, `Posts`.`event_country_name`, `Posts`.`event_state_name`, `Posts`.`event_sub_city_name`, `Posts`.`event_main_city_name`, `Posts`.`event_area_1_name`, `Posts`.`event_area_2_name`, `Posts`.`event_postal_code`, `Posts`.`event_full_address`, `Posts`.`event_latitude`, `Posts`.`event_logitude`, `Posts`.`event_start_date`, `Posts`.`event_start_time`, `Posts`.`event_start_am_or_pm`, `Posts`.`event_end_date`, `Posts`.`event_end_time`, `Posts`.`event_end_am_or_pm`, `Posts`.`event_registeration_date_close`, `Posts`.`event_registeration_time_close`, `Posts`.`event_registeration_am_or_pm_close`, `Posts`.`createdAt`, `Posts`.`updatedAt`, `Likes`.`like_id` AS `Likes.like_id`, `Likes`.`user_id` AS `Likes.user_id`, `Likes`.`event_id` AS `Likes.event_id`, `Likes`.`like_status` AS `Likes.like_status`, `Likes`.`createdAt` AS `Likes.createdAt`, `Likes`.`updatedAt` AS `Likes.updatedAt`, `Comments`.`comment_id` AS `Comments.comment_id`, `Comments`.`user_id` AS `Comments.user_id`, `Comments`.`event_id` AS `Comments.event_id`, `Comments`.`comment` AS `Comments.comment`, `Comments`.`createdAt` AS `Comments.createdAt`, `Comments`.`updatedAt` AS `Comments.updatedAt`, `User`.`user_id` AS `User.user_id`, `User`.`user_firstname` AS `User.user_firstname`, `User`.`user_lastname` AS `User.user_lastname`, `User`.`user_dob` AS `User.user_dob`, `User`.`user_gender` AS `User.user_gender`, `User`.`user_mobile_no` AS `User.user_mobile_no`, `User`.`user_email` AS `User.user_email`, `User`.`user_username` AS `User.user_username`, `User`.`user_password` AS `User.user_password`, `User`.`user_profile_pic` AS `User.user_profile_pic`, `User`.`createdAt` AS `User.createdAt`, `User`.`updatedAt` AS `User.updatedAt` 
 FROM `Posts` AS `Posts` 
 LEFT OUTER JOIN `Likes` AS `Likes` ON `Posts`.`event_id` = `Likes`.`event_id` 
 LEFT OUTER JOIN `Comments` AS `Comments` ON `Posts`.`event_id` = `Comments`.`event_id` 
 LEFT OUTER JOIN `Users` AS `User` ON `Posts`.`user_id` = `User`.`user_id` 
 WHERE (`Posts`.`user_id` IN ((SELECT `Follows`.receiver_id FROM `follows` AS `Follows` WHERE `Follows`.user_id=1 and `Follows`.status="accept")) OR `Posts`.`user_id` = 1);



 SELECT event_id,user_id,event_message,event_area_1_name, 
 ( 3959 * acos( cos( radians(19.1250432) ) * cos( radians( event_latitude ) ) * cos( radians( event_logitude ) - radians(72.93173759999999) ) + sin(radians(19.1250432) ) * sin( radians( event_latitude ) ) ) )
  AS distance FROM posts WHERE user_id IN (SELECT `Follows`.receiver_id FROM `follows` AS `Follows` WHERE `Follows`.user_id='+user_id+' and `Follows`.status="accept") OR user_id = 1 HAVING distance < 25ORDER BY distance LIMIT 0 , 20


  //( 3959 * acos( cos( radians(19.1250432) ) * cos( radians( event_latitude ) ) * cos( radians( event_logitude ) - radians(72.93173759999999) ) + sin(radians(19.1250432) ) * sin( radians( event_latitude ) ) ) ) 
//( 3959 * acos( cos( radians('+lat+') ) * cos( radians( event_latitude ) ) * cos( radians( event_logitude ) - radians('+lon+') ) + sin( radians('+lat+') ) * sin( radians( event_latitude ) ) ) ) 
const query = '( 3959 * acos( cos( radians('+lat+') ) * cos( radians( event_latitude ) ) * cos( radians( event_logitude ) - radians('+lon+') ) + sin( radians('+lat+') ) * sin( radians( event_latitude ) ) ) ) '
Posts.findAll({include:[{ model: Likes},{ model: Comments},{ model: Users}],
    where:{[Op.or]:[{user_id:{[Op.in]:[sequelize.literal('(SELECT `Follows`.receiver_id FROM `follows` AS `Follows` WHERE `Follows`.user_id='+user_id+' and `Follows`.status="accept")')]}},{user_id:user_id}]},
    attributes: ['event_id','user_id','e_imagepath','event_message','event_name','event_description','event_read_more_option','event_type','event_organization','event_country_name','event_state_name','event_sub_city_name','event_main_city_name','event_area_1_name','event_area_2_name','event_postal_code','event_full_address','event_latitude','event_logitude','event_start_date','event_start_time','event_start_am_or_pm','event_end_date','event_end_time','event_end_am_or_pm','event_registeration_date_close','event_registeration_time_close','event_registeration_am_or_pm_close',[sequelize.literal(query),'distance']],
   // where: sequelize.where('distance', {$lt: radius_input}),
    //order: sequelize.col('distance'),
    order: [[sequelize.literal('distance')]],
  limit: 15
})


if( status == true)
{
        status = false;
          console.log("latitude",latitude);
          console.log("longitude",longitude);

          $.ajax(
          {
                  url:"/login/get_lat_and_lon",
                  method:"POST",
                  data:{latitude:latitude,longitude:longitude},
                  success:function(response)
                  {       
                          if(response !='')
                          {
                                  
                          alert(response);
                                  //return response;
                          }
                  },
                  error: function(jqXHR, textStatus, errorThrown)
                          {
                                  console.log('jqXHR:');
                                  console.log(jqXHR);
                                  console.log('textStatus:');
                                  console.log(textStatus);
                                  console.log('errorThrown:');
                                  console.log(errorThrown);
                                  alert(errorThrown);
                  }
          });
}      


if( selected_option == "area")
{
        status = true;
        alert("area")
        break;
}
else if(selected_option == "city")
{
        alert("city")
        status = true;
        break;
}
else if(selected_option == "state")
{
        alert("state")
        status = true;
        break;
}
else if(selected_option == "country")
{
        for( i = 0; i < address.length; i++)
        {
                var arraydata = address[i].types; 

                for(key in arraydata)
                {
                        
                        
                alert(JSON.stringify(arraydata[key]));
                }
                // if(status == true)
                // {
                //         alert("outside for 1 loop"); 
                //         break;
                // }
                
        }
        // if(arraydata[key] == "country") // country
        // {
        //         alert("in co")
        //         country_name = JSON.stringify(arraydata[key].long_name); 
        //         alert(country_name);
        // }
        // alert("country")
        // status = true;
        // break;
}
else
{ // selected_option == "current location"
        alert("current location")
        status = true;
        break;
}
