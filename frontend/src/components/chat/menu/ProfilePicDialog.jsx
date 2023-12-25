import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';

//contexts
import { useState, useContext } from "react";
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


const ProfilePicDialog = () => {

    const [openPic,setOpenPic] = useState(false);

    const {account} = useContext(AccountContext);

    const handleClick = () => {
        setOpenPic(true);
    }

    const handleClose = () => {
        setOpenPic(false);
    }
    
    return (
        <>
            <img src={account.picture} alt="profile-pic" onClick={handleClick}/>
            <Dialog
                open={openPic}
                onClose={handleClose}
                /**No backdrop */
                PaperProps={{sx: DialogStyle}}
            >
                <CloseIcon style={CloseIconStyle} onClick={handleClose}/>
                <img src={account.picture} alt="profile-pic" style={PicStyle}/>
                
            </Dialog>
        </>
    )
}

export default ProfilePicDialog;