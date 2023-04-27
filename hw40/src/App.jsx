import {useState} from 'react';
import {useDispatch} from 'react-redux';

import {addTodo} from './store/todoSlice';

import TodoList from './components/TodoList';
import InputField from './components/InputField';
import Header from './components/Header';

function App() {
	const [text, setText] = useState('');
	const dispatch = useDispatch();

	const clearTodoInput = () => {
		setText('');
	}
	const addTask = () => {
		if (!text) {
			return;
		}

		dispatch(addTodo({text}))
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

    return (
        <div className='App'>

		<Header />

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
