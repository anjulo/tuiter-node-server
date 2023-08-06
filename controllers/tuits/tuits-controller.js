import * as tuitsDAO from './tuits-dao.js';         // import the dao

const TuitsController = (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}

const currentUser = {
  "userName": "NASA",
  "handle": "@nasa",
  "image": "nasa.jpg",
};

const templateTuit = {
  ...currentUser,
  "topic": "Space",
  "time": "now",
  "liked": false,
  "replies": 0,
  "retuits": 0,
  "likes": 0,
}

const createTuit = async (req, res) => {
  let newTuit = req.body;                   // retrieve data from HTTP body   
  newTuit = { ...templateTuit, ...newTuit };     // merge with template 
  const insertedTuit = await tuitsDAO.createTuit(newTuit); // create new tuit in database
  res.json(insertedTuit);                        // respond with new tuit                
}                                           // next chapter will store in database instead


const findTuits = async (req, res) => {
  // res.json(tuits);
  const tuits = await tuitsDAO.findTuits()
  res.json(tuits);
}

const updateTuit = async (req, res) => {
  const tuitsIdToUpdate = req.params.tid;         // get ID of tuit to update from path
  const updates = req.body;                       // get updates from HTTP body
  const status = await tuitsDAO.updateTuit(tuitsIdToUpdate, updates); // returns success or failure
  res.send(status);                                     
}                                                 // next chapter will remove from database instead


const deleteTuit = async (req, res) => {
  const tuitsIdToDelete = req.params.tid;    // retrieve the ID of the tuit we want to remove
  const status = await tuitsDAO.deleteTuit(tuitsIdToDelete);
  res.send(status);                       // respond with success       
}

export default TuitsController;
