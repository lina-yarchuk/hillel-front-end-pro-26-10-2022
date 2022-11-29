document.addEventListener('DOMContentLoaded', () => {
    const pow = (num, degree) => {
        if (degree === 0) {
            return 1;
        }

        if (degree < 0) {
            return 1 / (num * pow(num, -degree - 1));
        }

        return num * pow(num, degree - 1);
    }

    console.log("Exponentiation 3**2:", pow(3, 2));
    console.log("Exponentiation 3**(-1):",pow(3, -1));
    console.log("Exponentiation 5**5:",pow(5, 5));
});