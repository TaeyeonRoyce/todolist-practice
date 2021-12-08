import React from 'react';
import MainFrame from '../components/MainFrame';
import "../css/todo.css"
import { Link } from 'react-router-dom';



function TodoPageDetail() {
    const baseUrl = "http://localhost:8080/todolist";

    return (
        <div className="todoFormContainer">
            <div className="todoDetail" >Jpa 공부하기</div>
            <div className="askMessage" >일정을 완료하셨나요?</div>
            <form className="buttonContainer" action="" method="post">
                <button type="submit" className="finishTodo" > 완료 하기 </button>
                <Link to="/todolist">
                    <button type="button" className="return">돌아가기</button>
                </Link>
            </form>
        </div>
    )
}


function TodoPage({baseUrl}) {
    return(
        <MainFrame view={TodoPageDetail(baseUrl)}/>
    )
}

export default TodoPage;