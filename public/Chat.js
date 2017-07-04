var blueIcon= 'http://placehold.it/50/FA6F57/fff&amp;text=ME';
var redIcon = 'http://placehold.it/50/55C1E7/fff&text=U';
var logo =  blueIcon;
var align = 'right';

$(document).ready(function() {
	$("#collapseId").click();

	var socket = io.connect('http://localhost:8888', { 'forceNew': true });
	socket.on('messages', function(data) {  
  		render(data);
	});

	$("#btn-chat").click(function () {
		var message = {
 			author: $("#username").val(),
    		text: $("#btn-input").val()
  			};
		socket.emit('new-message', message);
		$("#btn-input").val("");
  		return false;
	});

	function render(data) {  
		var texto = data[data.length -1].text;
		var user =  data[data.length -1].author;
		if(user == $("#username").val()){
			align = 'left';
			logo= redIcon;
		}
		var html= `<li class="${align} clearfix">
    			<span class="chat-img pull-${align}">
    			<img src=${logo} alt="User Avatar" class="img-circle">
    			</span>
    			<div class="chat-body clearfix">
    			<div class="header">
    			<strong class="primary-font">${user}</strong>
    			</div><p>${texto}</p>
    			</div>
    			</li>
    			`;
		$("#ulChat").append(html);
	}
});





