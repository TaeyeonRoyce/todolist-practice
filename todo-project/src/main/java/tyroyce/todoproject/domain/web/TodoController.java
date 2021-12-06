package tyroyce.todoproject.domain.web;

import java.util.List;
import java.util.Optional;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import tyroyce.todoproject.domain.todo.Todo;
import tyroyce.todoproject.domain.todo.TodoRepository;

@Slf4j
@Controller
@RequestMapping(value = "/todolist")
@RequiredArgsConstructor
public class TodoController {

	private final TodoRepository todoRepository;

	@GetMapping
	public String todos(Model model) {
		List<Todo> todos = todoRepository.findAll();
		model.addAttribute("todos", todos);

		return "todolist/todos";
	}

	@GetMapping("/addTodo")
	public String printAddTodoView() {
		return "todolist/addTodo";
	}

	@GetMapping("/todo/{todoId}")
	public String todoId(@PathVariable Long todoId, Model model) {
		Optional<Todo> todoOptional = todoRepository.findById(todoId);
		model.addAttribute("todo", todoOptional.get());
		return "todolist/todo";
	}

	@PostMapping("/todo/{todoId}")
	public String editTodo(@PathVariable Long todoId, Model model) {
		Optional<Todo> changedTodo = todoRepository.findById(todoId);
		Todo todo = changedTodo.get();
		if (todo.getTodoFinished()) {
			todoRepository.updateFinished(false,todoId);
		} else {
			todoRepository.updateFinished(true,todoId);
		}
		return "redirect:/todolist";
	}

	@PostMapping("/addTodo")
	public String addTodo(@RequestParam String todoDetail, RedirectAttributes redirectAttributes) {
		Todo todo = new Todo(todoDetail);
		todoRepository.save(todo);
		redirectAttributes.addAttribute("status", true);
		return "redirect:/todolist/addTodo";
	}

	@PostConstruct
	public void testData() {
		Todo todo1 = Todo.builder().todoDetail("Network 공부하기").todoFinished(false).build();
		Todo todo2 = Todo.builder().todoDetail("My SQL 연결하기").todoFinished(true).build();
		todoRepository.save(todo1);
		todoRepository.save(todo2);
	}
}
