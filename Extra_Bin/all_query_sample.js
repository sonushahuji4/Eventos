router.get('/posts', function(req, res)
{
    const user_id = req.session.user_id;
    console.log("user_id check =>>",user_id)
    //{include:[{ model: Likes},{ model: Comments},{ model: Users}]}
    Posts.findAndCountAll({include:[{ model: Likes},{ model: Comments},{ model: Users}]})
    .then((postdata)=>
    {
        //res.json(postdata.rows)  
        Users.findAll({where:{user_id:user_id}})
        .then((userdata)=>
        {
            //res.send(postdata.rows)
            res.render('home',{title:'home',items:postdata.rows,user:userdata});
        }) 
        .catch((err)=>
        {
            console.error(err)
            res.status(501)
            .send({
                    error : "error..... check console log"
                  })    
        })
        
    })
    .catch((err)=>
    {
        console.error(err)
        res.status(501)
        .send({
                error : "error..... check console log"
              })
    })
    
	
});find user_id
whoever I follow, I must see their posts



suggestion_for_user.innerHTML =  suggestion_for_user.innerHTML + 
`<div class="card col-lg-4" data-user_id="${user_id}">
        
        <img src="../public/profile_image/"${image} alt="" class="rounded-circle border border-danger" style="width:60px; height:60px"/>
        <p style="font-size:10px;"><strong>${fullname}</strong></p>
        <button data-action="follow" data-sender_id="${user_id}" class="btn-post mr-2 btn btn-dark followbtn" style="font-size:6px;" type="button">Follow</button>
        <button class="btn-post mr-2 btn btn-success" style="font-size:6px;" type="button">message</button>
        
        <a href="#"> <div id="viewprofile${user_id}" class="card-footer bg-transparent">View Profile</div></a>
</div>`;






<script>  
$(document).ready(function()
{

    var post_id;
    var user_id;

    $(document).on('click', '.post_comment', function(){
        post_id = $(this).attr('id');
        user_id = $(this).data('user_id');
        var action = 'fetch_comment';
        $.ajax({
            url:"action.php",
            method:"POST",
            data:{post_id:post_id, user_id:user_id, action:action},
            success:function(data){
                $('#old_comment'+post_id).html(data);
                $('#comment_form'+post_id).slideToggle('slow');
            }
        })
        
    });

    $(document).on('click', '.submit_comment', function(){
        var comment = $('#comment'+post_id).val();
        var action = 'submit_comment';
        var receiver_id = user_id;
        if(comment != '')
        {
            $.ajax({
                url:"action.php",
                method:"POST",
                data:{post_id:post_id,receiver_id:receiver_id,comment:comment,action:action},
                success:function(data)
                {
                    $('#comment_form'+post_id).slideUp('slow');
                    fetch_post();
                }
            })
        }
    });

   

    
    

   
 
});  
</script>













































// submit comment to server
         $(document).on('click', '.submit_comment', function()
        {

                
                var comment = $('#comment'+post_id).val();
                alert(comment)
                var action = 'submit_comment';
                        
                        $.ajax({
                                url:"/posts/add_comment",
                                method:"POST",
                                data:{post_id:post_id,comment:comment,action:action},
                                success:function(data)
                                {
                                        if(data == "success")
                                        {
                                                // document.getElementsByClassName('submit_comment').off('click')
                                                document.getElementById("comment"+post_id).value=""
                                                //$(this).off();
                                                $('#comment_form'+post_id).slideUp('slow');
                                        }
                                        
                                }
                        })

               
        });

////////////////////////////////////////////////////////////////

// on comment button clicked view all comments for particular post
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
                    response.forEach(function(item, index)
                    { 
                            var comment_data = item.comment
                            //old_comment.append(document.createTextNode(comment_data));
                            //$("#old_comment"+post_id).html(`<div class="jumbotron jumbotron-fluid"><p class="lead">${comment_data}</p></div>`);
                            old_comment.innerHTML =  old_comment.innerHTML + `<div class="jumbotron"><p class="lead">${comment_data}</p></div>`;
                            //document.getElementById("old_comment"+post_id).innerHTML=item.comment+document.getElementById("old_comment"+post_id).innerHTML;                              
                    })
                            // document.getElementById("demo").innerHTML += '<br>' + employee.name;
                            $('#comment_form'+post_id).slideToggle('slow');         
            }

        
        })
});
//////////////////////////////////////////////////

// like post section
$('.like').on('click', function(events)
{
        event.preventDefault();
        event.stopPropagation();
        
        var postId = $(this).attr('data-post');
        var postId = parseInt(postId,10)
        //var parent  = $(this)
        $.ajax(
                {
                        type: 'POST',
                        url:  '/posts/like/' + $(this).attr('data-post'),
                        contentType: "application/json", 
                        //data: JSON.stringify(data),
                        success : function(response)
                        {
                                
                                if(response == false)
                                {
                                        alert("You have already liked this post")
                                }
                                else 
                                {
                                        //parent.html(response.count)
                                        $('#countLikes'+postId).html(response.count);
                                }
                                        
                               
                        },
                        error : function()
                        {
                                alert('error from server');
                        }
                }
        );
    })

    //////////////////////////////////////////////

















//////////////////////////// home.ejs for comments edition ///////////////////////////////////////////////


<!-- nav bar -->
<%- include('partials/includes/header') %>
<%- include('partials/includes/navbar') %>


<br /> <br /> <br /> <br />




<div class="container-fluid fixed-bottom bg-transparent" style="background-color:#F4F6F6">
        <div class="row" style="padding:10px">
         <ul class="list-group">
          <li style="padding-bottom:10px">
            <a href=""><img src="../public/image/Twitter_UI-18-512.png" alt="" class="rounded-circle border border-danger" style="width:50px; height:50px"></a>
            <a href=""><img src="../public/image/messageicon1.jpg" alt="" class="img-fluid rounded-circle border border-danger" style="width:50px; height:50px"></a>
            <a href=""><img src="../public/image/notificationicon.png" alt="" class="img-fluid rounded-circle border border-danger" style="width:50px; height:50px"></a>
          </li> 					   
         </ul>        
        </div>
       </div>
       
   
    <div class="container-fluid fixed" style="background-color:#F4F6F6">
     <div class="row" style="padding:10px">
      <ul class="list-group">
       <li style="padding-bottom:10px">
        
         <button class="rounded-circle border border-danger"  style="width:100px; height:100px">
          <i class="fa fa-plus"></i>
         </button>
         <a href=""><img src="../public/image/1.jpg" alt="" class="rounded-circle border border-danger" style="width:100px; height:100px"></a>
         <a href=""><img src="../public/image/3.jpg" alt="" class="img-fluid rounded-circle border border-danger" style="width:100px; height:100px"></a>
         <a href=""><img src="../public/image/4.jpg" alt="" class="img-fluid rounded-circle border border-danger" style="width:100px; height:100px"></a>
         <a href=""><img src="../public/image/5.jpg" alt="" class="img-fluid rounded-circle border border-danger" style="width:100px; height:100px"></a>
         <a href=""><img src="../public/image/6.jpg" alt="" class="img-fluid rounded-circle border border-danger" style="width:100px; height:100px"></a>
         <a href=""><img src="../public/image/7.jpg" alt="" class="img-fluid rounded-circle border border-danger" style="width:100px; height:100px"></a>
         <a href=""><img src="../public/image/8.jpg" alt="" class="img-fluid rounded-circle border border-danger" style="width:100px; height:100px"></a>
         <a href=""><img src="../public/image/9.jpg" alt="" class="img-fluid rounded-circle border border-danger" style="width:100px; height:100px"></a>
         <a href=""><img src="../public/image/10.jpg" alt="" class="img-fluid rounded-circle border border-danger" style="width:100px; height:100px"></a>
         <a href=""><img src="../public/image/11.jpg" alt="" class="img-fluid rounded-circle border border-danger" style="width:100px; height:100px"></a>
         <a href=""><img src="../public/image/1.jpg" alt="" class="img-fluid rounded-circle border border-danger" style="width:100px; height:100px"></a>
         <a href=""><img src="../public/image/4.jpg" alt="" class="img-fluid rounded-circle border border-danger" style="width:100px; height:100px"></a>
         <a href=""><img src="../public/image/5.jpg" alt="" class="img-fluid rounded-circle border border-danger" style="width:100px; height:100px"></a>
        
       </li> 					   
      </ul>
      
     
     </div>
    </div>

        


