import { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import { useDispatch, useSelector } from "react-redux";
import { fetchapi, SetData } from "./redux/actions/action";
export default function App() {
  const todos =useSelector((state)=>state.Todoreducer.todos)
  const dispatch = useDispatch();
  const [todo, setTodo] = useState(todos);
  const [text, setText] = useState("");
  const [editid, setisEditid] = useState("");
  const [active, setactive] = useState(false);
  const [toggle, setToggle] = useState(false);

  const setData = () => {
    dispatch(SetData(todo));
    console.log(todos)
  };
  useEffect(() => {
    dispatch(fetchapi());
  }, []);
  useEffect(() => {
    setData();
  }, [todo]);
  return (
    <div className="App">
      <Form
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
        text={text}
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
