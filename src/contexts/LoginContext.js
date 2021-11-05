import React, {createContext, useState} from "react";

export const LoginContext = createContext(
    {
        isLoggedin: false,
        login:()=>{}
    }
);

export const LoginContextProvider = (props)=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const login = ()=>{
        // console.log("inhere");
        setIsLoggedIn(true);
        // console.log(isLoggedIn);
    }
    const context = {
        isLoggedIn: isLoggedIn,
        login: login
    }

    return (
        <LoginContext.Provider value={context}>
            {props.children}
        </LoginContext.Provider>
    )
}