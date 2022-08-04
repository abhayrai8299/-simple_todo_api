import { useEffect, useState } from "react";
import "./App.css";
import TodoListUser from "./components/TodoListUser";
import FormUser from "./components/FormUser";
import { useDispatch, useSelector } from "react-redux";
import {fetchapiUser,SetDataUser } from "./redux/actions/action";
export default function App() {
  const users =useSelector((state)=>state.Todoreducer.users)
  const loaderuser =useSelector((state)=>state.Todoreducer.boolean)
  const dispatch = useDispatch();
  const [user, setUser] = useState(users);
  const [text, setText] = useState("");
  const [editid, setisEditid] = useState("");
  const [active, setactive] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [loadinguser,setLoadingUser]=useState(loaderuser)

  const setData = () => {
    dispatch(SetDataUser(user));
  };
  useEffect(() => {
    dispatch(fetchapiUser());
  }, []);
  useEffect(() => {
    setData();
  }, [user]);
  console.log("AppUser Trigger")
  return (
    <div className="App">
      <FormUser
        loadinguser={loadinguser}
        setLoadingUser={setLoadingUser}
        text={text}
        setText={setText}
        active={active}
        setactive={setactive}
        toggle={toggle}
        setToggle={setToggle}
        editid={editid}
        setisEditid={setisEditid}
      />
      <TodoListUser
        user={user}
        setUser={setUser}
        setText={setText}
        editid={editid}
        setisEditid={setisEditid}
        setactive={setactive}
      />
    </div>
  );
}
