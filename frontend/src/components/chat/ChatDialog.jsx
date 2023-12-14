import { Dialog, Box, styled } from "@mui/material"

//components
import Menu from "./Menu"
import NullChat from "./NullChat"

const DialogStyle = {
    height: '95%',
    maxHeight: '100%',
    width: '100%',
    maxWidth: '100%',
    position: 'relative',
}

const MainDialogBox = styled(Box)`
    display: flex;
`

const LeftDialogBox = styled(Box)`
    min-width: 400px;
`

const RightDialogBox = styled(Box)`
    
`


const ChatDialog = () => {
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
                    <NullChat/>
                </RightDialogBox>
                
            </MainDialogBox>
            
        </Dialog>
    )
}

export default ChatDialog