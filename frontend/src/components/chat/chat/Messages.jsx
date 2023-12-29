import { Box, styled } from "@mui/material";

//components
import ChatFooter from "./ChatFooter";
import Message from "./Message";

//contexts
import { AccountContext } from "../../../context/AccountProvider";
import { useContext, useState, useEffect } from "react";

//api
import { newMessage, getMessages } from "../../../service/api";

const MessagesWrapper = styled(Box)`
    background-image: url(${'https://mir-s3-cdn-cf.behance.net/project_modules/disp/acb65873426833.5c08f5634f7fb.png'});
    background-size: 50%;
`

const MessagesBox = styled(Box)`
    height: 79vh;
    overflow-y: scroll;
`

const Container = styled(Box)`
    padding: 5px 20px;
`

const Messages = ({conversation}) => {

    const {account, chatUser} = useContext(AccountContext);

    const [chatText, setChatText] = useState('');

    const [messages, setMessages] = useState([]);

    const [newMessageFlag, setNewMessageFlag] = useState(false);

    const [file, setFile] = useState();

    useEffect(() => {
        const fetchMessages = async () => {
            let data = await getMessages(conversation._id);
            setMessages(data);
        };
        conversation._id && fetchMessages();
    }, [conversation._id, chatUser._id, newMessageFlag]);

    const handleSendClick = async () => {
        let message = {
            senderId: account.sub,
            receiverId: chatUser.sub,
            conversationId: conversation._id,
            type: 'text',
            text: chatText,
        }

        if(chatText){
            await newMessage(message);

            setChatText('');
            setNewMessageFlag(val => !val);
        }
    }

    const sendText = async (e) => {
        const code = e.keyCode || e.which;

        if(code === 13){  //Enter button
            handleSendClick();
        }

    }

    return (
        <>
            <MessagesWrapper>
                <MessagesBox>
                    {
                        messages && messages.map(message => (
                            <Container>
                                <Message message={message} />
                            </Container>
                    ))
                    }
                </MessagesBox>
            </MessagesWrapper>
            <ChatFooter
                sendText={sendText} 
                chatText={chatText} 
                setChatText={setChatText}
                file = {file}
                setFile = {setFile}
                handleSendClick = {handleSendClick}
            />
        </>
    )
}

export default Messages;
