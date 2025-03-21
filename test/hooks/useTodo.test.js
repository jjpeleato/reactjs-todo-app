/* globals beforeEach, describe, expect, test */

import { renderHook, act } from "@testing-library/react";
import { useTodo } from "../../src/hooks/useTodo";

describe("useTodo hook", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("#1 should initialize with an empty todo list", () => {
    const { result } = renderHook(() => useTodo());
    expect(result.current.todo).toEqual([]);
    expect(result.current.count).toBe(0);
    expect(result.current.inProgress).toBe(0);
    expect(result.current.handleAdd).toBeInstanceOf(Function);
    expect(result.current.handleRemove).toBeInstanceOf(Function);
    expect(result.current.handleToggle).toBeInstanceOf(Function);
  });

  test("#2 should add a new todo", () => {
    const { result } = renderHook(() => useTodo());
    const newTodo = { id: 1, text: "Learn React", done: false };

    act(() => {
      result.current.handleAdd(newTodo);
    });

    expect(result.current.todo).toEqual([newTodo]);
    expect(result.current.count).toBe(1);
    expect(result.current.inProgress).toBe(1);
  });

  test("#3 should remove a todo by id", () => {
    const { result } = renderHook(() => useTodo());
    const todo1 = { id: 1, text: "Learn React", done: false };
    const todo2 = { id: 2, text: "Learn Jest", done: false };

    act(() => {
      result.current.handleAdd(todo1);
      result.current.handleAdd(todo2);
      result.current.handleRemove(1);
    });

    expect(result.current.todo).toEqual([todo2]);
    expect(result.current.count).toBe(1);
    expect(result.current.inProgress).toBe(1);
  });

  test("#4 should toggle the done state of a todo", () => {
    const { result } = renderHook(() => useTodo());
    const todo = { id: 1, text: "Learn React", done: false };

    act(() => {
      result.current.handleAdd(todo);
      result.current.handleToggle(1);
    });

    expect(result.current.todo[0].done).toBe(true);
    expect(result.current.inProgress).toBe(0);
  });

  test("#5 should save todos to localStorage", () => {
    const { result } = renderHook(() => useTodo());
    const todo = { id: 1, text: "Learn React", done: false };

    act(() => {
      result.current.handleAdd(todo);
    });

    const storedTodos = JSON.parse(localStorage.getItem("todo"));
    expect(storedTodos).toEqual([todo]);
  });
});
