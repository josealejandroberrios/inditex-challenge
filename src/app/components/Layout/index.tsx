import { PropsWithChildren, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '~components/Header';

import { LayoutContainer, LayoutContent } from './styles';

const Layout = ({ children }: PropsWithChildren): ReactElement => (
  <LayoutContainer data-testid="Layout">
    <Header />

    <LayoutContent>{children ? children : <Outlet />}</LayoutContent>
  </LayoutContainer>
);

export default Layout;
