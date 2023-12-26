import { Box, styled } from "@mui/material";

//contexts
import {AccountContext} from "../../../context/AccountProvider"
import { useContext } from "react";

//api
import { setConversation } from "../../../service/api";

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

const NameBox = styled(Box)`
  margin-left: 50px;
`;


const Conversation = ({ user }) => {

  const {account, setChatUser} = useContext(AccountContext);

  const getUser = async () => {
    setChatUser(user);
    await setConversation({ senderId: account.sub, receiverId: user.sub });
}

  return (
    <ConversationBox onClick={() => getUser()}>
      <ImageBox>
        <img src={user.picture} alt="dp" />
      </ImageBox>
      <NameBox>{user.name}</NameBox>
    </ConversationBox>
  );
};

export default Conversation;
