var express = require("express");
var session = require("express-session");
var routes_app = require("./routes_chat");
var bodyParser = require("body-parser");
var session_middleware = require("./middlewares/session");

var app = express();

app.set("view engine","jade");

var server = require('http').createServer(app);
var io = require('socket.io')(server);
require('./middlewares/sockets.js')(io);


app.use('/static', express.static('public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); // Si esta a false no se pueden parsear objetos

app.use(session({
	secret: "werewfwf343ewr",
	resave: false,
	saveUninitialized: false
}));

app.get("/",function(request,response){
	response.render("index");
});

app.post("/signIn",function(request,response){
	if(request.body.user!= null){
		request.session.user = request.body.user;
		response.redirect("/chat");
	}else{
		response.redirect("/");
	}
});


app.use("/chat",session_middleware);
app.use("/chat",routes_app);


server.listen(8888);