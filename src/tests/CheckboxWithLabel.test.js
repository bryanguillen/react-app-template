import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import CheckboxWithLabel from '../CheckboxWithLabel';

afterEach(cleanup);

it('CheckboxWithLabel changes the text after click', () => {
  const {queryByLabelText, getByLabelText} = render(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />,
  );

  // base tests
  expect(queryByLabelText(/off/i)).toBeTruthy();
  fireEvent.click(getByLabelText(/off/i));
  expect(queryByLabelText(/on/i)).toBeTruthy();
  
  // tests using jest-dom matcher to prove that jest-dom is correctly imported
  expect(queryByLabelText(/on/i)).toBeVisible();
});