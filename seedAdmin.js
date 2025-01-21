const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./models/user');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected for seeding'))
  .catch((err) => console.error('MongoDB connection error:', err));

const seedAdmin = async () => {
  try {
    const email = 'admin@example.com';
    const existingAdmin = await User.findOne({ email });

    if (existingAdmin) {
      console.log('Admin already exists');
      return;
    }

    const hashedPassword = await bcrypt.hash('admin123', 10);

    const admin = new User({
      name: 'Super Admin',
      email: email,
      password: hashedPassword,
      phone: '1234567890',
      role: 'admin',
      status: 'active',
    });

    await admin.save();
    console.log('Super Admin created successfully');
  } catch (error) {
    console.error('Error creating admin:', error.message);
  } finally {
    mongoose.connection.close();
  }
};

seedAdmin();