<div class="container" style="padding-top:40px"><!-- main container starts-->

    <div class="row"><!-- main row starts -->

      <!-- ................................ Left side bar ............................... -->
    <% if (user.length > 0)
    { %>
      <div class="col-md-2"> <!-- col-md-2 starts-->

            <!-- for loop starts here -->
            <% user.forEach(function(item,  index)
            {%>
        <div class="card mb-3">
                <div class="card-body">
                    <ul class="nav">
                            <li class="card-body">      

                                    <div class="row">
                                    <% if(item.user_profile_pic){ %>
                                            <img src="../public/profile_image/<%= item.user_profile_pic %>" alt="profile image" class="rounded-circle border border-danger" style="width:100px; height:100px">
                                    <% } else { %>
                                            <img src="../public/profile_image/icon.jpg" alt="profile image 1" class="rounded-circle border border-danger" style="width:100px; height:100px">
                                    <% } %>
                            
                                            <h6><%= item.user_firstname %> <%= item.user_lastname %></h6>
                                            <p>Love U Dear Zindgi</p>
                                    </div>                                                                           
                            </li>
                            <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Followers 100</li>
                                    <li class="list-group-item">Following 200</li>
                            </ul>
                    </ul>          
                </div>

        </div>  
          <!--/sidebar-nav-fixed -->

          <div class="card mb-3">
                <div class="card-body">
                        <ul class="nav list-group list-group-flush">
                            <li>      
                                <h6>Dashboard</h6>
                                <h6>New Group</h6>                    
                            </li>
                    </ul>          
                </div>

        </div>

        <div class="card mb-3">
                <div class="card-body">
                        <ul class="nav list-group list-group-flush">
                            <li> View More</li>
                    </ul>          
                </div>

        </div>
        <%}); %> <!-- for loop ends here -->
          <!-- you can add one more side bar here -->
          <!-------------------------------------------------------------------------------------------------->
        </div> <!-- col-md-2 ends-->
    <%}<!-- if ends here -->
    else
    {%> 
            <p> <strong>There are no recods available</strong></p>
    <%}%><!-- else ends here -->

      
        

        <!-- /////////////////////////////////////////////////////////////////////////////////////// -->
                                        <!-- adding main middle page -->
        <!-- /////////////////////////////////////////////////////////////////////////////////////// -->


        
        <div class="col-md-6">

                <div class="card">
                        <div class="card-body">
                                <% if (user.length > 0)
                                {%>
                                    <% user.forEach(function(item, index)
                                    { %>
                                            <% if (item.user_profile_pic)
                                            { %>
                                                    <a href=""><img src="../public/profile_image/<%= item.user_profile_pic %>" alt="" class="rounded-circle border border-danger" style="width:50px; height:50px"></a>
                                                    
                                            <%} else 
                                            {%>
                                                    <a href=""><img src="../public/image/1.jpg" alt="" class="rounded-circle border border-danger" style="width:50px; height:50px"></a>
                                            <%}%>
                                            <button class="btn btn-light" style="position: absolute;right:150px;" data-target="#createpost" data-toggle="modal">Create Post</button>
                                            <a href="#" class="btn btn-dark"style="position: absolute;right:0;">Create Video</a>

                                    <%})%>
                                    
                                <%} else{%>

                                <%}%>
                          
                        </div>
                </div>
                <!--  pop-up page for creating a event or post -->

                <div class="modal fade" id="createpost" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body">
                              <form action="http://localhost:4000/posts" method="post" enctype="multipart/form-data">
                                <div class="form-group">
                                        <textarea name="message" maxlength="120" class="form-control body" placeholder="message"></textarea>
                                  </div>
                                  
                                  <div class="form-group">
                                      <label for="upload" name="uploadPost">Upload Photo</label>
                                      <input type="file" name="feedsposts" class="upload" />
                                      <div class="progress">
                                          <div class="progress-bar" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                      </div>
                                  </div>
                                  
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                              <button type="submit" name="Share" class="btn btn-primary">Post</button>
                            </div>
                        </form>
                          </div>
                        </div>
                      </div>
                <!--  pop-up page for creating a event or post------END--- -->
            <hr> 
            
            <input class="form-control" type="text" placeholder="View Feeds By" aria-label="Search">
            <hr> 

            <!-- Suggestions box -->
            <div class="card mb-3" id="slider">
                    <div class="card-header">Suggestions</div>
                    <div class="card-body">
                        <ul class="nav">
                                <li class="card-body text-center">
                                       <div class="row" id="slides">       

                                            <div class="card col-lg-3" style="width:650px;">
                                                <div class="card-body">
                                                    <a href=""><img src="../public/image/1.jpg" alt="" class="rounded-circle border border-danger" style="width:60px; height:60px"></a>
                                                   <p style="font-size:10px;"><b>John Fernandise</b></p>
                                                   <button class="btn-post mr-2 btn btn-dark" style="font-size:6px;" type="submit">Follow</button>
                                                   <button class="btn-post mr-2 btn btn-success" style="font-size:6px;" type="submit">message</button>
                                                </div>
                                                <div class="card-footer bg-transparent border-success">View Profile</div>
                                            </div>
                                            <div class="card col-lg-3">
                                                    <div class="card-body">
                                                        <a href=""><img src="../public/image/3.jpg" alt="" class="rounded-circle border border-danger" style="width:60px; height:60px"></a>
                                                       <p style="font-size:10px;"><b>John Fernandise</b></p>
                                                       <button class="btn-post mr-2 btn btn-dark" style="font-size:6px;" type="submit">Follow</button>
                                                       <button class="btn-post mr-2 btn btn-success" style="font-size:6px;" type="submit">message</button>
                                                    </div>
                                                    <div class="card-footer bg-transparent">View Profile</div>
                                            </div>

                                            <div class="card col-lg-3">
                                                    <div class="card-body">
                                                        <a href=""><img src="../public/image/8.jpg" alt="" class="rounded-circle border border-danger" style="width:60px; height:60px"></a>
                                                       <p style="font-size:10px;"><b>John Fernandise</b></p>
                                                       <button class="btn-post mr-2 btn btn-dark" style="font-size:6px;" type="submit">Follow</button>
                                                       <button class="btn-post mr-2 btn btn-success" style="font-size:6px;" type="submit">message</button>
                                                    </div>
                                                    <div class="card-footer bg-transparent">View Profile</div>
                                            </div>
                                    </div>
                                  
                                </li>
                        </ul>          
                    </div>
                  </div>

                  
            

            
             
                                <% if (items.length > 0)
                                { %>
                                  <% items.forEach(function(item,  index)
                                  {%>

                                
                                        
                                    <div class="card mb-3">
                                            <div class="card-header">
                                                    <% if(item.User.user_profile_pic){ %>
                                                            <a href=""><img src="../public/profile_image/<%= item.User.user_profile_pic %>" alt="" class="rounded-circle border border-danger" style="width:50px; height:50px"></a>
                                                        
                                                    <% } else { %>
                                                        <img src="../public/profile_image/icon.jpg" alt="profile image 1" class="rounded-circle border border-danger" style="width:50px; height:50px">
                                                  <% } %>

                                                  <span class="ml-2" style="color:rgba(0,0,0,0.5)"><%= item.User.user_firstname%> <%= item.User.user_lastname%></span>
                                            </div>
                                            
                                            <div class="card-body">
                                                <ul class="nav">
                                                        <li>
                                                                <a href="/post/<%= item.event_id %>">
                                                                    <img src="../public/image/<%= item.e_imagepath %>" alt="error check >" class="img-fluid">
                                                                </a>
                                                          
                                                        </li>
                                                </ul>          
                                            </div>
                                            <div class="card-footer">
                                                    <% if(item.event_id != -1){ %>
                                                            <button class="like bg-btn fa fa-thumbs-up" data-post="<%= item.event_id %>"></button>
                                                            <span class="countLikes"><%=item.Likes.length%></span>
                                                            <span class="countLikes" style="display:none" data-post_count="<%= item.event_id %>"><%=item.Likes.length%></span>
                                                    <% }
                                                    else{ %>
                                                            <button class="like bg-btn fa fa-thumbs-up" style="color:#0275d8;" data-post="<%= item.event_id %>"></button>
                                                            <span class="countLikes"><%=item.Likes.length%></span>
                                                            <span class="countLikes" style="display:none" data-post_count="<%= item.event_id %>"><%=item.Likes.length%></span>
                                                    <% } %>
                                                           
                                                    <!-- <button class="like bg-btn fa fa-thumbs-up" style="color:#0275d8;" data-post="<%= item.event_id%>"></button> -->
                                                    <!-- <span class="toggle_likes" data-postID="<%= item.event_id %>">Like</span> -->
                                                    <button class="comments bg-btn fa fa-comments"></button>
                                                    <!-- <i class="far fa-comments"></i> -->
                                                    <span class="countComments"><%=item.Comments.length%></span>

                                            </div>
                                            <!-- display all coments here --> 
                                            <div id="all_comments">
                                                    <!-- view all comments -->
                                                            <% if(item.Comments.length>0){ %>
    
                                                                    <% item.Comments.forEach(function(comment_data, ind){%>
                                                    <div class="card">
                                                            <div class="card-body">
                                                                    <div class="row">
                                                                                                            
                                                                            <div class="col-md-2">
                                                                            <% if(item.User.user_profile_pic){ %>
                                                                            <a href=""><img src="../public/profile_image/<%= item.User.user_profile_pic %>" alt="" class="rounded-circle border border-danger" style="width:50px; height:50px"></a>                    
                                                                            <% } else { %>
                                                                            <img src="../public/profile_image/icon.jpg" alt="profile image 1" class="rounded-circle border border-danger" style="width:50px; height:50px">
                                                                            <% } %>
                                                                            
                                                                            </div>
                                                                            <div class="col add_comment">
                                                                                            <span><%= comment_data.comment%></span>
                                                                            </div>
                                                                    
                                                                    </div>
                                                            </div>
                                                    </div>
                                                                    <%})%>
    
                                                                            <% } %>
                                                            </div>                       
                                                    
    <!-- add coment textarea -->
    <form class="form-group rounded" id="comment_form_parent">
            <textarea name="comment_content" id="comment_content" class="form-control" rows="2" placeholder="add comment..."></textarea>
            <button type="button" class="btn btn-success add_comment_btn" name="add_comment_btn" data-add-Comment-post-id="<%= item.event_id %>">comment</button>
            <button type="button" class="btn btn-dark">Cancel</button>
    </form>                                        
                                            
                                    </div>          
      
                                    <%}); %>
                                <%}
                                else
                                {
                                  %> 
                                  <p> <strong>There are no recods available</strong></p>
                              <%  } %>
            
            
           
        </div>

        <!-- /////////////////////////////////////////////////////////////////////////////////////// -->
                                        <!-- main middle page ends -->
        <!-- /////////////////////////////////////////////////////////////////////////////////////// -->

        <div class="col-md-4">
            
            <div class="card mb-3">
                    <div class="card-header bg-transparent">
                        <div class="row">
                                <div class="form-group col-md-9">
                                        <input class="form-control" type="text" placeholder="Find Events" aria-label="Search">
                                  </div>
                                  <div class="form-group col-md-3">
                                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Find</button>
                                  </div>
                        </div>

                    </div>
                    <div class="card-body">
                    
                      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Today</button>
                      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Tommarow</button>
                      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">This Week</button>
                    </div>
                

            </div>

            <div class="card mb-3">
                    <div class="card-header bg-transparent">Events</div>
                    <div class="card-body">
                        <ul class="nav">
                                <li class="card-body">        
                                                <a href=""><img src="../public/image/Upcoming-Events.png" alt="" class="rounded-circle border border-danger" style="width:100px; height:100px;"></a>
                                                Upcoming Events
                                                <a href=""><img src="../public/image/activeevents.png" alt="" class="rounded-circle border border-danger" style="width:100px; height:100px"></a>
                                                Active Events
                                                <a href=""><img src="../public/image/pastevents.png" alt="" class="rounded-circle border border-danger" style="width:100px; height:100px"></a>
                                                Previous Events
                                  
                                </li>
                        </ul>          
                    </div>
                    <div class="card-footer bg-transparent">View More</div>
                  </div>

                <div class="card mb-3">
                    <div class="card-header bg-transparent">Remended Events For You</div>
                    <div class="card-body">
                        <ul class="nav">
                                <li class="card-body">
                                       <div class="row">       

                                        <div class="col-lg-3">
                                                <a href=""><img src="../public/image/newevents.jpg" alt="" class="rounded-circle border border-danger" style="width:100px; height:100px"></a>
                                        </div>
                                        <div class="col-lg-3">
                                                <a href=""><img src="../public/image/jazzyb.jpg" alt="" class="rounded-circle border border-danger" style="width:100px; height:100px"></a>
                                        </div>
                                        <div class="col-lg-3">
                                                <a href=""><img src="../public/image/6.jpg" alt="" class="rounded-circle border border-danger" style="width:100px; height:100px"></a>
                                        </div>
                                        <div class="col-lg-3">
                                                <a href=""><img src="../public/image/1.jpg" alt="" class="rounded-circle border border-danger" style="width:100px; height:100px"></a>
                                        </div>
                                        

                                    </div>
                                  
                                </li>
                        </ul>          
                    </div>
                    <div class="card-footer bg-transparent">View More</div>
                  </div>


            <!--/sidebar-nav-fixed -->
        </div>
      
    </div><!-- main row ends -->
