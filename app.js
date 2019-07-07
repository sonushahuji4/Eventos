const express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var dateFormat = require('dateformat');
const {Users,Posts,Likes,Comments} = require('./model/model_index');
//var io = require('socket.io');

var app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var now = new Date();

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/views', express.static(path.join(__dirname, 'views')));
app.set('view engine', 'ejs');

// Authentication 
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const FileStore = require('session-file-store')(session);
const uuid = require('uuid/v4');
const passport = require('passport');

app.use(session(
{
    genid: (req) => 
    {
      console.log('Inside the session middleware')
      console.log(req.sessionID)
      return uuid() 
    },
    store: new FileStore(),
    secret: 'sacred coders',
    resave: false,
    saveUninitialized: true
}));


// Global site title and base url
const title ="Evento ";
const baseUrl = "http://localhost:4000/";


app.get('/', (req, res, next)=>
{
    const user_id = req.session.user_id;
    res.render('testingpurpose',{title:'testingpurpose'});
    

    // Posts.findAll()
    // .then((postsdata)=>
    // {
    //     console.log(postsdata)
    //         res.render('profileimage',{title:'profileimage',items:postsdata});
        
    // })
    // .catch((err)=>
    // {
    //     console.error(err)
    //     res.status(501).send({
    //         error : "error..... check console log"
    //     })
    // })

   //res.render('profileimage', { title: 'profileimage' });
    
})

// _users = [];
// _connections = [];

// io.sockets.on('connection',function(socket)
// {
// 	_connections.push(socket);

// 	// for connection
// 	console.log('Connected: %s sockets connected',_connections.length);

// 	// for disconnect
// 	socket.on('disconnect', function(data)
// 	{
// 		_connections.splice(_connections.indexOf(socket),1);
// 	    console.log('Disconnected: %s sockets connected',_connections.length);
// 	})
// });


// user registeration
const userRegisteration = require('./routes/api/registeration');
app.use('/register',userRegisteration);

// user login
const userlogin = require('./routes/api/login');
app.use('/',userlogin);

// user logout
const userlogout = require('./routes/api/logout');
app.use('/logout',userlogout);

// user posts
const userpost = require('./routes/api/post_api');
app.use('/',userpost);

// user profile
const userprofile = require('./routes/api/profile_api');
app.use('/',userprofile);

// view user profile
const viewprofile = require('./routes/api/viewprofile');
app.use('/',viewprofile);


// app.put('/updatauserdata/:id',function (req,res)
// {
//     console.log("success ....\n")
//     res.send('success');      
// });


// where: {title: 'aProject'},
//   attributes: ['id', ['name', 'title']]

// app.post('/testapi',function (req,res)
// {
//     const user_id = req.session.user_id;

//     Posts.findAndCountAll({include:[{ model: Likes},{model: Users,where:{user_id:user_id}}]})
//     .then((postdata)=>
//     {
//         //res.json(postdata.rows)   
//         res.send(postdata.rows);
//     })
//     .catch((err)=>
//     {
//         console.error(err)
//         res.status(501)
//         .send({
//                 error : "error..... check console log"
//               })
//     })
  
// });




module.exports = app;