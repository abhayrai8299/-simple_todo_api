import axios from "axios";
export const loadBool1= () => {
  return {
    type: "loadBool1",
  };
};
export const loadBool2= () => {
  return {
    type: "loadBool2",
  };
};
export const SetDataTodo = (text) => {
  return {
    type: "SetDataTodo",
    payload: text,
  };
};
export const SetDataUser = (text) => {
  return {
    type: "SetDataUser",
    payload: text,
  };
};

export const fetchapiTodo= () => {
   return async (dispatch)=>
   {
    const response = await axios
    .get("https://62e010f4fa8ed271c47dc10e.mockapi.io/task")
    dispatch({ type: "fetchapiTodo",
    payload:response.data})
   }
};
export const fetchapiUser= () => {
  return async (dispatch)=>
  {
   const response = await axios
   .get("https://62e010f4fa8ed271c47dc10e.mockapi.io/users")
   dispatch({ type: "fetchapiUser",
   payload:response.data})
  }

};
export const postaddTodo= (text) => {
  
  return async (dispatch)=>
  {
   const response = await axios
   .post("https://62e010f4fa8ed271c47dc10e.mockapi.io/task",{taskName:text})
    await new Promise((r) => setTimeout(r, 5000)); 
    dispatch({ type: "postaddTodo",
   payload:response.data})
  }

};
export const postaddUser= (text) => {
  return async (dispatch)=>
  {
   const response = await axios
   .post("https://62e010f4fa8ed271c47dc10e.mockapi.io/users",{name:text})
   await new Promise((r) => setTimeout(r,5000)); 
    dispatch({ type: "postaddUser",
   payload:response.data})
  }

};
export const updateApiTodo= (id,text) => {
  return async (dispatch)=>
  {
   const response = await axios
   .put(`https://62e010f4fa8ed271c47dc10e.mockapi.io/task/${id}`,{
    taskName:text,
   })
   dispatch({ type: "updateApiTodo",
    payload:response.data})
  }

};
export const updateApiUser= (id,text) => {
  return async (dispatch)=>
  {
   const response = await axios
   .put(`https://62e010f4fa8ed271c47dc10e.mockapi.io/users/${id}`,{
    name:text,
   })
   dispatch({ type: "updateApiUser",
    payload:response.data})
  }

};
export const postDeleteTodo= (id) => {
  return async (dispatch)=>
  {
    // await new Promise((r) => setTimeout(r, 1000)); 
   const response= await axios
    .delete(`https://62e010f4fa8ed271c47dc10e.mockapi.io/task/${id}`)
   dispatch({ type: "postDeleteTodo",
   payload:response.data
  })
  }
};
export const postDeleteUser= (id) => {
  return async (dispatch)=>
  {
    // await new Promise((r) => setTimeout(r, 1000)); 
   const response= await axios
    .delete(`https://62e010f4fa8ed271c47dc10e.mockapi.io/users/${id}`)
   dispatch({ type: "postDeleteUser",
   payload:response.data
  })
  }

};

