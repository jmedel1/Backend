const Post = require('../models/post');

// Create a new post
const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    // Create a new post object
    const post = new Post({ title, content });

    // Save the post to the database
    await post.save();

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create a post', error });
  }
};

// Update the likes count for a post
const updateLikes = async (req, res) => {
  try {
    const { postId } = req.params;

    // Find the post by ID
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Update the likes count
    post.likes += 1;

    // Save the updated post to the database
    await post.save();

    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update likes count', error });
  }
};

module.exports = {
  createPost,
  updateLikes,
};
