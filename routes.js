const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

// Create a new post
router.post('/posts', postsController.createPost);

// Update the likes count for a post
router.put('/posts/:postId/likes', postsController.updateLikes);

module.exports = router;
