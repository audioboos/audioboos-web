import React from 'react';
import Footer from './Footer';
import { ILayoutProps } from './Layout';
import { Navbar } from './Navbar';
import Sidebar from './Sidebar';

const AuthLayout = ({ children }: ILayoutProps) => {
  return (
    <div className="font-alice">
      <div className="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
        <Sidebar />
        <div className="flex flex-col w-full h-full overflow-x-hidden overflow-y-auto">
          <Navbar />
          <main className="flex-grow overflow-y-scroll">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default AuthLayout;
