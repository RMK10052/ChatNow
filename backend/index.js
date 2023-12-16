import express from 'express';  // using module - so define the type in package.json

import Connection from './database/db.js';

const app = express();
Connection();
const PORT = 8000;

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

