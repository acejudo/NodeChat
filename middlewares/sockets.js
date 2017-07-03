module.exports = function(io) {
var messages = [{  
  id: 1,
  text: "Bienvenido al Chat",
  author: "Robot Chat"
}];


io.on('connection', function(socket) {  
  console.log('Alguien se ha conectado con Sockets');
  // Siempre que alguien se conecte, envia esto
  socket.emit('messages', messages);

  socket.on('new-message', function(data) {
    messages.push(data);
    io.sockets.emit('messages', messages);
  });
});
};


