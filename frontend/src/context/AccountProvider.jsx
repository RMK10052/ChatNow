import { createContext,useState, useRef, useEffect } from "react";

import { io } from 'socket.io-client';

export const AccountContext = createContext(null);  //This is the context, and the below component is the context provider

const AccountProvider = ({children}) => {
    const [account,setAccount] = useState();
    const [chatUser,setChatUser] = useState({});
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [newMessageFlag, setNewMessageFlag] = useState(false);

    const socket = useRef();

    useEffect(() => {
        socket.current = io('ws://localhost:9000')
    }, [])
    
    return (
        <AccountContext.Provider value={{  /**The value of the context can be exported */
            account,
            setAccount,
            chatUser,
            setChatUser,
            socket,
            onlineUsers, 
            setOnlineUsers,
            newMessageFlag, 
            setNewMessageFlag,
        }}>   
            {children}
        </AccountContext.Provider>
    )
};

export default AccountProvider;