package tyroyce.todoproject;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import tyroyce.todoproject.domain.repository.Todo;
import tyroyce.todoproject.domain.repository.TodoRepository;

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

	@Test
	void editTodo() {
		//given
		Todo todo = todoRepository.findById(1L).get();

		//when
		todoRepository.updateFinished(true, todo.getTodoId());

		//then
		Assertions.assertThat(todoRepository.findById(1L).get()
								.getTodoFinished())
								.isEqualTo(true);
	}

}
