const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const postsRouter = require('./routes/posts');

const app = express();
const PORT = process.env.PORT || 3000;


const frontendBuildPath = path.join(__dirname, '..', 'frontend', 'dist');

async function connectToDatabase() {
  if (!process.env.MONGODB_URI) {
    console.error("Error: MONGODB_URI is missing");
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, { dbName: 'blog' });
    console.log('Connection established to MongoDB');
  } catch (error) {
    console.error('Error in connecting to database', error.message);
    process.exit(1);
  }
}

app.use(express.json());

app.use('/api/posts', postsRouter);

app.use(express.static(frontendBuildPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(frontendBuildPath, 'index.html'));
});

connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Serving frontend from: ${frontendBuildPath}`);
  });
});