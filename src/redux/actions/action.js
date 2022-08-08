import axios from "axios";
export const loadBool1= (tru) => {
  return {
    type: "loadBool1",
    payload:tru,
  };
};
export const loadBool2= (tru) => {
  return {
    type: "loadBool2",
    payload:tru,
  };
};
export const Deleteloader1= (tru) => {
  return {
    type: "loadDel1",
    payload:tru,
  };
};
export const Deleteloader2= (tru) => {
  return {
    type: "loadDel2",
    payload:tru,
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
    payload:response.data
    
  })
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
export const postaddTodo= (text,fal) => {
  
  return async (dispatch)=>
  {
   const response = await axios
   .post("https://62e010f4fa8ed271c47dc10e.mockapi.io/task",{taskName:text})
    await new Promise((r) => setTimeout(r, 5000)); 
    dispatch({ type: "postaddTodo",
   payload:response.data,
   flag:fal,
  })
  }

};
export const postaddUser= (text,falsee) => {
  return async (dispatch)=>
  {
   const response = await axios
   .post("https://62e010f4fa8ed271c47dc10e.mockapi.io/users",{name:text})
   await new Promise((r) => setTimeout(r,5000)); 
    dispatch({ type: "postaddUser",
   payload:response.data,
   flag:falsee,
  })
  }

};
export const updateApiTodo= (id,text,fal) => {
  return async (dispatch)=>
  {
   const response = await axios
   .put(`https://62e010f4fa8ed271c47dc10e.mockapi.io/task/${id}`,{
    taskName:text,
   })
   await new Promise((r) => setTimeout(r,5000)); 
   dispatch({ type: "updateApiTodo",
    payload:response.data,
    flag:fal,
  })
  }

};
export const updateApiUser= (id,text,falsee) => {
  return async (dispatch)=>
  {
   const response = await axios
   .put(`https://62e010f4fa8ed271c47dc10e.mockapi.io/users/${id}`,{
    name:text,
   })
   dispatch({ type: "updateApiUser",
    payload:response.data,
    flag:falsee,
  })
  }

};
export const postDeleteTodo= (id,falsee) => {
  return async (dispatch)=>
  {
   const response= await axios
    .delete(`https://62e010f4fa8ed271c47dc10e.mockapi.io/task/${id}`)
    await new Promise((r) => setTimeout(r, 5000)); 
   dispatch({ type: "postDeleteTodo",
   payload:response.data,
   flag:falsee,
  })
  }
};
export const postDeleteUser= (id,falsee) => {
  return async (dispatch)=>
  {
    // await new Promise((r) => setTimeout(r, 1000)); 
   const response= await axios
    .delete(`https://62e010f4fa8ed271c47dc10e.mockapi.io/users/${id}`)
    await new Promise((r) => setTimeout(r, 5000)); 
    dispatch({ type: "postDeleteUser",
   payload:response.data,
   flag:falsee
  })
  }

};

