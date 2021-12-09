package tyroyce.todoproject.domain.controller;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import tyroyce.todoproject.domain.repository.Todo;
import tyroyce.todoproject.domain.service.TodoService;

@Slf4j
@RestController
@RequestMapping(value = "/todolist")
@RequiredArgsConstructor
public class TodoController {

	private final TodoService todoService;

	@GetMapping
	public List<Todo> todos() {
		List<Todo> todos = todoService.getTodos();
		return todos;
	}

	@GetMapping("/addTodo")
	public String printAddTodoView() {
		return "todolist/addTodo";
	}

	@GetMapping("/todo/{todoId}")
	public String todoId(@PathVariable Long todoId, Model model) {
		model.addAttribute("todo", todoService.findByTodoId(todoId));
		return "todolist/todo";
	}

	@PostMapping("/todo/{todoId}")
	public String editTodo(@PathVariable Long todoId) {
		todoService.updateTodo(todoId);
		return "redirect:/todolist";
	}

	@DeleteMapping("/todo/{todoId}")
	public void deleteTodo(@PathVariable Long todoId) {
		todoService.deleteTodoById(todoId);
	}

	@PostMapping("/addtodo")
	public void addTodo(@RequestBody String todoDetail) {
		Todo todo = new Todo(todoDetail);
		todoService.saveTodo(todo);
	}

}
