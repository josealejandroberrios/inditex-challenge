type ReplacementsParams = {
  [pattern: string]: string | number | boolean;
};

export const replaceParamsPath = (
  path: string,
  replacements: ReplacementsParams,
): string => {
  const keysPatterns = Object.entries(replacements);

  let output = path;

  keysPatterns.forEach(([pattern, patternVal]) => {
    output = output.replace(pattern, patternVal.toString());
  });

  return output;
};
