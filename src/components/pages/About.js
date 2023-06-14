import React from 'react';
import { List } from 'rsuite'
import { skills } from '../../utils/reducers';


export default function About() {
  return (
    <div className='p-3'>
      <h1>About Me</h1>
      <hr/>
      <p>
          I grew up in the midwest.  I graduated from a rural high school in Minnesota.  I attended university in the largest city in North Dakota.
          I worked in the service industry before transfering my talents to the manufacturing sector.  In 2020 I met my wife.  In 3 years, I have
          moved across country, got married, started a family and bought a house.  For my next feat, I would like to apply my skills to the tech industry.
      </p>
      <h1>Skills</h1>
      <p>
          I recently received a Full-Stack Web Development Certificate from UC-Davis Bootcamp.  The skills that I learned in the bootcamp include:
      </p>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
