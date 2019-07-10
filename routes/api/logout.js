const express = require('express');
const router = express.Router();
const middleware = require('../../middleware/middleware');
var dateTime = require('node-datetime');

// Authentication 
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const FileStore = require('session-file-store')(session);
const {Users,Posts,Likes,Comments,Login_Details} = require('../../model/model_index');


// logout
router.get('/',function(req, res)
{
	const user_id = req.session.user_id;
	req.session.destroy(function(err) 
	{
		var dt = dateTime.create();
        var formatted = dt.format('Y-m-d H:M:S');
		console.log("formatted",formatted);
		// var time = new Date(formatted);
		//  var showtime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
		//  console.log("showtime",showtime);
		const offline = "offline";
		
  		if(err)
  		{
  			throw err;
  		}
		//   Login_Details.update({last_activity:formatted,offline_online_status:offline},{where:{user_id:user_id}})
		Login_Details.update({last_activity:formatted,offline_online_status:offline},{where:{user_id:user_id}})
		  .then((data)=>
		  {
			res.redirect("http://localhost:4000/login");
			//res.render('login', { title: 'login' });
			 
		  })
		  .catch((err)=>
		  {
			  console.error(err)
			  res.status(501).send({
				  error : "error..... check console log"
			  })
		  })
		
	});
});

module.exports = router;