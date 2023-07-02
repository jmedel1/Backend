const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors()); // Enable CORS

// Rest of your code...


// Middleware
app.use(express.json());

// Helper function to read data from JSON file
const readDataFromJsonFile = () => {
  try {
    const jsonData = fs.readFileSync('db.json', 'utf8');
    return JSON.parse(jsonData);
  } catch (error) {
    console.error('Error reading the JSON file:', error);
    return [];
  }
};

// Helper function to write data to JSON file
const writeDataToJsonFile = (data) => {
  try {
    fs.writeFileSync('db.json', JSON.stringify(data), 'utf8');
  } catch (error) {
    console.error('Error writing to the JSON file:', error);
  }
};

// Routes
app.get('/api/posts/top-liked', (req, res) => {
  try {
    const posts = readDataFromJsonFile();
    const sortedPosts = posts.sort((a, b) => b.likes - a.likes);
    const topLikedPosts = sortedPosts.slice(0, 10); // Get top 10 liked posts
    res.json(topLikedPosts);
  } catch (error) {
    console.error('Error fetching top liked posts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/posts/top-commented', (req, res) => {
  try {
    const posts = readDataFromJsonFile();
    const sortedPosts = posts.sort((a, b) => b.comments.length - a.comments.length);
    const topCommentedPosts = sortedPosts.slice(0, 10); // Get top 10 commented posts
    res.json(topCommentedPosts);
  } catch (error) {
    console.error('Error fetching top commented posts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put('/api/posts/:id/like', (req, res) => {
  try {
    const postId = req.params.id;
    const posts = readDataFromJsonFile();
    const post = posts.find((p) => p._id === postId);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Update the post's like count
    post.likes += 1;

    writeDataToJsonFile(posts);

    res.json(post);
  } catch (error) {
    console.error('Error liking the post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put('/api/posts/:id/comment', (req, res) => {
  try {
    const postId = req.params.id;
    const posts = readDataFromJsonFile();
    const post = posts.find((p) => p._id === postId);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Update the post's comment count
    post.comments.push({ text: req.body.text });

    writeDataToJsonFile(posts);

    res.json(post);
  } catch (error) {
    console.error('Error commenting on the post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
const port = 3000; // Use any port number you prefer
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
