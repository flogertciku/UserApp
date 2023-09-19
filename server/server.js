const express = require('express');
const cors = require('cors')    /* This is new */
const app = express();
const port = 8000
const socket = require('socket.io');   /* This is new and allows JSON Objects with strings and arrays*/
app.use(cors());
app.use(express.json());                           /* This is new and allows JSON Objects to be posted */
app.use(express.urlencoded({ extended: true }));
const routes = require('./routes/person.routes')
require('./config/mongoose.config');  
routes(app)
    
const server = app.listen(port, () => console.log(`Listening on port: ${port}`) );
const io = socket(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true,
    }
});
io.on("connection", socket => {
    // NOTE: Each client that connects get their own socket id!
    // if this is logged in our node terminal, that means we a new client
    //     has successfully completed the handshake!
    // console.log('socket id: ' + socket.id);
    socket.on("getDataFromReact", data => {
        // send a message with "data" to ALL clients EXCEPT for the one that emitted the
    	//     "event_from_client" event
        console.log("at server everything is ok")
        io.emit("toClient", data);
    });
    
    // We add our additional event listeners right inside this function
    // NOTE: "connection" is a BUILT IN events listener
});