package tyroyce.todoproject.domain.web;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

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

	@PostConstruct
	public void testData() {
		Todo todo1 = Todo.builder().todoId(1L).todoDetail("Network공부하기").todoFinished(false).build();
		Todo todo2 = Todo.builder().todoId(2L).todoDetail("My SQL 연결하기").todoFinished(true).build();
		todoRepository.save(todo1);
		todoRepository.save(todo2);
	}
}
