import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import About from './components/pages/About';


function App() {
  const [currentPage, setCurrentPage] = useState('About Me')

  const changePage = (page) => setCurrentPage(page);

  const renderPage = () => {
    if (currentPage === 'About Me') {
      return <About />
    }
    if (currentPage === 'Portfolio') {
      return (
        <div>Portfolio</div>
      )
    }

  }

  console.log(currentPage)

  return (
    <div className="container">
      <Header />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
