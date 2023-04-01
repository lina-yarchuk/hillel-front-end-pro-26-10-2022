import TaskList from './list.js';
import Storage from './storage.js';
import Templates from "./templates.js";

export default class App {
	static SUBMIT_KEY = 'Enter';
	static CLEAR_KEY = 'Escape';

	template = new Templates();
	storage = new Storage();

	constructor() {
		this.appContainerElement = document.querySelector('.todo-app');

		this.newTodoInputElement = this.appContainerElement.querySelector('.header input');
		this.mainContentElement = this.appContainerElement.querySelector('.main');

		this.toggleAllCompleteElement = this.mainContentElement.querySelector('.toggle-all');
		this.listBoxElement = this.mainContentElement.querySelector('.todo-list-box');

		this.footerElement = this.appContainerElement.querySelector('.footer');
		this.countElement = this.footerElement.querySelector('.todo-count');
		this.filtersConteinerElement = this.footerElement.querySelector('.filters');
		this.filterActionsElements = this.filtersConteinerElement.querySelectorAll('button');

		this.clearCompletedElement = this.footerElement.querySelector('.clear-completed');

		this.bindEvents();

		this.list = new TaskList(
			this.template,
			this.storage,
			this.renderList.bind(this),
			this.showTodoLeft.bind(this)
		);
		this.toggleAllCompleteElement.checked = this.list.allCompleted;

		this.renderList();

		this.showTodoLeft();
	}

	bindEvents() {
		this.newTodoInputElement.addEventListener('keydown', this.newTodoInputHandler.bind(this));
		this.toggleAllCompleteElement.addEventListener('change', this.toggleAllHandler.bind(this));
		this.clearCompletedElement.addEventListener('click', this.clearCompletedHandler.bind(this));
		this.filterActionsElements.forEach(button => button.addEventListener('click', this.changeFilterHandler.bind(this)))
	}

	newTodoInputHandler({ target, key }) {
		const text = target.value.trim();

		if (key === App.SUBMIT_KEY && text) {
			this.list.addTask(text);
			this.clearNewTodoInput();
		}

		if (key === App.CLEAR_KEY) {
			this.clearNewTodoInput();
		}

		this.renderList();
	}

	toggleAllHandler({ target }) {
		const { checked } = target;

		this.list.completeAll(checked);

		this.renderList();
	}

	clearNewTodoInput() {
		this.newTodoInputElement.value = '';
	}

	clearCompletedHandler() {
		this.list.clearCompleted();

		this.renderList();
	}

	showTodoLeft() {
		const active = this.storage.getActiveCount();
		const count = this.template.getTodoCount(active);

		this.countElement.innerHTML = '';
		this.countElement.append(count);
	}

	changeFilterHandler({ target }) {
		const { tabName } = target.dataset;

		this.setActiveTab(tabName);
		this.renderList(tabName);
	}

	setActiveTab(activeTabName) {
		this.filterActionsElements.forEach(button => {
			const { tabName } = button.dataset;

			button.classList.remove('selected');

			if (tabName === activeTabName) {
				button.classList.add('selected');
			}
		});
	}

	renderList(target = 'all') {
		const list = this.list.getOutputElement(target);

		if (target === 'all') {
			this.setActiveTab(target);
		}

		this.listBoxElement.innerHTML = '';
		this.listBoxElement.append(list);
	}
}
