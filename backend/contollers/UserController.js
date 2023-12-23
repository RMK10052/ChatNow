import User from "../model/User.js";

export const addUser = async (request,response) => {
    try {
        let exist = await User.findOne({ sub: request.body.sub});

        if(exist){
            response.status(200).json( {msg: 'user already exists'} );
            return;
        }

        //else
        const newUser = new User(request.body);
        await newUser.save();
        return response.status(200).json(newUser);

    } catch (error) {
        return response.status(500).json(error.message);
    }
}