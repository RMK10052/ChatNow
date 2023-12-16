import mongoose from 'mongoose';

import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {

    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@chatnow.sldfayx.mongodb.net/`;

    try {
        await mongoose.connect(URL, {useUnifiedTopology: true});
        console.log("Database Connection established successfully");
    } catch (error) {
        console.log("Error occured in database connection: ",error.message);
    }
}

export default Connection;