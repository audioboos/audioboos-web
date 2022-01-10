import React from 'react';
import './SplashScreen.css';
const SplashScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black ">
      <div className="flex flex-col items-center brand">
        <h1 className="text-blue-600 text-7xl text-bold animate-pulse">Audio.Boos</h1>
        <h2 className="text-4xl text-gray-400 text-bold animate-bounce">Where music goes to fly</h2>
      </div>
    </div>
  );
};

export default SplashScreen;
