
import { Box, Dialog, Typography, List, ListItem, styled } from "@mui/material";

//constants
import { qrCodeImage } from "../../constants/data";

//additionals
import {GoogleLogin} from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

//contexts
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

//api
import { addUser } from "../../service/api";

const DialogStyle = {
    height: '80%',
    maxHeight: '100%',
    width: '60%',
    maxWidth: '100%',
    marginTop: '20%',
    marginBottom: '20%',
}

const MainDialogBox = styled(Box)`
    display: flex;
`

const LeftDialogBox = styled(Box)`
    padding: 56px 0px 56px 56px;
`

const RightDialogBox = styled(Box)`
    margin-left: 200px;
`
const Title = styled(Typography)`
    font-size: 30px;
    margin-bottom: 25px;
`

const QRImage = styled('img')({   /* Since img is not a mui component, it is to wrapped as a string to use styled. Also, the styles should be written as an object */
    height: 200,
    width: 200,
    margin: '50px 0 0 50px'
})

const LoginDialogue = () => {
    
    const {setAccount} = useContext(AccountContext);

    const onLoginSuccesss = (res) => {
        let decodedCredential = jwtDecode(res.credential)
        setAccount(decodedCredential);
        addUser(decodedCredential);
    }

    const onLoginError = (res) => {
        console.log('Error occured during login',res)
    }

    return (
        <Dialog
             open={true} 
             PaperProps={{sx: DialogStyle}}  /* sx paperprop is used to define custom styles*/
             hideBackdrop={true}
        >
            <MainDialogBox>
                <LeftDialogBox>
                    <Title variant="h5">
                        Welcome to ChatNow
                    </Title>
                    <Typography variant="h6">
                        To use ChatNow on your Computer:
                    </Typography>
                    <List>
                        <ListItem>
                            1. Click on the link 
                        </ListItem>
                        <ListItem>
                            2. Sign in with your Google Account
                        </ListItem>
                    </List>
                </LeftDialogBox>
                <RightDialogBox style={{position:'relative'}}>
                    <QRImage src={qrCodeImage} alt="qr-code" />
                    <Box style={{position:'absolute', top:'45%', transform:'translatex(25%)'}}>
                        <GoogleLogin
                            onSuccess={onLoginSuccesss}
                            onError={onLoginError}
                        />
                    </Box>
                </RightDialogBox>
            </MainDialogBox>
        </Dialog>
    );
}

export default LoginDialogue;