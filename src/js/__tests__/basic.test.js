import Team from '../app';

describe('check work class Team', () => {
  test('return text of types', () => {
    const expected = 'BowmanMagicianSwordman';
    const test1 = new Team();
    let text = '';
    for (const i of test1) {
      text += i;
    }
    const received = text;
    expect(received).toEqual(expected);
  });
});
