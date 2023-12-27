import Conversation from "../model/Conversation.js";



export const setConversation = async (request, response) => {
    try {
        let senderId = request.body.senderId;
        let receiverId = request.body.receiverId;

        const exist = await Conversation.findOne({ members: { $all: [senderId, receiverId]  }});

        if(exist){
            response.status(200).json("Conversation already exists")
            return;
        }

        const newConversation = new Conversation(
            {members: [senderId, receiverId]}
        );
        
        await newConversation.save();
        response.status(200).json("Conversation saved successfully");
    } catch (error) {
        response.status(500).json(error.message);
    }
}

export const getConversation = async (request, response) => {
    try {
        let senderId = request.body.senderId;
        let receiverId = request.body.receiverId;
        
        const conversation = await Conversation.findOne({ members: { $all: [senderId, receiverId]  }});

        return response.status(200).json(conversation);

    } catch (error) {
        response.status(500).json(error.message);
    }
}