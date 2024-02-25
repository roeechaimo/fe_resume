import { ReactNode } from 'react';
import AppTitle from '../../components/app-title';
import AppNavItems from '../../components/nav';

type LayoutProps = {
  children?: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <AppTitle text={"Roe'e Chaimowicz - Front-End Developer"} />

      <AppNavItems></AppNavItems>

      {children}
    </>
  );
}

export default Layout;
