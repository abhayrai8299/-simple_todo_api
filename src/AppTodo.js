import { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import { useDispatch, useSelector } from "react-redux";
import {fetchapiTodo,SetDataTodo } from "./redux/actions/action";
export default function App() {
  const todos =useSelector((state)=>state.Todoreducer.todos)
  const dispatch = useDispatch();
  const [todo, setTodo] = useState(todos);
  const [text, setText] = useState("");
  const [editid, setisEditid] = useState("");
  const [active, setactive] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [loading,setLoading]=useState(false);

  const setData = () => {
    dispatch(SetDataTodo(todo));
  };
  useEffect(() => {
    dispatch(fetchapiTodo());
  }, []);
  useEffect(() => {
    setData();
  }, [todo]);


  console.log("AppTodo Trigger")
  return (
    <div className="App">
      <Form
        loading={loading}
        setLoading={setLoading}
        text={text}
        setText={setText}
        active={active}
        setactive={setactive}
        toggle={toggle}
        setToggle={setToggle}
        editid={editid}
        setisEditid={setisEditid}
      />
      <TodoList
        todo={todo}
        setTodo={setTodo}
        setText={setText}
        editid={editid}
        setisEditid={setisEditid}
        setactive={setactive}
      />
    </div>
  );
}
