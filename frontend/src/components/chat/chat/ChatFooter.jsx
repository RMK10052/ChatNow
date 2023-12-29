
import { Box, styled, InputBase } from "@mui/material"
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';

import { useEffect, useState } from "react";

//api
import { uploadFile } from "../../../service/api";

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

const ChatFooter = ({sendText, chatText, setChatText, handleSendClick, file, setFile, setFileUrl}) => {

    useEffect(() => {
        const getFile = async () => {
            if(file){
                const data = new FormData(); // to easily form key-value pairs
                data.append("name", file.name);
                data.append("file", file);

                const response = await uploadFile(data);  //fileUrl
                setFileUrl(response);
            }   
        }

        getFile();
    }, [file])

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
        setChatText(e.target.files[0].name);
    }

    return (
        <Container>
            <Emoji/>
            <label htmlFor="fileInput">
                <ClipIcon/>
            </label>
            <input 
                type="file" 
                id="fileInput"    
                style={{display:"none"}}
                onChange={(e) => onFileChange(e)}
            />
            <TypeBar>
                <InputField
                    placeholder="Type a message"
                    onChange={(e) => setChatText(e.target.value)}
                    onKeyPress={(e) => sendText(e)}
                    value={chatText}
                />
            </TypeBar>
            <SendComponent onClick={() => {handleSendClick()}}/>
        </Container>
    )
};

export default ChatFooter;