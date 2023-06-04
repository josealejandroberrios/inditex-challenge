import { useRef, useCallback } from 'react';
import { CancelTokenSource } from 'axios';
import { CancelToken } from 'apisauce';

import { ApiRequestParams } from '~globals/types/api';

export const useAxiosCancel = <P>(): [
  () => void,
  (payload: ApiRequestParams<P>) => ApiRequestParams<P>,
] => {
  const cancelSourceRef = useRef<CancelTokenSource>();

  const cancelOutStandingRequest = useCallback(() => {
    if (cancelSourceRef.current) {
      cancelSourceRef.current.cancel();
    }
  }, []);

  const withCancelToken = useCallback<
    (payload: ApiRequestParams<P>) => ApiRequestParams<P>
  >(
    (payload) => {
      cancelOutStandingRequest();

      cancelSourceRef.current = CancelToken.source();
      payload.cancelToken = cancelSourceRef.current.token;

      return payload;
    },
    [cancelOutStandingRequest],
  );

  return [cancelOutStandingRequest, withCancelToken];
};
