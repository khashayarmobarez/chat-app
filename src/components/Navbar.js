import React from 'react';
import styles from './Navbar.module.css'

const Navbar = ({logoutHandler}) => {
    return (
        <div>
             <div className={styles.Navbar}>
                <h2 className={styles.title}>
                    khashayar chatapp
                </h2>
                <button className={styles.logOut} onClick={logoutHandler}>
                    log out
                </button>
            </div>
        </div>
    );
};

export default Navbar;