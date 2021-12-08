import React from 'react';
import MainFrame from '../components/MainFrame';
import "../css/addForm.css"


function AddPageDetail() {
    return (
        <div className="addFormContainer">
            <div className="messageContainer">
                <div className="addMessage">새로운 일정을 등록하세요</div>
            </div>
            <form action="todos.html" method="post">
                <div>
                <div class="finishedMessage"> 일정이 등록되었습니다 </div>
                    <input type="text" name="todoDetail" className="addTodoForm" placeholder="일정을 입력하세요"/>
                </div>
                <div className="buttonContainer">
                    <button type="submit" className="addTodo"> 일정에 추가하기</button>
                    <button onclick="location.href='todos.html'" type="button" className="return">돌아가기</button>
                </div>
            </form>
        </div>
    )
}


function AddPage() {
    return(
        <MainFrame view={AddPageDetail()}/>
    )
}

export default AddPage;