import React from 'react';
import Password from '../Password';

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
      <Password/>
    </div>
  );
}
