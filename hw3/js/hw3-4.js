document.addEventListener('DOMContentLoaded', () => {
    const firstNumber = Number(prompt('Enter the first number', ''));
    const secondNumber = Number(prompt('Enter the second number', ''));


    const sum = firstNumber + secondNumber;
    const difference = firstNumber - secondNumber;
    const multiplication = firstNumber * secondNumber;
    const division = firstNumber / secondNumber;

    alert(`
        ${firstNumber} + ${secondNumber} = ${sum},
        ${firstNumber} - ${secondNumber} = ${difference},
        ${firstNumber} * ${secondNumber} = ${multiplication},
        ${firstNumber} / ${secondNumber} = ${division}
    `);
});

