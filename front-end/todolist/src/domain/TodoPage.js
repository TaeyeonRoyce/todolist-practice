import React from 'react';
import MainFrame from '../components/MainFrame';
import "../css/todo.css"


function TodoPageDetail() {
    return (
        <div className="todoFormContainer">
            <div className="todoDetail" >Jpa 공부하기</div>
            <div className="askMessage" >일정을 완료하셨나요?</div>
            <form className="buttonContainer" action="" method="post">
                <button type="submit" className="finishTodo" > 완료 하기 </button>
                <button onClick="location.href='todos.html'" type="button" className="return">돌아가기</button>
            </form>
        </div>
    )
}


function TodoPage() {
    return(
        <MainFrame view={TodoPageDetail()}/>
    )
}

export default TodoPage;