import React from 'react';
import MainFrame from '../components/MainFrame';
import "../css/mainPage.css";


function MainDetail() {
    return (
        <div className="mainDetailContainer">
            <button className="addTodoBtn" onClick="location.href='addTodo.html'"> 새로운 일정 추가하기 </button>
            <div className="todoListContainer">
                <div class="todoContainer">
                    <a href="todo.html" className="todoList">
                        <div className="todoBullet">🟢️️</div>
                        <div className="todoDetail">일정 내용</div>
                    </a>
                    <form className="deleteTodo" action="todos.html" method="post">
                        <button type="submit"> ❌ </button>
                    </form>
                </div>
                <div class="todoContainer">
                    <a href="todo.html" className="todoList">
                        <div className="todoBullet">⭕️</div>
                        <div className="todoDetail">JPA 연결하기</div>
                    </a>
                    <form className="deleteTodo" action="todos.html" method="post">
                        <button type="submit"> ❌ </button>
                    </form>
                </div>
            </div>
        </div>
    )
}


function MainPage() {
    return(
        <MainFrame view={MainDetail()}/>
    )
}

export default MainPage;