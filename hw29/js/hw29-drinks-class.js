document.addEventListener('DOMContentLoaded', () => {
    function uniqueList(listElement) {
        const listItems = listElement.querySelectorAll('li');
        const itemsArray = Array.from(listItems, elems => elems.textContent);

        // return itemsArray.filter((text, index) => itemsArray.indexOf(text) === index).sort();
        // return itemsArray.reduce((acc, text) => !acc.includes(text) ? [...acc, text] : acc, []).sort();
        return [...new Set(itemsArray)].sort();
    }

    function renderUniqueList(selector) {
        const listElement = document.querySelector(selector);
        const unique = uniqueList(listElement);

        listElement.innerHTML = unique.reduce((acc, text) => `${acc}<li>${text}</li>`, '');
    }

    renderUniqueList('#drinks-list');
});