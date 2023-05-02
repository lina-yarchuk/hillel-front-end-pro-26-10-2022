import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const rootUrl = 'https://644e886e4e86e9a4d8fb5473.mockapi.io/todo'

 export const fetchTodos = createAsyncThunk(
	'todos/fetchTodos',
	async function(_, {rejectWithValue}) {
		try {
			const response = await fetch(rootUrl);

			if (!response.ok) {
				throw new Error('Server Error!');
			}

			const data = await response.json();

			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

 export const deleteTodo = createAsyncThunk(
	 'todos/deleteTodo',
	 async function(id, {rejectWithValue, dispatch}) {
		 try {
			 const response = await fetch(`${rootUrl}/${id}`, {
				 method: 'DELETE',
			 })

			 if (!response.ok) {
				 throw new Error('Can\'t delete task. Server error.');
			 }
			 dispatch(removeTodo({id}));
		 } catch (error) {
			 return rejectWithValue(error.message);
		 }
	 }
 );

export const toggleStatus = createAsyncThunk(
	'todos/toggleStatus',
	async function(id, {rejectWithValue, dispatch, getState}) {
		dispatch(toggleComplete({id}));

		try {
			const todo = getState().todos.todos.find(todo => todo.id === id);

			const response = await fetch(`${rootUrl}/${id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(todo)
			});

			if (!response.ok) {
				throw new Error('Can\'t toggle status. Server error.');
			}
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
);

export const addNewTodo = createAsyncThunk(
	'todos/addNewTodo',
	async function (text, {rejectWithValue, dispatch}) {
		try {
			const todo = {
				title: text,
				userId:1,
				completed: false,
			};

			const response = await fetch(rootUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(todo)
			});

			if (!response.ok) {
				throw new Error('Can\'t add task. Server error.');
			}

			const data = await response.json();
			dispatch(addTodo(data));

		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const setError = (state, action) => {
	state.status = 'rejected';
	state.error = action.payload;
}

const todoSlice = createSlice({
	name: 'todos',
	initialState: {
		todos: [],
		status: null,
		error: null,
	},
	reducers: {
		addTodo(state, action) {
			state.todos.push(action.payload);
		},
		removeTodo(state, action) {
			state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
		},

		toggleComplete(state, action) {
			const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
			toggledTodo.completed = !toggledTodo.completed;
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchTodos.pending, (state) => {
				state.status = 'loading';
				state.error = null;
			})
			.addCase(fetchTodos.fulfilled, (state, action) => {
				state.status = 'resolved';
				state.todos = action.payload;
			})
			.addCase(fetchTodos.rejected, setError)
			.addCase(deleteTodo.rejected, setError)
			.addCase(toggleStatus.rejected, setError);
	}
});

const {addTodo, removeTodo, toggleComplete} = todoSlice.actions;

export default todoSlice.reducer;
