import { Box, Typography, styled } from "@mui/material";

//contexts
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

const HeaderBox = styled(Box)`
    background-color: #ededed;
`

const HeaderFlexBox = styled(Box)`
    display: flex;
    & > img{
        height: 60px;
        border-radius: 50px;
        padding: 10px 10px 10px 10px;
        cursor: pointer;
    }

    & > p{
        padding: 25px 0px 10px 100px; 
        font-weight: 1000;
    }
`

const Header = () => {

    const {account} = useContext(AccountContext);

    return (
        <HeaderBox>
            <HeaderFlexBox>
                <img src={account.picture} alt="profile-pic"/>
                <Typography>{account.name}</Typography>
            </HeaderFlexBox>
                
        </HeaderBox>
    )
}

export default Header;