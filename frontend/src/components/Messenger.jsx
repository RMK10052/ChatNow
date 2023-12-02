

import {AppBar,Toolbar,styled,Box} from '@mui/material'
//components 
import LoginDialog from "./account/LoginDialog";
import ChatDialog from './chat/ChatDialog';

//contexts
import { useContext, useState } from 'react';
import { AccountContext } from '../context/AccountProvider';


const NewBox = styled(Box)` 
    height: 100vh;  {/* If not done, then the style will apply to only wrapped components */}
    background: #dadada;
`;

const Header = styled(AppBar)`
    background-color: #00ccff;
    height: 250px;
`;

const Messenger = () => {

    const {account} = useContext(AccountContext);

    return (
        <NewBox>
            {
                account?<>
                    <Header>
                        <Toolbar>

                        </Toolbar>
                    </Header>
                    <ChatDialog/>
                
                </>:
                <>
                    <Header>
                        <Toolbar>

                        </Toolbar>
                    </Header>
                    <LoginDialog/>
                </>
            }
        </NewBox>
        
    )
}

export default Messenger;