import {Box, styled} from '@mui/material';
import Divider from '@mui/material/Divider';

//context, state
import { useState, useEffect, useContext } from "react";

//controllers
import { getUsers } from "../../service/api";

//components
import Conversation from './Conversation';

//context
import { AccountContext } from "../../context/AccountProvider";

const ConversationsBox = styled(Box)`
    height: 80vh;
    overflow: overalay;
`

const Conversations = () => {

    const [users,setUsers] = useState([]);
    // console.log(users);

    useEffect(() => {
        const fetchData = async () => {
            let response = await getUsers();
            setUsers(response);
        }
        fetchData();
    }, [])

    const {account} = useContext(AccountContext);

    return (
        <ConversationsBox>
            {
                users.map(user => (
                    account.sub !== user.sub && 
                    <>
                        <Conversation user = {user}/>
                        <Divider variant='middle'/>
                    </>
                ))
            }
        </ConversationsBox>
    )
}

export default Conversations;