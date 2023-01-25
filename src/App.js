import './App.css';
import Header from './MyComponent/Header';
import { AddToDo } from './MyComponent/AddToDo';
import { ToDos } from './MyComponent/ToDos';
import { Footer } from './MyComponent/Footer';
import { About } from './MyComponent/About';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import React, { useState, useEffect } from 'react';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am on Delete of todo", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].s_no + 1;
    }
    const myTodo = {
      s_no: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos]);

  return (
    <>
      <Router>
        <Header title="My To-do list" searchBar={false} />
        <Routes>

          <Route path="/" element={<>
            <AddToDo addTodo={addTodo} />
            <ToDos todos={todos} onDelete={onDelete} />
          </>} />
          <Route path="about/*" element={<About />} />
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
