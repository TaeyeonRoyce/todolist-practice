import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function Todos({todo}) {

    const baseUrl = "http://localhost:8080/todolist";

    function deleteTodo(e) {
        e.preventDefault();

        const deleteTodo = async () =>{
        await axios
            .delete(baseUrl + "/todo/" + todo.todoId);
        }
        deleteTodo();
        console.log("삭제완료");
    }
    return(
        <div className="todosContainer" key={todo.todoId}>
            <Link to={{
                    pathname : `/todolist/todo/${todo.todoId}`,
                    state : {todo}}}>
                <div className="todoList">
                    {todo.todoFinished ? 
                        <div className="todoBullet">🟢</div> :
                        <div className="todoBullet">⭕️</div>
                    }
                    <div className="todosDetail">{todo.todoDetail}</div>
                </div>
            </Link>
            <form className="deleteTodo" onSubmit={deleteTodo}>
                <button type="submit"> ❌ </button>
            </form>
        </div>
    )
}

export default Todos;