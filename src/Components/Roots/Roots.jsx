import React from 'react';
import NabBar from '../Header/NabBar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const Roots = () => {
    return (
        <div>
            <NabBar></NabBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;