import {useSelector} from 'react-redux';
import TodoItem from './TodoItem';
import './TodoItem.css';

const TodoList = () => {
	const todos = useSelector(state => state.todos.todos);

	return (
		<ul className="list">
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					{...todo}
				/>
			))}
		</ul>
	);
};

export default TodoList;
