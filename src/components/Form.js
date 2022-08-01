import React,{memo} from 'react'

const Form = ({todo,setTodo,text,setText,active,setactive,toggle,setToggle,editid,setisEditid}) => {


    const Changehandler = (e) => {
      e.preventDefault();
        setText(e.target.value);
      };
    
      const addHandler = (e) => {
        e.preventDefault();
        if (text !== "") {
          if (editid !== "") {
            setTodo(
              todo.map((element) => {
                if (element.id === editid) {
                  return { ...element, taskName: text };
                }
                return element;
              })
            );
            setisEditid("");
            setText("");
            setactive(false)
            setToggle(false);
          } else {
            setTodo([...todo, { taskName: text, id: Math.random() * 10000 }]);
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
      console.log("Form")
  return (
    <div>
         <h2>Todo_Api</h2>
      <input type="text" className={toggle===true?"addred":"addblank"} onChange={Changehandler} value={text} />
      <button type='button' onClick={addHandler} >{!active ? "Add" : "Update"}</button>
         {active ? (
        <span className="cancelbtn" onClick={clickHandler}>
          Cancel
        </span>
      ) : (
        ""
      )}
    </div>
  )
}

export default memo(Form);