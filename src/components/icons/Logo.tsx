import React from 'react';
import { Images } from '../../services';

const Logo = () => {
  const siteName = 'AudioBoos';
  return (
    <React.Fragment>
      <img className="h-10" src={Images.Logo} alt="Header logo" />
    </React.Fragment>
  );
};

export default Logo;
