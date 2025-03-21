/* globals describe, expect, test */

import { render } from "@testing-library/react";
import { TodoApp } from "../../src/components";

describe("TodoApp component", () => {
  test("#1 should match the snapshot of the TodoApp component", () => {
    const { container } = render(<TodoApp />);
    expect(container).toMatchSnapshot;
  });
});
