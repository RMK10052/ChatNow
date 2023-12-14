import { Box, Typography, styled } from "@mui/material";

//contexts
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

//components
import ProfilePicDialog from "./ProfilePicDialog";

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
        padding-top: 25px;
        padding-bottom: 10px;
        margin-left: auto;
        padding-right: 50px;
        font-weight: 1000;
    }
`

const Header = () => {

    const {account} = useContext(AccountContext);

    return (
        <HeaderBox>
            <HeaderFlexBox>
                
                <ProfilePicDialog/>
                <Typography>{account.name}</Typography>
            </HeaderFlexBox>
                
        </HeaderBox>
    )
}

export default Header;