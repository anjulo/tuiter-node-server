import tuitsModel from "./tuits-model.js";

const findTuits = async () => await tuitsModel.find()
const createTuit = async (tuit) => await tuitsModel.create(tuit)
const deleteTuit = async (tid) => await tuitsModel.deleteOne({_id: tid})
const updateTuit = async (tid, updates) => await tuitsModel.updateOne({_id: tid},{$set: updates})

export { findTuits, createTuit, deleteTuit, updateTuit} 