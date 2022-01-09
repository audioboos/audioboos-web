import React from 'react';
export interface ILayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: ILayoutProps) => {
  console.log('Layout', 'Im a layout');
  return <React.Fragment>{children}</React.Fragment>;
};
export default Layout;
