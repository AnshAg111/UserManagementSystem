const User = require('../models/user');

exports.getAllUsers = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied' });
  }

  const users = await User.find({ role: 'user' });
  res.status(200).json(users);
};
