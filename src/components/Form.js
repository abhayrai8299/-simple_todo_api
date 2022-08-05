import React, { memo, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Circles } from "react-loader-spinner";
import {loadBool1, postaddTodo,updateApiTodo } from "../redux/actions/action";
import Input from "./Input";
const Form = ({text,setText,active,setactive,toggle,setToggle,editid,setisEditid,}) => {
  const loader =useSelector((state)=>state.Todoreducer.loader1)

useEffect(()=>{
   if(loader===false)
   {
    setText("");
   }
},[loader])

  const dispatch = useDispatch();
  console.log("form1")
  const addHandler = () => {
    if (text !== "") {
      if (editid !== "") {
        dispatch(loadBool1(true))
          dispatch(updateApiTodo(editid,text,false));
          setisEditid("");
         setactive(false)
         setToggle(false);
      } else {
        dispatch(loadBool1(true))
        dispatch(postaddTodo(text,false));
      }
    } else if(editid!=="" )
      {
        setToggle(false)
        setactive(true);
      }
      else
      {
        setToggle(false)
      }
  };
  const clickHandler = () => {
    setText("");
    setisEditid("");
    setactive(false);
  };
  return (
    <div>
      <h2>Todo_Api</h2>
      <Input toggle={toggle} text={text} setText={setText} />
      <button type="button" onClick={addHandler}>
        {loader===false?!active?"Add":"Update":<Circles color="#00BFFF" height={10} width={25} />}
      </button>
      {active ? (
        <span className="cancelbtn" onClick={clickHandler}>
          Cancel
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default memo(Form);
