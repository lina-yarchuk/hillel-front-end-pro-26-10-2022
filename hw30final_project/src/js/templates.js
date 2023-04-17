export default class Templates {
	#items = {};

	constructor() {
		this.#getTemplates();
	}

	#getTemplates() {
		const templatesList = document.querySelectorAll('template');

		templatesList.forEach(template => {
			this.#items[template.dataset['name']] = template.content.cloneNode(true);
		});
	}

	getTaskListTemplate(tasks) {
		const fragment = this.#items['taskList'].cloneNode(true);
		const list = fragment.querySelector('.todo-list');


		tasks.forEach(task => {
			list.append(task);
		});

		return fragment;
	}

	getTaskTemplate({ task, completeFn, removeFn }) {
		const fragment = this.#items['taskItem'].cloneNode(true);

		const item = fragment.querySelector('li');
		const input = fragment.querySelector('.task input');
		const label = fragment.querySelector('.task label');
		const button = fragment.querySelector('.task button');

		const setCompleted = state => {
			const action = state ? 'add' : 'remove';

			input.checked = state;
			item.classList[action]('completed');
		};

		item.dataset['id'] = task.id;
		label.textContent = task.text;

		setCompleted(task.completed);

		input.addEventListener('change', ({ target }) => {
			setCompleted(target.checked);

			task.completed = target.checked;

			completeFn(task, target.checked)
		});
		button.addEventListener('click', () => removeFn(task));

		return fragment;
	}

	getTodoCount(value) {
		const fragment = this.#items['todoCount'].cloneNode(true);
		const count = fragment.querySelector('.count');
		const ext = fragment.querySelector('.ext');

		count.textContent = value;

		if (value !== 1) {
			ext.textContent = 's';
		}

		return fragment;
	}
}
