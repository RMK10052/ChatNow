
import { Box, styled } from "@mui/material";

//constants
import { emptyChatImage } from "../../constants/data";


const ImageBox = styled(Box)`
    height: 100%;
    text-align: center;
`

const Container = styled(Box)`
    padding: 0 200px;
`

const Image = styled('img')({
    width: 400,
    color: 'red',
})

const NullChat = () => {
    return (
        <ImageBox>
           
                <Image src={emptyChatImage} alt="NullChat" />
            
        </ImageBox>
    )
}

export default NullChat;