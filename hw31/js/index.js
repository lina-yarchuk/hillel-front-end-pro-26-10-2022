import Snake from './snake.js';

document.addEventListener('DOMContentLoaded', () => {
    new Snake({ boxSize: 30, gridCount: 16 });
});
