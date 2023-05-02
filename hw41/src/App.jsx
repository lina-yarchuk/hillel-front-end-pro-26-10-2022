import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addNewTodo, fetchTodos } from './store/todoSlice';
import TodoList from './components/TodoList';
import InputField from './components/InputField';
import Header from './components/Header';

function App() {
	const [text, setText] = useState('');
	const {status, error} = useSelector(state => state.todos);
	const dispatch = useDispatch();

	const clearTodoInput = () => {
		setText('');
	}
	const addTask = () => {
		if (!text) {
			return;
		}

		dispatch(addNewTodo(text))
		clearTodoInput();
	};

	const ENTER_KEY_CODE = 'Enter';
	const ESC_KEY_CODE = 'Escape';

	const addHandler = ({ code }) => {
		const actions = {
			[ENTER_KEY_CODE]: addTask,
			[ESC_KEY_CODE]: clearTodoInput,
		};

		if (code === ENTER_KEY_CODE || code === ESC_KEY_CODE) {
			actions[code]();
		}
	}

	useEffect(() => {
		dispatch(fetchTodos());
		}, [dispatch]
	);

    return (
        <div>

			<Header />

			{status === 'loading' && <h2>Loading...</h2>}
			{error && <h2>An error occured: {error}</h2>}

			<TodoList />

			<InputField
				text={text}
				handleInput={setText}
				handleKeyDown={addHandler}
				handleSubmit={addTask}
			/>
		</div>
  );
}

export default App;
