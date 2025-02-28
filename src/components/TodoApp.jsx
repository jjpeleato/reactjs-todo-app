import { TodoList, TodoAdd } from ".";
import { useTodo } from "../hooks";

export const TodoApp = () => {
  const { todo, count, inProgress, handleAdd, handleRemove, handleToggle } = useTodo();

  return (
    <>
      <div className="row">
        <div className="col">
          <h1>TodoApp ({count})</h1>
          <h5>In progress ({inProgress})</h5>
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