</div>
<%- include('partials/includes/footer') %>
<script>
$(document).ready(function()
{
    // like post section
    $('.like').on('click', function(events)
        {
            event.preventDefault();
            event.stopPropagation();
            
            var postId = $(this).attr('data-post');
            var postId = parseInt(postId,10)
            var post_id_count = $(this).attr('data-post_count')
            alert(post_id_count)
            var parent  = $(this)
            $.ajax(
                    {
                            type: 'POST',
                            url:  '/posts/like/' + $(this).attr('data-post'),
                            contentType: "application/json", 
                            //data: JSON.stringify(data),
                            success : function(response)
                            {
                                    
                                    if(response == false)
                                    {
                                            alert("You have already liked this post")
                                    }
                                    else 
                                    {
                                            parent.html(response.count)
                                            $('.countLikes'+postId).html(response.count);
                                    }
                                                 
                                    // if(response)
                                    // {
                                    //         //alert(response.count)
                                    //         //console.log("checking success data from ajax =>",JSON.stringify(response))
                                    //         //$('.countLikes').html(response.count);
                                    //         parent.html(response.count)
                                    //        // $('.countLikes').attr($(this).attr('data-post'),100);
                                    //         //alert(dataformserver);
                                    // }
                                            
                                   
                            },
                            error : function()
                            {
                                    alert('error from server');
                            }
                    }
            );
        })


    // add comment section 
    
            $('.add_comment_btn').on('click',function(events)
            {
                    event.preventDefault();
                    event.stopPropagation();
            
                    var get_post_id = $(this).attr('data-add-Comment-post-id');
                    alert(get_post_id)
                    // var comment_content = document.getElementById("comment_content").value;
                    // alert(comment_content)
                    var fullname = $('#comment_content').val()
                    alert(fullname.parentElement)
                    
                    
                    // $.ajax(
                    //                 {
                    //                        type: 'POST',
                    //                        url: '/posts/add_comment/' + $(this).attr('data-add-Comment-post-id'),
                    //                        data : 'comment_content=' + comment_content,
                    //                        success: function(response)
                    //                        {

                    //                                 response.rows.forEach(function(item, index)
                    //                                 {
                    //                 // document.getElementById("all_comments").innerHTML=item.comment+document.getElementById("all_comments").innerHTML;
                //                 // document.getElementById("comment_content").value="";
    
                                                            
                    //                                         //$('#display_comment').html(item.comment)
                    //                                 })
                    //                 document.getElementById("all_comments").innerHTML=comment_content+document.getElementById("all_comments").innerHTML;
                //                 document.getElementById("comment_content").value="";

                                    
                    //                        },
                    //                        error: function(jqXHR, textStatus, errorThrown)
                    //                        {
                    //                                 console.log('jqXHR:');
                    //                                 console.log(jqXHR);
                    //                                 console.log('textStatus:');
                    //                                 console.log(textStatus);
                    //                                 console.log('errorThrown:');
                    //                                 console.log(errorThrown);
                    //                                 alert(errorThrown);
                    //                        } 
                    //                 }
                    //         )
            }) 
    

});
</script>


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(user.length > 0)
                        {
                            
                                for (var i = 0, len = user.length; i < len; i++)
                                {

                                   
                                        res.send(user[i].Posts[i].Likes[i].User[i]);
                                    
                                    
                                }
                         
                        }
                        else
                        {
                            
                        }

//specific user(user_id) has posted posts(events) many posts and many people have likes that posts
// give details of : user_id (who has posted events) model: Posts (that particular post) and model: Likes (how many people have likes that particular post)
Users.findAll({where:{user_id:user_id},include:[{model:Posts,include:[Likes]}]})
// Example Data
[
    {
        "user_id": 1,
        "user_firstname": "Sonu",
        "user_lastname": "Shahuji",
        "user_dob": "2010-11-18",
        "user_gender": "male",
        "user_mobile_no": "9999999999",
        "user_email": "sonushahuji4",
        "user_username": "sonu",
        "user_password": "1234",
        "user_profile_pic": "sonu.jpg",
        "createdAt": "2019-06-12T14:07:10.000Z",
        "updatedAt": "2019-06-12T14:07:10.000Z",
        "Posts": [
            {
                "event_id": 1,
                "user_id": 1,
                "event_message": "my first post",
                "e_imagepath": "1560348509176.jpg",
                "createdAt": "2019-06-12T14:08:29.000Z",
                "updatedAt": "2019-06-12T14:08:29.000Z",
                "Likes": [
                    {
                        "like_id": 1,
                        "user_id": 4,
                        "event_id": 1,
                        "createdAt": "2019-06-12T14:27:24.000Z",
                        "updatedAt": "2019-06-12T14:27:24.000Z"
                    },
                    {
                        "like_id": 2,
                        "user_id": 2,
                        "event_id": 1,
                        "createdAt": "2019-06-12T14:28:07.000Z",
                        "updatedAt": "2019-06-12T14:28:07.000Z"
                    },
                    {
                        "like_id": 5,
                        "user_id": 3,
                        "event_id": 1,
                        "createdAt": "2019-06-12T14:28:52.000Z",
                        "updatedAt": "2019-06-12T14:28:52.000Z"
                    }
                ]
            },
            {
                "event_id": 16,
                "user_id": 1,
                "event_message": "my second post",
                "e_imagepath": "1560362165989.jpg",
                "createdAt": "2019-06-12T17:56:06.000Z",
                "updatedAt": "2019-06-12T17:56:06.000Z",
                "Likes": [
                    {
                        "like_id": 11,
                        "user_id": 2,
                        "event_id": 16,
                        "createdAt": "2019-06-13T15:21:20.000Z",
                        "updatedAt": "2019-06-13T15:21:20.000Z"
                    }
                ]
            },
            {
                "event_id": 17,
                "user_id": 1,
                "event_message": "mmsd",
                "e_imagepath": "1560362687706.jpg",
                "createdAt": "2019-06-12T18:04:47.000Z",
                "updatedAt": "2019-06-12T18:04:47.000Z",
                "Likes": []
            }
        ]
    }
]



