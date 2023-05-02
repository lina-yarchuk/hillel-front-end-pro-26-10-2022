import Grid from './grid.js';
import { DIRECTION as D } from './helpers.js';

export default class Snake extends Grid {
    static snakeCellCssClass = 'snake-cell';
    static snakeCssClass = 'snake';
    static snakeHeadCssClass = 'snake-head';
    static snakeBodyCssClass = 'snake-body';
    static gridContainerSelector = '#snake-container';
    static foodImage = './img/apple.png';

    #snake = [];
    #head = null;
    #food = null;
    #process = null;
    #speed = 0;
    #score = 0;
    #foodImage = new Image();
    #startBtn = this.find('#snake-start-game');
    #endBtn = this.find('#snake-end-game');
    #form = this.find('#snake-controls-form');
    #messageContainer =  this.find('#snake-message');
    #scoreContainer =  this.find('#snake-score');
    #scoreValue =  this.#scoreContainer.querySelector('b');

    constructor({boxSize, gridCount}) {
        super({
            boxSize,
            gridCount,
            gridCellCssClass: Snake.snakeCellCssClass,
            gridContainerSelector: Snake.gridContainerSelector,
        });

        this.#foodImage.src = Snake.foodImage;

        this.#init();
    }


    #init() {
        this.#startBtn.addEventListener('click', () => {
            this.#start();
        });

        this.#endBtn.addEventListener('click', () => {
            this.#endGame();
        });

        document.addEventListener('keydown', (event) => {
            this.#updateDirection(event);
        });
    }

    #showStartGameButton() {
        this.#startBtn.classList.remove('hidden');
        this.#endBtn.classList.add('hidden');
    }

    #showEndGameButton() {
        this.#startBtn.classList.add('hidden');
        this.#endBtn.classList.remove('hidden');
    }

    #increaseScore() {
        this.#score += 1;
        this.#scoreValue.textContent = this.#score.toString();
    }

    #clearScore() {
        this.#score = 0;
    }

    #removeFood() {
        this.#food.removeChild(this.#food.firstChild);
    }

    #findByCoords({row, cell}) {
        return this.find(`[data-cell="${cell}"][data-row="${row}"]`, this.gridContainer);
    }

    #start() {
        let middleCell = Math.floor(this.gridCount) / 2;

        this.#snake = this.#buildSnake(middleCell, middleCell);
        this.#speed = +this.#form.speed.value;

        this.direction = D.LEFT;

        this.#setMessage('Welcome to Snake!');
        this.#showEndGameButton();
        this.#generateFood();

        this.#processAction();
        this.#process = setInterval(this.#processAction.bind(this), this.#speed);
    }

    #processAction() {
        let { cell, row } = this.#noWallMode(this.#snake[0]);
        let snakePartToShift = null;

        switch(this.direction) {
            case D.LEFT: {
                snakePartToShift = {
                    cell: cell - 1,
                    row,
                };
            } break;
            case D.RIGHT: {
                snakePartToShift = {
                    cell: cell + 1,
                    row,
                };
            } break;
            case D.UP: {
                snakePartToShift = {
                    cell,
                    row: row - 1,
                };
            } break;
            case D.DOWN: {
                snakePartToShift = {
                    cell,
                    row: row + 1,
                };
            } break;
        }

        this.#snake.unshift(snakePartToShift);

        this.#clear();
        this.#update();
    }

    #update() {
        for( let [index, snakePart] of this.#snake.entries()) {
            let cellElement = this.#findByCoords(snakePart);

            if(index === 0) {
                cellElement.classList.add(Snake.snakeHeadCssClass, Snake.snakeCssClass);

                this.#head = cellElement;

                continue;
            }

            cellElement.classList.add(Snake.snakeBodyCssClass, Snake.snakeCssClass);
        }

        this.#checkIfSnakeHasEaten();
        this.#checkOnTailCrash();
    }

    #updateDirection(event) {
        let key = event.key;

        if (key === 'ArrowLeft' && this.direction !== D.RIGHT) {
            this.direction = D.LEFT;
        } else if(key === 'ArrowUp' && this.direction !== D.DOWN) {
            this.direction = D.UP;
        } else if(key === 'ArrowRight' && this.direction !== D.LEFT) {
            this.direction = D.RIGHT;
        } else if(key === 'ArrowDown' && this.direction !== D.UP) {
            this.direction = D.DOWN;
        }
    }

    #noWallMode({ cell, row }) {
        if (row === 0 && this.direction === D.UP) {
            row = this.gridCount;
        } else if(cell === 0 && this.direction === D.LEFT) {
            cell = this.gridCount;
        } else if(row === this.gridCount - 1 && this.direction === D.DOWN) {
            row = -1;
        } else if(cell === this.gridCount - 1 && this.direction === D.RIGHT) {
            cell = -1;
        }

        return { cell, row };
    }

    #buildSnake(startCell, startRow, size = 5) {
        return new Array(size).fill(null).map((_value, index) => {
            return { cell: startCell + index, row: startRow };
        })
    }

    #generateFood() {
        const getRandomPoint = () => Math.floor(Math.random() * this.gridCount);
        const foodCoords = { cell: getRandomPoint(), row: getRandomPoint() }

        this.#food = this.#findByCoords(foodCoords);
        this.#food.append(this.#foodImage);
    }

    #checkIfSnakeHasEaten() {
        if (this.#food === this.#head) {
            this.#removeFood();
            this.#generateFood();
            this.#increaseScore();
        } else {
            this.#snake.pop();
        }
    }

    #checkOnTailCrash() {
        if (this.#head.classList.contains(Snake.snakeBodyCssClass)) {
            this.#endGame();
        }
    }

    #clear() {
        let cells = this.find(`.${Snake.snakeCssClass}`);

        cells.forEach(cell => {
            cell.className = Snake.snakeCellCssClass;
        });
    }

    #endGame() {
        clearInterval(this.#process);

        this.#setMessage(`Game over. Your score is ${this.#score} apples. You can try again.`);
        this.#clearScore()
        this.#showStartGameButton();
        this.#removeFood();
        this.#clear();
    }

    #setMessage(message) {
        this.#messageContainer.textContent = message;
    }
}