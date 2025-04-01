const express = require('express');
const app = express();
const port = 3000;
const src = require('debug');
const postsRouter = require("./routers/router");
const postController = require('./controllers/postController');

app.use( express.static('public') );

app.use ( "/posts", postsRouter );

// app.get('/', postController.index); // Index
// app.get('/:id', postController.show); // Show
// app.post('/', postController.store); // Store
// app.put('/:id', postController.update); // Update
// app.patch('/:id', postController.modify); // Modify
// app.delete('/:id', postController.destroy); // Destroy

app.listen( port, () => {
    console.log( `App in ascolto sulla porta ${port}` );
})