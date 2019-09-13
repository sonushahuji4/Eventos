<p align="center">
  <a href="" rel="noopener">
    <img src="public/image/eventologo1.png" alt="Project logo">
 </a>
</p>
<h3 align="center">Social Network</h3>

<div align="center">

  [![Hackathon](https://img.shields.io/badge/hackathon-name-orange.svg)](http://hackathon.url.com) 
  [![Status](https://img.shields.io/badge/status-active-success.svg)]() 
  [![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
  [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

</div>

---

<p align="center">  Evento is a social media platform where people who wants to participate or wants to be active in attending events or wants to be aware of different events happening around them or get notified for a particular event or interested in promoting events. This is a platform where people can keep track of certain events and have access to various information like upcoming, active, past events, user’s gallery for viewing the event photos, videos, stories, live video streaming and so on and have interaction through post and with friends..
    <br> 
</p>

<div align="center">

  # DEMO 
  - [EvenTo a Social Network](https://drive.google.com/file/d/1KTsTd1b3otCGb4R34EdpITnGXM-foNH4/view?usp=sharing/) - See Video

</div>


## 🏁 Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development 
and testing purposes.

## ⛏️ Built With <a name = "tech_stack"></a>
- [MySQL](https://https://www.mysql.com/) - Database
- [Sequelize ORM](https://sequelize.org//) - ORM
- [Express](https://expressjs.com/) - Server Framework
- [EJS Tamplate](https://ejs.co/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Google Map API](https://cloud.google.com/) - Library
- [BootStrap 4](https://getbootstrap.com/) - Library
- [Highcharts](https://www.highcharts.com/) - Library
- [AJAX](https://jquery.com/)

### Installing
- [XAMPP](https://www.apachefriends.org/index.html/) - Install XAMPP
- [NodeJS](https://nodejs.org/en/) - Install NodeJS Version v10.16.0

        -Create a Folder:
            npm init
            npm install
                "body-parser": "^1.19.0",
                "bootstrap": "^4.3.1",
                "bower": "^1.8.8",
                "cors": "^2.8.5",
                "ejs": "^2.6.1",
                "express": "^4.16.4",
                "express-ejs-layouts": "^2.5.0",
                "express-hbs": "^2.1.2",
                "express-mysql-session": "^2.1.0",
                "express-partials": "^0.3.0",
                "express-session": "^1.16.1",
                "express-validator": "^5.3.1",
                "dateformat": "^3.0.3",
                "install": "^0.13.0",
                "joi": "^14.3.1",
                "jquery": "^3.4.0",
                "jquery-browserify": "^1.8.1",
                "jquery-mousewheel": "^3.1.13",
                "local-storage": "^2.0.0",
                "multer": "^1.4.1",
                "mysql2": "^1.6.5",
                "node-datetime": "^2.1.2",
                "owl.carousel": "^2.3.4",
                "passport": "^0.4.0",
                "router": "^1.3.3",
                "sequelize": "^5.11.0",
                "session-file-store": "^1.2.0",
    

- Start XAMPP
- Create a database "events"
- Populate the database with data
    - Open backup_sql_data
        - open events.sql 

- Open Terminal and type...
    - nodemon server.js

## Project Structure <a name = "getting_started"></a>
    => backup_sql_data
    => config
        - db.js
    => model
        - comment_model.js
        - like_model.js
        - login_details_modul.js
        - model_follow.js
        - model_index.js
        - postbody_model.js
        - send_message_model.js
        - user_model.js
    => node_modules
    => public
        => bootstrap
           => css
           => js
        => css
        => image
        => jquery
        => profile_image
    => routes
        => api     
    => views
       => components
       => partials
         => includes
           - footer.ejs
           - header.ejs
           - navbar.ejs
        - editProfile.ejs
        - event_page.ejs
        - findUserProfile.ejs
        - home.ejs
        - login.ejs
        - profile.ejs
        - registeration.esj
        - showActivity.ejs
        - viewprofile.ejs
    app.js
    package-lock.json
    package.json
    README.md
    server.js

## 🧐 CauseCode Coding Challenge <a name = "Create s small social network"></a>

### Fullstack
    1) Create an inventory management platform for { pick an industry, product or service }. For example, inventory management for TVs.
    2) Create a small social network
    3) Find a website with public profiles and write a scraper to scrape those profiles
    4) Create a realtime video/audio/text chat application

## 🧐 Problem Statement Selected <a name = "problem_statement"></a>
    2) Create a small social network

## What are we looking for ? **
    
# 1. How creative is your solution ?
    - Fills the gap between organizers and common people who are interest in attending events nearby.
    - Students of other colleges get to know what all events are happening in their neighboring colleges.
    - Gives the platform to advertise the events and promote it through socail media
    - Provides with the notication so that user can be immediately be notified whenever event is happening around them
    - User can keep track of various events happening in their neighboring colleges.
    - User dashboard provides the records of the user activity and represents the over all activity of user.
    - User can get event details easily based on their current location or area wise, city wise, state wise or country wise.
    

# 2. Commit history to see how your work evolved
- [See Commit History](https://github.com/sonushahuji4/Eventos/commits/master/) - Social Network
    
# 3. Code quality and best practices


# 4. Documentation

### ER Diagram <a name = "ER"></a>

    System Architecture

   ![](cousecode/internalflow.jpeg)

   ![](cousecode/systemflow.jpeg)

# Screenshots <a name = "Screenshots"></a>

<img src="cousecode/ScreenShots/Registeration_And_Login_Page.png" alt="Project logo">

- User Stories

<img src="cousecode/ScreenShots/user_stories.png" alt="Project logo">

- Search User

<img src="cousecode/ScreenShots/search_for_user.png" alt="Project logo">

- Chat Application

<img src="cousecode/ScreenShots/chat_box.png" alt="Project logo">

- Notification for message

<img src="cousecode/ScreenShots/notification_for_message.png" alt="Project logo">


- Post View

<img src="cousecode/ScreenShots/post_display.png" alt="Project logo">


- List of Upcoming Events

<img src="cousecode/ScreenShots/list_of_all_upcoming_events.png" alt="Project logo">

- List of Previous Events

<img src="cousecode/ScreenShots/list_of_all_previous_events.png" alt="Project logo">

- User Activity Dashboard

<img src="cousecode/ScreenShots/user_dashboard_for_event_details.png" alt="Project logo">

- Onclick dashboard, get all particular events

<img src="cousecode/ScreenShots/onclick_event_view_list_of_events.png" alt="Project logo">

- Closer view for events

<img src="cousecode/ScreenShots/onclick_particular_events_from_the_list_event_view.png" alt="Project logo">


- User Profile Update

<div class="row">
<img src="cousecode/ScreenShots/user_personal_profile.png" alt="Project logo">
<img src="cousecode/ScreenShots/online_offline_user_list.png" alt="Project logo">
</div>

- Search events by
<img src="cousecode/ScreenShots/search_events_by_locations.png" alt="Project logo">
<img src="cousecode/ScreenShots/search_for_events.png" alt="Project logo">


- Follow - Unfollow user 

<img src="cousecode/ScreenShots/follow_or_unfollow_a_user.png" alt="Project logo">
<img src="cousecode/ScreenShots/recommend_events_for_users.png" alt="Project logo">





# Features:


    Registration and Login 
        • User will have to register themselves by providing basic information about them and then they can login into the system. 
        • Once users have logged in, users will be provided with Feeds Section, Profile, Notification page and Maps. 

    Feeds section:   
        • All the posts like images, videos or events related articles will be viewed here.
        • Event stories, Live Video streaming for an event. 
        • Can create own event (snap, images, videos, GIF) with many different artificial effects to look more attractive to audience. 
        • Can also Like, Comment, Follow, Share, Report, Going, Interested In, set a Reminder, buy/sell passes 
        • Theses post will be recoded to user’s dashboard so that other users can snoop through what all events had happened in past and get all related events information like upcoming, Active events, number of people attended the events, their review on events, comments, like and rating and so on through user’s dashboard. 
        • Side bar Recommendation section where all recommended events, groups, people with similar interest will be recommended to users.  
        • This will also involve user interaction with post by doing some action on posts. 
        • Can view snap, images, Videos, Gif of past events and get to know many more details about the events.

    ❖ Profile Section:    
        • Basic information about the user will be accessible if it is not private. 
        • Dashboard with brief information for upcoming events, Active event, Past events, Number of people attending, participating, Followers, reviews and so on. 
        • Store (Gallery) where people can view event photos, snap, videos. 
        • Mission, Vision, Status and Difference. 
        • Can create own event (snap, images, videos, GIF) with many different artificial effects to look more attractive to audience. 

    ❖ Notification: 
        • All the notifications related to user interests will be received here. 
        • Like who wants to buy passes, number of people attending events. 
        • They will be notified if users want to buy passes, going, attending, interested in or wants to work in collaboration. 
        • If people set reminders for any event, they will be notified here.

    ❖ Map: 
        • User can also make a use of map like search for an event on map and map will show all related and nearby events to user by popping up event information with different colours. 

    ❖ Common Features 
        => Search Events by Location:
            User can search/view events based on location like from current location, by area, by state, by country.

        => Follow/Unfollow:
            User can follow or unfollow others user. If user is following a particular user, then that user can see their post/events on FEED SECTION.

        => Search Bar: 
            User can find other people, other colleges, events. 
        
        => Chat: 
            User can chat with each other

# 5. Functionality
    ❖ Registration
    ❖ Login
    ❖ Update your profile picture and personal details anytime
    ❖ Create Event/Post
    ❖ Tools to create events/posts
    ❖ Like,comment
    ❖ Friends/User suggestion
    ❖ Follow or Unfollow
    ❖ Post/Event is seen based on follow or unfollow
    ❖ View Events/Post based on location like current location,by area, by city,by state, by country
    ❖ View Active,Upcoming,Past events details
    ❖ Shows Number of followers and followings
    ❖ Onmouse on post zoom effect
    ❖ Onclcik post, closer view
    ❖ Show number of active,upcoming,past and total events
    ❖ Chat box side bar with online user list
    ❖ Indication of Online/Offline user list
    ❖ Events recommendation based on user activity
    ❖ No need to type address, just keyword the address google map API will fetch the address
    ❖ Event itself contents "MAP" indication which points to the address of the event
    ❖ Last seen of user
    ❖ You can search a particular user
    ❖ Dashboard, which keeps the record of user activities
    ❖ User 


## ✍️ Authors <a name = "authors"></a>
- [@Sonu Shahuji](https://github.com/sonushahuji4) - Evento a Social Network

## 🎉 Acknowledgments <a name = "acknowledgments"></a>
- References
- [TownScript](https://www.townscript.com/)
- [Know A Fest](http://www.knowafest.com/)
- [College Fever](https://www.thecollegefever.com/)

 
 
