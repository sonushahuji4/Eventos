



<!-- <%- include('partials/includes/header') %>
<%- include('partials/includes/navbar') %>


<br /> <br />

<div class="container"> -->
    
            


<!-- row 2-->
<!-- 
<div class="row"> -->

<!-- row 2 col I-->
<!-- <div class="col-3"> -->

        <!-- user data starts from here basic data-->
        <!-- <%if(items.length>0) {%>     if condition starts -->
<!-- 
                <div class="card-body rounded text-center" style="background:#ffffff; margin-top:30px;">
                <% items.forEach(function(item, index) {%>        for loop starts -->
                        
                        <!-- <% if(item.user_profile_pic){ %>
                         
                        <img id="profile_image" class="card-img rounded-circle " src="../public/profile_image/<%= item.user_profile_pic %>" alt="Card image" style="width:100px; height:100px">
                               
                        <span id = "status"></span>
                                              
                        <% } else { %>
                                <img id="profile_image" src="../public/profile_image/icon.jpg" alt="profile image 1" class="img-fluid rounded" style="width:100px; height:100px">
                        <% } %>
                        
                        <h6><%= item.user_firstname %> <%= item.user_lastname %></h6>
                        <b>Bio : </b><span class="bio" id="user_bio">Love you dear Zindgi</span> -->

                <!-- <%})%>  for loop ends -->
                <!-- </div> -->
<!--                 
        <%} else{%>     else condition starts -->
<!--         
                <span>No records available</span> -->
        <!-- <%}%>   ends condition ends -->
        <!-- <div class="row"style="margin-left:1px; margin-top:20px">
                        <div class="card text-center" style="padding:10px">
                                        <div class="card-title bg-transparent">Followers 10K</div>
                        </div>
                        <div class="card text-center" style="padding:10px;margin-left:3px">
                                        <div class="card-title bg-transparent">Following 110K</div>   
                        </div>
                       
                </div>      
         -->
                
                
<!-- another post about user starts from here-->

<!-- <div class="card-body show-data" style="background:#ffffff;margin-top:20px">
                <div class="row" style="margin-left:170px">     
                
                <i class="far fa-address-book" data-toggle="tooltip" data-placement="top" title="Connect With me"></i>
                </div> -->
<!--                 
                <%if(items.length>0) {%>     if condition starts -->
<!--                         
                        <% items.forEach(function(item, index) {%>        for loop starts -->
                                <!-- <div class="form-inline">
                                        <i class="fas fa-mobile-alt" style="margin-right:10px"></i>
                                        <label class="col-form-label font-weight-normal"><%= item.user_mobile_no %></label>
                                </div>

                                <div class="form-inline">
                                        <i class="fas fa-envelope" style="margin-right:10px"></i>
                                        <label class="col-form-label font-weight-normal"><%= item.user_email %></label>
                                </div>

                                <div class="form-inline">
                                        <i class="fas fa-link" style="margin-right:10px"></i>
                                        <label class="col-form-label font-weight-normal" id="use_dob">www.facebook.com</label>
                                </div>

                                <div class="form-inline">
                                        <i class="fas fa-map-marker-alt" style="margin-right:10px"></i>
                                        <label class="col-form-label font-weight-normal" id="user_profession">India,Mumbai</label>
                                </div> -->
                                                      
                                
<!--         
                        <%})%>  for loop ends -->
                        
<!--                         
        
                <%} else{%>     else condition starts -->
<!--                 
                        <span>No records available</span>
                <%}%>   ends condition ends	                         -->
<!-- </div> -->
<!--                 
                <div class="card-body" style="background:#ffffff;margin-top:20px">
                                
                                <% if(items.length > 0){%>
                                       <% items.forEach(function(item,index){%>
                                        <div class="row" style="margin-left:170px">     
                                                        <i class="far fa-address-card" data-toggle="tooltip" data-placement="top" title="About Me"></i>
                                                       

                                        </div> 
                                        
                                     

                                        <div class="hide-about-me">
                                                <div class="form-inline">
                                                <i class="fas fa-user-tie" style="margin-right:10px"></i>
                                                <label class="col-form-label font-weight-normal" id="user_full_name"><%= item.user_firstname %> <%= item.user_lastname %></label>
                                                
                                                </div>

                                                <div class="form-inline">
                                                <i class="fas fa-venus-mars" style="margin-right:10px"></i>
                                                <label class="col-form-label font-weight-normal" id="user_gender"><%= item.user_gender %></label>
                                                </div>

                                                <div class="form-inline">
                                                <i class="fas fa-birthday-cake" style="margin-right:10px"></i>
                                                <label class="col-form-label font-weight-normal" id="use_dob"><%= item.user_dob %></label>
                                                </div>

                                                <div class="form-inline">
                                                <i class="fas fa-briefcase" style="margin-right:10px"></i>
                                                <label class="col-form-label font-weight-normal" id="user_profession">Student</label>
                                                </div>

                                                
                                        </div>
                                        

                                        <%})%>

                                <%}else{%>
                                        <span>No records are available</span>
                                <%}%>		
                                
                       
                	                        
                </div> -->
                <!-- about me ends here-->

               
        
                

<!-- </div>row 2 col I ends -->

<!-- row 2-->
<!-- <div class="col-6"> -->


    <!-- for heading display-->
        
                <!-- <div class="card" style="background:#ffffff;margin-top:15px;margin-left: -15px; width:570px">
                   <div class="card-body">
                        <ul class="nav">
                                <li class="nav-item">
                                <a class="nav-link active" href="#">Upcoming 100</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link disabled" href="#">Active 16</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link disabled" href="#">Past 45</a>
                                </li>
                            </ul>
                   </div>
                </div>
          -->

    
