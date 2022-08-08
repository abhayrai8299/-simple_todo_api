import React,{memo, useEffect, useState} from 'react'
import { Circles } from "react-loader-spinner";
import { useDispatch, useSelector } from 'react-redux';
import {Deleteloader2, postDeleteUser } from '../redux/actions/action';

const TodoList = ({user,setUser,setisEditid,setactive,setText}) => {
  const [storeid,setStoreid]=useState("")
  const users =useSelector((state)=>state.Todoreducer.users)
  const delloader2 =useSelector((state)=>state.Todoreducer.delload2)
  const dispatch=useDispatch();

  useEffect(()=>{
    console.log(storeid);
    if(delloader2===false)
    {
      setUser(users.filter((item) => item.id !==storeid.id));
    }
  },[delloader2])

  console.log("TodoList2")
  const deleteHandler = (id) => {
    const data=users.find((item)=>item.id===id)
    setStoreid(data)
    dispatch(Deleteloader2(true))
    dispatch(postDeleteUser(id,false))
    setactive(false);
  };
  const edit = (id) => {
    const data = users.find((element) => {
      return element.id === id;
    });
    setText(data.name);
    setisEditid(id);
    setactive(true);
  };
  return (
     <>
       {users.sort((a,b)=>b.id-a.id).map((item) => {
          return (
            <li key={item.id}>
              <ul>
                {item.name}
                <button onClick={() => edit(item.id)}>Edit</button>
                <button onClick={() => deleteHandler(item.id)}>{delloader2===false?"Delete":<Circles color="#00BFFF" height={10} width={25} />}</button>
              </ul>
            </li>
          );
        })}
     </>
  )
}

export default memo(TodoList)