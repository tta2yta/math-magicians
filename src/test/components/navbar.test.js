import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../../components/NavBar';

let getByTestId;
let component;

beforeEach(() => {
  component = render(
    <Router>
      <Navbar />
    </Router>,
  );

  getByTestId = component.getByTestId;
});

it('renders the Navbar component', () => {
    component = renderer
      .create(
        <Router>
          <Navbar />
        </Router>,
      )
      .toJSON();
  
    expect(component).toMatchSnapshot();
  });
