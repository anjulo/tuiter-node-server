import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  firstName: {type: String, required: false},
  middleName: {type: String, required: false},
  lastName: {type: String, required: false},
  email: {type: String, required: false},
  dob: {type: Date, required: false},
}, {collection: 'users'});

export default usersSchema;
