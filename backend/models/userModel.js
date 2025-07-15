import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  isAdmin: { type: Boolean, default: false }  // 👈 Add this
});

const User = mongoose.model('User', userSchema);

export default User;  // Use ES module export
