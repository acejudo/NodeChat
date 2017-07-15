var express = require("express");
var router = express.Router();

router.get("/",function(request,response){
	response.render("chat/index");
});

module.exports = router;
