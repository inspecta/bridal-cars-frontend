import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Cars from '../../components/cars/Cars';

test('renders cars component snapshot', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Cars />
      </BrowserRouter>
    </Provider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
