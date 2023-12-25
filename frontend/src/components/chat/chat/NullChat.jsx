
import { Box, styled } from "@mui/material";

//constants
import { emptyChatImage } from "../../../constants/data";


const ImageBox = styled(Box)`
    height: 100%;
    text-align: center;
`


const Image = styled('img')({
    width: '100%',
    height: '100%',
    maxHeight: '100%',
})

const NullChat = () => {
    return (
        <ImageBox>
           
                <Image src={emptyChatImage} alt="NullChat" />
            
        </ImageBox>
    )
}

export default NullChat;