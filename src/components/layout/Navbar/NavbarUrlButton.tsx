import React from 'react';
import { NavLink } from 'react-router-dom';

interface INavbarUrlButtonProps {
  text: string;
  url: string;
  children?: React.ReactNode;
}
const NavbarUrlButton = ({ text, url, children }: INavbarUrlButtonProps) => {
  return (
    <NavLink
      to={url}
      className="flex items-center px-5 py-6 text-sm leading-5 text-gray-700 transition duration-200 ease-in-out hover:bg-gray-100 focus:outline-none"
    >
      <span className="mr-2">{children}</span>
      {text}
    </NavLink>
  );
};

export default NavbarUrlButton;
