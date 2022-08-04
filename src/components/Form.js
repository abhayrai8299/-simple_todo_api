import React, { memo } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Circles } from "react-loader-spinner";
import {loadBool1, postaddTodo,updateApiTodo } from "../redux/actions/action";
import Input from "./Input";
const Form = ({loadingtodo,setLoadingTodo,text,setText,active,setactive,toggle,setToggle,editid,setisEditid,}) => {
  const loader =useSelector((state)=>state.Todoreducer.loader1)
  const dispatch = useDispatch();

  console.log("form1")
  const addHandler = () => {
  
    if (text !== "") {
      dispatch(loadBool1())
      if (editid !== "") {
        dispatch(loadBool1())
          dispatch(updateApiTodo(editid,text));
          setisEditid("");
          setLoadingTodo(false)
          setText("");
        setactive(false)
        setToggle(false);
      } else {
        dispatch(postaddTodo(text));
          setText("");
      }
    } else if(editid!=="" )
      {
        setToggle(true)
        setTimeout(()=>{
        setToggle(false)
        setactive(true);
        },2000)
      }
      else
      {
        setToggle(true)
        setTimeout(()=>{
        setToggle(false)
        },2000)
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
