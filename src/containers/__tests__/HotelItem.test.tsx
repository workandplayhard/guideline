import { render, screen } from "@testing-library/react";

import HotelItem from "../HotelItem";
import { IHotel } from "../../interfaces/hotels";
import { mockRoom, mockHotel } from "../../constants";

test("render Hotel info & its rooms", () => {
  const data: IHotel = {
    ...mockHotel,
    rooms: [mockRoom],
  };
  render(<HotelItem data={data} />);

  expect(screen.getByText(data.name)).toBeInTheDocument();
  expect(screen.getByText(mockRoom.name)).toBeInTheDocument();
  expect(screen.queryByRole("no-room-claim")).not.toBeInTheDocument();
});

test("render a user-friendly message if there is no room", () => {
  const data: IHotel = {
    ...mockHotel,
    rooms: [],
  };
  render(<HotelItem data={data} />);

  expect(screen.getByRole("no-room-claim")).toBeInTheDocument();
});

describe("'Show more' toggle component", () => {
  test("render 'Show more' component if there are more than 3 rooms", () => {
    const data: IHotel = {
      ...mockHotel,
      rooms: Array(5).fill(mockRoom),
    };
    render(<HotelItem data={data} />);
    expect(screen.getByRole("show-more")).toBeInTheDocument();
  });

  test("not render 'Show more' component if there are less than 3 rooms", () => {
    const data: IHotel = {
      ...mockHotel,
      rooms: [mockRoom],
    };
    render(<HotelItem data={data} />);
    expect(screen.queryByRole("show-more")).not.toBeInTheDocument();
  });
});
