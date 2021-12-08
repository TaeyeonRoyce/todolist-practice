import React from "react";
import { Link } from "react-router-dom";
import MainFrame from "../components/MainFrame";
import Todos from '../components/Todos';
import "../css/mainPage.css";


function MainDetail({todos}) {
    return (
        <div className="mainDetailContainer">
            <Link to="/todolist/addtodo">
                <button className="addTodoBtn"> 새로운 일정 추가하기 </button>
            </Link>
            <div className="todoListContainer">
                {todos.map((todo) => (
                    <Todos todo={todo} key={todo.todoId}></Todos>
                ))}
            </div>
        </div>
    )
}


function MainPage(todos) {
    return(
        <MainFrame view={MainDetail(todos)}/>
    )
}

export default MainPage;