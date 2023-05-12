import React from 'react';
import Project from '../Project';

const projects = [
  {
    name: "JS Quiz",
    desc: "An application to test your JavaScript knowledge.",
    link: "#challenge2",
    img: "tech-image-1.jpg"
  },
  {
    name: "Fasion Forecast",
    desc: "An application matching fasion items to the weather forecast.",
    link: "#project1",
    img: "tech-image-2.jpg"
  },
  {
    name: "Stadium Talk",
    desc: "An application to talk about baseball stadiums",
    link: "#project2",
    img: "tech-image-3.jpg"
  },
  {
    name: "Project3",
    desc: "Coming Soon",
    link: "#project3",
    img: "tech-image-4.jpg"
  },
  {
    name: "App5",
    desc: "Coming Soon",
    link: "#app5",
    img: "tech-image-5.jpg"
  },
  {
    name: "App6",
    desc: "Coming Soon",
    link: "#app6",
    img: "tech-image-6.jpg"
  },
]

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <hr/>
      <Project projects={projects} />
        
    </div>
  );
}
