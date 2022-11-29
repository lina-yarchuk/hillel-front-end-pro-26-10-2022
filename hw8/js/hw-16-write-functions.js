document.addEventListener('DOMContentLoaded', () => {
    //1) Дано масив з елементами різних типів.
    // Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

    const arrayElementsDifferentTypes = [1, 5, 7, 'jkk', 1, 3, 1.5, 5, 'jj']
    const arithmeticAverage = array => array.reduce((acc, item) => typeof item === 'number' ? acc + item : acc, 0);

    console.log(arithmeticAverage(arrayElementsDifferentTypes).toFixed(2))


    // 2) Написати функцію doMath (x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
    //У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
    //Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

    const mathematicalSign = prompt('Enter sign ( +, -, *, /, %, ^ ): ');

    const numberOne = Number(prompt('Enter the first number: '));
    const numberTwo = Number(prompt('Enter the second number: '));

    function doMath(x, znak, y) {
        if (!znak || znak === '/' && y === 0) {
            return 'Error'
        }
        const operations = {
            '+': (x, y) => x + y,
            '-': (x, y) => x - y,
            '*': (x, y) => x * y,
            '/': (x, y) => x / y,
            '%': (x, y) => (x / y) * 100,
            '^': (x, y) => x ** y
        };

        return operations[znak](x, y);
    }

    console.log(doMath(numberOne, mathematicalSign, numberTwo));


    // 3) Написати функцію заповнення даними користувача двомірного масиву.
    // Довжину основного масиву і внутрішніх масивів задає користувач.
    // Значення всіх елементів всіх масивів задає користувач.


    const mainArrayLength = Number(prompt('Enter the length of the main array: '));

    function createTwoDimensionalArray() {
        const array = [];

        for (let i = 0; i < mainArrayLength; i++) {
            array[i] = [];

            const innerArraysLength = Number(prompt(`Enter the length of the ${i + 1} inner array: `));

            for (let j = 0; j < innerArraysLength; j++) {
                array[i][j] = prompt(`Type value element of ${i + 1} inner array: `);
            }
        }

        return array;
    }

    console.log(createTwoDimensionalArray());


    // 4) Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
    // 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
    // Вихідний рядок та символи для видалення задає користувач.

    const userSentenceInput = prompt('Type your sentence: ');
    const removeSymbolsInput = prompt('Type symbols which you want to remove: ');
    const symbols = [...removeSymbolsInput];
    const removeSymbols = (sentence, symbolsArray) => [...sentence].filter(symbol => !symbolsArray.includes(symbol)).join('');

    console.log(removeSymbols(userSentenceInput, symbols));

});