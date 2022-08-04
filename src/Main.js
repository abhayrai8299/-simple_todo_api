import React from "react";
import './App.css'
import AppTodo from "./AppTodo";
import AppUser from "./AppUser";

const Main = () => {
  return (
    <div className="main">
        <div className="container">
        <AppTodo  />
         <AppUser />
        </div>
    
    </div>
  );
};

export default Main;
