import MainPage from './domain/MainPage';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import AddPage from './domain/AddPage';
import TodoPage from './domain/TodoPage';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const baseurl = "http://localhost:8080/todolist";

  const [todoData, setTodoData] = useState([]);
  useEffect(() => {
    getTodos();
  },[]);

  async function getTodos() {
    await axios.get(baseurl)
    .then((response) => {
      console.log(response.data)
      setTodoData(response.data);
    })
  }

  return (
    <Router>
      <Routes>
        <Route path='/todolist' element={<MainPage todos={todoData}/>} />
        <Route path='/todolist/addtodo' element={<AddPage/>} />
        <Route path='/todolist/todo/:todoid' element={<TodoPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
