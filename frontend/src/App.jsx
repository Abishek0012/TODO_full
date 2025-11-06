import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Todo from "./Components/Todo";
import WorkingOn from "./Components/WorkingOn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/working" element={<WorkingOn />} />
    </Routes>
  );
}

export default App;
