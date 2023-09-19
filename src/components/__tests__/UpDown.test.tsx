import { render, screen, fireEvent } from "@testing-library/react";

import UpDown from "../UpDown";
import { IUpDownProps } from "../../interfaces/hotels";

const mockUpDown: IUpDownProps = {
  label: "upDownExample",
  value: 0,
  upperLimit: 3,
  lowerLimit: -3,
  onChange: jest.fn(() => {}),
};

test("render UpDown info", () => {
  render(<UpDown {...mockUpDown} />);
  expect(screen.getByText(mockUpDown.label)).toBeInTheDocument();
  expect(screen.getByText(mockUpDown.value)).toBeInTheDocument();
});

describe("onChange prop function is called when the value is changed", () => {
  test("called with an increased value when '+' button is clicked", () => {
    render(<UpDown {...mockUpDown} />);
    fireEvent.click(screen.getByRole("up"));

    expect(mockUpDown.onChange).toBeCalled();
    expect(mockUpDown.onChange).toBeCalledTimes(1);
    expect(mockUpDown.onChange).toBeCalledWith(mockUpDown.value + 1);
  });

  test("called with an decreased value when '-' button is clicked", () => {
    render(<UpDown {...mockUpDown} />);
    fireEvent.click(screen.getByRole("down"));

    expect(mockUpDown.onChange).toBeCalled();
    expect(mockUpDown.onChange).toBeCalledTimes(1);
    expect(mockUpDown.onChange).toBeCalledWith(mockUpDown.value - 1);
  });
});

describe("onChange function is not called when the value reaches out to the limit", () => {
  test("when the value reaches out to the upper limit", () => {
    const valueWithUpperlimit = {
      ...mockUpDown,
      upperLimit: 3,
      value: 3,
    };
    render(<UpDown {...valueWithUpperlimit} />);
    fireEvent.click(screen.getByRole("up"));

    expect(mockUpDown.onChange).not.toBeCalled();
  });

  test("when the value reaches out to the lower limit", () => {
    const valueWithUpperlimit = {
      ...mockUpDown,
      lowerLimit: -3,
      value: -3,
    };
    render(<UpDown {...valueWithUpperlimit} />);
    fireEvent.click(screen.getByRole("down"));

    expect(mockUpDown.onChange).not.toBeCalled();
  });
});
