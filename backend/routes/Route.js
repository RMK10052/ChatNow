import express from "express";

//controllers
import { addUser, getUsers } from "../contollers/UserController.js";
import { setConversation, getConversation } from "../contollers/ConversationController.js";
import { newMessage, getMessages } from "../contollers/MessageController.js";

const route = express.Router();

route.post('/add', addUser); //POST API
route.get('/users',getUsers);

/**Takes two arguements
    1. Endpoint 
    2. Callback or Contoller function
 */
route.post('/conversation/add',setConversation);
route.post('/conversation/get', getConversation);

route.post('/message/add',newMessage);
route.get('/message/get/:id',getMessages);

export default route;