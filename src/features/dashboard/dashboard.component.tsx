import React from 'react';
import { PlaysCard } from '../../components/cards';
import RecentlyAdded from '../../components/cards/recently-added-card.component';

const DashboardComponent = () => {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4 mb-12 xl:w-8/12 xl:mb-0">
          <PlaysCard />
        </div>
        <div className="w-full px-4 xl:w-4/12">
          <RecentlyAdded />{' '}
        </div>
      </div>
    </>
  );
};

export default DashboardComponent;