<!--                 
        <div class="row"> for events display -->
                <!-- <% if(items.length > 0){%>
                       
                        <% for (var i = 0, len = items.length; i < len; i++) {%>  
                               <% var post_data = items[i].Posts; %> 
                        
                               <% for (var j = 0, len_1 = post_data.length; j < len_1; j++) {%> 
                                
                                <div class="card mb-3">
                                        <div class="card-header">
                                                <% if(items[i].user_profile_pic){ %>
                                                        <a href=""><img src="../public/profile_image/<%= items[i].user_profile_pic %>" alt="" class="rounded-circle border border-danger" style="width:50px; height:50px"></a>
                                                    
                                                <% } else { %>
                                                    <img src="../public/profile_image/icon.jpg" alt="profile image 1" class="rounded-circle border border-danger" style="width:50px; height:50px">
                                              <% } %>

                                              <span class="ml-2" style="color:rgba(0,0,0,0.5)"><%= items[i].user_firstname%> <%= items[i].user_lastname%></span>
                                        </div>
                                        
                                        <div class="card-body">
                                            <ul class="nav">
                                                    <li>
                                                            <a href="/post/<%= post_data[j].event_id %>">
                                                                <img src="../public/image/<%=post_data[j].e_imagepath %>" alt="error check >" class="img-fluid">
                                                            </a>
                                                      
                                                    </li>
                                            </ul>          
                                        </div>
                                        <div class="card-footer">
                                                <% if(items[i].event_id != -1){ %>
                                                        <button class="like bg-btn fa fa-thumbs-up" data-post="<%= post_data[j].event_id %>"></button>
                                                <% }
                                                else{ %>
                                                        <button class="like bg-btn fa fa-thumbs-up" style="color:#0275d8;" data-post="<%= post_data[j].event_id %>"></button>
                                                <% } %>
                                                       <span class="countLikes"><%= post_data[j].Likes.length %></span>
                                                
                                                 |
                                                <i class="far fa-comments"></i>
                                        
                                                <i class="fas fa-stopwatch"></i>
                                                Remind |

                                                <i class="fas fa-map-marker-alt"></i>
                                                Interested |
                                                <i class="far fa-meh"></i>
                                                Going |
                                        </div>
                                </div>


                                
                                <%}%>
                               
                                                        
                                              
                         <%}%>
                      
                    
                    <%}else{%>
                         <span>No records are available</span>
                <%}%>
        </div>  for events display ends -->

<!--     
</div>row 2ends -->
<!-- 
<div class="col-3">
                <div class="card-body" style="background:#ffffff;margin-top:30px">
                                <div class="card about-user">
                                         <div class="card-body">
                                          <div class="card-block">
                                               <h4 class="card-title info">About</h4>
                                               <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                   <div class="text-left">
                                    <p class="card-text"><strong>Full Name :</strong> <span class="m-l-15">Amanda Taylor</span></p>
                                    <p class="card-text"><strong>Mobile :</strong><span class="m-l-15">(+12) 334 5555 723</span></p>
                                    <p class="card-text"><strong>Website :</strong> <span class="m-l-15">www.themashabrand.com</span></p>
                                    <p class="card-text"><strong>Location :</strong> <span class="m-l-15">USA</span></p>
                                   </div>			
                                          </div>
                                         </div>
                                    </div>	                        
                </div>

</div>


</div> 

</div> -->

<!-- <script>    

$(document).ready(function() 
{
        // change profile image
        $("#form_data").submit(function(e)
        {	 
                e.preventDefault();
                var formData = new FormData($(this)[0]);
                
                $.ajax({
                url: '/profile/image/' + $(this).attr('data-user_id'),
                type: "POST",
                data: formData,
                processData: false,
                contentType: false,
                success: function (response) 
                {
                        if(response.length > 0)
                        {
                                for(var i= 0; i< response.length; i++)
                                {
                                        var imagepath = response[i].user_profile_pic
                                        $('#profile_image').attr('src', "../public/profile_image/"+imagepath);
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
                return false;
        });



});

        //updating user data .....
        var $hide_about_me = $('.hide-about-me') 
        var $save_user_data_btn = $('.save-user-data-btn'); 
        var $show_data = $('.collapse');              
        $('.about-me').on('click', function(events)
        {
                $hide_about_me.hide(400);
                //alert($("#user_full_name").html())
                $('input.fullname').val($("#user_full_name").html());
                $('input.profession').val($("#user_profession").html());
                $('.cancel-edit-btn').on('click', function(events)
                {
                        $hide_about_me.show(400);
                })
                $save_user_data_btn.on('click',function(events)
                {
                        var user_id = $(this).attr('data-user_id')
                        //alert(user_id);
                        var fullname = $('input.fullname').val()
                        var data = {
                                        name: fullname
                        }
                        //alert(fullname)
                        $.ajax(
                                {
                                       type: 'PUT',
                                       url: '/profile/updatauserdata/' + $(this).attr('data-user_id'),
                                       contentType: "application/json",
                                       data: JSON.stringify(data),
                                       success: function(user)
                                       {
                                       
                                         user.forEach(function(item, index)
                                        {
                                                //alert(item.user_lastname)
                                                $show_data.html(item.user_lastname)
                                        })
                                            
                                               
                                               
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
                                }
                        )
                }) 
                

       })
                       
</script>  -->