//// give details of : user_id (who has posted events) model: Posts (that particular post) and model: Likes (how many people have likes that particular post) and whoever liked that post that users data
Users.findAll({where:{user_id:user_id},include:[{model:Posts,include:[{model:Likes,include:[{model:Users}]}]}]})
// Example with data
[
    {
        "user_id": 1,
        "user_firstname": "Sonu",
        "user_lastname": "Shahuji",
        "user_dob": "2010-11-18",
        "user_gender": "male",
        "user_mobile_no": "9999999999",
        "user_email": "sonushahuji4",
        "user_username": "sonu",
        "user_password": "1234",
        "user_profile_pic": "sonu.jpg",
        "createdAt": "2019-06-12T14:07:10.000Z",
        "updatedAt": "2019-06-12T14:07:10.000Z",
        "Posts": [
            {
                "event_id": 1,
                "user_id": 1,
                "event_message": "my first post",
                "e_imagepath": "1560348509176.jpg",
                "createdAt": "2019-06-12T14:08:29.000Z",
                "updatedAt": "2019-06-12T14:08:29.000Z",
                "Likes": [
                    {
                        "like_id": 1,
                        "user_id": 4,
                        "event_id": 1,
                        "createdAt": "2019-06-12T14:27:24.000Z",
                        "updatedAt": "2019-06-12T14:27:24.000Z",
                        "User": {
                            "user_id": 4,
                            "user_firstname": "David",
                            "user_lastname": "Wasawa",
                            "user_dob": "1998-05-13",
                            "user_gender": "male",
                            "user_mobile_no": "8989897678",
                            "user_email": "davidwasawa",
                            "user_username": "david",
                            "user_password": "1234",
                            "user_profile_pic": "david.jpg",
                            "createdAt": "2019-06-12T14:26:48.000Z",
                            "updatedAt": "2019-06-12T14:26:48.000Z"
                        }
                    },
                    {
                        "like_id": 2,
                        "user_id": 2,
                        "event_id": 1,
                        "createdAt": "2019-06-12T14:28:07.000Z",
                        "updatedAt": "2019-06-12T14:28:07.000Z",
                        "User": {
                            "user_id": 2,
                            "user_firstname": "Divya",
                            "user_lastname": "Rile",
                            "user_dob": "1991-11-15",
                            "user_gender": "male",
                            "user_mobile_no": "7777878787",
                            "user_email": "divyarile",
                            "user_username": "divya",
                            "user_password": "1234",
                            "user_profile_pic": null,
                            "createdAt": "2019-06-12T14:25:05.000Z",
                            "updatedAt": "2019-06-12T14:25:05.000Z"
                        }
                    },
                    {
                        "like_id": 5,
                        "user_id": 3,
                        "event_id": 1,
                        "createdAt": "2019-06-12T14:28:52.000Z",
                        "updatedAt": "2019-06-12T14:28:52.000Z",
                        "User": {
                            "user_id": 3,
                            "user_firstname": "Shamim",
                            "user_lastname": "Shaik",
                            "user_dob": "1989-07-13",
                            "user_gender": "male",
                            "user_mobile_no": "56789879",
                            "user_email": "shamimshaik",
                            "user_username": "shamim",
                            "user_password": "1234",
                            "user_profile_pic": null,
                            "createdAt": "2019-06-12T14:25:54.000Z",
                            "updatedAt": "2019-06-12T14:25:54.000Z"
                        }
                    }
                ]
            },
            {
                "event_id": 16,
                "user_id": 1,
                "event_message": "my second post",
                "e_imagepath": "1560362165989.jpg",
                "createdAt": "2019-06-12T17:56:06.000Z",
                "updatedAt": "2019-06-12T17:56:06.000Z",
                "Likes": [
                    {
                        "like_id": 11,
                        "user_id": 2,
                        "event_id": 16,
                        "createdAt": "2019-06-13T15:21:20.000Z",
                        "updatedAt": "2019-06-13T15:21:20.000Z",
                        "User": {
                            "user_id": 2,
                            "user_firstname": "Divya",
                            "user_lastname": "Rile",
                            "user_dob": "1991-11-15",
                            "user_gender": "male",
                            "user_mobile_no": "7777878787",
                            "user_email": "divyarile",
                            "user_username": "divya",
                            "user_password": "1234",
                            "user_profile_pic": null,
                            "createdAt": "2019-06-12T14:25:05.000Z",
                            "updatedAt": "2019-06-12T14:25:05.000Z"
                        }
                    }
                ]
            },
            {
                "event_id": 17,
                "user_id": 1,
                "event_message": "mmsd",
                "e_imagepath": "1560362687706.jpg",
                "createdAt": "2019-06-12T18:04:47.000Z",
                "updatedAt": "2019-06-12T18:04:47.000Z",
                "Likes": []
            }
        ]
    }
]


// not query to get all user except current user

// Users.findAll({where:{user_id:{[Op.notIn]:[user_id]}}})
// .then((get_user)=>
// {
//     res.send(get_user);
// })

// for ex.
// [
//     {
//         "user_id": 2,
//         "user_firstname": "Divya",
//         "user_lastname": "Rile",
//         "user_dob": "1991-11-15",
//         "user_gender": "female",
//         "user_mobile_no": "7777878787",
//         "user_email": "divyarile",
//         "user_username": "divya",
//         "user_password": "1234",
//         "user_profile_pic": null,
//         "createdAt": "2019-06-12T14:25:05.000Z",
//         "updatedAt": "2019-06-12T14:25:05.000Z"
//     },
//     {
//         "user_id": 3,
//         "user_firstname": "Shamim",
//         "user_lastname": "Shaik",
//         "user_dob": "1989-07-13",
//         "user_gender": "female",
//         "user_mobile_no": "56789879",
//         "user_email": "shamimshaik",
//         "user_username": "shamim",
//         "user_password": "1234",
//         "user_profile_pic": null,
//         "createdAt": "2019-06-12T14:25:54.000Z",
//         "updatedAt": "2019-06-12T14:25:54.000Z"
//     },
//     {
//         "user_id": 4,
//         "user_firstname": "D",
//         "user_lastname": "Wasawa",
//         "user_dob": "1998-05-13",
//         "user_gender": "male",
//         "user_mobile_no": "8989897678",
//         "user_email": "davidwasawa",
//         "user_username": "david",
//         "user_password": "1234",
//         "user_profile_pic": "david.jpg",
//         "createdAt": "2019-06-12T14:26:48.000Z",
//         "updatedAt": "2019-06-26T11:15:16.000Z"
//     },
//     {
//         "user_id": 9,
//         "user_firstname": "Franky",
//         "user_lastname": "Martin",
//         "user_dob": "2017-12-08",
//         "user_gender": "male",
//         "user_mobile_no": "9999876587",
//         "user_email": "franky@gmail.com",
//         "user_username": "franky",
//         "user_password": "1234",
//         "user_profile_pic": null,
//         "createdAt": "2019-06-23T10:24:44.000Z",
//         "updatedAt": "2019-06-23T10:24:44.000Z"
//     },
//     {
//         "user_id": 10,
//         "user_firstname": "Lloyd",
//         "user_lastname": "D'souza",
//         "user_dob": "1998-06-18",
//         "user_gender": "male",
//         "user_mobile_no": "7876534565",
//         "user_email": "lloyd@gmail.com",
//         "user_username": "lloyd",
//         "user_password": "1234",
//         "user_profile_pic": null,
//         "createdAt": "2019-06-23T10:26:39.000Z",
//         "updatedAt": "2019-06-23T10:26:39.000Z"
//     }
// ]

// nested for loop
// get data form nested json object array
// Consider above data
if(user.length > 0)
{
        
        for (var i = 0; i < user.length; i++)
        {
            var Post_len = user[i].Posts
            console.log("Post_len",Post_len.length)
            for (var j = 0; j < Post_len.length; j++) 
            {
                console.log(Post_len[j].event_message);
            }
            
        }
 
}
else
{
    
}
// Outpput
/*
my first post
my second post
mmsd
*/

// WOrking nested for loop 
// <% if(items.length > 0){%>
//     <div class="card-body">
//                     <div class="row">
//                             <div class="col-4">
//     <% for (var i = 0, len = items.length; i < len; i++) {%>  
//            <% var post_data = items[i].Posts; %> 
    
//            <% for (var j = 0, len_1 = post_data.length; j < len_1; j++) {%> 
                    
// <a href=""><img src="../public/image/<%=post_data[j].e_imagepath %>" alt="" class="img-fluid rounded-top border border-white" style="width:300px; height:200px"></a>
// <div class="card-footer rounded-left" style="background-color:#FFFFFF"><i class="fas fa-heart" style="color:#EF5350"></i><span><%= post_data[j].Likes.length %></span><i class="fas fa-comment" style="padding-left:25px;color:#E1BEE7"></i><span>100</span></i> <i class="fas fa-paper-plane" style="padding-left:25px;color:#32A5F5"></i><i class="fas fa-share" style="padding-left:25px;"></i></div>

                     

//             <%}%>
           
                                    
                          
//      <%}%>
//                             </div>    
//                      </div>
//     </div><!-- card body ends-->

// <%}else{%>
//      <span>No records are available</span>
// <%}%>









///////////////////////////////////////
// <% if(items.length > 0){%>
//     <% items.forEach(function(item,index){%>
     
     

//      <%})%>

// <%}else{%>
//      <span>No records are available</span>
// <%}%>

///////////////////////////////  profile.ejs final  /////////////////////////
// <%- include('partials/includes/header') %>
// <%- include('partials/includes/navbar') %>


// <br /> <br />

// <div class="container">
    

       
//                 <!-- row 1 sub-row I-->
//         <div class="row">
//                         <div class="card-body">
//                                 <img class="card" src="../public/image/charts.gif" alt="Card image" style="width:100%; height:400px">
//                         </div>
        
//         </div><!-- row 1 sub-row I ends-->
        
//         <div class="container">
//                         <div class="row">
//                                 <div class="card rounded-circle">
//                                         <div class="card-img">
//                                                 <a href=""><img src="../public/image/1.jpg" alt="" class="img-fluid rounded-circle border border-danger"style="width:100px; height:100px"></a></li>                
//                                                 <div class="card-img-overlay">Gallery</div>
//                                         </div>
//                                 </div>
//                                 <div class="card rounded-circle">
//                                                 <div class="card-img">
//                                                         <a href=""><img src="../public/image/5.jpg" alt="" class="img-fluid rounded-circle border border-danger"style="width:100px; height:100px"></a></li>                
//                                                         <div class="card-img-overlay">Gallery</div>
//                                                 </div>
//                                 </div>
//                                 <div class="card rounded-circle">
//                                                 <div class="card-img">
//                                                         <a href=""><img src="../public/image/7.jpg" alt="" class="img-fluid rounded-circle border border-danger"style="width:100px; height:100px"></a></li>                
//                                                         <div class="card-img-overlay">Gallery</div>
//                                                 </div>
//                                         </div>
//                         </div>               
//         </div>
                


