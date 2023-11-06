'''
This is the main file that starts our server and connects to the MongoDB database.
We have added error handling for the database connection and used environment variables for sensitive data.
We have also included authentication, authorization and CORS middleware.
'''
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const { errorHandler } = require('./middleware/errorHandler');
const { authMiddleware } = require('./middleware/authMiddleware');
const app = express();
const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.log(err));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(authMiddleware);
app.use(routes);
app.use(errorHandler);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});