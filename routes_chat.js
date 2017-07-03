var express = require("express");
var router = express.Router();

router.get("/",function(request,response){
	response.render("chat/index");
});


router.post('/newMessage', function(req, res){
	var obj = {};
	console.log('body: ' + JSON.stringify(req.body));
	res.send(req.body);
});

module.exports = router;
