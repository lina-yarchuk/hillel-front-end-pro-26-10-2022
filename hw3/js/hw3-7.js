document.addEventListener('DOMContentLoaded', () => {
    const firstNumber = Number(prompt('Enter the first number', ''));
    const secondNumber = Number(prompt('Enter the second number', ''));
    const thirdNumber = Number(prompt('Enter the third number', ''));

    const result = (firstNumber + secondNumber + thirdNumber) / 3;

    const validFirstNumber = typeof firstNumber === 'number' && !isNaN(firstNumber);
    const validSecondNumber = typeof secondNumber === 'number' && !isNaN(secondNumber);
    const validThirdNumber = typeof thirdNumber === 'number' && !isNaN(thirdNumber);
    const validResult = typeof result === 'number' && !isNaN(result);

    if (validFirstNumber && validSecondNumber && validThirdNumber && validResult) {
        alert(`Arithmetic mean between ${firstNumber} and ${secondNumber} and ${thirdNumber} = ${result}`);
    } else {
        alert('Wrong input.');
    }
});