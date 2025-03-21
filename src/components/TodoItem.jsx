export const TodoItem = ({ item, handleRemove, handleToggle }) => {
  return (
    <li
      className="list-group-item d-flex justify-content-between"
      onDoubleClick={() => handleToggle(item.id)}
    >
      <span
        className={`align-self-center ${item.done ? "text-decoration-line-through" : ""}`}
        aria-label="span"
      >
        #{item.id} - {item.description}
      </span>
      <button className="btn btn-danger" onClick={() => handleRemove(item.id)}>
        X
      </button>
    </li>
  );
};
