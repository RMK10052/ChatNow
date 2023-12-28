
import { Box, Typography, styled } from "@mui/material";

//utils
import { formatDate } from "../../../utils/utils";

//contexts
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const MyMessageBox = styled(Box)`
    background-color: #add8b6;
    max-width: 50%;
    margin-left: auto;
    width: fit-content;
    display: flex;
    word-break: break-word;
    padding: 5px;
    border-radius: 15px;
`

const UserMessageBox = styled(Box)`
    background-color: #e3dac9;
    max-width: 50%;
    margin-right: auto;
    width: fit-content;
    display: flex;
    word-break: break-word;
    padding: 5px;
    border-radius: 15px;
`

const TextBox = styled(Typography)`
    font-size: 14px;
    padding: 0 10px 0 5px;
`

const TimeBox = styled(Typography)`
    font-size: 10px;
    color: #c40234;
    margin-top: auto;
    word-break: keep-all;
`

const Message = ({message}) => {

    const {account} = useContext(AccountContext);

    return (

        <>
            {
            account.sub === message.senderId ? 
            <MyMessageBox>
                <TextBox> {message.text} </TextBox>
                <TimeBox> {formatDate(message.createdAt)} </TimeBox>
            </MyMessageBox> : 
            <UserMessageBox>
                <TextBox> {message.text} </TextBox>
                <TimeBox> {formatDate(message.createdAt)} </TimeBox>
            </UserMessageBox>
        }
        </>
        
    )
}

export default Message;