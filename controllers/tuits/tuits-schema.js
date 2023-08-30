import mongoose from 'mongoose';         

const schema = mongoose.Schema({
  topic: { type: String, required: false },
  userName: { type: String, required: true },
  handle: { type: String, required: true },
  time: { type: String, required: true },
  image: { type: String, required: true },
  title: { type: String, required: false },
  tuit: { type: String, required: true },
  liked: { type: Boolean, required: true },
  likes: { type: Number, required: true },
  replies: { type: Number, required: true },
  retuits: { type: Number, required: true },
},{collections: 'tuits'})

// export default mongoose.model('Tuit', schema);
export default schema;