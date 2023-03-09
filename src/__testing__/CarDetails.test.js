import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CarDetails from "../components/cars/CarDetails";
import { Provider } from "react-redux";

describe("CarDetails", () => {
  const selectedCar = {
    name: "Mercedes",
    photo: "mercedes_photo.jpg",
    description: "A very comfortable car",
    price: 12,
    model: "W-14",
    reserved: false,
    created_at: '09/03/2022',
  };

  it("renders the car details component", () => {
    const location = {
      state: {
        cars: selectedCar
      },
    };

    const { asFragment } = render(
      <BrowserRouter>
        <CarDetails location={location} />
      </BrowserRouter>,
    );

    expect(asFragment).toMatchSnapshot();
  })
})