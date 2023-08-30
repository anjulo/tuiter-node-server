import * as dao from './users-dao.js'

const UserController = (app) => { // use express instance app to declare HTTP GET
  app.get('/users', findUsers) // request pattern /api/users to call a function
  app.post('/users', createUser);     // map URL pattern to handler function
  app.delete('/users/:uid', deleteUser);  // map URL pattern to handler function
  app.put('/users/:uid', updateUser);

  app.post('/register', register);
  app.post('/login', login);
  app.post('/logout', logout);
  app.post('/profile', profile);
}

const findUsers = (req, res) => {
  const users = dao.finaAllUsers()
  res.json(users)
}

const createUser = async (req, res) => {  // function invoked if URL matches pattern
  const newUser = req.body;
  const createdUser = await dao.createUser(newUser)
  // console.log(newUser)
  // console.log(createdUser)
  res.json(createdUser);
}

const deleteUser = async (req, res) => {
  const uid = req.params['uid'];
  const status = await dao.deleteUser(uid)
  res.json(status);
}


const updateUser = async (req, res) => {     // handle PUT /api/users/:uid
  const uid = req.params['uid'];
  const updates = req.body;
  const status = await dao.updateUser(uid, updates)
  res.json(status);
}

const register = async (req, res) => {
  const user = req.body
  const existingUser = await dao.findByUsername(user.username)
  if(existingUser){
    res.sendStatus(403)
    return
  }
  const newUser = await dao.createUser(user)
  // currentUser = newUser;
  req.session['currentUser'] = newUser;
  res.json(newUser)
}

const login = async (req, res) => {
  const credentials = req.body
  const existingUser = await dao.findByCredentials(credentials)
  if(!existingUser){
    res.sendStatus(403)
    return
  }
  // currentUser = existingUser;
  req.session['currentUser'] = existingUser;
  res.send(existingUser)
}

const logout = (req, res) => {
  req.session.destroy()
  res.sendStatus(200)
}

const profile = (req, res) => {
  res.send(req.session['currentUser'])
}

export default UserController; // exports so app.js can import




