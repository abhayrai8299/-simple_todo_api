import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Circles } from "react-loader-spinner";
import {loadBool2, postaddUser, updateApiUser } from "../redux/actions/action";
import Input from "./Input";
const Form = ({loadinguser,setLoadingUser,text,setText,active,setactive,toggle,setToggle,editid,setisEditid,}) => {
  const loader =useSelector((state)=>state.Todoreducer.loader2)
  const dispatch = useDispatch();

  const addHandler = () => {
    if (text !== "") {
      dispatch(loadBool2())
      setLoadingUser(true);
      setTimeout(()=>{
        setLoadingUser(false)
      },5000)
      if (editid !== "") {
        dispatch(loadBool2())
          dispatch(updateApiUser(editid,text));
          setisEditid("");
          setLoadingUser(false)
          setText("");
        setactive(false)
        setToggle(false);
      } else {
        setTimeout(()=>{
          setText("");
        },5000)
        dispatch(postaddUser(text))
      // dispatch(Add({text}))
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
  console.log("form2")
  return (
    <div>
      <h2>UserTodo_Api</h2>
      <Input toggle={toggle} text={text} setText={setText} />
      <button type="button" onClick={addHandler}>
      {!active ?loader===false?"Add":<Circles color="#00BFFF" height={10} width={25} />: "Update"}
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
