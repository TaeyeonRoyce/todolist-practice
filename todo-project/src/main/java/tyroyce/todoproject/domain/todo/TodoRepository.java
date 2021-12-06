package tyroyce.todoproject.domain.todo;

import javax.transaction.Transactional;

import org.hibernate.annotations.DynamicUpdate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
@DynamicUpdate
public interface TodoRepository extends JpaRepository<Todo, Long> {

	@Transactional
	@Modifying(clearAutomatically = true)
	@Query("UPDATE Todo todo SET todo.todoFinished = :isFinished WHERE todo.todoId = :todoId")
	void updateFinished(@Param("isFinished") boolean isFinished, @Param("todoId") Long todoId);

}
