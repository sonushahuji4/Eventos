////////////////// making changes //////////////////
 <div class="col-4">

                                                        <a href=""><img src="../public/image/<%=post_data[j].e_imagepath %>" alt="" class="img-fluid rounded-top border border-white" style="width:300px; height:200px"></a>
                                                        <div class="card-footer rounded-left" style="background-color:#FFFFFF"><i class="fas fa-heart" style="color:#EF5350"></i><span><%= post_data[j].Likes.length %></span><i class="fas fa-comment" style="padding-left:25px;color:#E1BEE7"></i><span>100</span></i> <i class="fas fa-paper-plane" style="padding-left:25px;color:#32A5F5"></i><i class="fas fa-share" style="padding-left:25px;"></i></div>                                                              
                                                    
                                        </div>


<% if(items.length > 0){%>

                                                <% for (var i = 0, len = items.length; i < len; i++) {%>
                                                        
                                                        <h1><%= items[i].Posts[i].length %></h1><br />
                                                        <h1><%= items[i].Posts[i].e_imagepath %></h1>

                                                        <img src="../public/image/<%=items[i].Posts[i].e_imagepath %>" alt="" class="rounded-circle border border-danger" style="width:50px; height:50px">
                                                        
                                                        <h1><%= items[i].Posts[i].Likes[i].user_id %></h1>
                                                <%}%>
                                            
                                            <%}else{%>
                                                 <span>No records are available</span>
                                        <%}%>



















CREATE TABLE IF NOT EXISTS `sessions` (
    `session_id` varchar(128) COLLATE utf8mb4_bin NOT NULL,
    `email` varchar(128) NOT NULL,
    `mobile` varchar(128) NOT NULL,
    `expires` int(11) unsigned NOT NULL,
    `data` text COLLATE utf8mb4_bin,
    PRIMARY KEY (`session_id`)
  ) ENGINE=InnoDB -->



