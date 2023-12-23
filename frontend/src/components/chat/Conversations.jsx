import {Box, Typography} from '@mui/material';
import { useState, useEffect, useContext } from "react";

//controllers
import { getUsers } from "../../service/api";

//components
import Conversation from './Conversation';

//context
import { AccountContext } from "../../context/AccountProvider";

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
        <Box>
            {
                users.map(user => (
                    account.sub !== user.sub && 
                    <Conversation user = {user}/>
                ))
            }
        </Box>
    )
}

export default Conversations;