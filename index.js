var express = require("express");

var app = express();

app.set("view engine","jade");

app.use('/static', express.static('public'))

app.get("/",function(request,response){
	response.render("index");

});

app.listen(8888);