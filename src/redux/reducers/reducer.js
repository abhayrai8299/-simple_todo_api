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
    // case "Add":
    //   return {
    //     ...state,
    //     todos: [
    //       ...state.todos,
    //       { taskName: action.payload.text, id: Math.random() * 10000 },
    //     ],
    //   };
    // case "Edit":
    //   return {
    //     ...state,
    //     todos: state.todos.map((item) => {
    //       if (item.id === action.payload) {
    //         return { ...item, taskName: action.text };
    //       }
    //       return item;
    //     }),
    //   };
      case "fetchapi":
        return {
          ...state,
          todos:action.payload
        }
        case "postadd":
          console.log(action.payload);
          return {
            ...state,
            todos:[...state.todos,{...action.payload}]
          }
        case "updateApi":
        console.log(action.payload.id)
        return {
          ...state,
          todos: state.todos.map((item) => {
            if (item.id === action.payload.id) {
              console.log(item.id)
              return { ...item, taskName: action.payload.taskName };
            }
            return item;
          }),
        }
        case "postDelete":
          console.log(action.payload);
          const data = state.todos.filter((item) => item.id !== action.payload);
          console.log(data)
        return {
          ...state,
          todos:data,
        }
    // case "Delete":
    //   // const data = state.todos.filter((item) => item.id !== action.payload);
    //   return {
    //     ...state,
    //     todos: data,
    //   };

    default:
      return state;
  }
};
