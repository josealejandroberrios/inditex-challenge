import { ReactElement, useState, useLayoutEffect } from 'react';
import { Link } from '@mui/material';
import { MyLocation as NavigationIcon } from '@mui/icons-material';
import { useLocation, Link as RouterLink } from 'react-router-dom';

import { PATHS } from '~constants/paths';

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
        <Link
          variant="h5"
          component={RouterLink}
          to={PATHS.HOME}
          color="primary"
          underline="none"
        >
          Podcaster
        </Link>

        {isNavigationChange && <NavigationIcon color="primary" />}
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
