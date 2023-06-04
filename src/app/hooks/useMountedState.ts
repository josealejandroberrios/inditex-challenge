import { useRef, useCallback, useEffect } from 'react';

export const useMountedState = (): (() => boolean) => {
  const mountedRef = useRef(false);

  const getMounted = useCallback(() => mountedRef.current, []);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  }, []);

  return getMounted;
};