//<%=item.Likes[index].user_id%>
<!-- 
    <!-- nav bar -->
    <%- include('partials/includes/header') %>
    <%- include('partials/includes/navbar') %>


    <br /> <br /> <br /> <br />

    <div class="card mb-3"> 
                <% if (items.length > 0)
                { %>


                  <% for(var i=0;i< items.length;i++)
                  {%>
                    <h1><%= items[i].event_message %></h1>
                    <% for(var j=0;j< items[i].Likes.length;j++)
                    {%>
                      <h1><%= items[i].Likes[j].like_id %></h1>                                                     
                    <%}%>
                    
                  <%}%>

                <%}
                else{%> 
                    <p> <strong>There are no recods available</strong></p>
                <%} %>
        
    </div> -->

  Query Example

  Users.findAndCountAll(
        {
            include: 
            [
               { model: Likes, required: true}
            ],
          })
    .then((postdata)=>
    {
        res.json(postdata)   
    })
    
    
    console.log(result.count); => gives total counts
    console.log(result.rows); => gives all users informations
    ----------- Result --------

    {
    "count": 14,
    "rows": [
        {
            "user_id": 1,
            "user_firstname": "sonu",
            "user_lastname": "shahuji",
            "user_dob": "1999-04-19",
            "user_gender": "male",
            "user_mobile_no": "9594196932",
            "user_email": "sonushahuji4",
            "user_username": "sonu",
            "user_password": "1234",
            "user_profile_pic": null,
            "createdAt": "2019-05-30T14:43:54.000Z",
            "updatedAt": "2019-05-30T14:43:54.000Z",
            "Likes": [
                {
                    "like_id": 1,
                    "user_id": 1,
                    "event_id": 1,
                    "createdAt": "2019-05-30T14:47:20.000Z",
                    "updatedAt": "2019-05-30T14:47:20.000Z"
                },
                {
                    "like_id": 2,
                    "user_id": 1,
                    "event_id": 1,
                    "createdAt": "2019-05-30T14:55:22.000Z",
                    "updatedAt": "2019-05-30T14:55:22.000Z"
                },
                {
                    "like_id": 3,
                    "user_id": 1,
                    "event_id": 4,
                    "createdAt": "2019-05-30T14:56:50.000Z",
                    "updatedAt": "2019-05-30T14:56:50.000Z"
                },
                {
                    "like_id": 4,
                    "user_id": 1,
                    "event_id": 3,
                    "createdAt": "2019-05-30T14:57:05.000Z",
                    "updatedAt": "2019-05-30T14:57:05.000Z"
                },
                {
                    "like_id": 13,
                    "user_id": 1,
                    "event_id": 2,
                    "createdAt": "2019-05-30T15:15:23.000Z",
                    "updatedAt": "2019-05-30T15:15:23.000Z"
                },
                {
                    "like_id": 14,
                    "user_id": 1,
                    "event_id": 1,
                    "createdAt": "2019-05-31T09:34:11.000Z",
                    "updatedAt": "2019-05-31T09:34:11.000Z"
                }
            ]
        },
        {
            "user_id": 2,
            "user_firstname": "ankit",
            "user_lastname": "vish",
            "user_dob": "2019-05-17",
            "user_gender": "male",
            "user_mobile_no": "88888888888",
            "user_email": "ankit@gmail.com",
            "user_username": "ankit",
            "user_password": "1234",
            "user_profile_pic": null,
            "createdAt": "2019-05-30T14:49:30.000Z",
            "updatedAt": "2019-05-30T14:49:30.000Z",
            "Likes": [
                {
                    "like_id": 5,
                    "user_id": 2,
                    "event_id": 1,
                    "createdAt": "2019-05-30T14:57:24.000Z",
                    "updatedAt": "2019-05-30T14:57:24.000Z"
                },
                {
                    "like_id": 6,
                    "user_id": 2,
                    "event_id": 4,
                    "createdAt": "2019-05-30T14:57:30.000Z",
                    "updatedAt": "2019-05-30T14:57:30.000Z"
                }
            ]
        },
        {
            "user_id": 3,
            "user_firstname": "shamim",
            "user_lastname": "shaik",
            "user_dob": "2019-05-30",
            "user_gender": "male",
            "user_mobile_no": "9999999999",
            "user_email": "shamim@gmail.com",
            "user_username": "shamim",
            "user_password": "1234",
            "user_profile_pic": null,
            "createdAt": "2019-05-30T14:51:27.000Z",
            "updatedAt": "2019-05-30T14:51:27.000Z",
            "Likes": [
                {
                    "like_id": 10,
                    "user_id": 3,
                    "event_id": 2,
                    "createdAt": "2019-05-30T14:58:27.000Z",
                    "updatedAt": "2019-05-30T14:58:27.000Z"
                },
                {
                    "like_id": 11,
                    "user_id": 3,
                    "event_id": 5,
                    "createdAt": "2019-05-30T14:58:33.000Z",
                    "updatedAt": "2019-05-30T14:58:33.000Z"
                },
                {
                    "like_id": 12,
                    "user_id": 3,
                    "event_id": 3,
                    "createdAt": "2019-05-30T14:58:36.000Z",
                    "updatedAt": "2019-05-30T14:58:36.000Z"
                }
            ]
        },
        {
            "user_id": 4,
            "user_firstname": "divya",
            "user_lastname": "rile",
            "user_dob": "2019-05-01",
            "user_gender": "male",
            "user_mobile_no": "5556565656",
            "user_email": "divyarile@gmail.com",
            "user_username": "divya",
            "user_password": "1234",
            "user_profile_pic": null,
            "createdAt": "2019-05-30T14:53:16.000Z",
            "updatedAt": "2019-05-30T14:53:16.000Z",
            "Likes": [
                {
                    "like_id": 7,
                    "user_id": 4,
                    "event_id": 1,
                    "createdAt": "2019-05-30T14:57:53.000Z",
                    "updatedAt": "2019-05-30T14:57:53.000Z"
                },
                {
                    "like_id": 8,
                    "user_id": 4,
                    "event_id": 3,
                    "createdAt": "2019-05-30T14:57:59.000Z",
                    "updatedAt": "2019-05-30T14:57:59.000Z"
                },
                {
                    "like_id": 9,
                    "user_id": 4,
                    "event_id": 5,
                    "createdAt": "2019-05-30T14:58:04.000Z",
                    "updatedAt": "2019-05-30T14:58:04.000Z"
                }
            ]
        }
    ]
}


.........................................
Posts.findAll()
                    .then((postdata)=>
                    {
                        Likes.count()
                        .then((likes)=>
                        {
                            console.log("likedata check =>> ",likes);
                            res.render('home',{title:'home',likedata:likes,items:postdata});
                        })
                        .catch((err)=>
                        {
                            console.error(err)
                            res.status(501).send({
                                error : "error..... check console log"
                            })
                        })
                        
                    })
                    .catch((err)=>
                    {
                        console.error(err)
                        res.status(501).send({
                            error : "error..... check console log"
                        })
                    })

