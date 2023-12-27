import { createContext,useState } from "react";

export const AccountContext = createContext(null);  //This is the context, and the below component is the context provider

const AccountProvider = ({children}) => {
    const [account,setAccount] = useState();
    const [chatUser,setChatUser] = useState({});
    
    return (
        <AccountContext.Provider value={{  /**The value of the context can be exported */
            account,
            setAccount,
            chatUser,
            setChatUser,
        }}>   
            {children}
        </AccountContext.Provider>
    )
};

export default AccountProvider;