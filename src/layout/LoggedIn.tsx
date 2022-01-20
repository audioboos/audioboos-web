import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import FooterAdmin from '../components/Footers/FooterAdmin';
import HeaderStats from '../components/Headers/HeaderStats';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import DashboardComponent from '../features/dashboard/dashboard.component';

export default function LoggedIn() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <Navbar />
        {/* Header */}
        <HeaderStats />
        <div className="w-full px-4 mx-auto -m-24 md:px-10">
          <Switch>
            <Route path="/admin/dashboard" exact component={DashboardComponent} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
