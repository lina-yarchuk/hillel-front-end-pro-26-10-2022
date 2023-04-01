export default class TaskList {
	#tasks = null;

	constructor(template, storage, render, showTodoLeft) {
		this.template = template;
		this.storage = storage;
		this.render = render;
		this.showTodoLeft = showTodoLeft;

		this.updateTaskList();
	}

	getOutputElement(target) {
		const taskTemplate = task => this.template.getTaskTemplate({ task, completeFn: this.completeTask.bind(this), removeFn: this.removeTask.bind(this) });

		const targetTasks = target !== 'all'
			? target === 'active' ? this.#tasks.filter(task => !task.completed) : this.#tasks.filter(task => task.completed)
			: this.#tasks;

		const tasks = targetTasks.reduce((acc, task) => [...acc, taskTemplate(task)], []);

		return this.template.getTaskListTemplate(tasks);
	}

	get allCompleted() {
		return this.#tasks.every(task => task.completed);
	}

	updateTaskList() {
		this.#tasks = this.storage.todos;
	}

	addTask(text) {
		const task = { id: Date.now(), text, completed: false };

		this.storage.add(task);

		this.updateTaskList();
	}

	completeAll(completed) {
		this.#tasks.forEach(task => task.completed = completed);

		this.updateTaskList();
	}

	removeTask(task) {
		this.storage.remove(task.id);

		this.updateTaskList();
		this.render();
		this.showTodoLeft();
	}

	completeTask(task) {
		this.storage.updateTask(task);

		this.updateTaskList();

		this.showTodoLeft();
	}

	clearCompleted() {
		this.storage.clearCompleted();

		this.updateTaskList();
	}
}
