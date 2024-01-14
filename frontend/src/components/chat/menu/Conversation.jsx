import { Box, Typography, styled } from "@mui/material";

//contexts
import {AccountContext} from "../../../context/AccountProvider"
import { useContext, useEffect, useState } from "react";

//api
import { getConversation, setConversation } from "../../../service/api";

//utils
import { formatDate } from "../../../utils/utils";

const ConversationBox = styled(Box)`
  display: flex;
  align-items: center; 
  height: 35px;
  padding: 15px 10px; 
  cursor: pointer;
`;

const ImageBox = styled(Box)`
  & > img {
    border-radius: 50%;
    height: 50px;
    width: 50px;
    object-fit: cover;
  }
`;

const Container = styled(Box)`
    display: flex;
`;

const Timestamp = styled(Typography)`
    font-size: 12px;
    margin-left: auto;
    color: #00000099;
    margin-right: 20px;
`;

const Text = styled(Typography)`
    display: block;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
`;


const Conversation = ({ user }) => {

  const {account, setChatUser, newMessageFlag} = useContext(AccountContext);

  const [message, setMessage] = useState({});

  useEffect(() => {
    const getConversationMessage = async() => {
        const data = await getConversation({ senderId: account.sub, receiverId: user.sub });
        setMessage({ text: data?.lastMessage, timestamp: data?.updatedAt });
    }
    getConversationMessage();
}, [newMessageFlag]);

  const getUser = async () => {
    setChatUser(user);
    await setConversation({ senderId: account.sub, receiverId: user.sub });
}

  return (
    <ConversationBox onClick={() => getUser()}>
      <ImageBox>
        <img src={user.picture} alt="dp" />
      </ImageBox>
      <Box style={{width: '100%'}}>
        <Container>
            <Typography>{user.name}</Typography>
                {message?.text &&
                <Timestamp>{formatDate(message?.timestamp)}</Timestamp>}       
        </Container>
        <Box>
            <Text>{message?.text?.includes('localhost') ? 'media' : message.text}</Text>
        </Box>
    </Box>
    </ConversationBox>
  );
};

export default Conversation;
