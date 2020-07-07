
var socket = io();

socket.on('connect', function(){ // aqui sabemos que nosotros o el cliente se ha conectado al servidor
    console.log('Conectado al servidor');
});

// escuchar cuando se pierde conexion con el servidor
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

// Enviar informacion, emitir un mensaje del cliente al servidor y que lo escuche
//hay que implementar en el servidor algo para escuchar el evento 'enviarMensaje'
// 3er argumento del emit, funcion que se ejcuta cuando todo salga bien.
socket.emit('enviarMensaje', {
    usuario: 'Alex Fernando',
    mensaje: 'Hola Mundo'
}, function( resp ) {
    //la info se envia al servidor, y el servidor responde diciendo 'se disparo el callback
    console.log('respuesta server: ', resp)
});

//Escuchar informacion que viene  del servidor
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje)
})