//////////////////////////////////////////////////

                                        <% if (items.length > 0)
                                        { %>
                                            <% items.forEach(function(item,  index)
                                            {%>

                                            <%}); %>
                                        <%}
                                        else
                                        {%> 
                                                  <p> <strong>There are no recods available</strong></p>
                                        <%}%>



//////////////////////////////////////////////////
                                        <%if(user.length>0)
                                        {%>
                                                <% forEach(function(item, index)
                                                <%{%>

                                                <%})%>
                

                                        <%}else{%>

                                        <%}%>
                                


//////////////////////////////  profile.ejs  //////////////////////////////




<%- include('partials/includes/header') %>
<%- include('partials/includes/navbar') %>


<br /> <br /> <br /> <br />

  <div class="container">
      <div class="row">
          <div class="col-lg-3 col-md-6">                               
                                        <% if (items.length > 0)
                                        { %>
                                            <% items.forEach(function(item,  index)
                                            {%>
                                                <ul class="nav card text-center">
                                                        <ul class="nav card text-center-start" style="padding: 10px">
                                                                <span>Profile : <a href="#">Edit</a></h6>
                                                        <li class="card-body">
                                                                <% if(item.user_profile_pic){ %>
                                                                    <img src="../public/profile_image/<%= item.user_profile_pic %>" alt="profile image" class="img-fluid rounded-circle w-50 mb-3">
                                                                <% } else { %>
                                                                      <img src="../public/profile_image/icon.jpg" alt="profile image 1" class="img-fluid rounded-circle w-50 mb-3">
                                                                <% } %>
                                                                <h6> <%= item.user_firstname %> <%= item.user_lastname %></h3>
                                                                    <p>Bio | Status</p>
                                                                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Follow</button>
                                                                    <button class="btn btn-outline-success text-info my-2 my-sm-0" type="submit">Unfollow</button>
                                                                    
                                                                Follower <small>100</small> | Following <small>200</small>
                                                        </li>
                                                </ul>

                                            <%}); %>
                                        <%}
                                        else
                                        {%> 
                                                  <p> <strong>There are no recods available</strong></p>
                                        <%}%>

                                        <!-- //////////////////////// About User ///////////////////////// -->

                                        <% if (items.length > 0)
                                        { %>
                                            <% items.forEach(function(item,  index)
                                            {%>
                                                <ul class="nav card text-center-start" style="padding: 10px">
                                                    <span>About : <a href="#">Edit</a></h6>
                                                        <li class="card-body">
                                                        <div class="form-group">
                                                                <i class="far fa-meh"></i>
                                                                <%= item.user_firstname %> <%= item.user_lastname %>
                                                        </div>
                                                    
                                                        <div class="form-group">
                                                                <i class="fas fa-id-badge"></i>
                                                                <%= item.user_mobile_no %>
                                                        </div>

                                                        <div class="form-group">
                                                                <i class="fas fa-envelope"></i>
                                                                <%= item.user_email %>
                                                        </div>
                                                        <div class="form-group">
                                                                <i class="fas fa-briefcase"></i>
                                                                India Mumbai 
                                                        </div>  
                                                        </li>
                                                </ul>

                                            <%}); %>
                                        <%}
                                        else
                                        {%> 
                                                  <p> <strong>There are no recods available</strong></p>
                                        <%}%>

                                         <!-- //////////////////////// Photo ///////////////////////// -->

                                         <% if (items.length > 0)
                                         { %>
                                             <% items.forEach(function(item,  index)
                                             {%>
                                                
                                                
                                                 <ul class="nav card text-center-start" style="padding: 10px">
                                                     <span>Gallary : <a href="#">Edit</a></h6>
                                                         
                                                         <li class="card-body">
                                                                <div class="row">
                                                                        <div class="col-lg-6">
                                                                         <a href="#"><img src="../public/profile_image/<%= item.user_profile_pic %>"class="img-fluid w-80 mb-3" alt="Image"/></a>
                                                                        </div>
                                                                        <div class="col-lg-6">
                                                                         <a href="#"><img src="../public/profile_image/<%= item.user_profile_pic %>" class="img-fluid w-80 mb-3" alt="Image"/></a>
                                                                        </div>

                                                                        <div class="col-lg-6">
                                                                                <a href="#"><img src="../public/profile_image/<%= item.user_profile_pic %>"class="img-fluid w-80 mb-3" alt="Image"/></a>
                                                                               </div>
                                                                               <div class="col-lg-6">
                                                                                <a href="#"><img src="../public/profile_image/<%= item.user_profile_pic %>" class="img-fluid w-80 mb-3" alt="Image"/></a>
                                                                               </div>

                                                                               <div class="col-lg-6">
                                                                         <a href="#"><img src="../public/profile_image/<%= item.user_profile_pic %>"class="img-fluid w-80 mb-3" alt="Image"/></a>
                                                                        </div>
                                                                        <div class="col-lg-6">
                                                                         <a href="#"><img src="../public/profile_image/<%= item.user_profile_pic %>" class="img-fluid w-80 mb-3" alt="Image"/></a>
                                                                        </div>
                                                                </div>
                                                           
                                                         </li>
                                                 </ul>
 
                                             <%}); %>
                                         <%}
                                         else
                                         {%> 
                                                   <p> <strong>There are no recods available</strong></p>
                                         <%}%>
                                       
    
          </div>

          
          <!--/span-->
          <div class="col-md-6">
                <div class="container-fluid"> 

                    <% if (posthome.length > 0)
                    { %>
                        <% posthome.forEach(function(item,  index)
                        {%>
                            <div class="row mb-2">  
                                    <div class="post-body mt-2">
                                            <% if(item.e_imagepath){ %>
                                                <img src="../public/image/<%= item.e_imagepath %>" alt="profile image" class="img-fluid">
                                            <% } else { %>
                                                  <img src="../public/profile_image/icon.jpg" alt="profile image 1" class="mb-2 rounded">
                                            <% } %>
                                    </div>
                            </div>
                                           
                            

                        <%}); %>
                    <%}
                    else
                    {%> 
                              <p> <strong>There are no recods available</strong></p>
                    <%}%>
                            
                               
                                
              </div>
             
          </div>
          <!--/span-->
          <div class="col-md-3">
              <div class="sidebar-nav-fixed pull-right affix">
                  <div class="well">
                        <ul class="nav flex-column">
                                <li class="nav-item">
                                
                                        <div class="post-body mt-4">
                                                  <img src="../public/profile_image/sonu.jpg" alt="profile image" class="img-fluid">
                                                
                                        <h4> Sonu Shahuji</h4> 
                                        <p class="card-text">This is a wider card with supporting text below as</p>   
                                                  
                                        </div>
                                    
                                
                                </li>
                            </ul>
                  </div>
                  <!--/.well -->
              </div>
              <!--/sidebar-nav-fixed -->
          </div>
          <!--/span-->
      </div>
      <!--/row-->
  
  </div>
  <!--/.fluid-container


  //////////////////////////////////    profile.ejs 2  ////////////////////////////////

  


