import { useState } from 'react';
import { Box, MenuItem } from '@mui/material';
import {Menu} from '@mui/material';

import MoreVertIcon from '@mui/icons-material/MoreVert';

const MoreMenu = () => {

    const [open,setOpen] = useState(false);  /**Takes the initial state as the parameter */

    const handleClose = () => {
        setOpen(null);
    }

    const handleClick = (event) => {
        setOpen(event.currentTarget);  /**The currentTarget property returns the element whose event listener triggered the event. */
    }

    /**What's actually happening here? How did we link the MoreVert and Menu?
     * We defined a state, and we are using this state in both MoreVert and Menu.
     */
    return (
        <Box>
            <MoreVertIcon onClick={handleClick} style={{
                cursor: 'pointer',
            }}/>
            <Menu
                
                anchorEl={open}  /**Anchor position of the Menu */
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={open}      /**opens if the state is {open} */
                onClose={handleClose}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}

            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My Media</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </Box>
    )
}

export default MoreMenu;