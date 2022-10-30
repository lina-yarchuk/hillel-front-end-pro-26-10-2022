document.addEventListener('DOMContentLoaded', () => {
    const firstNumber = prompt('Enter the first number', '');
    const firstNumberTypeofNumber = Number(firstNumber);

    const secondNumber = prompt('Enter the second number', '');
    const secondNumberTypeofNumber = Number(secondNumber);

    const thirdNumber = prompt('Enter the third number', '');
    const thirdNumberTypeofNumber = Number(thirdNumber);

    const result = (firstNumberTypeofNumber + secondNumberTypeofNumber + thirdNumberTypeofNumber) / 3;

    alert(`Arithmetic mean between ${firstNumberTypeofNumber} and ${secondNumberTypeofNumber} and ${thirdNumberTypeofNumber} = ${result}`);
});