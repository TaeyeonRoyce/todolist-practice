import React from 'react';
import MainFrame from '../components/MainFrame';
import "../css/todos.css"


function MainDetail() {
    return (
        <div className="mainDetailContainer">
            <button className="addTodo" onclick="location.href='addTodo.html'"> 새로운 일정 추가하기 </button>
            <div className="todoListContainer">
                <a href="todo.html" className="todoList">
                    <div className="todoBullet">⭕️</div>
                    <div className="todoDetail">Jpa 공부하기</div>
                </a>
                <a href="todo.html" className="todoList">
                    <div className="todoBullet">⭕️</div>
                    <div className="todoDetail">Spring MVC 공부하기</div>
                </a>
                <a href="todo.html" className="doneListContainer">
                    <div className="todoList">
                        <div className="todoBullet">🟢</div>
                        <div className="todoDetail">My Sql 연결하기</div>
                    </div>
                </a>
            </div>
        </div>
    )
}


function MainPage() {
    return(
        <MainFrame view={<MainDetail/>}/>
    )
}

export default MainPage;