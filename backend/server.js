const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Assesments = require('./models/Assesments');
const app = express();
require('dotenv').config();
authRoutes = require('./routes/auth')
profileRoutes = require('./routes/profile')
AssesmentsRoutes = require('./routes/Assesments')

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Routes
app.use('/api/auth', authRoutes);

app.use('/api/profile', profileRoutes);

app.use('/api/assessment',AssesmentsRoutes);



const PORT =2000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