// <!-- row 2-->

// <div class="row">

// <!-- row 2 col I-->
// <div class="col-4">

//         <!-- user data starts from here basic data-->
//         <%if(items.length>0) {%>     <!-- if condition starts -->

//                 <div class="card-body rounded" style="background:#ffffff; margin-top: 30px;margin-left: 30px">
//                 <% items.forEach(function(item, index) {%>        <!-- for loop starts -->
                
//                         <% if(item.user_profile_pic){ %>
//                                 <img src="../public/profile_image/<%= item.user_profile_pic %>" alt="profile image" class="img-fluid rounded" style="width:100px; height:100px">
//                         <% } else { %>
//                                 <img src="../public/profile_image/icon.jpg" alt="profile image 1" class="rounded-circle border border-danger" style="width:100px; height:100px">
//                         <% } %>
                        
//                         <h6><%= item.user_firstname %> <%= item.user_lastname %></h6>
//                         <span><b>Bio</b>:<i>Love you dear Zindgi</i></span>
//                         <span><b>Email</b>:<%= item.user_email %></span><br />
//                         <span><strong>Website :</strong>www.themashabrand.com</span><br />
//                         <span><strong>Profession :</strong>Student</span><br />
//                         <span><b>Location</b>:India Mumbai</span>

//                         <div class="row">
//                                         <ul class="nav">
//                                                         <li class="card-body text-center">
//                                                                <div class="row">       
                    
//                                                                     <div class="card">
//                                                                                 <div class="card-footer bg-transparent">Followers 10K</div>
//                                                                     </div>
//                                                                     <div class="card" style="margin-left:20px">
//                                                                                 <div class="card-footer bg-transparent">Following 20k</div>
                                                                            
//                                                                     </div>
                    
//                                                             </div>
                                                          
//                                                         </li>
//                                                 </ul>       
//                         </div>
                        

//                 <%})%>  <!-- for loop ends -->
//                 </div>
                

//         <%} else{%>     <!-- else condition starts-->
        
//                 <span>No records available</span>
//         <%}%>   <!-- ends condition ends-->
                                
                
                
// <!-- another post about user starts from here-->
//                 <div class="card-body" style="background:#ffffff;margin-left:30px;margin-top:30px">
//                 <div class="card about-user">
//                         <div class="card-body">
//                                 <div class="card-block">
//                                 <h4 class="card-title info">About Me</h4>
//                                 <% if(items.length > 0){%>
//                                        <% items.forEach(function(item,index){%>
//                                         <p class="card-text">Coding is my passion, not my profession.</p>
//                                         <div class="text-left">
//                                                 <p class="card-text"><strong>Full Name : </strong> <span class="m-l-15"><%= item.user_firstname %> <%= item.user_lastname %></span></p>
//                                                 <p class="card-text"><strong>Mobile : </strong><span class="m-l-15"><%= item.user_mobile_no %></span></p>
//                                                 <p class="card-text"><strong>Gender : </strong> <span class="m-l-15"><%= item.user_gender %></span></p>
//                                                 <p class="card-text"><strong>Date of Birth : </strong> <span class="m-l-15"><%= item.user_dob %></span></p>
//                                         </div>	
                                        

//                                         <%})%>

//                                 <%}else{%>
//                                         <span>No records are available</span>
//                                 <%}%>		
//                                 </div>
//                         </div>
//                 </div>	                        
//                 </div>
//                 <!-- about me ends here-->

//                 <div class="card-body" style="background:#ffffff;margin-left:30px;margin-top:30px">
//                                 <div class="card about-user">
//                                          <div class="card-body">
//                                           <div class="card-block">
//                                                <h4 class="card-title info">About</h4>
//                                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
//                                    <div class="text-left">
//                                     <p class="card-text"><strong>Full Name :</strong> <span class="m-l-15">Amanda Taylor</span></p>
//                                     <p class="card-text"><strong>Mobile :</strong><span class="m-l-15">(+12) 334 5555 723</span></p>
//                                     <p class="card-text"><strong>Website :</strong> <span class="m-l-15">www.themashabrand.com</span></p>
//                                     <p class="card-text"><strong>Location :</strong> <span class="m-l-15">USA</span></p>
//                                    </div>			
//                                           </div>
//                                          </div>
//                                     </div>	                        
//         </div>
        
                

// </div><!-- row 2 col I ends-->

// <!-- row 2-->
// <div class="col-8">

//         <div class="card" style="margin-top:30px">
//                 <div class="card-body">
//                                 <% if(items.length > 0){%>
//                                         <% items.forEach(function(item,index){%>
                                         
//                                                 <% if(item.user_profile_pic){ %>
//                                                         <img src="../public/profile_image/<%= item.user_profile_pic %>" alt="profile image" class="rounded-circle border border-danger" style="width:50px; height:50px">
//                                                 <% } else { %>
//                                                         <img src="../public/profile_image/icon.jpg" alt="profile image 1" class="rounded-circle border border-danger" style="width:50px; height:50px">
//                                                 <% } %>
                                    
//                                          <%})%>
                                    
//                                     <%}else{%>
//                                          <span>No records are available</span>
//                                     <%}%>
                                      
                                
//                                 <button class="btn btn-light" style="position: absolute;right:150px;" data-target="#createpost" data-toggle="modal">Create Post</button>
//                                 <button class="btn btn-dark" style="position: absolute;right:0; margin-right:5px">Create Post</button>
                                
    
                                           
//                 </div>
//         </div>

//     <!-- for heading display-->
        
//                 <div class="card-body" style="background:#ffffff;margin-top: 30px">
//                     <ul class="nav">
//                         <li class="nav-item">
//                         <a class="nav-link active" href="#">Upcoming 100</a>
//                         </li>
//                         <li class="nav-item">
//                         <a class="nav-link disabled" href="#">Active 16</a>
//                         </li>
//                         <li class="nav-item">
//                         <a class="nav-link disabled" href="#">Past 45</a>
//                         </li>
//                     </ul>
//                 </div>
         

    

//         <div class="row"> <!-- for events display-->
//                 <% if(items.length > 0){%>
//                         <% items.forEach(function(item,index){%>
                                
                        // <div class="card-body">
                        //         <div class="row">
                        //                 <div class="col-4">
                        //                 <a href=""><img src="../public/image/<%= item.Posts.e_imagepath%>" alt="" class="img-fluid rounded-top border border-white" style="width:300px; height:200px"></a>
                        //                 <a href=""><img src="../public/profile_image/<%= item.user_profile_pic%>" alt="" class="img-fluid rounded-top border border-white" style="width:300px; height:200px"></a>
                        //                 <h4><%= item.Posts.event_message %></h4>
                        //                 <div class="card-footer rounded-left" style="background-color:#FFFFFF"><i class="fas fa-heart" style="color:#EF5350"></i><span><%=item.Posts.length%></span><i class="fas fa-comment" style="padding-left:25px;color:#E1BEE7"></i><span>100</span></i> <i class="fas fa-paper-plane" style="padding-left:25px;color:#32A5F5"></i><i class="fas fa-share" style="padding-left:25px;"></i></div>
                        //                 </div>    
                        //         </div>
                        // </div><!-- card body ends-->
//                          <%})%>
                    
//                     <%}else{%>
//                          <span>No records are available</span>
//                 <%}%>
//         </div>  <!-- for events display ends-->

    
// </div><!-- row 2ends-->


// </div> 

// </div>
///////////////////////////////////////////////////////////////////////////////////////////


