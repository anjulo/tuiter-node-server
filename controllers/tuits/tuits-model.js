import mongoose from 'mongoose';
import tuitsSchema from './tuits-schema.js'; 

const tuitsModel = mongoose.model('TuitsModel', tuitsSchema, 'tuits')


export default tuitsModel;