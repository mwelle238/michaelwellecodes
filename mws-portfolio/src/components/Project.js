import React from 'react';

const styles = {
    cardHeader: {
        backgroundColor:"#36454F",
    },
    link: {
        textDecoration:"none",
        color:"yellow"
    },
    image: {
        aspectRatio:"3/2"
    }
}

function Project(props){
    return (
        <div className='d-flex flex-row flex-wrap justify-content-between container-fluid'>
        {props.projects.map(project => (
            <div className='col-12 col-md-6 col-xxl-4 p-2'>
                <a href={project.link} style={styles.link} target="_blank" rel="noreferrer">
                    <div className='card card-header' style={styles.cardHeader}>
                        <h2>{project.name}</h2>
                    </div>
                    <img className='card-img-top' src={project.img} alt="Tech" style={styles.image}/>
                    <div className='card card-footer' style={styles.cardHeader}>
                        <p>{project.desc}</p>                
                    </div>
                </a> 
            </div>
        ))}
        </div>
    )
}

export default Project;