import React, { useState } from 'react';
import Header from './components/Header';


function App() {
  const [currentPage, setCurrentPage] = useState('About Me')

  const renderPage = () => {
    if (currentPage == 'About Me') {
      return (
        <div>
          <img src='#' alt='a recent photo/avatar of me'></img>
          <p>A brief bio about me</p>
        </div>
      )
    }
    if (currentPage == 'Portfolio') {
      return (
        <div>Portfolio</div>
      )
    }

  }

  return (
    <div className="container">
      <Header />
      {renderPage()}
    </div>
  );
}

export default App;
