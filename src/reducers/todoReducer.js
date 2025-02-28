export const todoReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter((item) => item.id !== action.payload);
    case "toggle":
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            done: !item.done,
          };
        }

        return item;
      });
    case "clear":
      throw new Error("action.type = clear is not implemented.");
    default:
      break;
  }

  return state;
};
