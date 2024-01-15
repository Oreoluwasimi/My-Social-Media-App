import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const[currentUser, setcurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    
    const login = () => {
       setcurrentUser({id:1, name:"Anna Bella", profilePic: "https://images.pexels.com/photos/4458627/pexels-photo-4458627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"})
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]
    );

    return(
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    )
}