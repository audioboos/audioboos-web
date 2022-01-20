import React from 'react';
import {
  CardBarChart,
  CardLineChart,
  CardPageVisits,
  CardSocialTraffic,
} from '../../components/notus/Cards';

const DashboardComponent = () => {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4 mb-12 xl:w-8/12 xl:mb-0">
          <CardPageVisits />
        </div>
        <div className="w-full px-4 xl:w-4/12">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
};

export default DashboardComponent;
