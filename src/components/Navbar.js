import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Navbar = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default Navbar;
