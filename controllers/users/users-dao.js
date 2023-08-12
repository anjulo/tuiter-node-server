import usersModel from "./users-model.js";


export const findAllUsers = () => usersModel.find()

export const createUser = (user) => usersModel.create(user)

export const deleteUser = (uid) => usersModel.deleteOne({_id: uid})

export const updateUser = (uid, updates) => usersModel.updateOne({_id: uid}, {$set: updates})

export const findByUsername = (username) => usersModel.findOne({username})

export const findByCredentials = (credentials) => 
            usersModel.findOne({username:credentials.username, password: credentials.password}, {password: false})
