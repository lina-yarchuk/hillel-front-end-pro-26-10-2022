import {useDispatch} from 'react-redux';
import {removeTodo, toggleTodoComplete} from '../store/todoSlice';
import './TodoItem.css';
const TodoItem = ({ id, text, completed }) => {
	const dispatch = useDispatch();

	return (
		<li>
			<input
				type='checkbox'
				checked={completed}
				onChange={() => dispatch(toggleTodoComplete({id}))}
			/>
			<span className="title">{text}</span>
			<span className="delete" onClick={() => dispatch(removeTodo({id}))}>
				&times;
			</span>
		</li>
	);
};

export default TodoItem;