[
        {
            "user_id": 3,
            "user_firstname": "Shamim",
            "user_lastname": "Shaik",
            "user_dob": "1989-07-13",
            "user_gender": "female",
            "user_mobile_no": "56789879",
            "user_email": "shamimshaik",
            "user_username": "shamim",
            "user_password": "1234",
            "user_profile_pic": "1561557211311.jpg",
            "createdAt": "2019-06-12T14:25:54.000Z",
            "updatedAt": "2019-06-26T13:53:31.000Z",
            "Follows": [
                {
                    "follow_id": 2,
                    "user_id": 3,
                    "receiver_id": 2,
                    "status": "requested",
                    "createdAt": "2019-06-26T19:33:34.000Z",
                    "updatedAt": "2019-06-26T19:33:34.000Z"
                }
            ]
        },
        {
            "user_id": 10,
            "user_firstname": "Lloyd",
            "user_lastname": "D'souza",
            "user_dob": "1998-06-18",
            "user_gender": "male",
            "user_mobile_no": "7876534565",
            "user_email": "lloyd@gmail.com",
            "user_username": "lloyd",
            "user_password": "1234",
            "user_profile_pic": "1561557388506.jpg",
            "createdAt": "2019-06-23T10:26:39.000Z",
            "updatedAt": "2019-06-26T13:56:28.000Z",
            "Follows": [
                {
                    "follow_id": 3,
                    "user_id": 10,
                    "receiver_id": 1,
                    "status": "requested",
                    "createdAt": "2019-06-26T22:48:50.000Z",
                    "updatedAt": "2019-06-26T22:48:50.000Z"
                }
            ]
        },
        {
            "user_id": 2,
            "user_firstname": "Divya",
            "user_lastname": "Rile",
            "user_dob": "1991-11-15",
            "user_gender": "female",
            "user_mobile_no": "7777878787",
            "user_email": "divyarile",
            "user_username": "divya",
            "user_password": "1234",
            "user_profile_pic": "1561557057322.jpeg",
            "createdAt": "2019-06-12T14:25:05.000Z",
            "updatedAt": "2019-06-26T13:50:57.000Z",
            "Follows": []
        },
        {
            "user_id": 4,
            "user_firstname": "David",
            "user_lastname": "Wasawa",
            "user_dob": "1998-05-13",
            "user_gender": "male",
            "user_mobile_no": "8989897678",
            "user_email": "davidwasawa",
            "user_username": "david",
            "user_password": "1234",
            "user_profile_pic": "david.jpg",
            "createdAt": "2019-06-12T14:26:48.000Z",
            "updatedAt": "2019-06-26T11:15:16.000Z",
            "Follows": []
        },
        {
            "user_id": 9,
            "user_firstname": "Franky",
            "user_lastname": "Martin",
            "user_dob": "2017-12-08",
            "user_gender": "male",
            "user_mobile_no": "9999876587",
            "user_email": "franky@gmail.com",
            "user_username": "franky",
            "user_password": "1234",
            "user_profile_pic": "1561557351231.jpg",
            "createdAt": "2019-06-23T10:24:44.000Z",
            "updatedAt": "2019-06-26T13:55:51.000Z",
            "Follows": []
        }
    ]


    ////////////////////////////////////////////////////////////  home.ejs ///////////////////////////////////////#endregion
    
    <!-- nav bar -->
    <%- include('partials/includes/header') %>
    <%- include('partials/includes/navbar') %>


    <br /> <br /> <br /> <br />

   

   
    <div class="container-fluid fixed-bottom bg-transparent" style="background-color:#F4F6F6">
            <div class="row" style="padding:10px">
             <ul class="list-group">
              <li style="padding-bottom:10px">
                <a href=""><img src="../public/image/Twitter_UI-18-512.png" alt="" class="rounded-circle border border-danger" style="width:50px; height:50px"></a>
                <a href=""><img src="../public/image/messageicon1.jpg" alt="" class="img-fluid rounded-circle border border-danger" style="width:50px; height:50px"></a>
                <a href=""><img src="../public/image/notificationicon.png" alt="" class="img-fluid rounded-circle border border-danger" style="width:50px; height:50px"></a>
              </li> 					   
             </ul>        
            </div>
           </div>
           
       
        <div class="container-fluid fixed" style="background-color:#F4F6F6">
         <div class="row" style="padding:10px">
          <ul class="list-group">
           <li style="padding-bottom:10px">
            
             <button class="rounded-circle border border-danger"  style="width:100px; height:100px">
              <i class="fa fa-plus"></i>
             </button>
             <a href=""><img src="../public/image/1.jpg" alt="" class="rounded-circle border border-danger" style="width:100px; height:100px"></a>
             <a href=""><img src="../public/image/3.jpg" alt="" class="img-fluid rounded-circle border border-danger" style="width:100px; height:100px"></a>
             <a href=""><img src="../public/image/4.jpg" alt="" class="img-fluid rounded-circle border border-danger" style="width:100px; height:100px"></a>
             <a href=""><img src="../public/image/5.jpg" alt="" class="img-fluid rounded-circle border border-danger" style="width:100px; height:100px"></a>
             <a href=""><img src="../public/image/6.jpg" alt="" class="img-fluid rounded-circle border border-danger" style="width:100px; height:100px"></a>
             <a href=""><img src="../public/image/7.jpg" alt="" class="img-fluid rounded-circle border border-danger" style="width:100px; height:100px"></a>
             <a href=""><img src="../public/image/8.jpg" alt="" class="img-fluid rounded-circle border border-danger" style="width:100px; height:100px"></a>
             <a href=""><img src="../public/image/9.jpg" alt="" class="img-fluid rounded-circle border border-danger" style="width:100px; height:100px"></a>
             <a href=""><img src="../public/image/10.jpg" alt="" class="img-fluid rounded-circle border border-danger" style="width:100px; height:100px"></a>
             <a href=""><img src="../public/image/11.jpg" alt="" class="img-fluid rounded-circle border border-danger" style="width:100px; height:100px"></a>
             <a href=""><img src="../public/image/1.jpg" alt="" class="img-fluid rounded-circle border border-danger" style="width:100px; height:100px"></a>
             <a href=""><img src="../public/image/4.jpg" alt="" class="img-fluid rounded-circle border border-danger" style="width:100px; height:100px"></a>
             <a href=""><img src="../public/image/5.jpg" alt="" class="img-fluid rounded-circle border border-danger" style="width:100px; height:100px"></a>
            
           </li> 					   
          </ul>
          
         
         </div>
        </div>
    
            
    

    <div class="container" style="padding-top:40px"><!-- main container starts-->

        <div class="row"><!-- main row starts -->

          <!-- ................................ Left side bar ............................... -->
        <% if (user.length > 0)
        { %>
          <div class="col-md-2"> <!-- col-md-2 starts-->

                <!-- for loop starts here -->
                <% user.forEach(function(item,  index)
                {%>
            <div class="card mb-3">
                    <div class="card-body">
                        <ul class="nav">
                                <li class="card-body">      

                                        <div class="row">
                                        <% if(item.user_profile_pic){ %>
                                                <img  src="../public/profile_image/<%= item.user_profile_pic %>" alt="profile image" class="rounded-circle border border-danger" style="width:100px; height:100px">
                                        <% } else { %>
                                                <img  src="../public/profile_image/icon.jpg" alt="profile image 1" class="rounded-circle border border-danger" style="width:100px; height:100px">
                                        <% } %>
                                
                                                <h6><%= item.user_firstname %> <%= item.user_lastname %></h6>
                                                <p>Love U Dear Zindgi</p>
                                        </div>                                                                           
                                </li>
                                <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Followers 100</li>
                                        <li class="list-group-item">Following 200</li>
                                </ul>
                        </ul>          
                    </div>

            </div>  
              <!--/sidebar-nav-fixed -->

              <div class="card mb-3">
                    <div class="card-body">
                            <ul class="nav list-group list-group-flush">
                                <li>      
                                    <h6>Dashboard</h6>
                                    <h6>New Group</h6>                    
                                </li>
                        </ul>          
                    </div>

            </div>

            <div class="card mb-3">
                    <div class="card-body">
                            <ul class="nav list-group list-group-flush">
                                <li> View More</li>
                        </ul>          
                    </div>

            </div>
            <%}); %> <!-- for loop ends here -->
              <!-- you can add one more side bar here -->
              <!-------------------------------------------------------------------------------------------------->
            </div> <!-- col-md-2 ends-->
        <%}<!-- if ends here -->
        else
        {%> 
                <p> <strong>There are no recods available</strong></p>
        <%}%><!-- else ends here -->

          
            

            <!-- /////////////////////////////////////////////////////////////////////////////////////// -->
                                            <!-- adding main middle page -->
            <!-- /////////////////////////////////////////////////////////////////////////////////////// -->


            
            <div class="col-md-6">

                    <div class="card">
                            <div class="card-body">
                                    <% if (user.length > 0)
                                    {%>
                                        <% user.forEach(function(item, index)
                                        { %>
                                                <% if (item.user_profile_pic)
                                                { %>
                                                        <a href=""><img src="../public/profile_image/<%= item.user_profile_pic %>" alt="" class="rounded-circle border border-danger" style="width:50px; height:50px"></a>
                                                        
                                                <%} else 
                                                {%>
                                                        <a href=""><img src="../public/image/1.jpg" alt="" class="rounded-circle border border-danger" style="width:50px; height:50px"></a>
                                                <%}%>
                                                <button class="btn btn-light" style="position: absolute;right:150px;" data-target="#createpost" data-toggle="modal">Create Post</button>
                                                <a href="#" class="btn btn-dark"style="position: absolute;right:0;">Create Video</a>

                                        <%})%>
                                        
                                    <%} else{%>

                                    <%}%>
                              
                            </div>
                    </div>
                    <!--  pop-up page for creating a event or post -->

                    <div class="modal fade" id="createpost" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body">
                                  <form action="http://localhost:4000/posts" method="post" enctype="multipart/form-data">
                                    <div class="form-group">
                                            <textarea name="message" maxlength="120" class="form-control body" placeholder="message"></textarea>
                                      </div>
                                      
                                      <div class="form-group">
                                          <label for="upload" name="uploadPost">Upload Photo</label>
                                          <input type="file" name="feedsposts" class="upload" />
                                          <div class="progress">
                                              <div class="progress-bar" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                      </div>
                                      
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                  <button type="submit" name="Share" class="btn btn-primary">Post</button>
                                </div>
                            </form>
                              </div>
                            </div>
                          </div>
                    <!--  pop-up page for creating a event or post------END--- -->
                <hr> 
                
                <input class="form-control" type="text" placeholder="View Feeds By" aria-label="Search">
                <hr> 

                <!-- Suggestions box -->
                <% if (user.length > 0){ %>
                <% user.forEach(function(item,  index){%>
                <div class="card mb-4" id="suggestions_box" data-userid="<%=item.user_id%>">
                        <div class="card-header">Suggestions</div>
                        <div class="card-body">
                            <ul class="nav">
                                    <li class="card-body text-center">
                                        <div class="row" id="slides" data-userid="<%=item.user_id%>">
                                                <!-- users displayed from server side using ajax-->
                                        </div>
                                      
                                    </li>
                            </ul>          
                        </div>
                </div>
                <%}); %>
                <%}%>
                      
                

                
                 
                                    <% if (items.length > 0)
                                    { %>
                                      <% items.forEach(function(item,  index)
                                      {%>

                                    
                                            
                                        <div class="card mb-3">
                                                <div class="card-header">
                                                        <% if(item.User.user_profile_pic){ %>
                                                                <a href=""><img src="../public/profile_image/<%= item.User.user_profile_pic %>" alt="" class="rounded-circle border border-danger" style="width:50px; height:50px"></a>
                                                            
                                                        <% } else { %>
                                                            <img src="../public/profile_image/icon.jpg" alt="profile image 1" class="rounded-circle border border-danger" style="width:50px; height:50px">
                                                      <% } %>

                                                      <span class="ml-2" style="color:rgba(0,0,0,0.5)"><%= item.User.user_firstname%> <%= item.User.user_lastname%></span>
                                                </div>
                                                
                                                <div class="card-body">
                                                    <ul class="nav">
                                                            <li>
                                                                    <a href="/post/<%= item.event_id %>">
                                                                        <img src="../public/image/<%= item.e_imagepath %>" alt="error check >" class="img-fluid">
                                                                    </a>
                                                              
                                                            </li>
                                                    </ul>          
                                                </div>
                                                <div class="card-footer">
                                                        <% if(item.event_id != -1){ %>
                                                                <button class="like bg-btn fa fa-thumbs-up" data-post="<%= item.event_id %>"></button>
                                                                <span class="countLikes" id="countLikes<%= item.event_id %>"><%=item.Likes.length%></span>
                                                                
                                                        <% }
                                                        else{ %>
                                                                <button class="like bg-btn fa fa-thumbs-up" style="color:#0275d8;" data-post="<%= item.event_id %>"></button>
                                                                <span class="countLikes" id="countLikes<%= item.event_id %>"><%=item.Likes.length%></span>
                                                                <span class="countLikes" style="display:none" data-post_count="<%= item.event_id %>"><%=item.Likes.length%></span>
                                                        <% } %>
                                                               
                                                        <!-- <button class="like bg-btn fa fa-thumbs-up" style="color:#0275d8;" data-post="<%= item.event_id%>"></button> -->
                                                        <!-- <span class="toggle_likes" data-postID="<%= item.event_id %>">Like</span> -->
                                                        <button class="post_comment bg-btn fa fa-comments" id="<%= item.event_id %>"></button>
                                                        <!-- <i class="far fa-comments"></i> -->
                                                        <span class="countComments"><%=item.Comments.length%></span>

                                                </div>
                                                
                                        </div> 
                                        <!-- new display comments hiden-->
                                        <div id="comment_form<%= item.event_id %>" style="display:none;">
                                        
                                        <span id="old_comment<%= item.event_id %>"></span>
                                                        <div class="form-group">
                                                                <textarea name="comment" class="form-control" id="comment<%= item.event_id %>"></textarea>
                                                        </div>
                                                        <div class="form-group">
                                                                <button type="button" data-po="<%= item.event_id %>" name="submit_comment" class="btn btn-primary btn-xs submit_comment">Comment</button>
                                                        </div>
                                                        </div>         
          
                                        <%}); %>
                                    <%}
                                    else
                                    {
                                      %> 
                                      <p> <strong>There are no recods available</strong></p>
                                  <%  } %>
                
                
               
            </div>

            <!-- /////////////////////////////////////////////////////////////////////////////////////// -->
                                            <!-- main middle page ends -->
            <!-- /////////////////////////////////////////////////////////////////////////////////////// -->

            <div class="col-md-4">
                
                <div class="card mb-3">
                        <div class="card-header bg-transparent">
                            <div class="row">
                                    <div class="form-group col-md-9">
                                            <input class="form-control" type="text" placeholder="Find Events" aria-label="Search">
                                      </div>
                                      <div class="form-group col-md-3">
                                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Find</button>
                                      </div>
                            </div>

                        </div>
                        <div class="card-body">
                        
                          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Today</button>
                          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Tommarow</button>
                          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">This Week</button>
                        </div>
                    

                </div>

                <div class="card mb-3">
                        <div class="card-header bg-transparent">Events</div>
                        <div class="card-body">
                            <ul class="nav">
                                    <li class="card-body">        
                                                    <a href=""><img src="../public/image/Upcoming-Events.png" alt="" class="rounded-circle border border-danger" style="width:100px; height:100px;"></a>
                                                    Upcoming Events
                                                    <a href=""><img src="../public/image/activeevents.png" alt="" class="rounded-circle border border-danger" style="width:100px; height:100px"></a>
                                                    Active Events
                                                    <a href=""><img src="../public/image/pastevents.png" alt="" class="rounded-circle border border-danger" style="width:100px; height:100px"></a>
                                                    Previous Events
                                      
                                    </li>
                            </ul>          
                        </div>
                        <div class="card-footer bg-transparent">View More</div>
                      </div>

                    <div class="card mb-3">
                        <div class="card-header bg-transparent">Remended Events For You</div>
                        <div class="card-body">
                            <ul class="nav">
                                    <li class="card-body">
                                           <div class="row">       

                                            <div class="col-lg-3">
                                                    <a href=""><img src="../public/image/newevents.jpg" alt="" class="rounded-circle border border-danger" style="width:100px; height:100px"></a>
                                            </div>
                                            <div class="col-lg-3">
                                                    <a href=""><img src="../public/image/jazzyb.jpg" alt="" class="rounded-circle border border-danger" style="width:100px; height:100px"></a>
                                            </div>
                                            <div class="col-lg-3">
                                                    <a href=""><img src="../public/image/6.jpg" alt="" class="rounded-circle border border-danger" style="width:100px; height:100px"></a>
                                            </div>
                                            <div class="col-lg-3">
                                                    <a href=""><img src="../public/image/1.jpg" alt="" class="rounded-circle border border-danger" style="width:100px; height:100px"></a>
                                            </div>
                                            

                                        </div>
                                      
                                    </li>
                            </ul>          
                        </div>
                        <div class="card-footer bg-transparent">View More
                      </div>


                <!--/sidebar-nav-fixed -->
            </div>
          
        </div><!-- main row ends -->
    </div>
    <%- include('partials/includes/footer') %>


