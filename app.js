const express = require('express');
const app = express();
const port = 3000;
const src = require('debug');
const postsRouter = require("./routers/router");
const postController = require('./controllers/postController');

app.use( express.static('public') );
app.use( express.json() );

app.use ( "/posts", postsRouter );

app.listen( port, () => {
    console.log( `App in ascolto sulla porta ${port}` );
})