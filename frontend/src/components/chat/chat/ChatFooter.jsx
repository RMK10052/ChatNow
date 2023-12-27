
import { Box, styled, InputBase } from "@mui/material"
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';

import { useState } from "react";

const Container = styled(Box)`
    height: 50px;
    background: #ededed;
    display: flex;
    width: 100%;
    align-items: center;
`

const Emoji = styled(SentimentVerySatisfiedIcon)`
    padding-left: 10px;
    cursor: pointer;
`

const ClipIcon = styled(AttachFileIcon)`
    padding-left: 5px;
    padding-right: 5px;
    cursor: pointer;
`

const InputField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    padding-left: 25px;
    font-size: 14px;
    height: 20px;
    width: 100%;
`;

const TypeBar = styled(Box)`
    background-color: #FFFFFF;
    border-radius: 20px;
    width: calc(94% - 100px)
`

const SendComponent = styled(SendIcon)`
    margin-left: auto;
    margin-right: 40px;
    cursor: pointer;
`

const ChatFooter = ({sendText, chatText, setChatText}) => {

    return (
        <Container>
            <Emoji/>
            <ClipIcon/>
            <TypeBar>
                <InputField
                    placeholder="Type a message"
                    onChange={(e) => setChatText(e.target.value)}
                    onKeyPress={(e) => sendText(e)}
                    value={chatText}
                />
            </TypeBar>
            <SendComponent/>
        </Container>
    )
};

export default ChatFooter;