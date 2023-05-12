import React from 'react';

const styles = {
    footer: {
      height: '100px',
      //backgroundColor: 'purple',
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
            <a href="https://github.com/mwelle238">
                <img src="github-icon.png" style={styles.icon}/>
            </a>
            <a href="https://www.linkedin.com/in/michael-welle-98224a26b/">
                <img src="linkedin-icon.png" style={styles.icon}/>
            </a>
            <a href="mailto:michaelwellecodes@gmail.com">
                <img src="email-icon.png" style={styles.icon}/>
            </a>
        </footer>
    )
}