import { fireEvent, render, screen } from "@testing-library/react";

import Filter from "../Filter";
import { IFilterProps } from "../../interfaces/hotels";

const mockFilter: IFilterProps = {
  data: {
    rating: 3,
    maxAdults: 3,
    maxChildren: 3,
  },
  onChange: jest.fn(() => {}),
};

test("render Filter info", () => {
  render(<Filter {...mockFilter} />);

  expect(screen.getAllByTestId("StarIcon")).toHaveLength(
    mockFilter.data.rating
  );
  expect(screen.getAllByRole("value")[0]).toHaveTextContent(
    mockFilter.data.maxAdults + ""
  );
  expect(screen.getAllByRole("value")[1]).toHaveTextContent(
    mockFilter.data.maxAdults + ""
  );
});

describe("onChange prop function is called when the filter is changed", () => {
  test("when the rating is changed", () => {
    render(<Filter {...mockFilter} />);

    fireEvent.click(screen.getByText("5 Stars"));

    expect(mockFilter.onChange).toBeCalled();
    expect(mockFilter.onChange).toBeCalledTimes(1);
    expect(mockFilter.onChange).toBeCalledWith({
      ...mockFilter.data,
      rating: 5,
    });
  });

  test("when the number of max adults is changed", () => {
    render(<Filter {...mockFilter} />);

    fireEvent.click(screen.getAllByRole("up")[0]);

    expect(mockFilter.onChange).toBeCalled();
    expect(mockFilter.onChange).toBeCalledTimes(1);
    expect(mockFilter.onChange).toBeCalledWith({
      ...mockFilter.data,
      maxAdults: mockFilter.data.maxAdults + 1,
    });
  });

  test("when the number of max children is changed", () => {
    render(<Filter {...mockFilter} />);

    fireEvent.click(screen.getAllByRole("up")[1]);

    expect(mockFilter.onChange).toBeCalled();
    expect(mockFilter.onChange).toBeCalledTimes(1);
    expect(mockFilter.onChange).toBeCalledWith({
      ...mockFilter.data,
      maxChildren: mockFilter.data.maxChildren + 1,
    });
  });
});
