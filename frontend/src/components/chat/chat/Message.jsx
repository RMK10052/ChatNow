
import { Box, Typography } from "@mui/material";

const Message = ({message}) => {
    return (
        <Box>
            <Typography>
                {message.text}
                {message.createdAt}
            </Typography>
        </Box>
    )
}

export default Message;