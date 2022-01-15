import React, { useState } from 'react';
import AppRouter from '../../../AppRouter';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

const Layout = (props) => {
  const [isNavClicked, setIsNavClicked] = useState(false);
  return (
    <div className='container-fluid'>
      <Header />
      <AppRouter
        isNavClicked={isNavClicked}
        setIsNavClicked={setIsNavClicked}
      />
      <Footer />
    </div>
  );
};

export default Layout;
