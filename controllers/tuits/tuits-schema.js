import mongoose from 'mongoose';         

const schema = mongoose.Schema({
  tuit: {type: String, required: false},
  likes: {type: Number, required: false},
  liked: {type: Boolean, required: false},
},{collections: 'tuits'})

// export default mongoose.model('Tuit', schema);
export default schema;