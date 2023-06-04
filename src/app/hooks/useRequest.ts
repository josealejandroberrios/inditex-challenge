import { DependencyList, useEffect } from 'react';

import { useMountedState } from './useMountedState';
import {
  AsyncRequestHookParams,
  AsyncRequestHookReturn,
  useLazyRequest,
} from './useLazyRequest';

export interface AsyncRequestHookParamsWithPayload<P, D, E>
  extends AsyncRequestHookParams<P, D, E> {
  payload: P;
  isValidToSend?: boolean;
}

export const useRequest = <P, D, E>(
  {
    request,
    payload,
    initialState = null,
    initialLoading = true,
    transformResponse = (response) => response,
    withPostPrefetch,
    withPostSuccess,
    withPostFailure,
    withPostFetch,
    withPostFinally,
    isValidToSend = true,
  }: AsyncRequestHookParamsWithPayload<P, D, E>,
  deeps: DependencyList = [],
): Omit<AsyncRequestHookReturn<P, D, E>, '5'> => {
  const isMounted = useMountedState();

  const [state, loading, error, sendRequest, cancelOutStandingRequest] =
    useLazyRequest({
      request,
      initialState,
      initialLoading,
      transformResponse,
      withPostPrefetch,
      withPostSuccess,
      withPostFailure,
      withPostFetch,
      withPostFinally,
    });

  useEffect(() => {
    if (isMounted() && isValidToSend) {
      sendRequest(payload);
    }

    return cancelOutStandingRequest;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deeps, isMounted, cancelOutStandingRequest]);

  return [state, loading, error, sendRequest];
};
