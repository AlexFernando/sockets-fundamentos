const { io } = require('../server')

io.on('connection', (client) => { //cliente contiene toda la info de la computadora o conexion que se estableció
    //con esto el servidor sabe que un usuario o cliente se ha conectado
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    })

    // cuando el servidor se da cuenta que el cliente se ha desconectado
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //En las siguientes  lineas se establece listener en el lado del servidor, debo hacer lo mismo en el lado del cliente
    // Escuchar al cliente.
    client.on('enviarMensaje', (data, callback) => {
        
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        
        // este el callback del emit del cliente,
        
        /*if( mensaje.usuario ) {
            callback({
                resp: 'TODO SALIO BIEN!'
            });
        } else {
            callback({
                resp: 'TODO SALIO MAL!!!!'
            });
        }*/
    })
});
