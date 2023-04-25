import {useState} from 'react';

import TodoList from './components/TodoList';
import InputField from './components/InputField';
import Header from './components/Header';


function App() {
	const [todos, setTodos] = useState([]);
	const [text, setText] = useState('');

	const ENTER_KEY_CODE = 'Enter';
	const ESC_KEY_CODE = 'Escape';

	const addTodo = () => {
		if (text.trim().length) {
			setTodos([
				...todos,
				{
					id: new Date().toISOString(),
					text,
					completed: false,
				}
			])
			setText('');
		}
	}

	const clearTodoInput = () => {
		setText('');
	}

	const addHandler = ({ code }) => {
		const actions = {
			[ENTER_KEY_CODE]: addTodo,
			[ESC_KEY_CODE]: clearTodoInput,
		};

		if (code === ENTER_KEY_CODE || code === ESC_KEY_CODE) {
			actions[code]();
		}
	}

	const toggleTodoComplete = (todoId) => {
		setTodos(
			todos.map(
				todo => {
					if (todo.id !== todoId) return todo;

					return {
						...todo,
						completed: !todo.completed,
					}
				}
			)
		);
	}

	const removeTodo = (todoId) => {
		setTodos(todos.filter(todo => todo.id !== todoId))
	}

    return (
        <div className='App'>

		<Header />

		<TodoList
			todos={todos}
			toggleTodoComplete={toggleTodoComplete}
			removeTodo={removeTodo}
		/>

		<InputField
			text={text}
			handleInput={setText}
			handleKeyDown={addHandler}
			handleSubmit={addTodo}
		/>
	</div>
  );
}

export default App;
