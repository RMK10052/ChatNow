
import { Box, Typography, styled } from "@mui/material";
import GetAppIcon from '@mui/icons-material/GetApp';

//utils
import { formatDate, downloadMedia } from "../../../utils/utils";

//contexts
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

//constants
import { iconPDF } from "../../../constants/data";

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
                {
                    message.type === 'file' ? <FileMessage message={message}/> : <TextMessage message={message}/> 
                }
                
            </MyMessageBox> : 
            <UserMessageBox>
                {
                    message.type === 'file' ? <FileMessage message={message}/> : <TextMessage message={message}/> 
                }
            </UserMessageBox>
        }
        </>
        
    )
}

const TextMessage = ({message}) => {
    return (
        <>
            <TextBox> {message.text} </TextBox>
            <TimeBox> {formatDate(message.createdAt)} </TimeBox> 
        </>
    )
}

const FileMessage = ({message}) => {
    return (
        <div style={{ position: 'relative' }}>
            {
                message?.text?.includes('.pdf') ?
                    <div style={{ display: 'flex' }}>
                        <img src={iconPDF} alt="pdf-icon" style={{ width: 80 }} />
                        <Typography style={{ fontSize: 14 }} >{message.text.split("/").pop()}</Typography>
                    </div>
                : 
                    <img style={{ width: 300, height: '100%', objectFit: 'cover' }} src={message.text} alt={message.text} />
            }
            <TimeBox style={{ position: 'absolute', bottom: 0, right: 0 }}>
                <GetAppIcon 
                    onClick={(e) => downloadMedia(e, message.text)} 
                    fontSize='small' 
                    style={{ marginRight: 10, border: '1px solid grey', borderRadius: '50%' }} 
                />
                {formatDate(message.createdAt)}
            </TimeBox>
        </div>
    )
}

export default Message;