<script>
    
$(document).ready(function() // main script starts
{
        // ...........................................................................  All METHODS  ....................................................................// 
        
        
        // Get all users from database (hint: for follow or unfollow) (display all user for suggestion to follow)
        var user_id = 0; 
        get_user_id();
        

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
                                        alert(user_id)
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
                

        
        fetch_user(); // calling fetch_user() functin when page loads
        //fetch_user();
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
                                        {
                                                var status =""
                                                let fullname = response[i].user_firstname + ' ' + response[i].user_lastname;
                                                let image = response[i].user_profile_pic 
                                                let userid = response[i].user_id;
                                                for(var j = 0, len_follow = response[i].Follows.length; j < len_follow; j++)
                                                {
                                                       
                                                       status =  response[i].Follows[j].status
                                                       var receiver_id =  response[i].Follows[j].receiver_id
                                                       alert("hello")
                                                       if(user_id != receiver_id)
                                                       {
                                                                status="follow"
                                                                alert(status)
                                                       }
                                                       else if(user_id == receiver_id)
                                                       {
                                                               status = "Accept"
                                                       }
                                                }
                                                if(status == "")
                                                {
                                                       //alert("in undefined ")
                                                        status="follow" 
                                                }
                        suggestion_for_user.innerHTML =  suggestion_for_user.innerHTML + 
                        `<div class="card col-lg-4" data-user_id="${user_id}">
                                
                                <img src="../public/profile_image/"${image} alt="" class="rounded-circle border border-danger" style="width:60px; height:60px"/>
                                <p style="font-size:10px;"><strong>${fullname}</strong></p>
                                <button data-action="${status}" data-sender_id="${userid}" class="btn-post mr-2 btn btn-dark followbtn" style="font-size:6px;" type="button">${status}</button>
                                <button class="btn-post mr-2 btn btn-success" style="font-size:6px;" type="button">message</button>
                                <a href="#"> <div id="viewprofile${userid}" class="card-footer bg-transparent">View Profile</div></a>
                        </div>`;

       // suggestion_for_user.innerHTML =  suggestion_for_user.innerHTML + `<div class="jumbotron"><p class="lead">${fullname}</p><p>${userid}</p><p>${status}</p></div>`;
                                                
                                                
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
                

        }// fetch_user() .........ends


        // follow a  user
        $(document).on('click', '.followbtn', function()
        {
                //var suggestion_box = $("#suggestion_box");
                //var slides = $("#slides")
               // alert("pppppppppppppppp")
                var sender_id =$(this).data('sender_id'); // get user_id to whom you want to send request
                var action = $(this).data('action') // status ..what you want to do follow or unfollow
                //alert(action)
                //var parent  = $(this)
                $.ajax({
                                url:"/posts/follow",
                                method:"POST",
                                data:{sender_id:sender_id,action:action},
                                success:function(response)
                                {
                                        if(response == "success")
                                        {
                                                alert("request has been sent")
                        //parent.html(<button data-action="${status}" data-sender_id="${userid}" class="btn-post mr-2 btn btn-dark followbtn" style="font-size:6px;" type="button">Requested</button>)
                                
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


        
        // like post section
        $('.like').on('click', function(events)
        {
                event.preventDefault();
                event.stopPropagation();
                
                var postId = $(this).attr('data-post');
                var postId = parseInt(postId,10)
                //var parent  = $(this)
                $.ajax(
                        {
                                type: 'POST',
                                url:  '/posts/like/' + $(this).attr('data-post'),
                                contentType: "application/json", 
                                //data: JSON.stringify(data),
                                success : function(response)
                                {
                                        
                                        if(response == false)
                                        {
                                                alert("You have already liked this post")
                                        }
                                        else 
                                        {
                                                //parent.html(response.count)
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

        // on comment button clicked view all comments for particular post
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
                                response.forEach(function(item, index)
                                { 
                                        var comment_data = item.comment
                                        //old_comment.append(document.createTextNode(comment_data));
                                        //$("#old_comment"+post_id).html(`<div class="jumbotron jumbotron-fluid"><p class="lead">${comment_data}</p></div>`);
                                        old_comment.innerHTML =  old_comment.innerHTML + `<div class="jumbotron"><p class="lead">${comment_data}</p></div>`;
                                        //document.getElementById("old_comment"+post_id).innerHTML=item.comment+document.getElementById("old_comment"+post_id).innerHTML;                              
                                })
                                        // document.getElementById("demo").innerHTML += '<br>' + employee.name;
                                        $('#comment_form'+post_id).slideToggle('slow');         
                        }

                
                });
        });

        
        // submit comment to server
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
                                                $('#comment_form'+post_id).slideUp('slow');
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
    

}); // main script ends
</script>



///////////////////////////////////

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const Op = Sequelize.Op
// const db = require('../../config/db');
// const Posts = require('../../model/postbody_model');
// const User = require('../../model/user_model');
// const Like = require('../../model/like_model');
// const Comment = require('../../model/comment_model');
const {Users,Posts,Likes,Comments,Follows} = require('../../model/model_index');

const multer = require('multer');
const path = require('path');

router.use('/public', express.static(path.join(__dirname, 'public')));
router.use('/views', express.static(path.join(__dirname, 'views')));

var storage = multer.diskStorage({
    destination: function(req, file, cb)
    {
        cb(null,path.join(__dirname,'../../public/image'))
    },
    filename: function(req, file, cb)
    {
        cb(null,Date.now() + path.extname(file.originalname))
    }
});

var upload = multer({ 
    storage: storage, 
    fileFilter: function (req, file, cb) {
            var types = ['image/jpeg','image/png'];
                type  = types.find(type => type == file.mimetype);
                  
                  if(!type){
                      return cb(null,false);
                  }

                  return cb(null,true);
          
    }
});



// view home(feed section) api
router.get('/posts', function(req, res)
{
    const user_id = req.session.user_id;
    console.log("user_id check =>>",user_id)

    Posts.findAndCountAll({include:[{ model: Likes},{ model: Comments},{ model: Users}]})
    .then((postdata)=>
    {
        //res.json(postdata.rows)  
        Users.findAll({where:{user_id:user_id}})
        .then((userdata)=>
        {
            //res.send(postdata.rows)
            res.render('home',{title:'home',items:postdata.rows,user:userdata});
        }) 
        .catch((err)=>
        {
            console.error(err)
            res.status(501)
            .send({
                    error : "error..... check console log"
                  })    
        })
        
    })
    .catch((err)=>
    {
        console.error(err)
        res.status(501)
        .send({
                error : "error..... check console log"
              })
    })
    
	
});

// upload post api
router.post('/posts', upload.single('feedsposts'),function (req,res)
{
    console.log("image path short => ", req.file)
    if(req.file)
    {
        const user_id = req.session.user_id;
        Users.findOne({ where:{user_id:user_id}})
        .then((users)=>
        {

                 if(users)
                 {
                     const user_id = users.user_id;
                     const message = req.body.message;
                     const imagepath = req.file.filename;

                    Posts.create({user_id:user_id, event_message: message, e_imagepath: imagepath})
                    .then((user)=>
                    {
                        res.redirect("http://localhost:4000/posts");
                        //res.render('home',{title:'home',items:user});
                    })
                    .catch((err)=>
                    {
                        console.error(err)
                        res.status(501).send({
                            error : "error..... check console log"
                        })
                    })
                 }
             
        })
        .catch((err)=>
        {
             console.error(err)
             res.status(501).send({
                 error : "error..... check console log"
             })
        })
    }
    else
    {
        //query +=  " '"+req.file.path+"')";
        res.status("sent file");

    }
});

// like post api
router.post('/posts/like/:id', function(req, res, next)
{
    const post_id = req.params.id;
    const user_id = req.session.user_id;
    const like_status = "liked";
    console.log("insede likes api")
    Likes.findOrCreate({where:{user_id:user_id,event_id:post_id,like_status:like_status}})
    .then((likedata)=>
    {
        if(likedata[1] == false) // if user has already liked the post then return false
        {
            res.send(likedata[1])
        }
        else if(likedata[1] == true) // if user has not liked a post then, create like and then return true
        {
            //res.send(likedata[1])
            Likes.findAndCountAll({where:{event_id:post_id}})
            .then((all_likes)=>
            {
                res.send(all_likes);
            })
            .catch((err)=>
            {
                console.error(err)
                res.status(501).send({error : "error..... check console log"})
            })
        }
        
                            
    })
    .catch((err)=>
    {
        console.error(err)
        res.status(501).send({error : "error..... check console log"})
    })
});

// add comment to post api
router.post('/posts/add_comment/:id', function(req, res, next)
{
    console.log("inside comment api")
    const post_id = req.params.id;
    const user_id = req.session.user_id;
    const comment_content = req.body.comment_content;
    console.log(comment_content);

    Comments.create({comment:comment_content,user_id:user_id,event_id:post_id})
    .then((comment_response)=>
    {
        //console.log(comment_response)
        //res.send("success")
            Comments.findAndCountAll({where:{event_id:post_id}})
            .then((comment_data)=>
            {
                res.send(comment_data);
            })
            .catch((err)=>
            {
                console.error(err)
                res.status(501).send({error : "error..... check console log"})
            })
        
        
                            
    })
    .catch((err)=>
    {
        console.error(err)
        res.status(501).send({error : "error..... check console log"})
    })
});

// fetch all comments
router.post('/posts/fetch_add_comment', function(req, res, next)
{
    //console.log("fetch all comments api")
    const post_id = req.body.post_id;
    const user_id = req.session.user_id;
    const action = req.body.action;
    //const comment_content = req.body.comment_content;
    //console.log(post_id,action);
    if(action == "fetch_all_comment")
    {
        Comments.findAll({where:{event_id:post_id}})
        .then((comment_response)=>
        {
            //console.log(comment_response)
            res.send(comment_response) 
                                
        })
        .catch((err)=>
        {
            console.error(err)
            res.status(501).send({error : "error..... check console log"})
        })
    }
    else
    {
        res.send("click on comment to view all comments");    
    }
});

// add submit comment to server database
router.post('/posts/add_comment', function(req, res, next)
{
    console.log("add_comment api")
    const user_id = req.session.user_id;
    const post_id = req.body.post_id;
    const comment = req.body.comment;
    const action = req.body.action;
    
    
    if(action == "submit_comment")
    {
        Comments.create({comment:comment,user_id:user_id,event_id:post_id})
        .then((comment_response)=>
        {
                res.send("success");
        })
        .catch((err)=>
        {
            console.error(err)
            res.status(501).send({error : "error..... check console log"})
        })
    }
});

// for testing purpose api
router.get('/testapi',function (req,res)
{
    const user_id = req.session.user_id;

                    Users.findAll({where:{user_id:user_id},include:[{model:Posts,include:[{model:Likes,include:[{model:Users}]}]}]})
                    .then((user)=>
                    {
                        if(user.length > 0)
                        {
                                
                                for (var i = 0; i < user.length; i++)
                                {
                                    var Post_len = user[i].Posts
                                    console.log("Post_len",Post_len.length)
                                    for (var j = 0; j < Post_len.length; j++) 
                                    {
                                        console.log(Post_len[j].event_message);
                                    }
                                    
                                }
                         
                        }
                        else
                        {
                            
                        }
                       


                        // res.render('profile',{title:'profile',items:user});
                        res.send(user);
                        
                    })
                    .catch((err)=>
                    {
                        console.error(err)
                        res.status(501).send({
                            error : "error..... check console log"
                        })
                    })

    
  
});

// fetch user for user suggestion (follow or unfollow)
// router.get('/posts/get_user',function(req,res,next)
// {
//     //console.log(req.body.action);
//     console.log("user_id",req.session.user_id);
//     const user_id = req.session.user_id
//     Users.findAll({where:{user_id:{[Op.notIn]:[user_id]}},limit: 3})
//     .then((get_user)=>
//     {
//         res.send(get_user);
//     })
//     .catch((err)=>
//     {
//         console.error(err)
//         res.status(501).send(
//         {
//             error : "error..... check console log"
//         })
//     })
// })

router.get('/posts/user_id',function(req,res,next)
{
    console.log("get user id");
    const user_id = req.session.user_id
    res.send(user_id.toString());
})

router.get('/posts/get_user',function(req,res,next)
{
    console.log("get_user data");
    console.log("user_id",req.session.user_id);
    const user_id = req.session.user_id
    Users.findAll( {
                        where:
                        {
                            user_id:{[Op.notIn]:[user_id]}
                        },
                        include:[{model:Follows}]
                        //limit: 3
                    })
    .then((get_user)=>
    {
        res.send(get_user);
    })
    .catch((err)=>
    {
        console.error(err)
        res.status(501).send(
        {
            error : "error..... check console log"
        })
    })
})

// follow(api) a user
router.post('/posts/follow', function(req,res,next)
{
    console.log("inside follow api")
    const user_id = req.session.user_id; // who's sending the request
    var action = req.body.action;
    const sender_id = req.body.sender_id // to whom you want to send follow request
    if(action == "follow")
    {
        action = "requested"  // requesting a user to accept the request
    }
    Follows.create({user_id:user_id,receiver_id:sender_id,status:action})
    .then((response)=>
    {
        res.send("success")
    })
    .catch(()=>
    {
        console.error(err)
        res.status(501).send(
        {
            error : "error..... check console log"
        })
    })
    
    //res.send("success");
}) 
module.exports = router;
