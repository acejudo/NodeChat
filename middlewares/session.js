module.exports  = function(request, response,next){
		if(request.session.user!= null){
			console.log(request.session.user);
			response.locals={user:request.session.user};
			next();
		}else{
				response.redirect("/");
		}
	};		