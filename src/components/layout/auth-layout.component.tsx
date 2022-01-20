import React from "react";
import Footer from "./footer.component";
import { ILayoutProps } from "./default-layout.component";
import { Navbar } from "./navbar";
import Sidebar from "./sidebar.component";

const AuthLayout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <Navbar />
        {/* Header */}
        <div className="w-full px-4 mx-auto md:px-10">
          {children}
          <Footer />
        </div>
      </div>
    </>
    // <div className="font-alice">
    //   <div className="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
    //     <Sidebar />
    //     <div className="flex flex-col w-full h-full ml-64 overflow-x-hidden overflow-y-auto">
    //       <navbar />
    //       <main className="flex-grow overflow-y-scroll">{children}</main>
    //       <Footer />
    //     </div>
    //   </div>
    // </div>
  );
};
export default AuthLayout;
