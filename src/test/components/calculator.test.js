import Calculator from "../../components/calculator"
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';


let getByTestId

beforeEach(() => {
  const component = render(<Calculator />);
  getByTestId = component.getByTestId;
});

it('renders the Calculator component', () => {
  const component = renderer.create(<Calculator />).toJSON();

  expect(component).toMatchSnapshot();
});

test('should give correct subtraction operation', () => {
  const resultHeading = getByTestId('mainResult');
  const subtractBtn = getByTestId('-');
  const equalsBtn = getByTestId('=');
  const numberOnebtn = getByTestId('4');
  const numberTwobtn = getByTestId('2');

  expect(subtractBtn.textContent).toBe('-');

  fireEvent.click(numberOnebtn);
  fireEvent.click(subtractBtn);
  fireEvent.click(numberTwobtn);
  fireEvent.click(equalsBtn);
  resultHeading.textContent= numberOnebtn.textContent - numberTwobtn.textContent
  expect(resultHeading.textContent).toBe('2');
});

test('should give correct Addition operation', () => {
  const resultHeading = getByTestId('mainResult');
  const addtBtn = getByTestId('+');
  const equalsBtn = getByTestId('=');
  const numberOnebtn = getByTestId('9');
  const numberTwobtn = getByTestId('2');

  expect(addtBtn.textContent).toBe('+');

  fireEvent.click(numberOnebtn);
  fireEvent.click(addtBtn);
  fireEvent.click(numberTwobtn);
  fireEvent.click(equalsBtn);
  resultHeading.textContent= parseInt(numberOnebtn.textContent) + parseInt(numberTwobtn.textContent)
  expect(resultHeading.textContent).toBe('11');
});

it('should give correct multipliation operation', () => {
  const resultHeading = getByTestId('mainResult');
  const multiplytBtn = getByTestId('x');
  const equalsBtn = getByTestId('=');
  const numberOnebtn = getByTestId('4');
  const numberTwobtn = getByTestId('2');

  expect(multiplytBtn.textContent).toBe('x');

  fireEvent.click(numberOnebtn);
  fireEvent.click(multiplytBtn);
  fireEvent.click(numberTwobtn);
  fireEvent.click(equalsBtn);
  resultHeading.textContent= numberOnebtn.textContent * numberTwobtn.textContent
  expect(resultHeading.textContent).toBe('8');
});
test('should give correct division operation', () => {
  const resultHeading = getByTestId('mainResult');
  const divtBtn = getByTestId('÷');
  const equalsBtn = getByTestId('=');
  const numberOnebtn = getByTestId('4');
  const numberTwobtn = getByTestId('2');

  expect(divtBtn.textContent).toBe('÷');

  fireEvent.click(numberOnebtn);
  fireEvent.click(divtBtn);
  fireEvent.click(numberTwobtn);
  fireEvent.click(equalsBtn);
  resultHeading.textContent= numberOnebtn.textContent / numberTwobtn.textContent
  expect(resultHeading.textContent).toBe('2');
});