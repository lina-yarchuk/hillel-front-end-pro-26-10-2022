class Task {
    constructor(text) {
        this.text = text;
        this.selected = false;
    }

    get html() {
        return this.selected ? `<li class="selected">${this.text}</li>` : `<li>${this.text}</li>`;
    }

    toggleSelected() {
        this.selected = !this.selected;
    }
}

class TaskList {
    #tasks = null;
    #singleClickTaskIndex = null;

    constructor(tasks) {
        this.#tasks = tasks.map(text => new Task(text));
    }

    get html() {
        return this.#tasks.reduce((acc, task) => `${acc}${task.html}`, '')
    }

    #addTask(place = 'append') {
        const text = prompt('What you want to do?');
        const taskExist = this.#getTaskIndex(text) >= 0;

        if (taskExist) {
            alert('Sorry! This task already exist.')
        } else {
            const task = new Task(text);

            this.#tasks = place === 'append' ? [...this.#tasks, task] : [task, ...this.#tasks];
        }
    }

    #clearSelected() {
        this.#tasks.forEach(task => task.selected = false);
    }

    #getFirstSelectedTaskIndex() {
        return this.#tasks.findIndex(task => task.selected);
    }

    #getTaskIndex(text) {
        return this.#tasks.findIndex(task => task.text === text);
    }

    #setSingleClickIndex(text) {
        this.#singleClickTaskIndex = this.#getTaskIndex(text);
    }

    #selectTaskByIndex(index) {
        this.#tasks[index].selected = true;
    }

    clearSingleClickIndex() {
        this.#singleClickTaskIndex = null;
    }

    addTaskPrepend() {
        this.#addTask('prepend');
    }

    addTaskAppend() {
        this.#addTask('append');
    }

    removeSelectedTasks() {
        this.#tasks = this.#tasks.filter(task => !task.selected);
    }

    sortSelectedTasks() {
        this.#tasks.sort((a, b) => b.selected - a.selected);
    }

    selectTask(text) {
        const target = this.#tasks.find(task => task.text === text);

        if (target) {
            target.toggleSelected();
        }
    }

    selectSingleTask(text) {
        this.#clearSelected();
        this.#setSingleClickIndex(text);
        this.selectTask(text);
    }

    selectRange(text) {
        this.#clearSelected();

        const firstSelected = this.#getFirstSelectedTaskIndex();
        const startIndex = this.#singleClickTaskIndex || (firstSelected >= 0 ? firstSelected : 0 );
        const endIndex = this.#getTaskIndex(text);

        if (startIndex < endIndex) {
            for (let i = startIndex; i <= endIndex; i++) {
                this.#selectTaskByIndex(i);
            }
        } else {
            for (let i = startIndex; i >= endIndex; i--) {
                this.#selectTaskByIndex(i);
            }
        }
    }
}

class TodoApp {
    #app = null;
    #tasks = null;
    #actions = null;
    #content = null;
    #list = null;

    constructor(selector, initialTasks = []) {
        this.#app = document.querySelector(selector);
        this.#tasks = initialTasks;

        this.#actions = this.#app.querySelector('.actions');
        this.#content = this.#app.querySelector('.content');

        this.#list = new TaskList(this.#tasks);

        this.#render();
        this.#addEvents()
    }

    #addEvents() {
        this.#actions.addEventListener('click', this.#actionClick.bind(this));
        this.#content.addEventListener('click', this.#listClick.bind(this));
    }

    #actionClick(event) {
        const { target } = event;
        const action = target.dataset['action'];

        if (action) {
            this.#list[action]();

            this.#render();
        }
    }

    #listClick(event) {
        const { target, ctrlKey, metaKey, shiftKey } = event;
        const { textContent } = target;

        if (target.tagName !== 'LI') {
            return;
        }

        if (ctrlKey || metaKey) {
            this.#list.selectTask(textContent);
            this.#list.clearSingleClickIndex();
        } else if (shiftKey) {
            this.#list.selectRange(textContent);
        } else {
            this.#list.selectSingleTask(textContent);
        }

        this.#render();
    }

    #render() {
        this.#content.innerHTML = this.#list.html;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new TodoApp('.todo-app', [
        'Go to a shop',
        'Buy apples',
        'Buy dog food',
        'Walk with the dog',
        'Meet guests',
        'Get some work',
        'Learn JS',
        'Read a book',
        'To water flowers',
        'Visit my parents',
        'Gym',
        'Wash the car'
    ]);
});