const mongoose = require('mongoose');

const DEFAULT_URI = 'mongodb://127.0.0.1:27017/car-dealership';

// Connect to MongoDB. Exits the process if the connection cannot be made,
// since the API is not usable without a database.
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || DEFAULT_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
