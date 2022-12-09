import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';


function App() {
  const [currentPage, setCurrentPage] = useState('About Me')

  const renderPage = () => {
    if (currentPage === 'About Me') {
      return <About />
    } else if (currentPage === 'Portfolio') {
      return < Portfolio />
    } else if (currentPage === 'Contact') {
      return (
        <Contact />
      )
    } else if (currentPage === 'Resume') {
      return (
        <Resume />
      )
    }

  }

  console.log(currentPage)

  return (
    <div className="container">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
