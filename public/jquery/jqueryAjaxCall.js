$(document).ready(function()
{
        var user_id = 0;  // declaration of gloabl variable
        
        get_user_id(); // calling get_user_id() function
        // this function does the work of fetching the user_id from database and assigns it to user_id as declared above
        function get_user_id()
        {
                $.ajax(
                {
                        url:"/posts/user_id",
                        method:"GET",
                        success:function(response)
                        {       
                                if(response !='')
                                {
                                        user_id = Number(response)
                                        //alert(user_id)
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
        } // get_user_id() function ends

        fetch_user(); // calling fetch_user() function
        // this function list out all the users which are following you and suggests you to follow or accept the any user has requested you
        function fetch_user()
        {
                const action = "fetch_user";
                //const user_id = $(this).attr("user_id");
                //alert(d)
                $.ajax(
                {
                        url:"/posts/get_user",
                        method:"GET",
                        success:function(response)
                        {       
                                if(response.length > 0)
                                {

                                        var suggestion_for_user = document.getElementById("slides")

                                       
                                        for (var i = 0, len = response.length; i < len; i++)
                                        {       var flag = false;
                                                var already_following = false; 
                                                var status =""
                                                let fullname = response[i].user_firstname + ' ' + response[i].user_lastname;
                                                let image = response[i].user_profile_pic 
                                                //alert(image)
                                                let userid = response[i].user_id;
                                                for(var j = 0, len_follow = response[i].Follows.length; j < len_follow; j++)
                                                {
                                                        //alert(len_follow)
                                                       
                                                       status =  response[i].Follows[j].status
                                                      // alert(status)
                                                       var receiver_id =  response[i].Follows[j].receiver_id
                                                       var follow_user_id = response[i].Follows[j].user_id
                                                       var follow_receiver_id = response[i].Follows[j].receiver_id
                                                       
                                                       if((status == "requested") && (user_id == follow_user_id)) // When I send request to someone then I must see "Requested"
                                                       {
                                                                status="Requested" // not working
                                                                already_following= true;
                                                                break;
                                                                //alert(status)
                                                       }
                                                       else if((status == "requested") && (user_id == follow_receiver_id)) // when someone else sends me request then 2 option "Accept" or "Decline"
                                                       {
                                                               status = "Accept"
                                                              // alert(status)
                                                       }
                                                       else if((status == "accept") && ((user_id == follow_receiver_id))) // when either one user accespts the request then show "Following" to both user
                                                       {
                                                               status = "Following"
                                                               already_following= true;
                                                               break;
                                                               //alert(status)
                                                       }
                                                       else // when non of the condition satisfy then show "Follow" or // When no status then show "Follow"
                                                       {
                                                               status = "Follow"
                                                
                                                       }
                                                       if((user_id == follow_receiver_id) && (status !=""))
                                                                                                            {
                                                               flag = true
                                                        suggestion_for_user.innerHTML =  suggestion_for_user.innerHTML + 
                        `<div class="card col-lg-4" data-user_id="${user_id}">
                                
                                <img src="../public/profile_image/${image}" alt="" class="rounded-circle border border-danger" style="width:60px; height:60px"/>
                                <p style="font-size:10px;"><strong>${fullname}</strong></p>
                                <button id="followbtn${userid}" data-action="${status}" data-sender_id="${userid}" class="btn-post mr-2 btn btn-dark followbtn" style="font-size:6px;" type="button">${status}</button>
                                <button class="btn-post mr-2 btn btn-success" style="font-size:6px;" type="button">message</button>
                                <a href="#"> <div id="viewprofile${userid}" class="card-footer bg-transparent">View Profile</div></a>
                        </div>`;

                                                       }
                                        
                                                }
                                                if(already_following != true)
                                                {
                                                        if(status == "") 
                                                {
                                                        if(flag != true)
                                                        {

                                                        
                                                                status = "Follow";
                                                                suggestion_for_user.innerHTML =  suggestion_for_user.innerHTML + 
                        `<div class="card col-lg-4" data-user_id="${user_id}">
                                
                                <img src="../public/profile_image/${image}" alt="" class="rounded-circle border border-danger" style="width:60px; height:60px"/>
                                <p style="font-size:10px;"><strong>${fullname}</strong></p>
                                <button id="followbtn${userid}" data-action="${status}" data-sender_id="${userid}" class="btn-post mr-2 btn btn-dark followbtn" style="font-size:6px;" type="button">${status}</button>
                                <button class="btn-post mr-2 btn btn-success" style="font-size:6px;" type="button">message</button>
                                <a href="#"> <div id="viewprofile${userid}" class="card-footer bg-transparent">View Profile</div></a>
                        </div>`;
                }
                                                }
                                                else{
                                                        if(flag != true)
                                                        {
                                                                
                                                        
                                                
                        suggestion_for_user.innerHTML =  suggestion_for_user.innerHTML + 
                        `<div class="card col-lg-4" data-user_id="${user_id}">
                                
                                <img src="../public/profile_image/${image}" alt="" class="rounded-circle border border-danger" style="width:60px; height:60px"/>
                                <p style="font-size:10px;"><strong>${fullname}</strong></p>
                                <button id="followbtn${userid}" data-action="${status}" data-sender_id="${userid}" class="btn-post mr-2 btn btn-dark followbtn" style="font-size:6px;" type="button">${status}</button>
                                <button class="btn-post mr-2 btn btn-success" style="font-size:6px;" type="button">message</button>
                                <a href="#"> <div id="viewprofile${userid}" class="card-footer bg-transparent">View Profile</div></a>
                        </div>`;
                }
                }
                                                }
                                          
                                                
                                        }
                         
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
                

        } // fetch_user() function ends

        // this will notify the user if he/she has accepted or requested the user and accordingly the activity will take place
        $(document).on('click', '.followbtn', function()
        {
                var sender_id =$(this).data('sender_id'); // get user_id to whom you want to send request
                var action = $(this).data('action') // status ..what you want to do follow or unfollow /follow,requested/following(accept) 
                //var parent  = $(this)
                $.ajax({
                                url:"/posts/follow",
                                method:"POST",
                                data:{sender_id:sender_id,action:action},
                                success:function(response)
                                {
                                        if((response.msg == "accept") && (response.success == true)) // user has accept the request
                                        {
                                                alert("You have accepted the request")
                                                
                                                action = "Following"
                                                $('#followbtn'+sender_id).html(action);
                                               
                                               
                                        }
                                        else if((response.msg == "requested") && (response.success == true)) // request has been sent to the user
                                        {
                                                
                                                alert("requested")
                                        }
                                        else{
                                                if((response.msg) && (response.success == true))
                                                {
                                                        alert(response.msg)
                                                }
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
                        })
                
        }); // follow a user ends

        // when user likes the post then it increaments by one and update the database and reflects the likes on posts
        $(document).on('click', '.like', function(events)
        {
                
                events.preventDefault();
                events.stopPropagation();
                var postId = $(this).attr('data-post');
                var postId = parseInt(postId,10)

                $.ajax(
                        {
                                type: 'POST',
                                url:  '/posts/like/' + $(this).attr('data-post'),
                                contentType: "application/json", 
        
                                success : function(response)
                                {
                                        
                                        if(response == false)
                                        {
                                                alert("You have already liked this post")
                                        }
                                        else 
                                        {
                                                $('#countLikes'+postId).html(response.count);
                                        }
                                                
                                
                                },
                                error : function()
                                {
                                        alert('error from server');
                                }
                        }
                );
        })// like post ends 

        
})