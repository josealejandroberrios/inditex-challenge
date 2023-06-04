import { CancelToken } from 'axios';
import { ApiResponse, ApiErrorResponse, ApiOkResponse } from 'apisauce';

export interface ApiRequestParams<T> {
  cancelToken?: CancelToken;
  params: T;
}

export interface ApiError {
  errorCode?: number;
  message: string;
  severity?: number;
}

export type ApiPromise<T, U = ApiError> = Promise<ApiResponse<T, U>>;

export type Request<P, D, E> = (
  params: ApiRequestParams<P>['params'],
  cancelToken?: ApiRequestParams<P>['cancelToken'],
) => ApiPromise<D, E>;

export type RequestTransformResponse<D, E> = (
  response: ApiResponse<D, E>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
) => any;

export type RequestSuccess<D> = (response: ApiOkResponse<D>) => void;

export type RequestError<E> = Pick<
  ApiErrorResponse<E>,
  'problem' | 'data' | 'status'
>;

export type RequestFailure<E> = (error: RequestError<E>) => void;

export type RequestPostFetch<D, E> = (
  response: ApiResponse<D, E>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
) => void | Promise<any>;
