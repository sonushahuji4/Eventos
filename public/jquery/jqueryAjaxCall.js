

$(document).ready(function()
{

        // var xhr = null;

        // if (window.XMLHttpRequest) {
        //     xhr = window.XMLHttpRequest;
        // }
        // else if(window.ActiveXObject('Microsoft.XMLHTTP')){
        //     // I do not know if this works
        //     xhr = window.ActiveXObject('Microsoft.XMLHTTP');
        // }
    
        // var send = xhr.prototype.send;
        // xhr.prototype.send = function(data) 
        // {
        //     try{
        //         //TODO: comment the next line
        //         //console.log('pre send', data);
        //         //alert(JSON.stringify(data));
        //         send.call(this, data);
        //         //TODO: comment the next line
        //         //console.log('pos send');
        //     }
        //     catch(e) {
        //         //TODO: comment the next line
        //         console.log('err send', e);
        //     }
        // }

        /******************************************************* ALL Home.ejs Ajax Query Call *************************************************************/


        /****************************************************** It includes all Home.ejs files ************************************************************/

        // set interval ...it will continouly update the latitude and longitude of user
        // setInterval(function()
        // {
        //         get_lat_and_lon();
        // }, 5000);

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

        // not working yet, need to fix the bug
        myFunction()//
        function myFunction() 
        {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");

        if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
        } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less"; 
        moreText.style.display = "inline";
        }
        }
        //when user clicks on read more option or hide (need to work on this)
        $(document).on('click','.hide_show',function()
        {
                var dots = document.getElementById("dots");
                var moreText = document.getElementById("more");
                var btnText = document.getElementById("myBtn");
                if (dots.style.display === "none") 
                {
                        dots.style.display = "inline";
                        btnText.innerHTML = "Read more"; 
                        moreText.style.display = "none";
                } 
                else 
                {
                        dots.style.display = "none";
                        btnText.innerHTML = "Read less"; 
                        moreText.style.display = "inline";
                }

        });

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

        // when on comment button clicked then it list outs all the comments related to that posts      
        $(document).on('click', '.post_comment', function()
        {
                var post_id = $(this).attr('id')
                var action = 'fetch_all_comment';
                $.ajax(
                {
                        url:"/posts/fetch_add_comment",
                        method:"POST",
                        data:{post_id:post_id,action:action},
                        success:function(response)
                        {
                                let old_comment = document.getElementById("old_comment"+post_id)
                                old_comment.innerHTML = ""; // make it null first then populate data again
                                for (var i = 0, len = response.length; i < len; i++)
                                {    // alert(response.length);
                                        var comment_data = response[i].comment;
                                        var comment_time = response[i].createdAt;
                                       // alert(comment_data);
                                        //alert(comment_time);  
                                       // alert(response[i].User.length);
                                        //alert(response[i].User.user_profile_pic);
                                        var user_image = response[i].User.user_profile_pic;
                                        
                                        
                                        old_comment.innerHTML =  old_comment.innerHTML + '<div class="row"><div class="col-1"><a href=""><img class="rounded-circle" src="../public/profile_image/'+user_image+'" alt="error" class="rounded-circle border border-danger" style="width:40px; height:40px"></a></div><div class="col-11"><p>'+comment_data+' <br/><small>'+comment_time+'</small></p></div></div><hr>';

                                       
                                        
                                }
                                // response.forEach(function(item, index)
                                // { 
                                        // var comment_data = item.comment
                                       
                                        // old_comment.innerHTML =  old_comment.innerHTML + '<div class="row"><div class="col-2"><a href=""><img class="rounded-circle" src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/6.jpg" alt="error" class="rounded-circle border border-danger" style="width:30px; height:30px"></a></div><div class="col-10"><p>'+comment_data+' <br/><small>5hr</small></p></div></div><hr>';
                                       
                                // })
                                        // document.getElementById("demo").innerHTML += '<br>' + employee.name;
                                $("#old_comment"+post_id).slideToggle('slow'); 
                                              
                        }

                
                });
        });

        // on submit comment, comments gets submited and stores in database
        $(document).on('click', '.submit_comment', function()
            {
                    var post_id = $(this).attr('data-po')
                    var comment = $('#comment'+post_id).val();
                    var action = 'submit_comment';
                            
                    if(comment !='')
                    {
                            $.ajax({
                                    url:"/posts/add_comment",
                                    method:"POST",
                                    data:{post_id:post_id,comment:comment,action:action},
                                    success:function(data)
                                    {
                                            if(data == "success")
                                            {
                                                    document.getElementById("comment"+post_id).value=""
                                                    //$('#comment_form'+post_id).slideUp('slow');
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
                    }
                    else{
                            alert("comment connot be empty");
                    }
    
                   
        });

        // on click view other users profile
        $(document).on('click','.viewclick' ,function()
        {
                var view =$(this).data('view');
                
                $.ajax({
                        url:"/viewprofile/" + view,
                        method: "GET",
                        success:function(response)
                        {

                                window.location.assign('viewprofile/'+view);
                        },
                        error:function(jqXHR, textStatus, errorThrown)
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
        });

        // when user views feeds by country,city,state,area and current location, it gets current location lat and longtitude and other details 
        $("select.view_feeds_by").change(function()
        {
                var selected_option = $(this).children("option:selected").val();

                if (!navigator.geolocation) 
                {
                        console.log("Geolocation is not supported by your browser");
                } 
                else 
                {
                        
                        var common_name = "NA";
                        var status_got_data = false;
                        var flag_status_in = false;
                        navigator.geolocation.getCurrentPosition(function(position)
                        {
                                const latitude  = position.coords.latitude;
                                const longitude = position.coords.longitude;
                                var latlng = new google.maps.LatLng(latitude, longitude);
                                var geocoder = geocoder = new google.maps.Geocoder();
                                geocoder.geocode({ 'latLng': latlng }, function (results, status) 
                                {
                                       
                                        const address = results[1].address_components;
                                        console.log(address)
                                        if( selected_option == "area")
                                        {
                                                for( i = 0; i < address.length; i++)
                                                {
                                                        var arraydata = address[i].types; 

                                                        for(key in arraydata)
                                                        {     
                                                              //  alert(JSON.stringify(arraydata[key]));
                                                                if( (arraydata[key] == "sublocality_level_2") || (arraydata[key] == "sublocality_level_1") ) // area
                                                                {
                                                                        
                                                                       common_name = address[i].long_name; 
                                                                       flag_status_in = true;
                                                                        alert(common_name);
                                                                }
                                                                if(flag_status_in == true)
                                                                {
                                                                        status_got_data = true;
                                                                        flag_status_in = false;
                                                                        break;
                                                                }
                                                        }
                                                        if(status_got_data == true)
                                                        {
                                                                break;
                                                        }
                                                        
                                                }
                                                if(status_got_data == true)
                                                {
                                                        status_got_data = false;
                                                        view_feed_by_sort(latitude,longitude,common_name,selected_option);  // call function ajax for backend here;

                                                }
                                        }
                                        else if(selected_option == "city")
                                        {
                                                for( i = 0; i < address.length; i++)
                                                {
                                                        var arraydata = address[i].types; 

                                                        for(key in arraydata)
                                                        {     
                                                              //  alert(JSON.stringify(arraydata[key]));
                                                                if(arraydata[key] == "administrative_area_level_2") // city
                                                                {
                                                                        
                                                                       common_name = address[i].long_name; 
                                                                       flag_status_in = true;
                                                                        alert(common_name);
                                                                }
                                                                if(flag_status_in == true)
                                                                {
                                                                        status_got_data = true;
                                                                        flag_status_in = false;
                                                                        break;
                                                                }
                                                        }
                                                        if(status_got_data == true)
                                                        {
                                                                break;
                                                        }
                                                        
                                                }
                                                if(status_got_data == true)
                                                {
                                                        status_got_data = false;
                                                        view_feed_by_sort(latitude,longitude,common_name,selected_option);  // call function ajax for backend here;

                                                }
                                        }
                                        else if(selected_option == "state")
                                        {
                                                for( i = 0; i < address.length; i++)
                                                {
                                                        var arraydata = address[i].types; 

                                                        for(key in arraydata)
                                                        {     
                                                              //  alert(JSON.stringify(arraydata[key]));
                                                                if(arraydata[key] == "administrative_area_level_1") // state
                                                                {
                                                                        
                                                                       common_name = address[i].long_name; 
                                                                       flag_status_in = true;
                                                                        alert(common_name);
                                                                }
                                                                if(flag_status_in == true)
                                                                {
                                                                        status_got_data = true;
                                                                        flag_status_in = false;
                                                                        break;
                                                                }
                                                        }
                                                        if(status_got_data == true)
                                                        {
                                                                break;
                                                        }
                                                        
                                                }
                                                if(status_got_data == true)
                                                {
                                                        status_got_data = false;
                                                        view_feed_by_sort(latitude,longitude,common_name,selected_option);  // call function ajax for backend here;

                                                }
                                        }
                                        else if(selected_option == "country")
                                        {
                                                for( i = 0; i < address.length; i++)
                                                {
                                                        var arraydata = address[i].types; 

                                                        for(key in arraydata)
                                                        {     
                                                              //  alert(JSON.stringify(arraydata[key]));
                                                                if(arraydata[key] == "country") // country
                                                                {
                                                                        
                                                                       common_name = address[i].long_name; 
                                                                       flag_status_in = true;
                                                                        alert(common_name);
                                                                }
                                                                if(flag_status_in == true)
                                                                {
                                                                        status_got_data = true;
                                                                        flag_status_in = false;
                                                                        break;
                                                                }
                                                        }
                                                        if(status_got_data == true)
                                                        {
                                                                break;
                                                        }
                                                        
                                                }
                                                if(status_got_data == true)
                                                {
                                                        status_got_data = false;
                                                        view_feed_by_sort(latitude,longitude,common_name,selected_option);  // call function ajax for backend here;

                                                }

                                                
                                        }
                                        else
                                        { // selected_option == "current_location"
                                                alert("current location")
                                                view_feed_by_sort(latitude,longitude,common_name,selected_option);  // call function ajax for backend here;
                                        }


             
                                       
                                });



                        });
                }
                
        }); 

        // the function is called when select.view_feeds_by gets executed, this is basically the UI part to show posts based on user search
        function view_feed_by_sort(latitude,longitude,common_name,selected_option)
        {
                //var parent  = $(this)
                //parent.html(response.count)

                $.ajax(
                {
                        url:"/login/get_lat_and_lon",
                        method:"POST",
                        data:{latitude:latitude,longitude:longitude,common_name,selected_option},
                        success:function(response)
                        {     

                                if(response.feeds_data !='')
                                {
                                        var onlyDate = new Date();
                                        onlyDate = onlyDate.toISOString().slice(0,10)
                                        var $view_feeds_by= document.getElementById("view_feeds_by");
                                        //$view_feeds_by.innerHTML = "";
                                        let innerHTML = ''

                                        const  post_data = response.feeds_data;
                                        for(var i=0, len = post_data.length; i < len; i++)
                                        {
                                   innerHTML += `<div class="card mb-3">
                                                        <div class="row">
                                                                <div class="col-10" style="padding-left:50px;padding-top:20px">
                                                                        <div class="d-flex bd-highlight">`;
                                                                                if (post_data[i].User.user_profile_pic) 
                                                                                {
                                                                                        innerHTML += ` <div class="img_cont"> 
                                                                                        <img src="../public/profile_image/${post_data[i].User.user_profile_pic}" class="rounded-circle user_img"> 
                                                                                        </div> `
                                                                                } 
                                                                                else 
                                                                                {
                                                                                        innerHTML += ` <div class="img_cont"><img src="../public/profile_image/icon.jpg" class="rounded-circle user_img"></div> `
                                                                                }
                                                                 innerHTML += ` <div class="user_info viewclick" data-view="${post_data[i].User.user_id}">${post_data[i].User.user_firstname} ${post_data[i].User.user_lastname}<br/>
                                                                                        <small><i class="far fa-clock"></i> 2 hrs ago</small><br/>
                                                                                        <small><a href="http://maps.google.com/?q=${post_data[i].event_latitude},${post_data[i].event_logitude}"><i class="fas fa-map-marker-alt"></i> Map</a></small>
                                                                                        <small style="padding-left:10px" id="show_location"></small>
                                                                                </div> 
                                                                        </div>
                                                                </div>
                                                                        <div class="col-2" style="padding-left:20px;padding-top:20px">
                                                                                <i style="font-size:24px" class="fa">&#xf0c9;</i>
                                                                        </div>
                                                        </div>
                                                        <div class="row">
                                                                        <div class="container">`;
                                                                                if(post_data[i].event_start_date > onlyDate)
                                                                                {
                                                                         innerHTML += ` <span class="events_status" style="margin-left:20px;background: #FDD835"></span>
                                                                                        <span>Up-coming Event</span>`;
                                                                                }
                                                                                else if(post_data[i].event_start_date < onlyDate)
                                                                                {
                                                                        innerHTML += ` <span class="events_status" style="margin-left:20px;background: #D50000"></span>
                                                                                       <span>In-active Event</span>`;
                                                                                }
                                                                                else
                                                                                {
                                                                        innerHTML += ` <span class="events_status" style="margin-left:20px;background:#4cd137"></span>
                                                                                       <span>Active Event</span>`;
                                                                                }
                                                          innerHTML += `        <div class="title">
                                                                                      <h5><span style="padding-left:20px" id="show_title">${post_data[i].event_message}</span></h5>
                                                                                </div>
                                                                        </div>
                             
                                                                <div class="container" style="margin-left:20px;margin-right:20px;margin-top:5px">
                               
                                                                        <p>${post_data[i].event_description}<span id="dots">...</span><span id="more" style="display: none;">${post_data[i].event_read_more_option}</span>
                                                                        <span data-btn_hide_show="${post_data[i].event_id}" class="hide_show" id="myBtn" style="cursor: pointer;color:cornflowerblue">Read more</span>
                                                                        </p>
                                                                </div>
                                                        </div>

                                                        <ul class="nav">
                                                                <li>
                                                                        <a href="/post/${post_data[i].event_id}">
                                                                        <img src="../public/image/${post_data[i].e_imagepath}" alt="error check >" class="img-fluid">
                                                                        </a>
                                                                
                                                                </li>
                                                        </ul>`;
                                        
                                        innerHTML += `<div class="container">
                                                                <div class="row">
                                                                        <div class="col-md-6 like" style="padding-top:10px" data-post="${post_data[i].event_id}">
                                                                                <a href=""><i class="fas fa-thumbs-up"></i></a>
                                       
                                                                                <span class="countLikes" id="countLikes${post_data[i].event_id}" style="cursor: pointer;"> ${post_data[i].Likes.length} Like</span>
                                
                                                                        </div>`;

                                                  innerHTML += `        <div class="col-md-4 post_comment" id="${post_data[i].event_id}" style="padding-top:10px">
                                                                                <i class="fas fa-comments" style="cursor: pointer;"></i>
                                                                                <span class="countComments" style="cursor: pointer;"> ${post_data[i].Comments.length} comments</span>
                                                                        
                                                                        </div>

                                                                        <div class="col-md-2" style="padding-top:10px">
                                                                                        <i class="fas fa-share"></i>
                                                                                        <span>share</span>
                                                                        
                                                                        </div>

                                                                </div>
                                                        </div>

                                                        
                                                        
                                                        <hr>

                                                        <div class="container">
                                                                <div class="row">`;
                                                                        
                                                                        if(response.user_data.user_profile_pic)
                                                                        {
                                                                                innerHTML += `<div class="col-md-2" style="padding-top:10px">
                                                                                                <a href=""><img class="rounded-circle" src="../public/profile_image/${response.user_data.user_profile_pic}" alt="error" class="rounded-circle border border-danger" style="width:40px; height:40px"></a>
                                                                                              </div>`
                                                                        }
                                                                        else 
                                                                        { 
                                                                                innerHTML += `<div class="col-md-2" style="padding-top:10px">
                                                                                                <a href=""><img class="rounded-circle" src="../public/profile_image/icon.jpg" alt="error" class="rounded-circle border border-danger" style="width:40px; height:40px"></a>
                                                                                              </div>`
                                                                        }
                                                                        
                                                                        innerHTML += `  <div class="col-md-7">
                                                                                                <div class="form-group" id="comment_form${post_data[i].event_id}">
                                                                                                        <input class="form-control" name="comment" type="text" placeholder="Your comments" id="comment${post_data[i].event_id}"/>
                                                                                                </div>
                                                                                        </div>

                                                                                        <div class="col-md-3" style="padding-top:10px">
                                                                                                <button type="button" data-po="${post_data[i].event_id}" name="submit_comment" class="btn btn-default submit_comment">comment</button>
                                                                                        </div>
                                                                </div>
                                                                

                                                                <div class="container" id="old_comment${post_data[i].event_id}">
                                                                        

                                                                </div>
                                                                        
                                                                        
                                                                
                                                
                                                        </div>
                                                </div>`;
                                                
                                        }
                                        $view_feeds_by.innerHTML = innerHTML;
                                  
                                
                               
                               
                                }
                                else{
                                        alert("no events available");
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

        // this section of code includes other part of sorting with options like upcoming,active and past events
        var selected_option = "current_location"; // initlizing the default variable, incase if user deos not select option and by default it'll show events based on current location with other options
        // when user selects the option from select list then it assigns the select option to "selected_option"
        $("select.view_events_with_options").change(function()
        {
                selected_option = $(this).children("option:selected").val();
        })

        // this will get all requerid data from the location like country,ciyt,state,area and current location with other options like upcoming,active and past events
        $(document).on('click','.events_options',function()
        {
                //alert("click event options");
                var action_option = $(this).data('clicked-option');

                if (!navigator.geolocation) 
                {
                        console.log("Geolocation is not supported by your browser");
                } 
                else 
                {
                        
                        var common_name = "NA";
                        var status_got_data = false;
                        var flag_status_in = false;
                        navigator.geolocation.getCurrentPosition(function(position)
                        {
                                const latitude  = position.coords.latitude;
                                const longitude = position.coords.longitude;
                                var latlng = new google.maps.LatLng(latitude, longitude);
                                var geocoder = geocoder = new google.maps.Geocoder();
                                geocoder.geocode({ 'latLng': latlng }, function (results, status) 
                                {
                                       
                                        const address = results[1].address_components;
                                        console.log(address)
                                        if( selected_option == "area")
                                        {
                                                for( i = 0; i < address.length; i++)
                                                {
                                                        var arraydata = address[i].types; 

                                                        for(key in arraydata)
                                                        {     
                                                              //  alert(JSON.stringify(arraydata[key]));
                                                                if( (arraydata[key] == "sublocality_level_2") || (arraydata[key] == "sublocality_level_1") ) // area
                                                                {
                                                                        
                                                                       common_name = address[i].long_name; 
                                                                       flag_status_in = true;
                                                                        alert(common_name);
                                                                }
                                                                if(flag_status_in == true)
                                                                {
                                                                        status_got_data = true;
                                                                        flag_status_in = false;
                                                                        break;
                                                                }
                                                        }
                                                        if(status_got_data == true)
                                                        {
                                                                break;
                                                        }
                                                        
                                                }
                                                if(status_got_data == true)
                                                {
                                                        status_got_data = false;
                                                        events_options(latitude,longitude,common_name,selected_option,action_option)  // call function ajax for backend here;

                                                }
                                        }
                                        else if(selected_option == "city")
                                        {
                                                for( i = 0; i < address.length; i++)
                                                {
                                                        var arraydata = address[i].types; 

                                                        for(key in arraydata)
                                                        {     
                                                              //  alert(JSON.stringify(arraydata[key]));
                                                                if(arraydata[key] == "administrative_area_level_2") // city
                                                                {
                                                                        
                                                                       common_name = address[i].long_name; 
                                                                       flag_status_in = true;
                                                                        alert(common_name);
                                                                }
                                                                if(flag_status_in == true)
                                                                {
                                                                        status_got_data = true;
                                                                        flag_status_in = false;
                                                                        break;
                                                                }
                                                        }
                                                        if(status_got_data == true)
                                                        {
                                                                break;
                                                        }
                                                        
                                                }
                                                if(status_got_data == true)
                                                {
                                                        status_got_data = false;
                                                        events_options(latitude,longitude,common_name,selected_option,action_option)  // call function ajax for backend here;

                                                }
                                        }
                                        else if(selected_option == "state")
                                        {
                                                for( i = 0; i < address.length; i++)
                                                {
                                                        var arraydata = address[i].types; 

                                                        for(key in arraydata)
                                                        {     
                                                              //  alert(JSON.stringify(arraydata[key]));
                                                                if(arraydata[key] == "administrative_area_level_1") // state
                                                                {
                                                                        
                                                                       common_name = address[i].long_name; 
                                                                       flag_status_in = true;
                                                                        alert(common_name);
                                                                }
                                                                if(flag_status_in == true)
                                                                {
                                                                        status_got_data = true;
                                                                        flag_status_in = false;
                                                                        break;
                                                                }
                                                        }
                                                        if(status_got_data == true)
                                                        {
                                                                break;
                                                        }
                                                        
                                                }
                                                if(status_got_data == true)
                                                {
                                                        status_got_data = false;
                                                        events_options(latitude,longitude,common_name,selected_option,action_option)  // call function ajax for backend here;

                                                }
                                        }
                                        else if(selected_option == "country")
                                        {
                                                for( i = 0; i < address.length; i++)
                                                {
                                                        var arraydata = address[i].types; 

                                                        for(key in arraydata)
                                                        {     
                                                              //  alert(JSON.stringify(arraydata[key]));
                                                                if(arraydata[key] == "country") // country
                                                                {
                                                                        
                                                                       common_name = address[i].long_name; 
                                                                       flag_status_in = true;
                                                                        alert(common_name);
                                                                }
                                                                if(flag_status_in == true)
                                                                {
                                                                        status_got_data = true;
                                                                        flag_status_in = false;
                                                                        break;
                                                                }
                                                        }
                                                        if(status_got_data == true)
                                                        {
                                                                break;
                                                        }
                                                        
                                                }
                                                if(status_got_data == true)
                                                {
                                                        status_got_data = false;
                                                        events_options(latitude,longitude,common_name,selected_option,action_option)  // call function ajax for backend here;

                                                }

                                                
                                        }
                                        else
                                        { // selected_option == "current_location"
                                                alert("current location")
                                                events_options(latitude,longitude,common_name,selected_option,action_option)  // call function ajax for backend here;
                                        }


             
                                       
                                });



                        });
                }
                
        });

        // this is called after above function gets called, basically this is the UI part of events which displays all the events based on user search
        function events_options(latitude,longitude,common_name,selected_option,action_option)
        {
                alert(selected_option);
                $.ajax({
                        url:"/posts/events_options",
                        method: "POST",
                        data:{latitude:latitude,longitude:longitude,common_name:common_name,selected_option:selected_option,action_option:action_option},

                        success:function(response)
                        {
                                if(response.feeds_data !='')
                                {
                                        var onlyDate = new Date();
                                        onlyDate = onlyDate.toISOString().slice(0,10)
                                        var $view_feeds_by= document.getElementById("view_feeds_by");
                                        //$view_feeds_by.innerHTML = "";
                                        let innerHTML = ''

                                        const  post_data = response.feeds_data;
                                        for(var i=0, len = post_data.length; i < len; i++)
                                        {
                                                // alert(post_data[i].event_message);
                                                // alert(post_data[i].Likes.length);
                                                // alert(post_data[i].Comments.length);
                                                // alert(post_data[i].User.user_firstname);
                                                // alert("user data")
                                                // alert(response.user_data.user_email);
                                                
                                   innerHTML += `<div class="card mb-3">
                                                        <div class="row">
                                                                <div class="col-10" style="padding-left:50px;padding-top:20px">
                                                                        <div class="d-flex bd-highlight">`;
                                                                                if (post_data[i].User.user_profile_pic) 
                                                                                {
                                                                                        innerHTML += ` <div class="img_cont"> 
                                                                                        <img src="../public/profile_image/${post_data[i].User.user_profile_pic}" class="rounded-circle user_img"> 
                                                                                        </div> `
                                                                                } 
                                                                                else 
                                                                                {
                                                                                        innerHTML += ` <div class="img_cont"><img src="../public/profile_image/icon.jpg" class="rounded-circle user_img"></div> `
                                                                                }
                                                                 innerHTML += ` <div class="user_info viewclick" data-view="${post_data[i].User.user_id}">${post_data[i].User.user_firstname} ${post_data[i].User.user_lastname}<br/>
                                                                                        <small><i class="far fa-clock"></i> 2 hrs ago</small><br/>
                                                                                        <small><a href="http://maps.google.com/?q=${post_data[i].event_latitude},${post_data[i].event_logitude}"><i class="fas fa-map-marker-alt"></i> Map</a></small>
                                                                                        <small style="padding-left:10px" id="show_location"></small>
                                                                                </div> 
                                                                        </div>
                                                                </div>
                                                                        <div class="col-2" style="padding-left:20px;padding-top:20px">
                                                                                <i style="font-size:24px" class="fa">&#xf0c9;</i>
                                                                        </div>
                                                        </div>
                                                        <div class="row">
                                                                        <div class="container">`;
                                                                                if(post_data[i].event_start_date > onlyDate)
                                                                                {
                                                                         innerHTML += ` <span class="events_status" style="margin-left:20px;background: #FDD835"></span>
                                                                                        <span>Up-coming Event</span>`;
                                                                                }
                                                                                else if(post_data[i].event_start_date < onlyDate)
                                                                                {
                                                                        innerHTML += ` <span class="events_status" style="margin-left:20px;background: #D50000"></span>
                                                                                       <span>In-active Event</span>`;
                                                                                }
                                                                                else
                                                                                {
                                                                        innerHTML += ` <span class="events_status" style="margin-left:20px;background:#4cd137"></span>
                                                                                       <span>Active Event</span>`;
                                                                                }
                                                          innerHTML += `        <div class="title">
                                                                                      <h5><span style="padding-left:20px" id="show_title">${post_data[i].event_message}</span></h5>
                                                                                </div>
                                                                        </div>
                                                                
                             
                                                                <div class="container" style="margin-left:20px;margin-right:20px;margin-top:5px">
                               
                                                                        <p>${post_data[i].event_description}<span id="dots">...</span><span id="more" style="display: none;">${post_data[i].event_read_more_option}</span>
                                                                        <span data-btn_hide_show="${post_data[i].event_id}" class="hide_show" id="myBtn" style="cursor: pointer;color:cornflowerblue">Read more</span>
                                                                        </p>
                                                                </div>
                                                        </div>

                                                        <ul class="nav">
                                                                <li>
                                                                        <a href="/post/${post_data[i].event_id}">
                                                                        <img src="../public/image/${post_data[i].e_imagepath}" alt="error check >" class="img-fluid">
                                                                        </a>
                                                                
                                                                </li>
                                                        </ul>`;
                                        
                                        innerHTML += `<div class="container">
                                                                <div class="row">
                                                                        <div class="col-md-6 like" style="padding-top:10px" data-post="${post_data[i].event_id}">
                                                                                <a href=""><i class="fas fa-thumbs-up"></i></a>
                                       
                                                                                <span class="countLikes" id="countLikes${post_data[i].event_id}" style="cursor: pointer;"> ${post_data[i].Likes.length} Like</span>
                                
                                                                        </div>`;

                                                  innerHTML += `        <div class="col-md-4 post_comment" id="${post_data[i].event_id}" style="padding-top:10px">
                                                                                <i class="fas fa-comments" style="cursor: pointer;"></i>
                                                                                <span class="countComments" style="cursor: pointer;"> ${post_data[i].Comments.length} comments</span>
                                                                        
                                                                        </div>

                                                                        <div class="col-md-2" style="padding-top:10px">
                                                                                        <i class="fas fa-share"></i>
                                                                                        <span>share</span>
                                                                        
                                                                        </div>

                                                                </div>
                                                        </div>

                                                        
                                                        
                                                        <hr>

                                                        <div class="container">
                                                                <div class="row">`;
                                                                        
                                                                        if(response.user_data.user_profile_pic)
                                                                        {
                                                                                innerHTML += `<div class="col-md-2" style="padding-top:10px">
                                                                                                <a href=""><img class="rounded-circle" src="../public/profile_image/${response.user_data.user_profile_pic}" alt="error" class="rounded-circle border border-danger" style="width:40px; height:40px"></a>
                                                                                              </div>`
                                                                        }
                                                                        else 
                                                                        { 
                                                                                innerHTML += `<div class="col-md-2" style="padding-top:10px">
                                                                                                <a href=""><img class="rounded-circle" src="../public/profile_image/icon.jpg" alt="error" class="rounded-circle border border-danger" style="width:40px; height:40px"></a>
                                                                                              </div>`
                                                                        }
                                                                        
                                                                        innerHTML += `  <div class="col-md-7">
                                                                                                <div class="form-group" id="comment_form${post_data[i].event_id}">
                                                                                                        <input class="form-control" name="comment" type="text" placeholder="Your comments" id="comment${post_data[i].event_id}"/>
                                                                                                </div>
                                                                                        </div>

                                                                                        <div class="col-md-3" style="padding-top:10px">
                                                                                                <button type="button" data-po="${post_data[i].event_id}" name="submit_comment" class="btn btn-default submit_comment">comment</button>
                                                                                        </div>
                                                                </div>
                                                                

                                                                <div class="container" id="old_comment${post_data[i].event_id}">
                                                                        

                                                                </div>
                                                                        
                                                                        
                                                                
                                                
                                                        </div>
                                                </div>`;
                                                
                                        }
                                        $view_feeds_by.innerHTML = innerHTML;
                                  
                                
                               
                               
                                }
                                else
                                {
                                        alert("no events available");
                                }
                                console.log(response);
                               //alert(JSON.stringify(response));
                        },
                        error:function(jqXHR, textStatus, errorThrown)
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
        }   
        
        
        /****************************************************** Navbar.ejs Ajax, Jquery Call ********************************************************/

        /****************************************************** It includes all navbar files ********************************************************/

        // this will be called after every 1 second and call the following function
        var user_id_from_db = user_id;
        
        setInterval(function()
        {
          update_chat_history_data();
          online_user_list();
          count_unseen_message();
        }, 1000);

        // no use of user_id_from_db
        function count_unseen_message()
        {
                var $get_notified_when_message_comes = $('.get_notified_when_message_comes');
                $.ajax({
                url: "/posts/count_unseen_message",
                method: "GET",
                success:function(response)
                {
                        if(response !="")
                        {
                                $get_notified_when_message_comes.html('<small>'+response.length+'</small>');
                        }
                        else{
                                // if no message in notification then do not alert user
                                // do nothing
                                // alert(JSON.stringify(response))
                                // alert("some error in count_unseen_message");
                        }
                        
                        
                },

                }) 
        }

        // no use of user_id_from_db
        // dialog box (this is the chat box UI, through which user can interact with other users)
        function make_chat_dialog_box(to_user_id, to_user_name,user_profile_pic)
        {
        //var modal_content = '<div><img src="'+user_profile_pic+' height="40" width="40" class="img-thumbnail" /></div>';
        var modal_content = '<div id="user_dialog_'+to_user_id+'"  class="user_dialog roundbox boxshadow"  title="'+to_user_name+'">';
        modal_content += '<div style="background-color:#F5F5F5;height:300px; overflow-y: scroll; margin-bottom:20px;" class="chat_history" data-touserid="'+to_user_id+'" id="chat_history_'+to_user_id+'">';
        modal_content += get_user_chat_history(to_user_id);
        modal_content += '</div>';
        modal_content += '<div class="row">';
        modal_content += '<div class="col-8"> <input type="tex" name="chat_message_'+to_user_id+'" id="chat_message_'+to_user_id+'" class="form-control"/></div>';
        modal_content += '<div class="col">';
        modal_content+= '<button type="button" name="send_chat" id="'+to_user_id+'" class="btn btn-info rounded mycustombtn send_chat">Send</button></div></div></div></div>';
        $('#user_model_details').html(modal_content);
        }

        // this function will get chat histriy from database and will display on chat UI
        // get chat history to display
        function get_user_chat_history(to_user_id)
        {
                $.ajax({
                url: "/posts/get_user_chat_history",
                method: "POST",
                data: {to_user_id:to_user_id},
                success:function(response)
                {
                        var $chat_history= document.getElementById("chat_history_"+to_user_id);
                        $chat_history.innerHTML = "";

                        if(response !="")
                        {
                                
                                response.forEach(function(item, index)
                                { 
                                
                                var time = new Date(item.createdAt);
                                var showtime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) 
                                
                                // note :  var user_id_from_db = user_id; changed from user_id_from_db to user_id
                                if(user_id == item.user_id) // if you
                                {
                                
                                        $chat_history.innerHTML =  $chat_history.innerHTML + `<div class="card-body" style="margin:10px;margin-left:80px; background:#D5F5E3;height:60px;border-radius: 5px 20px 0px 15px;"><small>${item.message_content}</small><div align="right"><small><em>${showtime}</em></small></div></div>`;
                                }
                                else{ // else other
                                        $chat_history.innerHTML =  $chat_history.innerHTML + `<div class="card-body" style="margin:10px;margin-right:80px; background:#FBEEE6;height:60px;border-radius: 5px 5px 10px 0px;"><small>${item.message_content}</small><div align="right"><small><em>${showtime}</em></small></div></div>`;
                                
                                }
                                })
                        }
                        else{
                                // if you are chatting for the 1st time with the other user then there is no history data to be shwon in chat box UI
                                $chat_history.innerHTML =  $chat_history.innerHTML + `<div class="card-body" style="margin-top:10px; margin-left:50px; margin-right:50px; background:#EAECEE;height:30px;"><small>start converzation</small></div>`;
                                //alert("get_user_chat_history");
                                //alert(JSON.stringify(response));
                        }

                        

                        
                },

                })
        }

        // this function will update get_user_chat_history() function
        function update_chat_history_data()
        {

                $('.chat_history').each(function()
                {
                        var to_user_id = $(this).data('touserid');
                        get_user_chat_history(to_user_id);
                });
        }

        //
        // insert data into chat box
        $(document).on('click', '.send_chat', function()
        {
                var to_user_id = $(this).attr('id');
                var chat_message = $('#chat_message_'+to_user_id).val();
                //alert(chat_message);
                $.ajax(
                {
                url:"/posts/get_chat_message",
                method:"POST",
                data:{to_user_id:to_user_id, chat_message:chat_message},
                success:function(response)
                {
                        if(response !="")
                        {
                                $('#chat_message_'+to_user_id).val('');// clear chat box
                                var $chat_history= document.getElementById("chat_history_"+to_user_id);
                                $chat_history.innerHTML = "";
                                response.forEach(function(item, index)
                                { 
                                        var time = new Date(item.createdAt);
                                        var showtime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
                                        
                                        // note :  var user_id_from_db = user_id; changed from user_id_from_db to user_id
                                        if(user_id == item.user_id) // if you
                                        {
                                        
                                        $chat_history.innerHTML =  $chat_history.innerHTML + `<div class="card" style="margin-bottom:2px;margin-left:80px">  <div class="card-body" style="background:#D5F5E3;height:60px"><small>${item.message_content}</small><div align="right">- <small><em>${showtime}</em></small></div></div></div>`;
                                        }
                                        else{ // else other
                                        $chat_history.innerHTML =  $chat_history.innerHTML + `<div class="card" style="margin-bottom:2px;margin-right:80px">  <div class="card-body" style="background:#FBEEE6;height:60px"><small>${item.message_content}</small><div align="right">- <small><em>${showtime}</em></small></div></div></div>`;
                                        
                                        }
                                })
                        }
                        else{
                                alert("get_chat_message")
                        }
                        

                }
                })
        });

        // on click this will destroy the user chat UI
        $(document).on('click', '.ui-button-icon', function()
        {
                $('.user_dialog').dialog('destroy').remove();
        });

        // this function will display all online user list on right side bar
        function online_user_list()
        {
                $.ajax(
                {
                        url:"/posts/online_user_list",
                        method:"GET",
                        beforeSend: function(jqXHR) 
                        {
                               // alert("befor send");
                                //alert(JSON.stringify(jqXHR));  
                        },
                        success:function(response)
                        {     
                               
                                if(response !='')
                                {
                                  var $online_user_list= document.getElementById("online_user_list");
                                  $online_user_list.innerHTML = "";
                                  for (var i = 0, len = response.length; i < len; i++)
                                  {       
                                        for(var j = 0, len_Login_Details = response[i].Login_Details.length; j < len_Login_Details; j++)
                                        {
                                          var time = new Date(response[i].Login_Details[j].last_activity);
                                          var showtime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

                                          if(response[i].Login_Details[j].offline_online_status == "online")
                                          {
                                            $online_user_list.innerHTML = $online_user_list.innerHTML + `<div class="d-flex bd-highlight online_user" data-online_user_profile_pic="${response[i].user_profile_pic}" data-online_user_firstname="${response[i].user_firstname}" data-online_user_id="${response[i].user_id}"><div class="img_cont"><img src="../public/profile_image/${response[i].user_profile_pic}" class="rounded-circle user_img"><span class="online_icon"></span> </div><div class="user_info">${response[i].user_firstname} ${response[i].user_lastname}<br/><small>${response[i].Login_Details[j].offline_online_status}</small></div> </div>`;
                                          }
                                          else{
                                            $online_user_list.innerHTML = $online_user_list.innerHTML + `<div class="d-flex bd-highlight online_user" data-online_user_profile_pic="${response[i].user_profile_pic}" data-online_user_firstname="${response[i].user_firstname}" data-online_user_id="${response[i].user_id}"><div class="img_cont"><img src="../public/profile_image/${response[i].user_profile_pic}" class="rounded-circle user_img"><span class="online_icon offline"></span> </div><div class="user_info">${response[i].user_firstname} ${response[i].user_lastname}<br/><small>Last seen <small>${showtime}</small></small></div> </div>`;
                                          }
                                      
                                        }
                                  }
                                  
                                }
                                else{
                                        alert("online_user_list");
                                        alert(JSON.stringify(response));
                                        // do nothing
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

        //
        $(document).on('click','.online_user',function()
        {
          
                var to_user_id = $(this).data('online_user_id');
                var to_user_name = $(this).data('online_user_firstname');
                var user_profile_pic = $(this).data('online_user_profile_pic');
                var flag = false;


                $.ajax(
                {
                        url:"/posts/update_unseen_message",
                        method:"POST",
                        data :{to_user_id:to_user_id},
                        success:function(response)
                        {   
                          make_chat_dialog_box(to_user_id, to_user_name,user_profile_pic);
                          $("#user_dialog_"+to_user_id).dialog(
                              {
                                autoOpen:false,
                                width:350,
                                minHeight: 'auto',
                                dialogClass: "MyClass"
                                
                                
                                //fontsize:1em
                                
                              });
                              $('#user_dialog_'+to_user_id).dialog('open').prev().css({"color": "white",
                              "background-color": "#343a40",
                              "font-family": "sans-serif"
                            });  
                            flag = true;  
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

               if(flag != true)
               {
                make_chat_dialog_box(to_user_id, to_user_name,user_profile_pic);
                          $("#user_dialog_"+to_user_id).dialog(
                              {
                                autoOpen:false,
                                width:350,
                                minHeight: 'auto',
                                dialogClass: "MyClass"
                                
                                
                                //fontsize:1em
                                
                              });
                              $('#user_dialog_'+to_user_id).dialog('open').prev().css({"color": "white",
                              "background-color": "#343a40",
                              "font-family": "sans-serif"
                            }); 

                            flag = false;
               }

               
                
        })

        // when clicked on message notification on navbar, this function will show unseen message
        $(document).on('click','.message_notification',function()
        {

                var $message_notification = $('.message_notification');
                
                

                $.ajax(
                        {
                        url:"/posts/message_notify",
                        method:"GET",
                        success:function(response)
                        {
                        
                        
                        var $message_list= document.getElementById("message_list");
                        $message_list.innerHTML = '';
                        

                        for (var i = 0, len = response.length; i < len; i++)
                        {      

                                
                                for(var j = 0, len_Login_Details = response[i].Login_Details.length; j < len_Login_Details; j++)
                                {
                                
                                var time = new Date(response[i].Login_Details[j].last_activity);
                                var showtime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
                                if(response[i].Login_Details[j].offline_online_status == "online")
                                {
                        $message_list.innerHTML = $message_list.innerHTML + `<div class="card online_user data-online_user_profile_pic="${response[i].user_profile_pic}" data-online_user_firstname="${response[i].user_firstname}" data-online_user_id="${response[i].user_id}"><li class="list-group-item link-class" style="cursor: pointer;"><div class="d-flex bd-highlight"> <div class="img_cont"><img src="../public/profile_image/${response[i].user_profile_pic}" class="rounded-circle user_img"> <span class="online_icon"></span> </div><div class="user_info">${response[i].user_firstname} ${response[i].user_lastname}<br/><small style="color:#F44336"><strong>${response[i].MessageBoxes.length} message</strong></small><br/><small><strong>${response[i].Login_Details[j].offline_online_status}</strong></small></small></div></div> </li></div>`;
                
                                }
                                else{
                                
                $message_list.innerHTML = $message_list.innerHTML + `<div class="card online_user data-online_user_profile_pic="${response[i].user_profile_pic}" data-online_user_firstname="${response[i].user_firstname}" data-online_user_id="${response[i].user_id}" ><li class="list-group-item link-class" style="cursor: pointer;"> <div class="d-flex bd-highlight"> <div class="img_cont"><img src="../public/profile_image/${response[i].user_profile_pic}" class="rounded-circle user_img"><span class="online_icon offline"></span> </div><div class="user_info">${response[i].user_firstname} ${response[i].user_lastname}<br/><small style="color:#F44336"><strong>${response[i].MessageBoxes.length} message</strong></small><br/><small>Last seen <small>${showtime}</small></small></div> </div> </li></div>`;

                                }
                                                        
                                }
                        }
                        $('#message_list').slideToggle('slow');
                        
                                
                                

                        },
                        error:function(jqXHR, textStatus, errorThrown)
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
        });

        // when user search for the other users on search bar
        // Implementing User Search Option(API)
        $(document).ready(function()
        {
                $('#search').keyup(function()
                {
                //alert("inside search")
                $('#search_result').html('');
                var search_Field = $('#search').val();
                //alert(search_Field)
                var expression = new RegExp(search_Field,"i");
                //alert(expression)
                $.ajax(
                {
                url:"/posts/findUser",
                method:"GET",
                //data:{expression:expression},
                success:function(response)
                {
                        //alert(response)
                        var $search_result= document.getElementById("search_result");
                        $search_result.innerHTML = '';
                        $.each(response, function(key, value)
                        {
                                //alert(value.user_firstname)
                                if (value.user_firstname.search(expression) != -1 || value.user_email.search(expression) != -1)
                                {
                                $search_result.innerHTML =  $search_result.innerHTML + `<div class="card" ${value.user_id}><li class="list-group-item link-class"><img src="../public/profile_image/${value.user_profile_pic}" height="40" width="40" class="img-thumbnail" /> ${value.user_firstname+ ' ' +value.user_lastname}</li></div>`;
                                //$('#search_result').append('<div class="card" '+value.user_id+'><li class="list-group-item link-class"><img src="'+value.user_profile_pic+'" height="40" width="40" class="img-thumbnail" /> '+value.user_firstname+ ' ' +value.user_lastname+'</li></div>');
                                }
                        });
                        
                        $('#search_result').on('click', 'li', function() 
                        {
                                var click_text = $(this).text().split('|');
                                $('#search').val($.trim(click_text[0]));
                                $("#result").html('');
                        });

                        $('#process_search').on('click',function()
                        {
                                //alert("in process search")
                                var get_content = document.getElementById('search').value
                                // var trimStr = $.trim(myStr);
                                var content = $.trim(get_content)
                                //alert(content)
                                $.ajax(
                                {
                                        url:"/posts/processSearch",
                                        method:"POST", 
                                        data:{get_content:content},
                                        success:function(response)
                                        {
                                                //alert(response.user_id)
                                                window.location.assign('viewprofile/'+response.user_id);
                                        },
                                        error:function(jqXHR, textStatus, errorThrown)
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
                        })

                },
                error:function(jqXHR, textStatus, errorThrown)
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
                
                });
        });


         
        /****************************************************** profile.ejs Ajax, Jquery Call ********************************************************/

        /****************************************************** It includes all profile.ejs files ********************************************************/



})