<%- include('partials/includes/header') %>
<%- include('partials/includes/navbar') %>


<br /> <br /> <br /> <br />

<div class="container">
       <div class="row">
            <div class="col-2">
                
                    <div class="card">
                            <div class="card-body">
                                <ul class="nav">
                                        <li class="card-body">      
        
                                                <div class="row">
                                                
                                                        <img src="../public/profile_image/icon.jpg" alt="profile image 1" class="rounded-circle border border-danger" style="width:100px; height:100px">
                                                
                                        
                                                        <h6>Sonu Shahuji</h6>
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
        
               </div>

            
           <div class="col-10">
               
            
                <div class="card text-center">
                        <div class="card-header">
                          <ul class="nav nav-pills card-header-pills">
                            <li class="nav-item">
                              <a class="nav-link active" href="#">Up-Coming</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="#">Active</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link disabled" href="#">Past</a>
                            </li>
                          </ul>
                        </div>
                        <div class="row">
                        <div class="card-body">
                                <img class="card" src="../public/image/charts.gif" alt="Card image" style="width:100%; height:400px">
                        </div>
                      
                
                        
                </div>
                </div>
        
                <hr>
                <div class="card text-center">
                <div class="card-body">
                      
                <div class="card-header">
                        <span>Upcoming Events</span>
                </div>
                <div class="row">
                        <div class="col-3">
                                <div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
                                        <div class="card-header">Header</div>
                                        <div class="card-body">
                                          <h5 class="card-title">Warning card title</h5>
                                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                </div>
                            </div>    
                            <div class="col-3">
                                    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
                                            <div class="card-header">Header</div>
                                            <div class="card-body">
                                              <h5 class="card-title">Secondary card title</h5>
                                              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                          </div>
                            </div>
                            <div class="col-3">
                                    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                                            <div class="card-header">Header</div>
                                            <div class="card-body">
                                              <h5 class="card-title">Primary card title</h5>
                                              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                          </div>
                              </div>
        
                              <div class="col-3">
                                    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
                                            <div class="card-header">Header</div>
                                            <div class="card-body">
                                              <h5 class="card-title">Secondary card title</h5>
                                              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                          </div>
                            </div>
                </div>
                </div>
        
                <div class="card-header">
                        <span>Active Events</span>
                </div>
                <div class="card-body">
                <div class="row">
                        <div class="col-3">
                                <div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
                                        <div class="card-header">Header</div>
                                        <div class="card-body">
                                          <h5 class="card-title">Warning card title</h5>
                                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                </div>
                            </div>    
                            <div class="col-3">
                                    <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
                                            <div class="card-header">Header</div>
                                            <div class="card-body">
                                              <h5 class="card-title">Danger card title</h5>
                                              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                    </div>
                            </div>
                            <div class="col-3">
                                    <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
                                            <div class="card-header">Header</div>
                                            <div class="card-body">
                                              <h5 class="card-title">Success card title</h5>
                                              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                          </div>
                              </div>
        
                              <div class="col-3">
                                    <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
                                            <div class="card-header">Header</div>
                                            <div class="card-body">
                                              <h5 class="card-title">Danger card title</h5>
                                              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                    </div>
                            </div>
                </div>
                </div>
        
                <div class="card-header">
                        <span>Past Events</span>
                </div>
                <div class="card-body">
                <div class="row">
                    <div class="col-3">
                        <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
                                <div class="card-header">Header</div>
                                <div class="card-body">
                                  <h5 class="card-title">Info card title</h5>
                                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                        </div>
                    </div>    
                    <div class="col-3">
                        <div class="card bg-light mb-3" style="max-width: 18rem;">
                                <div class="card-header">Header</div>
                                <div class="card-body">
                                  <h5 class="card-title">Light card title</h5>
                                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
                                <div class="card-header">Header</div>
                                <div class="card-body">
                                  <h5 class="card-title">Dark card title</h5>
                                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                      </div>
                    </div>
        
                    <div class="col-3">
                            <div class="card bg-light mb-3" style="max-width: 18rem;">
                                    <div class="card-header">Header</div>
                                    <div class="card-body">
                                      <h5 class="card-title">Light card title</h5>
                                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                            </div>
                        </div>
                </div>
                </div>
        
            </div>
        </div>
           </div>
       </div>
       
