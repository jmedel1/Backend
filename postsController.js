const Post = require('../models/post');

// Get all posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the posts.' });
  }
};

// Increment the like count for a post
exports.likePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: 'Post not found.' });
    }
    post.likes++;
    await post.save();
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while liking the post.' });
  }
};

// Increment the comment count for a post
exports.commentOnPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: 'Post not found.' });
    }
    post.comments++;
    await post.save();
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while commenting on the post.' });
  }
};
