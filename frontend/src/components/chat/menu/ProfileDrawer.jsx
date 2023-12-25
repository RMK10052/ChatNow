import { Drawer, Box, styled, Typography, Dialog  } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';


//context
import { useContext, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const DialogStyle = {
    maxHeight: '100%',
    height: '90%',
    maxWidth: '100%',
    width: '60%',
    position: 'absolute',
}

const PicStyle = {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    position: 'relative'
}

const CloseIconStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    color: 'red',
    background: 'white',
    borderRadius: '50px',
    zIndex: 1,
    cursor: 'pointer'
}

const ProfileDrawerHeader = styled(Box)`
    display: flex;
    background-color: #ededed; 
    padding-top: 10px; 
    padding-bottom: 10px;

    & > p{
        font-weight: 900;
    }
`

const ProfilePictureBox = styled(Box)  `
    padding-top: 10px;
    padding-bottom: 40px;
    text-align: center;
    justify-content: center;
    display: flex;

    & > img{
        height: 130%;
        width: auto;
        border-radius: 100px;
        overflow: hidden;
    }

    & > img: hover{
        cursor: pointer;
        opacity: 0.9;
    }
`

const NameBox = styled(Box)`
    padding-top: 20px;
    padding-left: 30px;
    background-color: #ededed; 

    & > p{
        font-weight: 900;
        padding-top: 10px;
        padding-bottom: 20px;
    }
`

const ProfileDrawer = ({ open, setOpen }) => {

    const [openPic,setOpenPic] = useState(false);


    const handleClick = () => {
        setOpenPic(true);
    }

    const handlePicClose = () => {
        setOpenPic(false);
    }

    const drawerStyle = {
        top: '17px',
        left: '30px',
        height: '94.85%', 
        maxHeight: '100%',
        width: '26%',
        maxWidth: '100%',
        minWidth: '400px',
        position: 'absolute',
        boxShadow: 'none',
        border: 'solid 1px #d3d3d3',
        borderStyle: 'none solid none none',
        
    };

    const handleClose = () => {
        setOpen(false);
    };

    const {account} = useContext(AccountContext);

    return (
        <Drawer
            open={open}
            onClose={handleClose}
            PaperProps={{ sx: drawerStyle }}
            hideBackdrop={true}
            style={{ zIndex: 1300 }}
        >
            <ProfileDrawerHeader>
                <ArrowBackIcon
                    onClick={handleClose}
                    style={{
                        padding: '10px 30px',
                        cursor: 'pointer',
                    }}
                />
                <Typography
                    style={{
                        padding: '10px',
                    }}
                >
                    Profile
                </Typography>
            </ProfileDrawerHeader>

            <ProfilePictureBox>
                <img src={account.picture} onClick={handleClick} alt="DP"></img>
            </ProfilePictureBox>

            <Dialog
                open={openPic}
                onClose={handlePicClose}
                /**No backdrop */
                PaperProps={{sx: DialogStyle}}
            >
                <CloseIcon style={CloseIconStyle} onClick={handlePicClose}/>
                <img src={account.picture} alt="profile-pic" style={PicStyle}/>
                
            </Dialog>

            <NameBox>
                Your Name
                <Typography>{account.name}</Typography>
            </NameBox>

            <Box sx={{
                paddingTop: '10px',
                paddingLeft: '20px',
            }}>
                This name will be visible to other ChatNow members
            </Box>
            
        </Drawer>
    );
};

export default ProfileDrawer;