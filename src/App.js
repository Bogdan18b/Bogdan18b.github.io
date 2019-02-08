import React, { Fragment } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Title from './components/title/title';
import About from './components/about/about';
import './reset.css';
import Projects from './components/projects/projects';

const App = () => {
  let [projectsClass, setProjectsClass] = React.useState('hide');
  let [aboutClass, setAboutClass] = React.useState('hide');
  const showAbout = () => {
    setAboutClass('flex');
    setProjectsClass('hide');
  };
  const showProjects = () => {
    setProjectsClass('flex');
    setAboutClass('hide');
  };
  return (
    <Fragment>
      <Header />
      <Title showAbout={showAbout} showProjects={showProjects} />
      <Projects className={projectsClass} />
      <About className={aboutClass} />
      <Footer />
    </Fragment>
  );
}

export default App;
