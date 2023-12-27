
//components
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";

//context
import { AccountContext } from "../../../context/AccountProvider";
import { useContext, useState, useEffect } from "react";

//api
import { getConversation } from "../../../service/api";

const ChatBox = () => {

    const {account, chatUser} = useContext(AccountContext);

    const [conversation, setConversation] = useState({});  // to get the conversation id

    useEffect(() => {
        const getConversationDetails = async () => {
            let response = await getConversation({senderId: account.sub, receiverId: chatUser.sub});
            setConversation(response);
        };
        getConversationDetails();
    }, [chatUser.sub]);

    return (
        <>
            <ChatHeader/>
            <Messages conversation={conversation}/> {/**To get the conversation id */}
        </>
    )
}

export default ChatBox;