import React from 'react';
import "./slider.css";
import ProjectList from './projectStyle';
import ike_pic from "../../pics/ike.png";
import button_pic from "../../pics/button.png";
import weather_pic from "../../pics/weather.png";
import piata_pic from "../../pics/piata.png";
import Slider from 'react-animated-slider';

const PROJECTS = [
  {
    title: "La Piata",
    description: "A single page online marketplace built in Node.js and React.",
    url: piata_pic,
    features: [
      "Uses Next.js for server side rendering, routing and tooling and Styled Components for styling.",
      "Uses Apollo Client to perform mutations, fetch queries and cache data.",
      "Uses an Express GraphQL Server to implement query and mutation resolvers, custom SSL and charge credit cards with Stripe.",
      "Uses Prisma, a database interface that provides a set of GraphQL CRUD APIs for a MySQL, Postgres or MongoDB Database."
    ],
    link: "https://la-piata-frontend-ebhmpztoni.now.sh/",
    github: "https://github.com/Bogdan18b/online_store"
  },
  {
    title: "Project Ike",
    description: "A single page web app inspired by Yelp built in Ruby on Rails and React.",
    url: ike_pic,
    features: [
      "Built using a Ruby on Rails server coupled with a PostgreSQL Database on the backend and React/Redux for the frontend.",
      "Implements a CRUD system for reviews.",
      "Performs AJAX requests to fetch information from database for a quick search for a business or business type.",
      "Stores image uploads in the cloud using AWS S3, reducing server load and allowing app to scale gracefully."
    ],
    link: "https://project-ike.herokuapp.com/#/",
    github: "https://github.com/Bogdan18b/Project_Ike"
  },
  {
    title: "Weather Report",
    description: "A single page web app built in React.",
    url: weather_pic,
    features: [
      "Fetches a 5 day weather forecast from OpenWeatherMap API.",
      "Implements a CSS grid display system to make site responsive on all devices.",
      "Uses Google Maps Autocomplete to  accurately detect location."
    ],
    link: "http://bogdanbobletec.us/weather_report",
    github: "https://github.com/Bogdan18b/weather_report"
  },
  {
    title: "Button Soccer",
    description: "A platform web browser game built using Canvas HTML and JavaScript.",
    url: button_pic,
    features: [
      "Tracks key controls with event listeners for responsive gameplay.",
      "Uses Pythagoras' theorem to accurately detect collision."
    ],
    link: "http://bogdanbobletec.us/button-soccer/index.html",
    github: "https://github.com/Bogdan18b/button-soccer"
  }
];

const Projects = ({ className }) => (
  <Slider className={`slider ${className}`}>
    {
      PROJECTS.map(project => <ProjectList key={project.title}>
        <li className="project-title">
          <a href={project.link}>{project.title}</a>
        </li>
        <li>{project.description}</li>
        <li className="project-github">
          <a href={project.github}>
            <p className="fab fa-github"></p>
          </a>
        </li>
        <li>
          <a href={project.link}>
            <img src={project.url} alt="pic" />
          </a>
        </li>
      </ProjectList>)
    }
  </Slider>
);

export default Projects;
