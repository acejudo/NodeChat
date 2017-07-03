$(document).ready(function() {
	$("#collapseId").click();

	var socket = io.connect('http://localhost:8888', { 'forceNew': true });
	socket.on('messages', function(data) {  
  			render(data);
		});

	$("#btn-chat").click(function () {
		var message = {
 			author: 'etw',
    		text: 'etweww'
  			};
		socket.emit('new-message', message);
  		return false;
	});

	function render(data) { 
	 	var blue = 'http://placehold.it/50/FA6F57/fff&amp;text=ME';
		var red = 'http://placehold.it/50/55C1E7/fff&text=U';
		var texto = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.';
		var align ='right';
		if($('#ulChat li:last').attr("class") == 'right clearfix'){
			align = 'left';
		}
		var html= `<li class="${align} clearfix">
    			<span class="chat-img pull-${align}">
    			<img src=${blue} alt="User Avatar" class="img-circle">
    			</span>
    			<div class="chat-body clearfix">
    			<div class="header">
    			<strong class="primary-font">Bhal</strong>
    			</div><p>${texto}</p>
    			</div>
    			</li>
    			`;
		/*var html = data.map(function(elem, index) {
    		return(`<li class="${align} clearfix">
    			<span class="chat-img pull-${align}">
    			<img src=${blue} alt="User Avatar" class="img-circle">
    			</span>
    			<div class="chat-body clearfix">
    			<div class="header">
    			<strong class="primary-font">Bhal</strong>
    			</div><p>${texto}</p>
    			</div>
    			</li>
    			`);
  				}).join(" ");*/
		$("#ulChat").append(html2);
		/*if($('#ulChat li:last').attr("class") == 'right clearfix'){
			$("ul").append('<li class="left clearfix"><span class="chat-img pull-left"><img src="'+ red+ '" alt="User Avatar" class="img-circle"></span><div class="chat-body clearfix"><div class="header"><strong class="primary-font">Bhal</strong></div><p>'+texto+'</p></div></li>');
		}
		else{
			$("ul").append('<li class="right clearfix"><span class="chat-img pull-right"><img src="'+ blue+'" alt="User Avatar" class="img-circle"></span><div class="chat-body clearfix"><div class="header"><strong class="pull-right primary-font">Bhal</strong></div><p>'+texto+'</p></div></li>');
		}*/
		
	}


});





