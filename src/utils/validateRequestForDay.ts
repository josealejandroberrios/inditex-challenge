import { Nullable } from '~globals/types/commons';

export const validateRequestForDay = (
  lastUpdated: Nullable<number>,
): boolean => {
  const dayInMs = 24 * 60 * 60 * 1000;

  const hasExpired = !!lastUpdated && Date.now() - lastUpdated > dayInMs;

  return hasExpired;
};
