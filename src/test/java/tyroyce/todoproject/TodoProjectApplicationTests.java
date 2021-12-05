package tyroyce.todoproject;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import tyroyce.todoproject.domain.todo.Todo;
import tyroyce.todoproject.domain.todo.TodoRepository;

@SpringBootTest
class TodoProjectApplicationTests {

	@Test
	void contextLoads() {
	}

	@Autowired
	TodoRepository todoRepository;

	@Test
	public void insertTodo() {
		Todo todo1 = new Todo("mysql 연동하기");
		todoRepository.save(todo1);
	}

}
