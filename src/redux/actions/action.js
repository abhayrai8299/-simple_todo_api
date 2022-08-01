export const SetData = (text) => {
  return {
    type: "SetData",
    payload: text,
  };
};
export const Add = (text) => {
  return {
    type: "Add",
    payload: text,
  };
};
export const Delete = (id) => {
  return {
    type: "Delete",
    payload: id,
  };
};
export const Edit = (id, text) => {
  return {
    type: "Edit",
    payload: id,
    text: text,
  };
};
