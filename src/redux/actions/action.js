import axios from "axios";
export const SetData = (text) => {
  return {
    type: "SetData",
    payload: text,
  };
};
// export const Add = (text) => {
//   return {
//     type: "Add",
//     payload: text,
//   };
// };
// // export const Delete = (id) => {
// //   return {
// //     type: "Delete",
// //     payload: id,
// //   };
// // };
// export const Edit = (id, text) => {
//   return {
//     type: "Edit",
//     payload: id,
//     text: text,
//   };
// };
export const fetchapi= () => {
   return async (dispatch)=>
   {
    const response = await axios
    .get("https://62e010f4fa8ed271c47dc10e.mockapi.io/task")
    console.log(response.data)
    dispatch({ type: "fetchapi",
    payload:response.data})
   }

};
export const postadd= (text) => {
  return async (dispatch)=>
  {
   const response = await axios
   .post("https://62e010f4fa8ed271c47dc10e.mockapi.io/task",{taskName:text})

   console.log(response.data);
    dispatch({ type: "postadd",
   payload:response.data})
  }

};
export const updateApi= (id,text) => {
  console.log(id,text)
  return async (dispatch)=>
  {
   const response = await axios
   .put(`https://62e010f4fa8ed271c47dc10e.mockapi.io/task/${id}`,{
    taskName:text,
   })
   console.log(response.data);
   dispatch({ type: "updateApi",
    payload:response.data})
  }

};
export const postDelete= (id) => {
  return async (dispatch)=>
  {
    // await new Promise((r) => setTimeout(r, 1000)); 
   const response= await axios
    .delete(`https://62e010f4fa8ed271c47dc10e.mockapi.io/task/${id}`)
     console.log(response.data)
   dispatch({ type: "postDelete",
   payload:response.data
  })
  }

};


