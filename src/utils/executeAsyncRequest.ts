import {
  ApiRequestParams,
  Request,
  RequestSuccess,
  RequestFailure,
  RequestPostFetch,
} from '~globals/types/api';

interface AsyncRequest<P, D, E> {
  values: ApiRequestParams<P>;
  request: Request<P, D, E>;
  onPrefetch: () => void;
  onSuccess: RequestSuccess<D>;
  onError: RequestFailure<E>;
  onPostFetch: RequestPostFetch<D, E>;
  onFinally: () => void;
}

export const executeAsyncRequest = async <P, D, E>({
  values,
  request,
  onPrefetch,
  onSuccess,
  onError,
  onPostFetch,
  onFinally, // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: AsyncRequest<P, D, E>): Promise<any> => {
  onPrefetch();

  const response = await request(values.params);

  if (response.ok) {
    onSuccess(response);
  } else {
    onError(response);
  }

  await onPostFetch(response);

  onFinally();
};
