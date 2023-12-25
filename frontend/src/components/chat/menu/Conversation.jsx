import { Box, styled } from "@mui/material";

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
  return (
    <ConversationBox>
      <ImageBox>
        <img src={user.picture} alt="dp" />
      </ImageBox>
      <NameBox>{user.name}</NameBox>
    </ConversationBox>
  );
};

export default Conversation;
