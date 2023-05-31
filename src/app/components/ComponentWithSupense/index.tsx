import { ReactElement, Suspense } from 'react';

import { Nullable } from '~globals/types/commons';

import { ComponentWithSuspenseProps } from './types';

const ComponentWithSuspense = ({
  component: Component,
}: ComponentWithSuspenseProps): Nullable<ReactElement> => (
  <Suspense fallback="...loading">{Component}</Suspense>
);

export default ComponentWithSuspense;