</div>

/////////////////////////////////// profile.ejs 3 //////////////////////
<%- include('partials/includes/header') %>
<%- include('partials/includes/navbar') %>


<br /> <br />

<div class="container" id="changebgcolor">



            <!-- row 1 sub-row I-->
            <div class="row">
                            <div class="card-body">
                                    <img class="card" src="../public/image/charts.gif" alt="Card image" style="width:100%; height:400px">
                            </div>

            </div><!-- row 1 sub-row I ends-->

            <!-- row 1 sub-row II-->
            <div class="row" style="width:100%">
                    <div class="card text-center" style="width:100%">
                            <a href=""><img src="../public/image/5.jpg" alt="" class="img-fluid rounded-circle border border-danger" style="width:100px; height:100px"></a>
                            <h5>Sonu Shahuji</h5>
                            <div class="card-body">
                                    <span>Follwers 10k |</span>
                                    <span>Follwing 200</span>
                                
                            </div>
                          </div>

            </div><!-- row 1 sub-row II ends-->
                
        

        <!-- row 2-->
        
        <div class="row">

            <!-- row 2 col I-->
            <div class="col-2">
                    <div class="card">
                            <div class="card-body">
                                <ul class="nav">
                                        <li class="card-body">      
                                                
                                        <img src="../public/profile_image/icon.jpg" alt="profile image 1" class="rounded-circle border border-danger" style="width:100px; height:100px">
                                                                                                                           
                                        </li>
                                </ul>          
                            </div>
        
                    </div>

            </div><!-- row 2 col I ends-->

            <!-- row 2 col II-->
            <div class="col-10">

                <div class="row-1"><!-- for heading display-->
                    <div class="card text-center" style="background-color:EBF5FB">
                            <div class="card-header text-center">
                                <ul class="nav">
                                    <li class="nav-item">
                                    <a class="nav-link active" href="#">Up-Coming</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link disabled" href="#">Active</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link disabled" href="#">Past</a>
                                    </li>
                                </ul>
                            </div>
                    </div>  

                </div>

                <div class="row-11" class="websonu"> <!-- for events display-->
                    <hr>
                    <div class="card text-center" style="background-color:#F4F6F6">
                    <div class="card-body">
                          
                    <div class="row">
                            <div class="col-4">
                                    <a href=""><img src="../public/image/5.jpg" alt="" class="img-fluid" style="width:400px; height:200px"></a>
                                    <div class="card-footer">footer</div>
                            </div>    
                            <div class="col-4">
                                        <a href=""><img src="../public/image/4.jpg" alt="" class="img-fluid" style="width:400px; height:200px"></a>
                                        <div class="card-footer">footer</div>
                            </div>
                            <div class="col-4">
                                        <a href=""><img src="../public/image/11.jpg" alt="" class="img-fluid" style="width:400px; height:200px"></a>
                                        <div class="card-footer">footer</div>
                            </div>
            
                                  
                    </div>
                    </div>
            
                   
                    <div class="card-body">
                    <div class="row" class="websonu">
                            <div class="col-4">
                                    <a href=""><img src="../public/image/8.jpg" alt="" class="img-fluid " style="width:400px; height:200px"></a>
                                    <div class="card-footer">footer</div>
                                </div>    
                                <div class="col-4">
                                        <a href=""><img src="../public/image/9.jpg" alt="" class="img-fluid " style="width:400px; height:200px"></a>
                                        <div class="card-footer">footer</div>
                                </div>
                                <div class="col-4">
                                        <a href=""><img src="../public/image/10.jpg" alt="" class="img-fluid " style="width:400px; height:200px"></a>
                                        <div class="card-footer">footer</div>
                                  </div>
            
                                  
                        </div>
                    </div>
                   
            
                    
                    <div class="card-body" class="websonu">
                    <div class="row">
                        <div class="col-4">
                                <a href=""><img src="../public/image/3.jpg" alt="" class="img-fluid " style="width:400px; height:200px"></a>
                                <div class="card-footer">footer</div>
                        </div>    
                        <div class="col-4">
                                <a href=""><img src="../public/image/5.jpg" alt="" class="img-fluid " style="width:400px; height:200px"></a>
                                <div class="card-footer">footer</div>
                        </div>
                        <div class="col-4">
                                <a href=""><img src="../public/image/4.jpg" alt="" class="img-fluid " style="width:400px; height:200px"></a>
                                <div class="card-footer">footer</div>
                        </div>
            
                    </div>
                    </div>

                </div>

            </div><!-- row 2 col II ends-->

        </div> <!-- row 2 ends-->
    </div>

    



