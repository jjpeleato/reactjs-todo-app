import { useForm } from "./../hooks/useForm";

export const TodoAdd = ({ handleAdd }) => {
  const { formState, onInputChange, onReset } = useForm({
    description: "",
  });

  const { description } = formState;

  const onSubmit = (e) => {
    e.preventDefault();
    const value = description.trim();

    if (value.length <= 1) {
      return;
    }

    handleAdd &&
      handleAdd({
        id: new Date().getTime(),
        description,
        done: false,
      });
    onReset(e);
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Insert text"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-1">
        Add
      </button>
    </form>
  );
};
