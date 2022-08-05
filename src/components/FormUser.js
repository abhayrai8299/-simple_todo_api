import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Circles } from "react-loader-spinner";
import {loadBool2, postaddUser, updateApiUser } from "../redux/actions/action";
import Input from "./Input";
const Form = ({setLoadingUser,text,setText,active,setactive,toggle,setToggle,editid,setisEditid,}) => {
  const loader =useSelector((state)=>state.Todoreducer.loader2)
  const dispatch = useDispatch();


  useEffect(()=>{
     if(loader===false)
     {
      setText("");
     }
  },[loader])

  const addHandler = () => {
    if (text !== "") {
      if (editid !== "") {
          dispatch(loadBool2(true));
          dispatch(updateApiUser(editid,text,false));
          setisEditid("");
          setLoadingUser(false)
        setactive(false)
        setToggle(false);
      } else {
        dispatch(loadBool2(true))
        dispatch(postaddUser(text,false))
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
