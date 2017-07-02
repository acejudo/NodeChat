var express = require("express");
var session = require("express-session");
var routes_app = require("./routes_chat");
var bodyParser = require("body-parser");
var session_middleware = require("./middlewares/session");

var app = express();

app.set("view engine","jade");

app.use('/static', express.static('public'))

app.use(bodyParser.json()); // Para peticiones application/json
app.use(bodyParser.urlencoded({extended:true})); // Si esta a false n ose puede parsear objetos

app.use(session({
	secret: "werewfwf343ewr",
	resave: false,
	saveUninitialized: false
}));

app.get("/",function(request,response){
	response.render("index");
});

app.post("/signIn",function(request,response){
	if(request.body.user =="1" && request.body.password=="1"){
		request.session.user = request.body.user;
		response.redirect("/chat");
	}else{
		response.redirect("/");
	}
});

app.use("/chat",session_middleware);
app.use("/chat",routes_app);


app.listen(8888);