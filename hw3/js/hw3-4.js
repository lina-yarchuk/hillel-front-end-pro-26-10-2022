document.addEventListener('DOMContentLoaded', () => {
    const firstNumber = prompt('Enter the first number', '');
    const firstNumberTypeofNumber = Number(firstNumber);

    const secondNumber = prompt('Enter the second number', '');
    const secondNumberTypeofNumber = Number(secondNumber);

    const sum = firstNumberTypeofNumber + secondNumberTypeofNumber;
    const difference = firstNumberTypeofNumber - secondNumberTypeofNumber;
    const multiplication = firstNumberTypeofNumber * secondNumberTypeofNumber;
    const division = firstNumberTypeofNumber / secondNumberTypeofNumber;

    alert(`
        ${firstNumberTypeofNumber} + ${secondNumberTypeofNumber} = ${sum},
        ${firstNumberTypeofNumber} - ${secondNumberTypeofNumber} = ${difference},
        ${firstNumber} * ${secondNumber} = ${multiplication},
        ${firstNumber} / ${secondNumber} = ${division}
    `);
});

