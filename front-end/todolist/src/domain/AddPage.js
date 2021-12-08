import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainFrame from '../components/MainFrame';
import "../css/addForm.css"


function AddPageDetail() {

    const [added, setAdded] = useState(false);
    const [inputValue, setInputValue] = useState("");

    function addTodo(e) {
        e.preventDefault();

        const addTodoDetail = async () =>{
        await axios
                .post("http://localhost:8080/todolist/addtodo", {
                    todoDetail: inputValue
                })
                .then((response) => {
                    console.log(response.data);
                    setInputValue("");
                    setAdded(true);
                })
        }
        addTodoDetail();
        console.log("추가완료");
    }

    function changeValue(e) {
        e.preventDefault();
        setInputValue(e.target.value);
    }

    return (
        <div className="addFormContainer">
            <div className="messageContainer">
                {added ? 
                    (<div class="finishedMessage"> 일정이 등록되었습니다 </div>) :
                    (<div className="addMessage">새로운 일정을 등록하세요</div>)
                }
            </div>
            <form action="todos.html" method="post" onSubmit={addTodo}>
                <div>

                    <input type="text" onChange={changeValue} name="todoDetail" className="addTodoForm" placeholder="일정을 입력하세요"/>
                </div>
                <div className="buttonContainer">
                    <button type="submit" className="addTodo"> 일정에 추가하기</button>
                    <Link to="/todolist">
                        <button type="button" className="return">돌아가기</button>
                    </Link>
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