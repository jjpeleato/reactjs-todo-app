/* globals describe, expect, test */

import { todoReducer } from "../../src/reducers/todoReducer";

describe("todoReducer", () => {
  test("#1 should return default state", () => {
    expect(todoReducer([], {})).toEqual([]);
  });

  test("#2 should add a new todo", () => {
    const state = [];
    const action = { type: "add", payload: { id: 1, text: "Buy water" } };

    expect(todoReducer(state, action)).toEqual([action.payload]);
  });

  test("#3 should remove a todo", () => {
    const state = [
      { id: 1, text: "Buy milk" },
      { id: 2, text: "Buy water" },
    ];
    const action = { type: "remove", payload: 1 };

    expect(todoReducer(state, action)).toEqual([{ id: 2, text: "Buy water" }]);
  });

  test("#4 should toggle a todo", () => {
    const state = [
      { id: 1, text: "Buy milk", done: false },
      { id: 2, text: "Buy water", done: false },
    ];
    const action = { type: "toggle", payload: 1 };

    expect(todoReducer(state, action)).toEqual([
      { id: 1, text: "Buy milk", done: true },
      { id: 2, text: "Buy water", done: false },
    ]);
  });

  test("#5 should throw an error", () => {
    const state = [];
    const action = { type: "clear" };

    expect(() => todoReducer(state, action)).toThrowError(
      "action.type = clear is not implemented."
    );
  });
});
