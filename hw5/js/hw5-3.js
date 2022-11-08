document.addEventListener('DOMContentLoaded', () => {
    // #1
    console.log('Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).');

    let result = '';

    for (let i = 20; i <= 30; i = i += 0.5) {
        result = `${ result }${ i ? ' ' : '' }${ i }`;
    }

    console.log('Result: ', result);


    // #2
    console.log('Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.');

    const dollarPrice = 27;
    let result2 = '';

    for (let i = 10; i <= 100; i += 10) {
        result2 = `${ result2 }${ i ? ' ' : '' } ${ i * dollarPrice }`
    }

    console.log('Result: ', result2);


    // #3
    console.log('Дане ціле число N. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.');

    const integerNumberN = Number(prompt('Enter the integer number', ''));
    let result3 = '';

    for (let i = 1; i <= 100; i++) {
        const quadratic = Math.pow(i, 2)

        if (quadratic <= integerNumberN) {
            result3 = `${ result3 }${ i ? ' ' : '' }${ i }`
        }
    }
    console.log('Result: ', result3);


    // #4
    console.log('Дане ціле число. Зясувати, чи є воно простим (простим називається число, більше 1,які не мають інших дільників крім 1 і себе).');

    const integerNumberN4 = Number(prompt('Enter the integer number', ''));
    let numberIsSimple = true;

    for (let i = 2; i < integerNumberN4; i++) {
        if (integerNumberN4 % i === 0) {
            numberIsSimple = false;
        }
    }

    const result4 = numberIsSimple && integerNumberN4 > 1 ? `${integerNumberN4} is simple` : `${integerNumberN4} isn't simple`;
    console.log('Result: ', result4);


    // #5
    console.log('Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. ' +
        '(Наприклад, числа 9, 81 можна отримати, а 13 - не можна).');

    const integerNumberN5 = Number(prompt('Enter the integer number', ''));
    let raise = false;
    let degree;

    for (let i = 1; i < integerNumberN5 && !raise; i++) {
        if (Math.pow(3, i) === integerNumberN5) {
            raise = true;
            degree = i;
        }
    }

    const result5 = raise ? `We can get ${integerNumberN5} if we raise 3 to ${degree}` : `we cannot get ${integerNumberN5} if we raise 3 to some degree`;
    console.log('Result: ', result5);
});