import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase';

export const authContext = React.createContext()

const AuthContextProvider = ({children}) => {

    // to know if the data is coming 
    const [loading, setLoading] = useState(true)
    // user data 
    const [user, setUser] = useState(false)
    // using to navigate the user   
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            // setting the user data 
            setUser(user);
            setLoading(false)
            // if the user data is inserted, push the user to the chat page 
            if(user) navigate("/chats")
        })
    }, [user, navigate])

    return (
        <authContext.Provider value={user}>
            {!loading && children}
        </authContext.Provider>
    );
};

export default AuthContextProvider;