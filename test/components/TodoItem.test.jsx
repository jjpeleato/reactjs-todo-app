/* globals beforeEach, describe, expect, jest, test */

import { render, screen, fireEvent } from "@testing-library/react";
import { TodoItem } from "../../src/components/TodoItem";

describe("TodoItem component", () => {
  const item = { id: 1, description: "Test Todo", done: false };
  const mockHandleRemove = jest.fn();
  const mockHandleToggle = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("#1 should render the todo item correctly", () => {
    render(
      <TodoItem
        item={item}
        handleRemove={mockHandleRemove}
        handleToggle={mockHandleToggle}
      />
    );

    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toBe("list-group-item d-flex justify-content-between");

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("align-self-center");
    expect(spanElement.className).not.toContain("text-decoration-line-through");
  });

  test("#2 should apply 'text-decoration-line-through' class when item is done", () => {
    const doneItem = { ...item, done: true };

    render(
      <TodoItem
        item={doneItem}
        handleRemove={mockHandleRemove}
        handleToggle={mockHandleToggle}
      />
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toBe("align-self-center text-decoration-line-through");
  });

  test("#3 should call handleToggle when double-clicked", () => {
    render(
      <TodoItem
        item={item}
        handleRemove={mockHandleRemove}
        handleToggle={mockHandleToggle}
      />
    );

    const listElement = screen.getByRole("listitem");
    fireEvent.doubleClick(listElement);
    expect(mockHandleToggle).toHaveBeenCalledTimes(1);
    expect(mockHandleToggle).toHaveBeenCalledWith(item.id);
  });

  test("#4 should call handleRemove when the remove button is clicked", () => {
    render(
      <TodoItem
        item={item}
        handleRemove={mockHandleRemove}
        handleToggle={mockHandleToggle}
      />
    );

    const removeButton = screen.getByRole("button");
    fireEvent.click(removeButton);
    expect(mockHandleRemove).toHaveBeenCalledTimes(1);
    expect(mockHandleRemove).toHaveBeenCalledWith(item.id);
  });
});
