import mongoose from 'mongoose';
import usersSchema from './users-schema.js';

const usersModel = mongoose.model('UsersModel', usersSchema, 'users')


export default usersModel;