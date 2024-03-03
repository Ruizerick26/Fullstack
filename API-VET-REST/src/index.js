//importar app
import app from './server.js'
import connection from './database.js';
import http from 'http';
import { Server } from 'socket.io';

connection()

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173"
    }
})

io.on('connection', (socket) => {
    console.log('Usuario conectado');
    socket.on('enviar-mensaje-fron-back',(payload)=>{
        socket.broadcast.emit('enviar-mensaje-fron-back',payload)
    })
});

app.listen(app.get('port'),()=>{
    console.log(`Server ok on http://localhost:${app.get('port')}`);
})


