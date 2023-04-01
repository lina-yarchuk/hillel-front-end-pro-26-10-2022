export default class Storage {
	static storageName = 'LYTodos';

	localStorage = window.localStorage;
	todos = [];

	constructor() {
		this.todos = this.getFromStorage();
	}

	getActiveCount() {
		const total = this.todos.length;
		const completed = this.todos.filter(todo => todo.completed).length;

		return total - completed;
	}

	getFromStorage() {
		return JSON.parse(this.localStorage.getItem(Storage.storageName) || '[]');
	};

	saveToStorage() {
		this.localStorage.setItem(Storage.storageName, JSON.stringify(this.todos));
	};

	search(query) {
		return this.todos.filter(todo => todo.task.includes(query));
	}

	find(id) {
		return this.todos.find(todo => todo.id === id);
	}

	add(task) {
		this.todos = [...this.todos, task];

		this.saveToStorage();
	}

	remove(id) {
		this.todos = this.todos.filter(todo => todo.id !== id);

		this.saveToStorage();
	}

	clearCompleted() {
		this.todos = this.todos.filter(todo => !todo.completed);

		this.saveToStorage();
	}

	updateTask(task) {
		this.todos = this.todos.map(todo => todo.id === task.id ? task : todo );

		this.saveToStorage();
	}
}