<%- include('partials/includes/header') %>
<%- include('partials/includes/navbar') %>


<br /> <br />

<div class="container">
    

       
                <!-- row 1 sub-row I-->
        <div class="row">
                        <div class="card-body">
                                <img class="card" src="../public/image/charts.gif" alt="Card image" style="width:100%; height:400px">
                        </div>
        
        </div><!-- row 1 sub-row I ends-->
        
        <div class="container">
                        <div class="row">
                                <div class="card rounded-circle">
                                        <div class="card-img">
                                                <a href=""><img src="../public/image/1.jpg" alt="" class="img-fluid rounded-circle border border-danger"style="width:100px; height:100px"></a></li>                
                                                <div class="card-img-overlay">Gallery</div>
                                        </div>
                                </div>
                                <div class="card rounded-circle">
                                                <div class="card-img">
                                                        <a href=""><img src="../public/image/5.jpg" alt="" class="img-fluid rounded-circle border border-danger"style="width:100px; height:100px"></a></li>                
                                                        <div class="card-img-overlay">Gallery</div>
                                                </div>
                                </div>
                                <div class="card rounded-circle">
                                                <div class="card-img">
                                                        <a href=""><img src="../public/image/7.jpg" alt="" class="img-fluid rounded-circle border border-danger"style="width:100px; height:100px"></a></li>                
                                                        <div class="card-img-overlay">Gallery</div>
                                                </div>
                                        </div>
                        </div>               
        </div>
                


<!-- row 2-->

<div class="row">

