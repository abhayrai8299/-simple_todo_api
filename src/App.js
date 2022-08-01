import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"
export default function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [editid, setisEditid] = useState("");
  const [active, setactive] = useState(false);
  const [toggle,setToggle]=useState(false)

  const Changehandler = (e) => {
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
  const clickHandler = () => {
    setText("");
    setisEditid("");
    setactive(false);
  };
  // const editHandler = (id) => {
  //   console.log("scdsd", text);
  //   setTodo(
  //     todo.map((element) => {
  //       if (element.id === id) {
  //         console.log(element);
  //         return { ...element, taskName: text };
  //       }
  //       return element;
  //     })
  //   );
  // };

  const fetchData = async () => {
    const response = await axios
      .get("https://62e010f4fa8ed271c47dc10e.mockapi.io/task")
      .catch((e) => {
      });
    setTodo(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <h2>Todo_Api</h2>
      <input type="text" className={toggle===true?"addred":"addblank"} onChange={Changehandler} value={text} />
      <button onClick={addHandler} >{!active ? "Add" : "Update"}</button>
      {active ? (
        <span className="cancelbtn" onClick={clickHandler}>
          Cancel
        </span>
      ) : (
        ""
      )}
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
    </div>
  );
}
