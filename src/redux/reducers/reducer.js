const initialState = {
  todos: [],
};

export const Todoreducer = (state = initialState, action) => {
  switch (action.type) {
    case "SetData":
      return {
        ...state,
        todos: action.payload,
      };
    case "Add":
      return {
        ...state,
        todos: [
          ...state.todos,
          { taskName: action.payload.text, id: Math.random() * 10000 },
        ],
      };
    case "Edit":
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.payload) {
            return { ...item, taskName: action.text };
          }
          return item;
        }),
      };
    case "Delete":
      const data = state.todos.filter((item) => item.id !== action.payload);
      return {
        ...state,
        todos: data,
      };

    default:
      return state;
  }
};
