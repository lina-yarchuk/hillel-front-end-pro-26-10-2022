import {useDispatch} from 'react-redux';
import {toggleStatus, deleteTodo} from '../store/todoSlice';
import './TodoItem.css';
const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	return (
		<li>
			<input
				type='checkbox'
				checked={completed}
				onChange={() => dispatch(toggleStatus(id))}
			/>
			<span className="title">{title}</span>
			<span className="delete" onClick={() => dispatch(deleteTodo(id))}>
				&times;
			</span>
		</li>
	);
};

export default TodoItem;
