import React from 'react';

const styles = {
    name: {
      fontSize: '3rem',
      marginLeft: '20px',

    },
    profilePic: {
      height: '128px',
      width: '128px'
    },
}

export default function Header(){
    return (
        <header className='d-flex flex-column' style={styles.header}>
            <div className='d-flex flex-row justify-content-between align-items-end'>
                <h1 style={styles.name}>Michael Welle</h1>          
                <img src='profile.jpg' style={styles.profilePic} alt="profile pic"/>
            </div>
        </header>
    )
}