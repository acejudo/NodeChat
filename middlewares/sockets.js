module.exports = function(io) {
var messages = [{  
  id: 1,
  text: "Bienvenido al Chat.",
  author: "Robot Chat"
}];


io.on('connection', function(socket) {  
  socket.emit('messages', messages);

  socket.on('new-message', function(data) {
    messages.push(data);
    io.sockets.emit('messages', messages);
  });
});
};


