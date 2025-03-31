const express = require('express');
const app = express();
const port = 3000;
const posts = require("./posts");
const src = require('debug');
const postsRouter = require("./posts");
const postControler = require('../controllers/postController');

app.use( express.static('public') );

app.use ( "/posts", postsRouter );

// Index
router.get( '/', postsRouter.index);

// Show
router.get( '/:id', postsRouter.show);

// Store
router.post( '/', postsRouter.store);

// Update
router.put( '/:id', postsRouter.update);

// Modify
router.patch( '/:id',postsRouter.modify);

// Destroy
router.delete( '/:id', postsRouter.destroy);

app.listen( port, () => {
    console.log( `App in ascolto sulla porta ${port}` );
})