// import React, { useState } from 'react';
// import Nav from './components/Nav';
// import About from './components/About';
// import Gallery from './components/Gallery';
// import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    {
      name: 'Resume',
      description: 'Click for my resume',
    },
    { name: 'Portfolio', 
      description: 'See My current projects' 
    },
  
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      Trent Roesbery Portfolio
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ):
        (
            <ContactForm></ContactForm>
          )}
      </main>
    </div>
  );
}

export default App;