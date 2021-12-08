import MainPage from './domain/MainPage';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import AddPage from './domain/AddPage';
import TodoPage from './domain/TodoPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/todolist' element={<MainPage/>} />
        <Route path='/todolist/addtodo' element={<AddPage/>} />
        <Route path='/todolist/todo/:todoid' element={<TodoPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
