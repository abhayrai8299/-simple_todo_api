import React,{memo, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Circles } from "react-loader-spinner";
import {Deleteloader1, postDeleteTodo } from '../redux/actions/action';

const TodoList = ({setTodo,setisEditid,setactive,setText}) => {
  const [storeid,setStoreid]=useState("")
  const todos =useSelector((state)=>state.Todoreducer.todos)
  const delloader =useSelector((state)=>state.Todoreducer.delload1)
  console.log(delloader);
  const dispatch=useDispatch();

  useEffect(()=>{
    console.log(storeid);
    if(delloader===false)
    {
      setTodo(todos.filter((item) => item.id !==storeid.id));
    }
  },[delloader])

  const deleteHandler = (id) => {
   const data=todos.find((item)=>item.id===id)
      setStoreid(data)
      dispatch(Deleteloader1(true))
      console.log(delloader);
      dispatch(postDeleteTodo(id,false))
       setactive(false);   
  };
  const edit = (id) => {
    const data = todos.find((element) => {
      return element.id === id;
    });
    setText(data.taskName);
    setisEditid(id);
    setactive(true);
  };
  console.log("TodoList1")
  return (
     <>
       {todos.sort((a,b)=>b.id-a.id).map((item) => {
          return (
            <li key={item.id}>
              <ul>
                {item.taskName}
                <button onClick={() => edit(item.id)}>Edit</button>
                <button onClick={() => deleteHandler(item.id)}>{delloader===false?"Delete":<Circles color="#00BFFF" height={10} width={25} />}</button>
              </ul>
            </li>
          );
        })}
     </>
  )
}

export default memo(TodoList)