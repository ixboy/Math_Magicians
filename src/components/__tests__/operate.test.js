import operate from '../../logic/operate';

describe('Operation Test', () => {
  it('Test Plus Opration', () => {
    expect(operate(14, 51, '+')).toBe('65');
  });

  it('Test Minus Opration', () => {
    expect(operate(90, 15, '-')).toBe('75');
  });

  it('Test Times Opration', () => {
    expect(operate(10, 5, 'x')).toBe('50');
  });

  it('Test Divide Opration', () => {
    expect(operate(100, 5, '÷')).toBe('20');
  });
  it('Test Mod Opration', () => {
    expect(operate(101, 5, '%')).toBe('1');
  });
});
