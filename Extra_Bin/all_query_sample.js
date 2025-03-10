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

var $view_feeds_by= document.getElementById("view_feeds_by");
                                $view_feeds_by.innerHTML = "";
$view_feeds_by.innerHTML = $view_feeds_by.innerHTML + `<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>`;













        
    <div class="card mb-3">
      <div class="row">
                      
                      <div class="col-10" style="padding-left:50px;padding-top:20px">
                                    <div class="d-flex bd-highlight">
                                       <!-- if condition -- >
                                      <div class="img_cont">
                                        <img src="../public/profile_image/<%= item.User.user_profile_pic %>" class="rounded-circle user_img">
                                      </div>
                                      <!-- else condition --></div>
                                        <div class="img_cont"><img src="../public/profile_image/icon.jpg" class="rounded-circle user_img"></div>
                                      <!-- else condition ends -->
                                    <div class="user_info viewclick" data-view="<%= item.User.user_id %>"><!-- 1st name and last name<br/>
                                     
                                        <small><i class="far fa-clock"></i> 2 hrs ago</small>

                                      <br/>
                                      <small><a href="http://maps.google.com/?q=<%= item.event_latitude %>,<%= item.event_logitude %>"><i class="fas fa-map-marker-alt"></i> Map</a></small>
                                      <small style="padding-left:10px" id="show_location"></small>
                                    </div> 
                                  </div>
                                </div>  
                                
                               
          
                                    <div class="col-2" style="padding-left:20px;padding-top:20px">
                                        <i style="font-size:24px" class="fa">&#xf0c9;</i>
                                        
                                    </div>
                </div>

                <div class="row">
                        <h5><span style="padding-left:35px" id="show_title"><%= item.event_message %></span></h5>
                             
                        <div class="container" style="margin-left:20px;margin-right:20px;margin-top:5px">
                               
                               <p><%= item.event_description %><span id="dots">...</span><span id="more" style="display: none;"><%= item.event_read_more_option %></span>
                               <span data-btn_hide_show="<%= item.event_id %>" class="hide_show" id="myBtn" style="cursor: pointer;color:cornflowerblue">Read more</span>
                            </p>

                        
                            
                              
        
                        </div>
                </div>
 
            
            
                <ul class="nav">
                        <li>
                                <a href="/post/<%= item.event_id %>">
                                    <img src="../public/image/<%= item.e_imagepath %>" alt="error check >" class="img-fluid">
                                </a>
                          
                        </li>
                </ul>          
            

           
            <div class="container">
                    <div class="row">

                            <div class="col-md-6 like" style="padding-top:10px" data-post="<%= item.event_id %>">
                                <a href=""><i class="fas fa-thumbs-up"></i></a>
                                       
                                <span class="countLikes" id="countLikes<%= item.event_id %>" style="cursor: pointer;"> <%=item.Likes.length%> Like</span>
                                
                            </div>
                            <div class="col-md-4 post_comment" id="<%= item.event_id %>" style="padding-top:10px">
                                        <i class="fas fa-comments" style="cursor: pointer;"></i>
                                        <span class="countComments" style="cursor: pointer;"> <%=item.Comments.length%> comments</span>
                               
                            </div>
                            <div class="col-md-2" style="padding-top:10px">
                                        <i class="fas fa-share"></i>
                                        <span>share</span>
                               
                            </div>
                            
                            
                    </div>
            </div>
            <hr>
            <div class="container">
                    <div class="row">
                        <% user.forEach(function(item,  index)
                        {%>
                        <% if(item.user_profile_pic){ %>
                            <div class="col-md-2" style="padding-top:10px">
                                <a href=""><img class="rounded-circle" src="../public/profile_image/<%= item.user_profile_pic %>" alt="error" class="rounded-circle border border-danger" style="width:40px; height:40px"></a>
                            </div>
                            <% } else { %> 
                            <div class="col-md-2" style="padding-top:10px">
                                        <a href=""><img class="rounded-circle" src="../public/profile_image/icon.jpg" alt="error" class="rounded-circle border border-danger" style="width:40px; height:40px"></a>
                            </div>
                            <% } %>
                        <%}); %>
                            <div class="col-md-7">
                                        <div class="form-group" id="comment_form<%= item.event_id %>">
                                                        <input class="form-control" name="comment" type="text" placeholder="Your comments" id="comment<%= item.event_id %>"/>
                                        </div>
                            </div>
                            <div class="col-md-3" style="padding-top:10px">
                                <button type="button" data-po="<%= item.event_id %>" name="submit_comment" class="btn btn-default submit_comment">comment</button>
                            </div>
                    </div>
                    <!-- new display comments hiden-->

                   <div class="container" id="old_comment<%= item.event_id %>">
                           

                   </div>
                               
                               
                    
     
            </div>
            
               
            
    </div> 
    

    <%}); %>
