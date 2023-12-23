

import { Box } from "@mui/material";

const Conversation = ({user}) => {
    return (
        <Box>
            <Box>
                <img src={user.picture} alt="dp" />
            </Box>
            <Box>
                {user.name}
            </Box>
        </Box>
    )
}

export default Conversation;