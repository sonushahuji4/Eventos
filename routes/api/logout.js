const express = require('express');
const router = express.Router();
const middleware = require('../../middleware/middleware');

// Authentication 
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const FileStore = require('session-file-store')(session);


// logout
router.get('/',function(req, res)
{
	req.session.destroy(function(err) 
	{
  		if(err)
  		{
  			throw err;
  		}
  		res.render('login', { title: 'login' });
	});
});

module.exports = router;