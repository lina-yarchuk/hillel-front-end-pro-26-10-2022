document.addEventListener('DOMContentLoaded', () => {
    // #1
    console.log('Вивести на сторінку в один рядок через кому числа від 10 до 20.');

    let result = '';
    let i = 0;

    do {
        result = `${result}${i ? ', ' : ''}${i + 10}`;
        i += 1;
    } while (i <= 10);

    console.log('Result: ', result);

    // Second variant (google)
    const secondRes = Array.from({ length: 11 }, (_, index) => index + 10).join(', ');
    console.log('Result 2: ', secondRes);


    // #2
    console.log('Вивести квадрати чисел від 10 до 20.');
    for (let squareNumber = 10; squareNumber <= 20; squareNumber++) {
        console.log(`${squareNumber}² = ${squareNumber * squareNumber}`);
    }


    // #3
    console.log('Вивести таблицю множення на 7.');
    const multiplier = 7;

    for (let multiNumber = 1; multiNumber <=10; multiNumber++) {
        console.log(`${multiplier} x ${multiNumber} = ${multiNumber * multiplier}`);
    }


    // #4
    console.log('Знайти суму всіх цілих чисел від 1 до 15.');
    let sum = 0;

    for (let integerNumber = 1; integerNumber <= 15; integerNumber++) {
        sum += integerNumber;
    }
    console.log(sum);


    // #5
    console.log('Знайти добуток усіх цілих чисел від 15 до 35.');

    let product = 1;

    for (let intNumber = 15; intNumber <= 35; intNumber++) {
        product *= intNumber
    }

    console.log(BigInt(product));


    // #6
    console.log('Знайти середнє арифметичне всіх цілих чисел від 1 до 500.');

    const arithmeticLength = 500;
    let averageNumber = 0;

    for (let arithmeticMean = 1; arithmeticMean <= arithmeticLength; arithmeticMean++) {
        averageNumber += arithmeticMean / arithmeticLength;
    }

    console.log(averageNumber);


    // #7
    console.log('Вивести суму лише парних чисел в діапазоні від 30 до 80.');

    let sum1 = 0

    for (let i = 30; i <= 80; i++) {
        if (i % 2 === 0) {
            sum1 += i;
        }
    }
    console.log(sum1);


    // #8
    console.log('Вивести всі числа в діапазоні від 100 до 200 кратні 3.');

    let sum2 = 0

    for (let i = 100; i <= 200; i++) {
        if (i % 3 === 0) {
            sum2 = i;
            console.log(sum2);
        }
    }


    // #9
    console.log('Дано натуральне число. Знайти та вивести на сторінку всі його дільники.');

    let naturalNumber = Number(prompt('Enter natural number',''));
    let result2 = '';

    if ((naturalNumber ^ 0) === naturalNumber) {
        for (let i = naturalNumber; !!i; i--) {
            if (naturalNumber % i === 0) {
                result2 = `${result2} ${i}`;
            }
        }
    } else {
        console.log('Error! Enter natural number');
    }


    // #10
    console.log('Визначити кількість його парних дільників.');

    let naturalNumber3 = Number(prompt('Enter natural number',''));
    let result3 = 0;

    if ((naturalNumber3 ^ 0) === naturalNumber3) {
        for (let i = naturalNumber3; !!i; i--) {
            if (naturalNumber3 % i === 0 && i % 2 === 0) {
                 result3 += 1;
            }
        }

        console.log(result3);
    } else {
        console.log('Error! Enter natural number');
    }


    // #11
    console.log('Знайти суму його парних дільників.');

    let naturalNumber4 = Number(prompt('Enter natural number',''));
    let result4 = 0;

    if ((naturalNumber4 ^ 0) === naturalNumber4) {
        for (let i = naturalNumber4; !!i; i--) {
            if (naturalNumber4 % i === 0 && i % 2 === 0) {
                result4 += i;
            }
        }

        console.log(result4);
    } else {
        console.log('Error! Enter natural number');
    }


    // #12
    console.log('Надрукувати повну таблицю множення від 1 до 10.');

    for (let factor = 1; factor <=10; factor++) {
        for (let multiplicationTable = 1; multiplicationTable <=10; multiplicationTable++) {
            console.log(`${factor} x ${multiplicationTable} = ${multiplicationTable * factor}`);
        }
    }
})