import React,{memo} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {postDeleteUser } from '../redux/actions/action';

const TodoList = ({setUser,setisEditid,setactive,setText}) => {
  const users =useSelector((state)=>state.Todoreducer.users)
  const dispatch=useDispatch();

  console.log("TodoList2")
  const deleteHandler = (id) => {
    dispatch(postDeleteUser(id))
      setUser(users.filter((item) => item.id !== id));
      setText("");
    setisEditid("");
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
                <button onClick={() => deleteHandler(item.id)}>Delete</button>
              </ul>
            </li>
          );
        })}
     </>
  )
}

export default memo(TodoList)