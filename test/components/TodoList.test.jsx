/* globals describe, expect, jest, test */

import { render } from "@testing-library/react";
import { TodoList } from "../../src/components";

describe("TodoList component", () => {
  const mockHandleRemove = jest.fn();
  const mockHandleToggle = jest.fn();

  const mockItems = [
    { id: 1, description: "Learn React", done: false },
    { id: 2, description: "Learn Testing", done: true },
  ];

  test("#1 should match the snapshot of the TodoList component", () => {
    const { container } = render(
      <TodoList
        items={mockItems}
        handleRemove={mockHandleRemove}
        handleToggle={mockHandleToggle}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
