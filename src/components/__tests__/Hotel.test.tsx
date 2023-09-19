import { render, screen } from "@testing-library/react";

import Hotel from "../Hotel";
import { mockHotel } from "../../constants";

test("render Hotel info", () => {
  render(<Hotel data={mockHotel} />);

  expect(screen.getByText(mockHotel.name)).toBeInTheDocument();
  expect(screen.getByText(mockHotel.address1)).toBeInTheDocument();
  expect(screen.getByText(mockHotel.address2)).toBeInTheDocument();
  expect(screen.getAllByTestId("StarIcon")).toHaveLength(mockHotel.starRating);
});
