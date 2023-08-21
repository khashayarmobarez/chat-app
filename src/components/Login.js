import React from 'react';
import styles from './Login.module.css'
import firebase from 'firebase';
import { auth } from '../firebase';

// icons 
import google from '../assets/google-icon.svg'

const Login = () => {
    return (
        <div className={styles.Container}>

            <div className={styles.form}>

                <div className={styles.title}>Welcome</div>
                <div className={styles.subtitle}>khashayar's chat app</div>


                <button className={styles.login} 
                // to sign in with google 
                onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                      <img src={google} alt='logo'/>
                      <p>sign in with google</p>
                </button>

           </div>

        </div>
    );
};

export default Login;