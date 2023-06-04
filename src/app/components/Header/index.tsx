import { ReactElement, useState, useLayoutEffect } from 'react';
import { Typography } from '@mui/material';
import { MyLocation as NavigationIcon } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';

import { HeaderContainer, HeaderContent } from './styles';

const Header = (): ReactElement => {
  const location = useLocation();
  const [isNavigationChange, setIsNavigationChange] = useState(false);

  useLayoutEffect(() => {
    setIsNavigationChange(true);

    setTimeout(() => {
      setIsNavigationChange(false);
    }, 300);
  }, [location.pathname]);

  return (
    <HeaderContainer position="fixed" data-testid="Header">
      <HeaderContent variant="dense">
        <Typography variant="h5" component="h1" color="primary">
          Podcaster
        </Typography>

        {isNavigationChange && <NavigationIcon color="primary" />}
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
