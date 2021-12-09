package tyroyce.todoproject.domain.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tyroyce.todoproject.domain.repository.Todo;
import tyroyce.todoproject.domain.repository.TodoRepository;

@Service
public class TodoService {
	private TodoRepository todoRepository;

	@Autowired
	public TodoService(TodoRepository todoRepository) {
		this.todoRepository = todoRepository;
	}

	public List<Todo> getTodos() {
		return todoRepository.findAll();
	}

	public void saveTodo(Todo todo) {
		todoRepository.save(todo);
	}

	public Todo findByTodoId(Long todoId) {
		Optional<Todo> todo = todoRepository.findById(todoId);
		return todo.get();
	}

	public void deleteTodoById(Long todoId) {
		todoRepository.deleteById(todoId);
	}

	public void updateTodo(Long todoId) {
		Todo todo = findByTodoId(todoId);
		if (todo.getTodoFinished()) {
			todoRepository.updateFinished(false,todoId);
		} else {
			todoRepository.updateFinished(true,todoId);
		}
	}
}
