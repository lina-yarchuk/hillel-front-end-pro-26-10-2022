document.addEventListener('DOMContentLoaded', () => {

    // 1) Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
    // Знайти суму та кількість позитивних елементів.

    const arr =  [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

    //first variant
    //const sumElements = arr.reduce((total, amount) => amount > 0 ? total + amount : total, 0);
    //console.log("Sum:", sumElements);

    //const positiveElements = arr.reduce((total, amount) => amount > 0 ? total + 1 : total, 0);
    //console.log("Positive elements:", positiveElements);

    //second variant
    const positiveElements = arr.filter( num => num > 0 );
    const elementCount = positiveElements.length;
    const elementSum = positiveElements.reduce( (acc, num) => acc + num, 0);

    console.log("Sum of positive elements:", elementSum);
    console.log("Count of positive elements:", elementCount);


    // 2) Знайти мінімальний елемент масиву та його порядковий номер.
    const min = Math.min(...arr);
    console.log("Min elements:", min);

    const positionMin = arr.indexOf(min) + 1;
    console.log("Sequence number:",positionMin);


    // 3) Знайти максимальний елемент масиву та його порядковий номер.
    const maxElement = Math.max(...arr);
    console.log("Max elements:", maxElement);

    const positionMax = arr.indexOf(maxElement) + 1;
    console.log("Sequence number:", positionMax);


    // 4) Визначити кількість негативних елементів.
    const negativeElements = arr.reduce((total, amount) => amount < 0 ? total + 1 : total, 0);

    console.log("Negative elements:",negativeElements);


    // 5) Знайти кількість непарних позитивних елементів.
    const positiveOddElements = positiveElements.filter( num => num % 2 !== 0);
    const oddElementsCount = positiveOddElements.length;

    console.log("Number of odd positive elements:",oddElementsCount);


    // 6) Знайти кількість парних позитивних елементів.
    const positiveEvenElements = positiveElements.filter( num => num % 2 === 0);
    const evenElementsCount = positiveEvenElements.length;

    console.log("Number of even positive elements:",evenElementsCount);


    // 7) Знайти суму парних позитивних елементів.
    const sumEvenElements = positiveEvenElements.reduce( (acc, num) => acc + num, 0 );

    console.log("Sum of even positive elements:",sumEvenElements);


    // 8) Знайти суму непарних позитивних елементів.
    const sumOddElements = positiveOddElements.reduce( (acc, num) => acc + num, 0 );

    console.log("Sum odd positive elements:", sumOddElements);


    // 9) Знайти добуток позитивних елементів.
    const multiPositive = arr.reduce((acc, num) => num > 0 ? acc * num : acc, 1);

    console.log("Product of positive elements:",multiPositive);


    // 10) Знайти найбільший серед елементів масиву, остальні обнулити.
    const amongArrayElements = arr.map(value => maxElement === value ? value : 0);

    console.log("The largest among array elements:",amongArrayElements);

});