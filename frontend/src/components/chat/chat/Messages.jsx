import { Box, styled } from "@mui/material";

const MessagesWrapper = styled(Box)`
    background-image: url(${'https://mir-s3-cdn-cf.behance.net/project_modules/disp/acb65873426833.5c08f5634f7fb.png'});
    background-size: 50%;
`

const MessagesBox = styled(Box)`
    height: 79vh;
    overflow-y: scroll;
`

const Messages = () => {
    return (
        <MessagesWrapper>
            <MessagesBox>

            </MessagesBox>
        </MessagesWrapper>
    )
}

export default Messages;
