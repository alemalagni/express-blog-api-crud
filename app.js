const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require("./routers/router");
const notFound = require(`./middlewares/notFound.js`);

app.use( express.static('public') );
app.use( express.json() );

app.use ( "/posts", postsRouter );

app.listen( port, () => {
    console.log( `App in ascolto sulla porta ${port}` );
})