import TodoItem from './TodoItem';
import './TodoList.css'
const TodoList = ({ todos, removeTodo, toggleTodoComplete }) => {
	return (
		<ul className="list">
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					removeTodo={removeTodo}
					toggleTodoComplete={toggleTodoComplete}
					{...todo}
				/>
			))}
		</ul>
	);
};

export default TodoList;
