import React,{ memo }  from 'react'

const TodoList = ({todo,setTodo,editid,setisEditid,setactive,setText}) => {


    const deleteHandler = (id) => {
        setTodo(todo.filter((item) => item.id !== id));
        if (editid !== "") {
          setText("");
        }
        setisEditid("");
        setactive(false);
      };
      const edit = (id) => {
        const data = todo.find((element) => {
          return element.id === id;
        });
        setText(data.taskName);
        setisEditid(id);
        setactive(true);
      };
console.log("TodoList")
  return (
     <>
       {todo.map((item) => {
          return (
            <li key={item.id}>
              <ul>
                {item.taskName}
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