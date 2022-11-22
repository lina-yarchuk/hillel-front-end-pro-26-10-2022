document.addEventListener('DOMContentLoaded', () => {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

    function generateKey(length, source) {
        let result = '';

        while (result.length < length) {
            const randomIndex = Math.floor(Math.random() * source.length);

            result += source[randomIndex];
        }

        return result;
    }

    console.log(generateKey(16, characters));
    console.log(generateKey(24, characters));
    console.log(generateKey(32, characters));
});