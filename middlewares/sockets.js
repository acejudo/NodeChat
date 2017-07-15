module.exports = function(io) {

var users= [];

var messages = [{  
  id: 1,
  text: "Bienvenido al Chat.",
  author: "Robot Chat"
}];


io.on('connection', function(socket) {  
  console.log('Alguien se ha conectado con Sockets');
  
  socket.on('set_nickname', function(data) {
    users.push(data);
    socket.nickname = data;

    messages.push(
          {
          id: messages.lenght +1,
          text: data + " Se ha conectado",
          author: "Robot Chat"
          }
        );
    io.sockets.emit('messages', messages);
  });

  socket.on("disconnect", function(){
        console.log(socket.nickname + " Se ha desconectado");
        messages.push(
          {
          id: messages.lenght +1,
          text: socket.nickname  + " Se ha desconectado",
          author: "Robot Chat"
          }
        );
        io.sockets.emit('messages', messages);
    });


  socket.emit('users', users);

  socket.emit('messages', messages);

  socket.on('new-message', function(data) {
    console.log("eres " + socket.nickname);
    messages.push(data);
    io.sockets.emit('messages', messages);
  });
});
};


