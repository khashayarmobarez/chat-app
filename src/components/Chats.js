import React, { useState, useContext } from 'react';
import'./Chats.css';
import { useNavigate } from 'react-router-dom';

import { auth } from '../firebase'
import Navbar from './Navbar';

import { ChatEngine } from 'react-chat-engine';

// context 
import { authContext } from '../contexts/AuthContextProvider';
import { useEffect } from 'react';
import axios from 'axios';

const Chats = () => {

    const[loading, setLoading] = useState(true);
    const user = useContext(authContext);
    const navigate = useNavigate();

    useEffect(() => {

        // if the use data is not availabe sent the user to login  
        if(!user) {
            navigate('/login')
            return;
        }

        axios.get('https://api.chatengine.io/users/me', {
            headers: {
                'project-id':'f7a2c20c-bce9-4c58-a352-cb197d36a761',
                'user-name': user.email,
                'user-secret': user.uid
            }
        }).then(() => {
            setLoading(false)
        })
        .catch(() => {
            let formData = new FormData();
            formData.append('email', user.email)
            formData.append('name', user.email)
            formData.append('secret', user.uid)
            getFile(user.photoURL)
            .then(avatar => {
                formData.append('avatar',avatar, avatar.name)
                axios.post('https://api.chatengine.io/users/', formData, {
                    headers: {
                        'private-key' : '429ce61c-0613-41ee-a749-6acf11125f2a'
                    }
                })
                .then (
                    () => setLoading(false)
                )
                .catch(error => console.error())
            })
        })

    }, [user, navigate])

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data], 'userPhoto.jpg', {type: 'image/jpeg'})
    }
    
    const logoutHandler = async() => {
        await auth.signOut()
        navigate('/login')
    }


    if(!user || loading) return 'loading...'

    return (
        <div className='container' >
            <Navbar logoutHandler={logoutHandler} />
            <ChatEngine 
            height='calc(95vh)'
            projectID='f7a2c20c-bce9-4c58-a352-cb197d36a761'
			userName={user.email}
			userSecret={user.uid} />
        </div>
    );
};

export default Chats;