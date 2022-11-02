document.addEventListener('DOMContentLoaded', () => {
    const operation = prompt('Enter operation (add, sub, mult, div)', '');
    const isAdd = operation === 'add';
    const isSub = operation === 'sub';
    const isMult = operation === 'mult';
    const isDiv = operation === 'div';

    const firstNumber = prompt('Enter the first number', '');
    const firstNumberTypeofNumber = Number(firstNumber);

    const secondNumber = prompt('Enter the second number', '');
    const secondNumberTypeofNumber = Number(secondNumber);

    let operationSymbol;
    let result;

    if (isAdd) {
        operationSymbol = '+';
        result = firstNumberTypeofNumber + secondNumberTypeofNumber;
    } else if (isSub) {
        operationSymbol = '-';
        result = firstNumberTypeofNumber - secondNumberTypeofNumber;
    } else if (isMult) {
        operationSymbol = '*';
        result = firstNumberTypeofNumber * secondNumberTypeofNumber;
    } else if (isDiv) {
        operationSymbol = '/';
        result = firstNumberTypeofNumber / secondNumberTypeofNumber;
    }

    const goodFirstNumber = typeof firstNumberTypeofNumber === 'number' && !isNaN(firstNumberTypeofNumber);
    const goodSecondNumber = typeof secondNumberTypeofNumber === 'number' && !isNaN(secondNumberTypeofNumber);
    const goodResult = typeof result === 'number' && !isNaN(result) && result !== Infinity;

    if (operationSymbol && goodFirstNumber && goodSecondNumber && goodResult) {
        alert(`${firstNumberTypeofNumber} ${operationSymbol} ${secondNumberTypeofNumber} = ${result}`);
    } else {
        alert(`Wrong input.`);
    }
});