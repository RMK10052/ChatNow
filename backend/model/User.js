import mongoose from "mongoose";

const UserSchema = mongoose.Schema({   //Schema
    iss:{
        type: String,
    },
    azp:{
        type: String,
    },
    aud:{
        type: String,
    },
    sub:{
        type: String,
        required: true,
    },
    email:{
        type: String,
    },
    name:{
        type: String,
        required: true,
    },
    picture:{
        type: String,
        required: true,
    },
    given_name:{
        type: String,
    },
    family_name:{
        type: String,
    },
    locale:{
        type: String,
    },
    iat:{
        type: Number,
    },
    jti:{
        type: String,
    },
});

const User = mongoose.model('user',UserSchema);   // 'user' is the collection name: collection means table in mongodb

export default User;