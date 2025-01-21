const User = require('../models/user');

exports.getUser = async (req, res) => {
  res.status(200).json(req.user);
};

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.user.id, req.body, { new: true });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error: error.message });
  }
};

exports.deactivateUser = async (req, res) => {
  try {
    req.user.status = 'inactive';
    await req.user.save();
    res.status(200).json({ message: 'Account deactivated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deactivating account', error: error.message });
  }
};
