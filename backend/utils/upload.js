
import multer from "multer";
import {GridFsStorage} from "multer-gridfs-storage";

import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@chatnow.sldfayx.mongodb.net/`;

const storage = new GridFsStorage({ 
    url: URL,
    options: {useUnifiedTopology: true, useNewUrlParser: true},
    file: (request, file) => {
        const match = ["image/jpg", "image/png"];

        if(match.indexOf(file.mimetype) === -1){
            return `${Date.now()}-file-${file.originalname}`;
        }

        return {
            bucketName: "photos",
            filename: `${Date.now()}-file-${file.originalname}`
        }
    }
 });

 export default multer({storage});