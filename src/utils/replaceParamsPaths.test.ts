import { replaceParamsPath } from './replaceParamsPath';

describe('replaceParamsPath funcionality', () => {
  test('should replace one pattern', () => {
    const output = replaceParamsPath('/tu/:pattern', { ':pattern': '123' });

    expect(output).to.equal('/tu/123');
  });

  test('should replace multiple patterns', () => {
    const output = replaceParamsPath('/tu/:patternOne/:patternTwo', {
      ':patternOne': '123',
      ':patternTwo': '456',
    });

    expect(output).to.equal('/tu/123/456');
  });

  test('should replace multiple patterns with differents typed values', () => {
    const output = replaceParamsPath(
      '/tu/:patternOne/:patternTwo/:patternThree',
      {
        ':patternOne': '123',
        ':patternTwo': 456,
        ':patternThree': false,
      },
    );

    expect(output).to.equal('/tu/123/456/false');
  });

  test('should not replace for sending wrong patterns', () => {
    const output1 = replaceParamsPath('/tu/:pattern', { ':badPattern': '123' });
    const output2 = replaceParamsPath('/tu/:patternOne/:patternTwo', {
      ':badPatternOne': '123',
      ':badPatternTwo': '456',
    });
    const output3 = replaceParamsPath(
      '/tu/:patternOne/:patternTwo/:patternThree',
      {
        ':badPatternOne': '123',
        ':badPatternTwo': 456,
        ':badPatternThree': false,
      },
    );

    expect(output1).to.equal('/tu/:pattern');
    expect(output2).to.equal('/tu/:patternOne/:patternTwo');
    expect(output3).to.equal('/tu/:patternOne/:patternTwo/:patternThree');
  });
});
