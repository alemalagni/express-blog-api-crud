const express = require('express');
const app = express();
const port = 3000;
const src = require('debug');
//const postsRouter = require("./routers/posts");
const postController = require('./controllers/postController');

app.use( express.static('public') );
//app.use ( "/posts", postsRouter );

app.get('/', (req, res) => {
    res.send('Server attivo!');
});

app.get('/posts', postController.index); // Index
app.get('/posts/:id', postController.show); // Show
app.post('/posts', postController.store); // Store
app.put('/posts/:id', postController.update); // Update
app.patch('/posts/:id', postController.modify); // Modify
app.delete('/posts/:id', postController.destroy); // Destroy

app.listen( port, () => {
    console.log( `App in ascolto sulla porta ${port}` );
})