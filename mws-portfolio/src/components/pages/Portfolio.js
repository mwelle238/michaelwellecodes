import React from 'react';
import Project from '../Project';

const projects = [
  {
    name: "JS Quiz",
    desc: "An application to test your JavaScript knowledge.",
    link: "https://mwelle238.github.io/MWs-JS-quiz/",
    img: "tech-image-1.jpg"
  },
  {
    name: "Weather Forecast",
    desc: "A simple weather forecast app.",
    link: "https://mwelle238.github.io/MWs-Weather-App/",
    img: "tech-image-2.jpg"
  },
  {
    name: "Stadium Talk",
    desc: "An application to talk about baseball stadiums",
    link: "https://mlb-stadium-talk.herokuapp.com/",
    img: "tech-image-3.jpg"
  },
  {
    name: "Project3",
    desc: "Coming Soon",
    link: "#project3",
    img: "tech-image-4.jpg"
  },
  {
    name: "Daily Planner",
    desc: "An app to keep track of meetings and appointments",
    link: "https://mwelle238.github.io/MWs-daily-planner/",
    img: "tech-image-5.jpg"
  },
  {
    name: "Password Generator",
    desc: "An app to generate passwords",
    link: "https://mwelle238.github.io/MWs-Password-Generator/",
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
