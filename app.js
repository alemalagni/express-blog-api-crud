const express = require('express');
const app = express();
const port = 3000;
const src = require('debug');
const router = express.Router();
const postsRouter = require("./routers/posts");
const postController = require('./controllers/postController');

app.use( express.static('public') );

app.use ( "/posts", postsRouter );

// Index
router.get( '/', postController.index);

// Show
router.get( '/:id', postController.show);

// Store
router.post( '/', postController.store);

// Update
router.put( '/:id', postController.update);

// Modify
router.patch( '/:id',postController.modify);

// Destroy
router.delete( '/:id', postController.destroy);

app.listen( port, () => {
    console.log( `App in ascolto sulla porta ${port}` );
})

module.exports = router;