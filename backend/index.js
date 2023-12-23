import express from 'express';  // using module - so define the type in package.json
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import route from './routes/Route.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/',route);

Connection();

const PORT = 8000;

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

