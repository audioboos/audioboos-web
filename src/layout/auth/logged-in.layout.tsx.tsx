import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// components

import { AdminNavbar } from '../../components';
import FooterAdmin from '../../components/Footers/FooterAdmin';
import HeaderStats from '../../components/Headers/HeaderStats';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Dashboard } from '../../pages/app/Dashboard';

export default function LoggedInLayout() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="w-full px-4 mx-auto -m-24 md:px-10">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
