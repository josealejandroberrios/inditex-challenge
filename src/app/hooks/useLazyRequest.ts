import { useState, useCallback } from 'react';

import {
  Request,
  RequestTransformResponse,
  RequestSuccess,
  RequestFailure,
  RequestPostFetch,
  RequestError,
} from '~globals/types/api';
import { Nullable } from '~globals/types/commons';
import { executeAsyncRequest } from '~utils/executeAsyncRequest';

import { useAxiosCancel } from './useAxiosCancel';

export interface AsyncRequestHookParams<P, D, E> {
  request: Request<P, D, E>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialState?: Nullable<D | any>;
  initialLoading?: boolean;
  transformResponse?: RequestTransformResponse<D, E>;
  withPostPrefetch?: () => void;
  withPostSuccess?: RequestSuccess<D>;
  withPostFailure?: RequestFailure<E>;
  withPostFetch?: RequestPostFetch<D, E>;
  withPostFinally?: () => void;
}

export type AsyncRequestHookReturn<P, D, E> = [
  Nullable<D>,
  boolean,
  Nullable<RequestError<E>>,
  Request<P, D, E>,
];

export const useLazyRequest = <P, D, E>({
  request,
  initialState = null,
  initialLoading = false,
  transformResponse = (response) => response,
  withPostPrefetch,
  withPostSuccess,
  withPostFailure,
  withPostFetch,
  withPostFinally,
}: AsyncRequestHookParams<P, D, E>): [
  ...AsyncRequestHookReturn<P, D, E>,
  () => void,
] => {
  const [cancelOutStandingRequest, withCancelToken] = useAxiosCancel<P>();

  const [state, setState] = useState<Nullable<D>>(initialState);
  const [loading, setLoading] = useState<boolean>(initialLoading);
  const [error, setError] = useState<Nullable<RequestError<E>>>(null);

  const sendRequest = useCallback(
    (values: P) =>
      executeAsyncRequest({
        values: withCancelToken({ params: values }),
        request,
        onPrefetch: () => {
          setLoading(true);
          setState(initialState);
          setError(null);

          withPostPrefetch?.();
        },
        onSuccess: (response) => {
          const transformedResponse = response.data
            ? transformResponse(response)
            : undefined;

          setState(transformedResponse);

          withPostSuccess?.(transformedResponse);
        },
        onError: (err) => {
          setError(err);

          withPostFailure?.(err);
        },
        onPostFetch: (response) => {
          if (response.data) {
            withPostFetch?.(transformResponse(response));
          }
        },
        onFinally: () => {
          setLoading(false);

          withPostFinally?.();
        },
      }),
    [
      withCancelToken,
      transformResponse,
      initialState,
      request,
      withPostPrefetch,
      withPostSuccess,
      withPostFailure,
      withPostFetch,
      withPostFinally,
    ],
  );

  return [state, loading, error, sendRequest, cancelOutStandingRequest];
};