<!-- row 2 col I-->
<div class="col-3">

        <!-- user data starts from here basic data-->
        <%if(items.length>0) {%>     <!-- if condition starts -->

                <div class="card-body rounded" style="background:#ffffff; margin-top:30px;">
                <% items.forEach(function(item, index) {%>        <!-- for loop starts -->
                
                        <% if(item.user_profile_pic){ %>
                                        <img class="card-img rounded-circle " src="../public/profile_image/<%= item.user_profile_pic %>" alt="Card image" style="width:100px; height:100px"><i class="fa fa-camera"></i>
                        <% } else { %>
                                <button class="profile-img" data-edit-profile-img="<%= item.user_id%>">Edit</button>
                                <img src="../public/profile_image/icon.jpg" alt="profile image 1" class="img-fluid rounded" style="width:100px; height:100px">
                        <% } %>
                        
                        <h6><%= item.user_firstname %> <%= item.user_lastname %></h6>
                        <span><b>Bio</b>:<i>Love you dear Zindgi</i></span>
                        <span><b>Email</b>:<%= item.user_email %></span><br />
                        <span><strong>Website :</strong>www.themashabrand.com</span><br />
                        <span><strong>Profession :</strong>Student</span><br />
                        <span><b>Location</b>:India Mumbai</span>

                        <div class="row">
                                        <ul class="nav">
                                                        <li class="card-body text-center">
                                                               <div class="row">       
                    
                                                                    <div class="card">
                                                                                <div class="card-footer bg-transparent">Followers 10K</div>
                                                                    </div>
                                                                    <div class="card" style="margin-left:20px">
                                                                                <div class="card-footer bg-transparent">Following 20k</div>
                                                                            
                                                                    </div>
                    
                                                            </div>
                                                          
                                                        </li>
                                                </ul>       
                        </div>
                        

                <%})%>  <!-- for loop ends -->
                </div>
                

        <%} else{%>     <!-- else condition starts-->
        
                <span>No records available</span>
        <%}%>   <!-- ends condition ends-->
                                
                
                
<!-- another post about user starts from here-->
                <div class="card-body" style="background:#ffffff;margin-top:30px">
                <div class="card about-user">
                        <div class="card-body">
                                <div class="card-block">
                                <h4 class="card-title info">About Me</h4>
                                <% if(items.length > 0){%>
                                       <% items.forEach(function(item,index){%>
                                        <p class="card-text">Coding is my passion, not my profession.</p>
                                        <div class="text-left">
                                                <p class="card-text"><strong>Full Name : </strong> <span class="m-l-15"><%= item.user_firstname %> <%= item.user_lastname %></span></p>
                                                <p class="card-text"><strong>Mobile : </strong><span class="m-l-15"><%= item.user_mobile_no %></span></p>
                                                <p class="card-text"><strong>Gender : </strong> <span class="m-l-15"><%= item.user_gender %></span></p>
                                                <p class="card-text"><strong>Date of Birth : </strong> <span class="m-l-15"><%= item.user_dob %></span></p>
                                        </div>	
                                        

                                        <%})%>

                                <%}else{%>
                                        <span>No records are available</span>
                                <%}%>		
                                </div>
                        </div>
                </div>	                        
                </div>
                <!-- about me ends here-->

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
        
                

</div><!-- row 2 col I ends-->

