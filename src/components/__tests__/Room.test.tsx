import { render, screen } from "@testing-library/react";

import Room from "../Room";
import { mockRoom } from "../../constants";

test("render Room info", () => {
  render(<Room data={mockRoom} />);

  expect(screen.getByText(mockRoom.name)).toBeInTheDocument();
  expect(screen.getByText(mockRoom.longDescription)).toBeInTheDocument();
  expect(
    screen.getByText("Adults: " + mockRoom.occupancy.maxAdults)
  ).toBeInTheDocument();
  expect(
    screen.getByText("Children: " + mockRoom.occupancy.maxChildren)
  ).toBeInTheDocument();
});
