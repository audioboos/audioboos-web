import React from 'react';
export interface ILayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: ILayoutProps) => {
  return <React.Fragment>{children}</React.Fragment>;
};
export default Layout;
