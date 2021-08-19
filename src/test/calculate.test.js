import calculate from "../logic/calculate"
import Calculator from "../components/calculator"
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';


describe(" Operation of Calulator", ()=>{
  test('should return object with null property values when "AC" button is clicked', () => {
    const obj= {total:null, next: 10, operation:"AC"}
    expect(calculate(obj, obj.operation)).toMatchObject({next: null, operation: null, total: null});
  });
  
  it('should return correct object reperesentation when "+" button is clicked', ()=>{
    const obj= {total: 5, next: 8, operation:"+"}
    expect(calculate(obj, obj.operation)). toMatchObject({next: null, operation: "+", total: "13"})
  });

  it('should return correct object reperesentation when "-" button is clicked', ()=>{
    const obj= {total: 5, next: 8, operation:"-"}
    expect(calculate(obj, obj.operation)). toMatchObject({next: null, operation: "-", total: "-3"})
  });
  it('should return correct object reperesentation when "x" button is clicked', ()=>{
    const obj= {total: 6, next: 9, operation:"x"}
    expect(calculate(obj, obj.operation)). toMatchObject({next: null, operation: "x", total: "54"})
  });
  it('should return correct object reperesentation when "÷" button is clicked', ()=>{
    const obj= {total: 9, next: 3, operation:"÷"}
    expect(calculate(obj, obj.operation)). toMatchObject({next: null, operation: "÷", total: "3"})
  });
  it('should return correct object reperesentation when "%" button is clicked', ()=>{
    const obj= {total: 4, next: 3, operation:"%"}
    expect(calculate(obj, obj.operation)). toMatchObject({next: null, operation: "%", total: "1"})
  });

  it('should return correct object reperesentation when "=" button is clicked', ()=>{
    const obj= {total: 4, next: 3, operation:"+"}
    expect(calculate(obj, obj.operation)). toMatchObject({next:null, operation: "+", total: "7"})
  });

})


// beforeEach(() => {
//   const component = render(<Calculator />);
//   getByTestId = component.getByTestId;
//   console.log(getByTestId)
// });

// it('renders the Calculator component', () => {
//   const component = renderer.create(<Calculator />).toJSON();

//   expect(component).toMatchSnapshot();
// });

// test('should give correct subtraction operation', () => {
//   const resultHeading = getByTestId('mainResult');
//   const subtractBtn = getByTestId('-');
//   const equalsBtn = getByTestId('=');
//   const numberOnebtn = getByTestId('1');
//   const numberTwobtn = getByTestId('2');
//   console.log(equalsBtn)

//   expect(subtractBtn.textContent).toBe('-');

//   resultHeading.textContent=2
//   fireEvent.click(numberOnebtn);
//   // fireEvent.click(subtractBtn);
//   // fireEvent.click(numberTwobtn);
//   // fireEvent.click(equalsBtn);
//   // expect(resultHeading.textContent).toBe('-1');
// });