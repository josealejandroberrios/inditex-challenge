import { PropsWithChildren, ReactElement, useRef, useCallback } from 'react';
import { SnackbarProvider, SnackbarKey } from 'notistack';
import { IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

const CustomSnackbarProvider = ({
  children,
}: PropsWithChildren): ReactElement => {
  const notistackRef = useRef<SnackbarProvider>(null);

  const onClickDismmiss = useCallback(
    (key: SnackbarKey) => () => {
      notistackRef.current?.closeSnackbar(key);
    },
    [],
  );

  const actionClose = useCallback(
    (key: SnackbarKey) => (
      <IconButton
        aria-label="Close"
        onClick={onClickDismmiss(key)}
        color="inherit"
      >
        <CloseIcon />
      </IconButton>
    ),
    [onClickDismmiss],
  );

  return (
    <SnackbarProvider
      ref={notistackRef}
      maxSnack={3}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      action={actionClose}
      transitionDuration={{
        enter: 225,
        exit: 195,
      }}
    >
      {children}
    </SnackbarProvider>
  );
};

export default CustomSnackbarProvider;
