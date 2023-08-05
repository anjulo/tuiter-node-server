import posts from "./tuits.js";
let tuits = posts;

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
  "_id": new Date().getTime() + '',
}

const createTuit = (req, res) => {
  let newTuit = req.body;                   // retrieve data from HTTP body   
  newTuit = { ...templateTuit, ...newTuit };     // merge with template 
  tuits.unshift(newTuit);                        // append new tuit to tuits array
  console.log(newTuit)
  res.json(newTuit);                        // respond with new tuit                
}                                           // next chapter will store in database instead


const findTuits = (req, res) => {
  res.json(tuits);
}

const updateTuit = (req, res) => {
  const tuitsIdToUpdate = req.params.tid;         // get ID of tuit to update from path
  const updates = req.body;                       // get updates from HTTP body
  const tuitIndex = tuits.findIndex(              // find index of tuit to update
    (t) => t._id === tuitsIdToUpdate)             // in the tuits array
  tuits[tuitIndex] =                              // update the element in tuits array       
    { ...tuits[tuitIndex], ...updates };          // merging/updating old tuit with updates
  res.sendStatus(200);                            // respond with success          
}                                                 // next chapter will remove from database instead


const deleteTuit = (req, res) => {
  const tuitsIdToDelete = req.params.tid;    // retrieve the ID of the tuit we want to remove
  tuits = tuits.filter((t) =>                // filter out the tuit from the tuits array
    t._id !== tuitsIdToDelete);
  res.sendStatus(200);                       // respond with success       
}

export default TuitsController;
