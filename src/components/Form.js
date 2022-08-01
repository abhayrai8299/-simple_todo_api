import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { Add, Edit } from "../redux/actions/action";
import Input from "./Input";

const Form = ({
  text,
  setText,
  active,
  setactive,
  toggle,
  setToggle,
  editid,
  setisEditid,
}) => {
  const dispatch = useDispatch();
  const addHandler = () => {
    if (text !== "") {
      if (editid !== "") {
        dispatch(Edit(editid,text))
        setisEditid("");
        setText("");
        setactive(false)
        setToggle(false);
      } else {
       dispatch(Add({text}))
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
        {!active ? "Add" : "Update"}
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
