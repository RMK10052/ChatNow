import {Box, styled} from '@mui/material';
import Divider from '@mui/material/Divider';

//context, state
import { useState, useEffect, useContext } from "react";

//controllers
import { getUsers } from "../../../service/api";

//components
import Conversation from './Conversation';

//context
import { AccountContext } from "../../../context/AccountProvider";

const ConversationsBox = styled(Box)`
    height: 70vh;
    overflow: overlay;
`

const Conversations = ({text}) => {

    const [users,setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let response = await getUsers();
            const filteredUsers = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filteredUsers);
        }
        fetchData();
    }, [text]);

    const {account, socket, setOnlineUsers} = useContext(AccountContext);

    useEffect(() => {
        socket.current.emit('addUsers', account);
        socket.current.on("getUsers", users => {
            setOnlineUsers(users);
        });
    }, [account])

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