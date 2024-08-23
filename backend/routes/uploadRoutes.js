const express = require('express');
const upload = require('../middleware/upload'); // Importing the Multer middleware for file upload
const { protect } = require('../middleware/auth'); // Importing the auth middleware to protect routes
const router = express.Router();

// Route to handle image uploads
router.post('/', protect, upload.single('image'), (req, res) => {
  // Sending back the file path as the response
  res.send(`/${req.file.path}`);
});

module.exports = router;
