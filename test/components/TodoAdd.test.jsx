/* globals beforeEach, describe, expect, jest, test */

import { render, screen, fireEvent } from "@testing-library/react";
import { TodoAdd } from "../../src/components";

describe("TodoAdd component", () => {
  const mockHandleAdd = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("#1 should match the snapshot of the TodoAdd component", () => {
    const { container } = render(<TodoAdd handleAdd={mockHandleAdd} />);
    expect(container).toMatchSnapshot;
  });

  test("#2 should not call handleAdd when the form is submitted without input", () => {
    render(<TodoAdd handleAdd={mockHandleAdd} />);
    const form = screen.getByRole("form");

    fireEvent.submit(form);

    expect(mockHandleAdd).not.toHaveBeenCalled();
    expect(mockHandleAdd).toHaveBeenCalledTimes(0);
  });

  test("#3 should call handleAdd when the form is submitted with input", () => {
    render(<TodoAdd handleAdd={mockHandleAdd} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.change(input, { target: { value: "Learn React" } });
    fireEvent.submit(form);

    expect(mockHandleAdd).toHaveBeenCalled();
    expect(mockHandleAdd).toHaveBeenCalledTimes(1);
  });
});
