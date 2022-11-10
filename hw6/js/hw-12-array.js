document.addEventListener('DOMContentLoaded', () => {
    const outputElement = document.querySelector('.output');
    const arrayLength = Number(prompt('Please enter the length of the array(min 5):', '5'));
    const numbersArray = [];

    if (!arrayLength || arrayLength < 5) {
        alert('Error, array length not set');
    } else {
        for (let i = 0; i < arrayLength; i++) {
            const value = Number(prompt('Please enter a number', ''));

            if (!value) {
                alert('Error, no data');
            } else {
                numbersArray.push(value);
                // outputElement.innerHTML = `${outputElement.innerHTML}<h2>Enter ${i + 1} number:</h2><pre>[ ${numbersArray.join(', ')} ]</pre>`;
                outputElement.innerHTML = `${outputElement.innerHTML}<h2>Enter ${i + 1} number:</h2><pre>${JSON.stringify(numbersArray)}</pre>`;
            }
        }

        numbersArray.sort((a, b) => a - b);
        outputElement.innerHTML = `${outputElement.innerHTML}<h2>Sort array:</h2><pre>${JSON.stringify(numbersArray)}</pre>`;

        numbersArray.splice(1, 3)
        outputElement.innerHTML = `${outputElement.innerHTML}<h2>splice 2, 3, 4 elements:</h2><pre>${JSON.stringify(numbersArray)}</pre>`;
    }
});