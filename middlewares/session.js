module.exports  = function(request, response,next){
		if(request.session.user!= null){
			response.locals={user:user};
			next();
		}else{
				response.redirect("/");
		}
	};		