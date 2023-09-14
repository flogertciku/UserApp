const express = require('express');
const cors = require('cors')    /* This is new */
const app = express();
const port = 8000
app.use(cors());
app.use(express.json());                           /* This is new and allows JSON Objects to be posted */
app.use(express.urlencoded({ extended: true }));   /* This is new and allows JSON Objects with strings and arrays*/
require('./config/mongoose.config');  
const routes = require('./routes/person.routes')
routes(app)
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );
