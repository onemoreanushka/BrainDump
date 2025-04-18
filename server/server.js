require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 2000;


mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('🗄️  Connected to MongoDB'))
  .catch(err => console.error('❌ Mongo connection error:', err));


// parse JSON bodies
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  console.log('🔥  GET / was hit');
  res.send('Welcome to The Archive 📝✨');
});

// Catch‑all for any other route
app.use((req, res) => {
  console.log(`⚠️  No route for ${req.method} ${req.url}`);
  res.status(404).send('Route not found');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
