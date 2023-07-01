const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

// Get all posts
router.get('/posts', postsController.getPosts);

// Like a post
router.put('/posts/:postId/like', postsController.likePost);

// Comment on a post
router.put('/posts/:postId/comment', postsController.commentOnPost);

module.exports = router;
