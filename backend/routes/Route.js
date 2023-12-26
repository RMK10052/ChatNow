import express from "express";

//controllers
import { addUser, getUsers } from "../contollers/UserController.js";
import { setConversation } from "../contollers/ConversationController.js";

const route = express.Router();

route.post('/add', addUser); //POST API
route.get('/users',getUsers);

/**Takes two arguements
    1. Endpoint 
    2. Callback or Contoller function
 */
route.post('/conversation/add',setConversation);

export default route;