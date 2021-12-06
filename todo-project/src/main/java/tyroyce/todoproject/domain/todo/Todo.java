package tyroyce.todoproject.domain.todo;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name="TodoTable")
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Todo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long todoId;

	@Column(columnDefinition = "varchar(45) not null")
	private String todoDetail;

	@Column(columnDefinition = "boolean default false")
	private Boolean todoFinished = false;

	private LocalDateTime createAt;

	public Todo(String todoDetail) {
		this.todoDetail = todoDetail;
	}
}
