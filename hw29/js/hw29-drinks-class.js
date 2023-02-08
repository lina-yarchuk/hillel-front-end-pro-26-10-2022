// duplication code with class (just for training but review please)

class List {
    #unique = null;

    constructor(selector) {
        this.element = document.querySelector(selector);
        this.#unique = this.#uniqueList();

        this.render();
    }

    #uniqueList() {
        const listItems = this.element.querySelectorAll('li');
        const itemsArray = Array.from(listItems, elems => elems.textContent);

        return [...new Set(itemsArray)].sort();
    }

    render() {
        this.element.innerHTML = this.#unique.reduce((acc, text) => `${acc}<li>${text}</li>`, '');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new List('#drinks-list');
});