<%}
else
{
  %> 
  <p> <strong>There are no recods available</strong></p>
<%  } %></div>


$view_feeds_by.innerHTML = $view_feeds_by.innerHTML + `<div class="card mb-3"> <div class="row"> <div class="col-10" style="padding-left:50px;padding-top:20px"> <div class="d-flex bd-highlight"> `  
                                                                           
                                                                           if (post_data[i].User.user_profile_pic)
                                                                           {
$view_feeds_by.innerHTML = $view_feeds_by.innerHTML +                                         ` <div class="img_cont">  <img src="../public/profile_image/${post_data[i].User.user_profile_pic}" class="rounded-circle user_img"> </div> `
                                    
                                                                           }else
                                                                           {
$view_feeds_by.innerHTML = $view_feeds_by.innerHTML +                                      ` <div class="img_cont"><img src="../public/profile_image/icon.jpg" class="rounded-circle user_img"></div> `  
                                                                           }
$view_feeds_by.innerHTML = $view_feeds_by.innerHTML +                   `<div class="user_info viewclick" data-view="${post_data[i].User.user_id}">${post_data[i].User.user_firstname} ${post_data[i].User.user_lastname}<br/> <small><i class="far fa-clock"></i> 2 hrs ago</small> <br/> `
$view_feeds_by.innerHTML = $view_feeds_by.innerHTML +    `<small><a href="http://maps.google.com/?q=${post_data[i].event_latitude},${post_data[i].event_logitude}"><i class="fas fa-map-marker-alt"></i> Map</a></small>`
$view_feeds_by.innerHTML = $view_feeds_by.innerHTML +     `<small style="padding-left:10px" id="show_location"></small>`
$view_feeds_by.innerHTML = $view_feeds_by.innerHTML +     ` </div>`
$view_feeds_by.innerHTML = $view_feeds_by.innerHTML +                   ` </div> ` 
                                                                   
$view_feeds_by.innerHTML = $view_feeds_by.innerHTML +           ` </div> ` 
$view_feeds_by.innerHTML = $view_feeds_by.innerHTML +   ` </div> ` 
                                           
$view_feeds_by.innerHTML = $view_feeds_by.innerHTML +   ` </div> ` 
                                           ;
                                   }
                             












Executing (default): SELECT `event_id`, `user_id`, `e_imagepath`, `event_message`, `event_name`, `event_description`, `event_read_more_option`, `event_type`, `event_organization`, `event_country_name`, `event_state_name`, `event_sub_city_name`, `event_main_city_name`, `event_area_1_name`, `event_area_2_name`, `event_postal_code`, `event_full_address`, `event_latitude`, `event_logitude`, `event_start_date`, `event_start_time`, `event_start_am_or_pm`, `event_end_date`, `event_end_time`, `event_end_am_or_pm`, `event_registeration_date_close`, `event_registeration_time_close`, `event_registeration_am_or_pm_close`, `createdAt`, `updatedAt`, 
( 6371 * acos( cos( radians(19.1250432) ) * cos( radians( event_latitude ) ) * cos( radians( event_logitude ) - radians(72.93173759999999) ) + sin( radians(19.1250432) ) * sin( radians( event_latitude ) ) ) ) 
AS `distance` FROM `Posts` AS `Posts` WHERE ( 6371 * acos( cos( radians(19.1250432) ) * cos( radians( event_latitude ) ) * cos( radians( event_logitude ) - radians(72.93173759999999) ) + sin( radians(19.1250432) ) * sin( radians( event_latitude ) ) ) ) <= 25 ORDER BY `distance` LIMIT 0, 15;


<!-- <%- include('partials/includes/header') %>

<br /> <br /> <br /> <br />

<div class="container" id="heap_map_chart" style="height: 400px; min-width: 310px; max-width: 800px; margin: 0 auto">

                
        
    
</div>
<div class="card border-success mb-3" style="max-width: 18rem;" id="moreInfo">
            
