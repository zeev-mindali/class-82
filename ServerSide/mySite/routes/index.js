const { application } = require('express');
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  //the cookie will expire after 10 days.
  //res.cookie('test',JSON.stringify({user:"zeev",password:"1234",role:"admin"}),{expire: new Date()+10});
  //console.log("Cookies: "+req.cookies);
  //res.clearCookie('test');
  //console.log(req.query.name,req.query.password,req.query.role);
  console.log(req.query);
  res.render('index', { title: 'Express' });
});



module.exports = router;
