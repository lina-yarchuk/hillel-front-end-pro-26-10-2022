document.addEventListener('DOMContentLoaded', () => {

    function customMap(array, callback) {
        const result = [];

        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            result.push(callback(element, index, array));
        }

        return result;
    }
});