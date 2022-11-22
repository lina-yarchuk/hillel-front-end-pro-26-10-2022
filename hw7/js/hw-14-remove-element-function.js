document.addEventListener('DOMContentLoaded', () => {

    const array = [1, 2, 3, 4, 5, 6, 7];
    console.log(array);

    const removeElement = (array, item) => array.filter(element => element !== item);

    console.log(removeElement(array, 5));
    console.log(removeElement(array, 2));
    console.log(removeElement(array, 6));
});