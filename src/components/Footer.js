import React from 'react';

const styles = {
    footer: {
      height: '100px',
    },
    icon: {
      margin: "25px 10px",
      height: "50px",
      width: "50px"
    }
}

export default function Footer(){
    return (
        <footer className='d-flex flex-row justify-content-center' style={styles.footer}>
            <a href="https://github.com/mwelle238" target='_blank' rel="noreferrer">
                <img src="github-icon.png" style={styles.icon} alt="github"/>
            </a>
            <a href="https://www.linkedin.com/in/michael-welle-98224a26b/" target='_blank' rel="noreferrer">
                <img src="linkedin-icon.png" style={styles.icon} alt="linkedin"/>
            </a>
            <a href="mailto:michaelwellecodes@gmail.com" target='_blank' rel="noreferrer">
                <img src="email-icon.png" style={styles.icon} alt="email"/>
            </a>
        </footer>
    )
}