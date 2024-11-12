import React, { createContext } from "react";

export const UserContext = createContext({})

export function UserContextProvider ({children}){
    const [userinfo, setUserInfo] = React.useState({});
    return (
        <UserContext.Provider value={{userinfo, setUserInfo}}>
                {children}
        </UserContext.Provider>
    );
}