import React from "react";
import { Link } from "react-router-dom";
import MainFrame from "../components/MainFrame";
import Todos from '../components/Todos';
import axios from 'axios';
import { useEffect, useState } from 'react';
import "../css/mainPage.css";


function MainDetail(todos) {
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


function MainPage() {

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
    
    return(
        <MainFrame view={MainDetail(todoData)}/>
    )
}

export default MainPage;