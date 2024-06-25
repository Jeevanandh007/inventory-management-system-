if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const path = require('path');
const keys = require('./config/keys');

const app = express();
const PORT = process.env.PORT || 3000; // Changed default to 3000

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(session({
  secret: keys.sessionSecret,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 2, // 2 hours
  }
}));
app.use(passport.initialize());
app.use(passport.session());

// Database connection
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
}).on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

// API endpoint routes
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');

app.use('/api/products', checkAuthentication, productRouter);
app.use('/api/users', userRouter);

// Authentication middleware
function checkAuthentication(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json('User NOT authorized');
}

// Deployment
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Server listening
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
