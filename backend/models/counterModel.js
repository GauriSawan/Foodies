import mongoose from 'mongoose';

const counterSchema = new mongoose.Schema({
  _id: { type: String, required: true }, // name of the sequence (e.g. 'foodid')
  seq: { type: Number, default: 0 }
});

const Counter = mongoose.model('counter', counterSchema);

export default Counter;
