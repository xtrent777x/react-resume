import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function Portfolio() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    
    switch (currentPage) {
      case "Projects":
        return <Projects/>;
        case "Resume":
        return <Resume/>;
        case "Contact":
        return <Contact/>;
        default:
        return <About/>;
    }

  };

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {
          
          renderPage(currentPage)
        }
      </div>
    </div>
  );
}

export default Portfolio;