</div>
<%- include('partials/includes/footer') %> -->

<!-- <script>

$(document).ready(function() 
{
    /*
    This is highchart
    */
    requestData(); // calling function on page load
    function requestData()
    {
        $.ajax(
        {
            url: '/profile/heap_map_data',
            type: 'GET',
            success: function(response) 
            {
    
                var chart_data = [];
                var data = 1;
                var dataExists;
                
                var k = 0;
                for(var i = 0, len = response.length; i < len; i++)
                {
                    date_value = response[i].event_start_date;
                    var d = new Date(date_value);   
                    var year = d.getFullYear();
                    var month = d.getMonth();
                    var day = d.getDay();
                    var actualDay = day -1;
                   // check 1st in chart data, weather data exists or not
                   // if exits then increatment by 1
                   // not then put 1
                    
                    chart_data.push([month,actualDay,data]);
                }
                //alert(chart_data[1]);
                console.log(chart_data[1]);
                console.log("chart_data ==",chart_data);
                

                Highcharts.chart('heap_map_chart', 
                {

                        chart: {
                            type: 'heatmap',
                            marginTop: 40,
                            marginBottom: 80,
                            plotBorderWidth: 1,
                            
                        },


                        title: {
                            text: 'Project Details'
                        },

                        xAxis: {
                            categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
                        },

                        yAxis: {
                            categories: ['Mon','Tue','Wed','Thur','Fri','Sat','Sun'],
                            title: null
                        },

                        

                        colorAxis: {
                            min: 0,
                            minColor: '#FFFFFF',
                            maxColor: Highcharts.getOptions().colors[0]
                        },

                        legend: {
                            align: 'right',
                            layout: 'vertical',
                            margin: 0,
                            verticalAlign: 'top',
                            y: 25,
                            symbolHeight: 280
                        },

                        tooltip: {
                            formatter: function () 
                            {
                                return  + this.point.value + ' <b> project was uploaded on ' + this.series.xAxis.categories[this.point.x] + ' date, 2019' + '<br /> click to view more' ;
                            }
                        },

                        plotOptions: 
                        {
                                series: 
                                {
                                    cursor: 'pointer',
                                    point: 
                                    {
                                        events: 
                                        {
                                            click: function () 
                                            {

                                                var year = 2019;
                                                var month = this.x;
                                                var y_axis_day = this.y;

                                                $.ajax(
                                                    {
                                                        url: '/profile/heap_map_event_details',
                                                        type: "POST",
                                                        data: {year:year,month:month},
                                                        success: function (response) 
                                                        {
                                                                
                                                                var $message_list= document.getElementById("moreInfo");
                                                                $message_list.innerHTML = '';
                                                                for(var i = 0, len = response.length; i < len; i++)
                                                                {

                                                                    var date = new Date(response[i].event_start_date);   
                                                                    var day = date.getDay();
                                                                    var actualDay = day -1;
                                                                    actualDay = Number(actualDay)
                                                                    
                                                                    if(y_axis_day == actualDay)
                                                                    {
                                                                        $message_list.innerHTML = $message_list.innerHTML + `<div class="card online_user" ><li class="list-group-item link-class" style="cursor: pointer;"> <div class="d-flex bd-highlight"> <div class="img_cont"><img src="../public/image/${response[i].e_imagepath}" class="rounded-circle user_img"><span class="online_icon offline"></span> </div><div class="user_info">${response[i].event_name}}<br/><small style="color:#F44336"><strong>${response[i].event_start_date} message</strong></small><br/><small>Last seen <small>${response[i].event_end_date}</small></small></div> </div> </li></div>`;
                                                                    }
                                                                    
                                                                    
                                                                   
                                                                    
                                                                }
                                                        },
                                                        error : function(jqXHR, textStatus, errorThrown)
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
                                        }
                                    }
                                }
                            },

                        series: [
                            {

                            data: chart_data,
                            borderWidth: 1,
                           
                            dataLabels: {
                                enabled: true,
                                color: '#000000'
                            }
                        }]

                }); 
                

            },
            error : function(jqXHR, textStatus, errorThrown)
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

    // All home.ejs javascript Ajax code

    // set interval ...it will continouly update the latitude and longitude of user
        // setInterval(function()
        // {
        //         get_lat_and_lon();
        // }, 5000);


        

})
</script> -->
-->
<!--  --></div>