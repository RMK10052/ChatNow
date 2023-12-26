import { Dialog, Box, styled } from "@mui/material"

//components
import Menu from "./menu/Menu"
import NullChat from "./chat/NullChat"
import ChatBox from "./chat/ChatBox"

//contexts
import { AccountContext } from "../../context/AccountProvider"
import { useContext } from "react"

const DialogStyle = {
    height: '95%',
    maxHeight: '100%',
    width: '100%',
    maxWidth: '100%',
    position: 'relative',
}

const MainDialogBox = styled(Box)`
    display: flex;
    height: 95%;
`

const LeftDialogBox = styled(Box)`
    min-width: 400px;
`

const RightDialogBox = styled(Box)`
    flex-grow: 1;
    height: 100%;
    max-height: 100%;
`


const ChatDialog = () => {

    const {chatUser} = useContext(AccountContext);

    return(
        <Dialog
             open={true} 
             PaperProps={{sx: DialogStyle}}  /* sx paperprop is used to define custom styles*/
             hideBackdrop={true}
        >
            <MainDialogBox>

                <LeftDialogBox>  
                    <Menu/>
                </LeftDialogBox>

                <RightDialogBox>
                    {Object.keys(chatUser).length ? <ChatBox/> : <NullChat/>}
                    
                </RightDialogBox>
                
            </MainDialogBox>
            
        </Dialog>
    )
}

export default ChatDialog;