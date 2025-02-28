import { TodoItem } from ".";

export const TodoList = ({ items, handleRemove, handleToggle }) => {
  return (
    <ul className="list-group">
      {items.map((item) => {
        return (
          <TodoItem
            key={item.id}
            item={item}
            handleRemove={handleRemove}
            handleToggle={handleToggle}
          />
        );
      })}
    </ul>
  );
};
