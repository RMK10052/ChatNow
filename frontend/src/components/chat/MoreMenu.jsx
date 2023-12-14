import { useState } from 'react';
import { Box, Dialog, MenuItem } from '@mui/material';
import {Menu, Drawer} from '@mui/material';

import MoreVertIcon from '@mui/icons-material/MoreVert';

//components
import ProfileDrawer from './ProfileDrawer';

const MoreMenu = () => {

    const [openMoreMenu,setOpenMoreMenu] = useState(null);  /**Takes the initial state as the parameter */

    const handleClose = () => {
        setOpenMoreMenu(null);
    }

    const handleClick = (event) => {
        setOpenMoreMenu(event.currentTarget);  /**The currentTarget property returns the element whose event listener triggered the event. */
    }

    /**What's actually happening here? How did we link the MoreVert and Menu?
     * We defined a state, and we are using this state in both MoreVert and Menu.
     */


    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = () => {
        setOpenDrawer(true);
        handleClose();
    }


    return (
        <Box>
            <ProfileDrawer open={openDrawer} setOpen={setOpenDrawer}/>
            
            <MoreVertIcon onClick={handleClick} style={{
                cursor: 'pointer',
            }}/>
            <Menu
                
                anchorEl={openMoreMenu}  /**Anchor position of the Menu */
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={openMoreMenu}      /**opens if the state is {open} */
                onClose={handleClose}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                
            >
                <MenuItem onClick={() => toggleDrawer()}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My Media</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </Box>
    )
}

export default MoreMenu;