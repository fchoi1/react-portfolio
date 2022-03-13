import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const profile = {
    name: 'Fabio Choi',
    var: 'fabio-choi',
    avatar: require(`./assets/avatar/fabio-choi.png`),
    file: 'fabio-choi.png',
    github: 'fchoi1',
    linkedin: 'https://www.linkedin.com/in/fabio-choi-6a325676',
    steam: 'https://steamcommunity.com/id/nickonanother/',
    instgram: 'https://www.instagram.com/w4ng0/'
  };

  console.log(profile);
  const [pages] = useState([
    { name: 'About Me', var: 'about' },
    { name: 'Projects', var: 'projects' },
    { name: 'Contact Me', var: 'contact' },
    { name: 'Resume', var: 'resume' }
  ]);
  const [currentPage, setCurrentPage] = useState('about');

  const renderPage = (page) => {
    switch (page) {
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume profile={profile} />;
      default:
        return <About profile={profile} />;
    }
  };

  return (
    <>
      <Nav
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        pages={pages}
        profile={profile}
      />
      <main>{renderPage(currentPage)}</main>

      <Footer profile={profile} />
    </>
  );
}

export default App;
