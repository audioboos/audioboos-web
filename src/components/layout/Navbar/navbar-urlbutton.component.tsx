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
      className="flex items-center px-5 text-sm leading-5 text-gray-100 transition duration-800 ease-in-out hover:opacity-50 focus:outline-none"
    >
      <span className="mr-2">{children}</span>
      {text}
    </NavLink>
  );
};

export default NavbarUrlButton;