<!-- row 2-->
<div class="col-6">

        <div class="card" style="margin-top:30px;margin-left: -15px; width:570px">
                <div class="card-body">
                                <% if(items.length > 0){%>
                                        <% items.forEach(function(item,index){%>
                                         
                                                <% if(item.user_profile_pic){ %>
                                                        <img src="../public/profile_image/<%= item.user_profile_pic %>" alt="profile image" class="rounded-circle border border-danger" style="width:50px; height:50px">
                                                <% } else { %>
                                                        <img src="../public/profile_image/icon.jpg" alt="profile image 1" class="rounded-circle border border-danger" style="width:50px; height:50px">
                                                <% } %>
                                    
                                         <%})%>
                                    
                                    <%}else{%>
                                         <span>No records are available</span>
                                    <%}%>
                                      
                                
                                <button class="btn btn-light" style="position: absolute;right:150px;" data-target="#createpost" data-toggle="modal">Create Post</button>
                                <button class="btn btn-dark" style="position: absolute;right:0; margin-right:5px">Create Post</button>
                                
    
                                           
                </div>
        </div>

    <!-- for heading display-->
        
                <div class="card" style="background:#ffffff;margin-top:15px;margin-left: -15px; width:570px">
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
         

    
                
        <div class="row"> <!-- for events display-->
                <% if(items.length > 0){%>
                       
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
        </div>  <!-- for events display ends-->

    
</div><!-- row 2ends-->

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

</div>

<!--data-edit-profile-img-->

 <script>
    $(document).ready(function()
    {
            $('.profile-img').on('click', function(events)
            {
                event.preventDefault();
                event.stopPropagation();
                
                var postId = $(this).attr('data-edit-profile-img');
                //var postId = parseInt(postId,10)
                //alert(postId);


                $.ajax(
                        {
                                type: 'POST',
                                url:  '/editprofileimg/' + $(this).attr('data-edit-profile-img'),
                                contentType: "application/json", 
                                data: JSON.stringify(data),
                                success : function(response)
                                {
                                                     
                                        if(response)
                                        {
                                                console.log("checking success data from ajax =>",JSON.stringify(response))
                                                alert(response);
                                        }
                                                
                                       
                                },
                                error : function(e)
                                {
                                        console.log(e)
                                        alert('error from server');
                                }
                        }
                );
            })
            
    });
    </script> 


    //////////////////////////////////////

    <%if(items.length>0) {%>     <!-- if condition starts -->

                <div class="card-body rounded text-center" style="background:#ffffff; margin-top:30px;">
                <% items.forEach(function(item, index) {%>        <!-- for loop starts -->
                
                        <% if(item.user_profile_pic){ %>
                                        <img class="card-img rounded-circle" src="../public/profile_image/<%= item.user_profile_pic %>" alt="Card image" style="width:100px; height:100px"><i class="fa fa-camera"></i>
                        <% } else { %>
                                <button class="profile-img" data-edit-profile-img="<%= item.user_id%>">Edit</button>
                                <img src="../public/profile_image/icon.jpg" alt="profile image 1" class="img-fluid rounded" style="width:100px; height:100px">
                        <% } %>
                        
                        <h6><%= item.user_firstname %> <%= item.user_lastname %></h6>
                        <div class="card-title text-center" style="padding:10px">
                                <div class="row">
                                <i class="fa fa-camera"></i>
                                <i class="fas fa-edit"></i>
                                </div>
                        </div>
                        <b>Bio : </b><span class="bio" id="user_bio">Love you dear Zindgi</span>
                        <input type="text" class="collapse multi-collapse bio" id="bio"/>
                
                        <b>Email: </b><span class="email" id="user_email"><%= item.user_email %></span><br />
                        <input type="text" class="collapse multi-collapse email" id="email"/>
                        <b>Website : </b><span class="website" id="user_website">www.brand.com</span><br />
                        <input class="collapse multi-collapse website" id="website"/>
                        <b>Profession : </b><span class="profession" id="user_profession">Student</span><br />
                        <input class="collapse multi-collapse profession" id="profession"/>
                        <b>Location : </b><span class="location" id="user_location">India Mumbai</span>
                        <input class="collapse multi-collapse location" id="location"/>
                                                

                        <button class="edit-data" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="bio email website profession location save-data">Edit</button>
                        <button class="collapse multi-collapse" id="save-data">Save</button>
                        
                        <div class="row">
                                        <ul class="nav">
                                                        <li class="card-body text-center">
                                                               <div class="row">       
                    
                                                                    <div class="card">
                                                                                <div class="card-footer bg-transparent">Followers 10K</div>
                                                                    </div>
                                                                    <div class="card" style="margin-left:20px">
                                                                                <div class="card-footer bg-transparent">Following 20k</div>
                                                                            
                                                                    </div>
                    
                                                            </div>
                                                          
                                                        </li>
                                                </ul>       
                        </div>
                        

                <%})%>  <!-- for loop ends -->
                </div>
                

        <%} else{%>     <!-- else condition starts-->
        
                <span>No records available</span>
        <%}%>   <!-- ends condition ends-->
                                
                

                //////////////////////////////

                <script>
    $(document).ready(function()
    {
     
        $('.edit-data').on('click', function(events)
        {
                var $userdataedit = $('user-data-edit')
                var $bio = $('#bio');
                var $email = $('#emial');
                var $profession = $('#profession');
                var $website = $('#website');
                var $location = $('#location');
                var user_data_update = { }
                
                $('input.bio').val($("#user_bio").html());
                $('input.email').val($("#user_email").html());
                $('input.profession').val($("#user_profession").html());
                $('input.website').val($("#user_website").html());
                $('input.location').val($("#user_location").html());
                // $userdataedit.addClass('edit-data');

        })
            
    });
    </script> 