import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import { ILayoutProps } from './Layout';
import { Navbar } from './Navbar';
import Sidebar from './Sidebar';

const AuthLayout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <Navbar />
        {/* <HeaderStats />  */}
        <div className="w-full px-4 mx-auto md:px-10">{children}</div>
      </div>
    </>
  );
};
export default AuthLayout;
