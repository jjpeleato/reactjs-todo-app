import { useEffect, useReducer } from "react";
import { todoReducer } from "./../reducers/todoReducer";
import { TodoList, TodoAdd } from ".";

const init = () => {
  return JSON.parse(localStorage.getItem("todo")) || [];
};

export const TodoApp = () => {
  const [todo, dispatch] = useReducer(todoReducer, [], init);

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

  const todoCount = todo.length;
  const inProgressCount = todo.filter((item) => !item.done).length;

  return (
    <>
      <div className="row">
        <div className="col">
          <h1>TodoApp ({todoCount})</h1>
          <h5>In progress ({inProgressCount})</h5>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-7">
          <TodoList
            items={todo}
            handleRemove={handleRemove}
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-5">
          <h4>Add todo item</h4>
          <hr />
          <TodoAdd handleAdd={handleAdd} />
        </div>
      </div>
    </>
  );
};
