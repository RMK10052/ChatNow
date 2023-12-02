
import { Box, InputBase, styled } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import MoreMenu from './MoreMenu';

const OuterFlexBox = styled(Box)`
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #17171c;
`

const MainFlexBox = styled(Box)`
    display: flex;
    position: relative;
    border-radius: 10px;
    background: #ededed;
    margin: 0px 15px;
`

const SearchBox = styled(InputBase)`
    width: 100%;
    padding: 5px 50px;
    margin-left: 10px;
`

const SearchIconBox = styled(Box)`
    position: absolute;
    height: 100%;
    padding: 0px ;
    margin: 10px;
`

const MenuBox = styled(Box)`
    padding: 5px;
    margin-left: auto;
    background: #ededed;
    border-radius: 10px;
`

const Search = () => {
    return (
        <OuterFlexBox>

            <MainFlexBox>

                <SearchIconBox>
                    <SearchIcon/>
                </SearchIconBox>

                <SearchBox placeholder='Search contacts'/>

            </MainFlexBox>

            <MenuBox>
                <MoreMenu/>
            </MenuBox>

        </OuterFlexBox>
    )
}

export default Search;