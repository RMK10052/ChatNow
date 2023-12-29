import express from "express";

//controllers
import { addUser, getUsers } from "../contollers/UserController.js";
import { setConversation, getConversation } from "../contollers/ConversationController.js";
import { newMessage, getMessages } from "../contollers/MessageController.js";
import { uploadFile, getFile } from "../contollers/FileController.js";

//utils
import upload from "../utils/upload.js";

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

route.post('/file/upload', upload.single('file'), uploadFile);
//The string name in single should match with the string in the ChatFooter data.append(string,file)

route.get('/file/:filename', getFile);
export default route;