const express = require('express');
const app = express();
const port = 3000;
const src = require('debug');
const postsRouter = require("./routers/posts");

app.use( express.static('public') );

app.use ( "/posts", postsRouter );

app.listen( port, () => {
    console.log( `App in ascolto sulla porta ${port}` );
})