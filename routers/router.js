const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const notFound = require(`./middlewares/notFound.js`);

router.get( '/', postController.index); // Index
router.get( '/:id', postController.show); // Show
router.post( '/', postController.store); // Store
router.put( '/:id', postController.update); // Update
router.patch( '/:id',postController.modify); // Modify
router.delete( '/:id', postController.destroy); // Destroy

router.use(notFound); //Not Found

module.exports = router;