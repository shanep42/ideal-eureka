import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import About from './components/pages/About';


function App() {
  const [currentPage, setCurrentPage] = useState('About Me')

  const renderPage = () => {
    if (currentPage === 'About Me') {
      return <About />
    } else if (currentPage === 'Portfolio') {
      return (
        <div>Portfolio</div>
      )
    } else if (currentPage === 'Contact') {
      return (
        <div>Contact</div>
      )
    } else if (currentPage === 'Resume') {
      return (
        <div>Resume</div>
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
