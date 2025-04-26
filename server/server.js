const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();  // <-- Load env file

const app = express();

app.use(cors());
app.use(express.json());

// Connect DB
mongoose.connect(process.env.MONGO_URI);

mongoose.connection.once('open', () => {
  console.log('✅ MongoDB connected to database:', mongoose.connection.name);
});


// Use your blog routes
app.use('/api/blogs', require('./routes/blog'));

app.listen(2000, () => {
  console.log('Server running on port 2000');
});
