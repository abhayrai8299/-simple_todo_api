const initialState = {
  todos: [],
  users:[],
  loader1:false,
  loader2:false,
};

export const Todoreducer = (state = initialState, action) => {
  switch (action.type) {
    case "loadBool1":
      return {
        ...state,
        loader1:state.loader1=true,
      }
      case "loadBool2":
      return {
        ...state,
        loader2:state.loader2=true,
      }
    case "SetDataTodo":
      return {
        ...state,
        todos: action.payload,
      };
      case "SetDataUser":
        return {
          ...state,
          users: action.payload,
        };
      case "fetchapiTodo":
        return {
          ...state,
          todos:action.payload
        }
        case "fetchapiUser":
        return {
          ...state,
          users:action.payload
        }
        case "postaddTodo":
          return {
            ...state,
            todos:[...state.todos,{...action.payload}],
            loader1:state.loader1=false,
          }
          case "postaddUser":
            return {
              ...state,
              users:[...state.users,{...action.payload}],
              loader2:state.loader2=false,
            }
        case "updateApiTodo":
        return {
          ...state,
          todos: state.todos.map((item) => {
            if (item.id === action.payload.id) {
              return { ...item, taskName: action.payload.taskName };
            }
            return item;
          }),
          loader1:state.loader1=false,
        }
        case "updateApiUser":
          return {
            ...state,
            users: state.users.map((item) => {
              if (item.id === action.payload.id) {
                return { ...item, name: action.payload.name };
              }
              return item;
            }),
            loader2:state.loader2=false,
          }
        case "postDeleteTodo":
          const data = state.todos.filter((item) => item.id !== action.payload);
        return {
          ...state,
          todos:data,
        }
        case "postDeleteUser":
          const element = state.users.filter((item) => item.id !== action.payload);
        return {
          ...state,
          users:element,
        }
    default:
      return state;
  }
};
