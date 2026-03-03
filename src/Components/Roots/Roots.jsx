import React from 'react';
import NabBar from '../Header/NabBar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const Roots = () => {
    return (
      <div>
        <NabBar></NabBar>
        <div className='my-10'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Roots;