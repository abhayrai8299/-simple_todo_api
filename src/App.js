import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import { useDispatch } from "react-redux";
import { SetData } from "./redux/actions/action";
export default function App() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [editid, setisEditid] = useState("");
  const [active, setactive] = useState(false);
  const [toggle, setToggle] = useState(false);

  const fetchData = async () => {
    const response = await axios
      .get("https://62e010f4fa8ed271c47dc10e.mockapi.io/task")
      .catch((e) => {});
    setTodo(response.data);
  };
  const setData = () => {
    dispatch(SetData(todo));
  };
  useEffect(() => {
    fetchData();
    // setData();
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
        setText={setText}
        editid={editid}
        setisEditid={setisEditid}
        setactive={setactive}
      />
    </div>
  );
}
