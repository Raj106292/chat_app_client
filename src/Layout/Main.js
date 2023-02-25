import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header';

const Main = () => {
    return (
        <section>
            <Header />
            <Outlet />
        </section>
    );
};

export default Main;