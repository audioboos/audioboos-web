import React from 'react';
import Footer from './footer.component';
import { ILayoutProps } from './default-layout.component';
import { Navbar } from './navbar';
import Sidebar from './sidebar.component';

const AuthLayout = ({ children }: ILayoutProps) => {
  return (
    <div className="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
      <Sidebar />
      <div className="flex flex-col w-full h-full ml-64 overflow-x-hidden overflow-y-auto">
        <Navbar />
        <main className="flex-grow overflow-y-scroll">{children}</main>
        <Footer />
      </div>
    </div>
  );
};
export default AuthLayout;
