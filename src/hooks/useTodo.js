import { useEffect, useReducer } from "react";
import { todoReducer } from "./../reducers/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todo")) || [];
};

export const useTodo = () => {
  const [todo, dispatch] = useReducer(todoReducer, [], init);
  const count = todo.length;
  const inProgress = todo.filter((item) => !item.done).length;

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  const handleAdd = (item) => {
    dispatch({
      type: "add",
      payload: item,
    });
  };

  const handleRemove = (id) => {
    dispatch({
      type: "remove",
      payload: id,
    });
  };

  const handleToggle = (id) => {
    dispatch({
      type: "toggle",
      payload: id,
    });
  };

  return {
    todo,
    count,
    inProgress,
    handleAdd,
    handleRemove,
    handleToggle,
  };
};
