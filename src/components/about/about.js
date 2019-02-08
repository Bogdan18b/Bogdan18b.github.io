import React from 'react';
import AboutDiv from './aboutStyle';
import pic from "../../pics/fam.jpg";

const About = ({ className }) => (
  <AboutDiv className={className}>
    <img src={pic} alt="pic" />
    <article>I am a former professional poker player turned software developer, with experience in JavaScript, React, Redux, GraphQL, Ruby, Rails, SQL, HTML, CSS.
      <br />
      As a poker player, I learned that you have to constantly improve your skills, know the latest strategies, adapt quickly to changes and be versatile, but most important to think outside the box. All these skills are required to be a successful software engineer as well.
      <br />
      I moved to Palm Beach, FL after I graduated college in my home town, Targu Mures, Romania. Since then I have worked in hospitality, for country clubs, for a private yacht doing parties around Manhattan, for FBI conferences, I did events at West Point, I worked the Met Gala 5 times, and countless other private events; for 3 years I was a conference room attendant for one of the biggest financial companies in NY, Blackstone.
      <br />
      In the summer of 2018 I attended and graduated App Academy, a fullstack software development immersive bootcamp, with a less than 3% acceptance rate; this allowed me to pursue my dream of becoming a software developer.
    </article>
  </AboutDiv >
);

export default About;