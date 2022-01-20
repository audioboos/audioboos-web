import React from 'react';
import UserDropdown from '../../dropdown/user-dropdown.component';
import RefreshLibraryButtonComponent from './refresh-library-button.component';
import NavbarUrlButton from './navbar-urlbutton.component';
import { MdHome, MdOutlineBugReport, MdOutlinePodcasts } from 'react-icons/md';

const Navbar = () => {
  return (
    <nav className="z-10 flex items-center w-full p-4 bg-sky-600 md:flex-row md:flex-nowrap md:justify-start">
      <div className="flex flex-wrap items-center justify-between w-full px-4 bg-sky-600 mx-autp md:flex-nowrap md:px-10">
        {/* Brand */}
        <a
          className="hidden text-sm font-semibold text-white uppercase lg:inline-block"
          onClick={(e) => e.preventDefault()}
        >
          Dashboard
        </a>
        <div className="flex flex-row text-white lg:ml-auto">
          <NavbarUrlButton text="Dashboard" url="/">
            <MdHome className="w-8 h-8" />
          </NavbarUrlButton>
          <NavbarUrlButton text="Podcasts" url="/podcasts">
            <MdOutlinePodcasts className="w-8 h-8" />
          </NavbarUrlButton>
          <NavbarUrlButton text="Debug" url="/debug">
            <MdOutlineBugReport className="w-8 h-8" />
          </NavbarUrlButton>
          <RefreshLibraryButtonComponent />
        </div>
        {/* Form */}
        <form className="flex-row flex-wrap items-center hidden mr-3 md:flex lg:ml-auto">
          <div className="relative flex flex-wrap items-stretch w-full">
            <span className="absolute z-10 items-center justify-center w-8 h-full py-3 pl-3 text-base font-normal leading-snug text-center bg-transparent rounded text-blueGray-300">
              <i className="fas fa-search"></i>
            </span>
            <input
              type="text"
              placeholder="Search here..."
              className="relative w-full px-3 py-3 pl-10 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
            />
          </div>
        </form>
        <ul className="flex-col items-center hidden list-none md:flex-row md:flex">
          <UserDropdown />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
