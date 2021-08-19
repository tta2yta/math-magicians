import operate from '../../logic/operate';

test('adds two numbers', () => {
  expect(operate(4, 5, '+')).toEqual('9');
});

test('subtratc two numbers', () => {
  expect(operate(4, 5, '-')).toEqual('-1');
});

test('multiply two numbers', () => {
  expect(operate(4, 5, 'x')).toEqual('20');
});
test('divide two numbers', () => {
  expect(operate(5, 5, '÷')).toEqual('1');
});

test('percentage of a number', () => {
  expect(operate(4, 5, '%')).toEqual('4');
});
