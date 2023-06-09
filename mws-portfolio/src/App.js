// import libraries
import React, { useState } from 'react';
// import pages and components
import NavTabs from './components/NavTabs';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/pages/Portfolio';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
// import css
import 'rsuite/dist/rsuite.min.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('About');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Portfolio />;
  };

  const styles = {
    bg: {
      backgroundImage: "linear-gradient(rgba( 75,6,75,.8) 20%, rgba( 75, 6, 75, .4) 100%)",
      height: "100vh",
    },
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div style={styles.bg} className='d-flex flex-column justify-content-between'>
      <div>
        <Header />
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        <div>
          {renderPage()}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
