import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../components/Navigations/Navigations';
import store from '../redux/store';
import '@testing-library/jest-dom';

describe('Navigation component', () => {
  it('should render the Navigation component', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should display the LOG OUT button', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </Provider>,
    );
    const logoutBtn = screen.getByText('LOG OUT');
    expect(logoutBtn).toBeInTheDocument();
  });

  it('should display the navigation links', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </Provider>,
    );
    const carsLink = screen.getByText('CARS');
    const reserveCarLink = screen.getByText('RESERVE CAR');
    const addCarLink = screen.getByText('ADD CAR');
    const deleteCarLink = screen.getByText('DELETE CAR');
    const myReservationsLink = screen.getByText('MY RESERVATIONS');

    expect(carsLink).toBeInTheDocument();
    expect(reserveCarLink).toBeInTheDocument();
    expect(addCarLink).toBeInTheDocument();
    expect(deleteCarLink).toBeInTheDocument();
    expect(myReservationsLink).toBeInTheDocument();
  });
});
