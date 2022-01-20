import React from 'react';
import Footer from './Footer';
import { ILayoutProps } from './Layout';
import { Navbar } from './Navbar';
import Sidebar from './Sidebar';

const AuthLayout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        {/* <AdminNavbar />
        <HeaderStats /> */}
        <div className="w-full px-4 mx-auto -m-24 md:px-10">
          Hello Sailor!
          {/* <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/tables" exact component={Tables} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin /> */}
        </div>
      </div>
    </>
    // <div className="font-alice">
    //   <div className="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
    //     <Sidebar />
    //     <div className="flex flex-col w-full h-full overflow-x-hidden overflow-y-auto">
    //       <Navbar />
    //       <main className="flex-grow overflow-y-scroll">{children}</main>
    //       <Footer />
    //     </div>
    //   </div>
    // </div>
  );
};
export default AuthLayout;
