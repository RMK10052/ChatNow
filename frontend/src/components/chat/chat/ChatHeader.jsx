
import { Box, Typography, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';



//context
import { AccountContext } from "../../../context/AccountProvider";
import { useContext } from "react";

const HeaderFlexBox = styled(Box)`
    display: flex;
    height: 60px;
    background-color: #ededed;

    & > img{
        height: 40px;
        border-radius: 50px;
        padding: 10px 10px 10px 10px;
        cursor: pointer;
    } 
`

const NameStyle = styled(Typography)`
    margin-left: 12px !important;
    font-size: 15px;
    font-weight: 600;
`;

const StatusStyle = styled(Typography)`
    font-size: 12px !important;
    color: rgb(0, 0, 0, 0.6);
    margin-left: 12px !important;
`;

const RightContainer = styled(Box)`
    margin-left: auto;
    & > svg {
        padding: 15px 8px;
        font-size: 25px;
    }
`;


const ChatHeader = () => {

    const {account} = useContext(AccountContext);
    return (
        <HeaderFlexBox>

            <img src={account.picture} alt="user-dp" /> {/**To change it later to the other users dp */}

            <Box sx={{
                paddingTop: '10px'
            }}>

                <NameStyle>User's name</NameStyle>
                <StatusStyle>Online status</StatusStyle>

            </Box>

            <RightContainer>

                <SearchIcon/>
                <MoreVertIcon/>

            </RightContainer>

        </HeaderFlexBox>
    )
}

export default ChatHeader;