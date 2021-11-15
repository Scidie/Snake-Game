let mainGameboard = document.querySelector("#gameboard");
let previewGameboard = document.querySelector("#preview-gameboard")
let startGame_window = document.querySelector("#start-game-window");
let startGame_button = document.querySelector("#start-game-button");
let mainGame_window = document.querySelector("#main-game-window");
let scoreTable = document.querySelector("#score-table");
let score = 0;
let exitGame_button = document.querySelector("#exit-game-button");
let speedButtons = document.querySelectorAll(".speed-button")
let finalScore = document.querySelector("#final-score")
let gameOverScreen = document.querySelector("#game-over-screen")
let mainGameboardArray = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

let previewGameboardArray = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

let direction = "left";
let savedPosition = { row: 0, column: 0 };
let copyOfCurrentPosition = { row: 0, column: 0 }
let snakeLength = 4;
let gameSpeed = 120;
let mainInterval = undefined;

let mainSnake = [{ part: "head", position: { row: 18, column: 30 } }, { part: "body", position: { row: 18, column: 31 } }, { part: "body", position: { row: 18, column: 32 } }, { part: "body", position: { row: 18, column: 33 } }, { part: "body", position: { row: 18, column: 34 } }];
let previewSnake = [{ part: "head", position: { row: 3, column: 10 } }, { part: "body", position: { row: 3, column: 9 } }, { part: "body", position: { row: 3, column: 8 } }, { part: "body", position: { row: 3, column: 7 } }, { part: "body", position: { row: 3, column: 6 } }];


function resetSnake() {
    let counter = mainSnake.length - 1;
    let snakeDefaultState = [{ part: "head", position: { row: 18, column: 30 } }, { part: "body", position: { row: 18, column: 31 } }, { part: "body", position: { row: 18, column: 32 } }, { part: "body", position: { row: 18, column: 33 } }, { part: "body", position: { row: 18, column: 34 } }];
    for (let i = 0; i < counter; i++) {
        if (i >= snakeDefaultState.length - 1) {
            mainSnake.pop();
        } else {
            mainSnake[i].position.row = snakeDefaultState[i].position.row;
            mainSnake[i].position.column = snakeDefaultState[i].position.column;
        }
    }
}

startGame_button.addEventListener("click", () => {
    direction = "left";
    mainInterval = setInterval(game, gameSpeed);
    document.addEventListener("keydown", enableKeys)
    setTimeout(() => {
        clearInterval(startGameWindowInterval)
        startGame_window.style.display = "none";
        mainGame_window.style.display = "flex";
    }, 200)

})

exitGame_button.addEventListener("click", () => {
    direction = "left";
    clearInterval(mainInterval);
    disableKeys()
    startGameWindowInterval = setInterval(preview, gameSpeed)
    mainGame_window.style.display = "none";
    gameOverScreen.style.display = "none";
    startGame_window.style.display = "flex";
    resetGameboard(mainGameboardArray)
    resetSnake();
})

function enableSpeedButtons(button) {
    switch (button.target.id) {
        case "speed1":
            gameSpeed = 250;
            clearInterval(startGameWindowInterval)
            startGameWindowInterval = setInterval(preview, gameSpeed)
            break;
        case "speed2":
            gameSpeed = 180;
            clearInterval(startGameWindowInterval)
            startGameWindowInterval = setInterval(preview, gameSpeed)
            break;
        case "speed3":
            gameSpeed = 120;
            clearInterval(startGameWindowInterval)
            startGameWindowInterval = setInterval(preview, gameSpeed)
            break;
        case "speed4":
            gameSpeed = 80;
            clearInterval(startGameWindowInterval)
            startGameWindowInterval = setInterval(preview, gameSpeed)
            break;
        case "speed5":
            gameSpeed = 50;
            clearInterval(startGameWindowInterval)
            startGameWindowInterval = setInterval(preview, gameSpeed)
            break;
    }
}

function disableSpeedButtons() {
    speedButtons.forEach(button => {
        button.removeEventListener("click", enableSpeedButtons)
    })
}

function programSpeedButtons(handler) {
    speedButtons.forEach(button => {
        button.addEventListener("click", handler)
    })
}

programSpeedButtons(enableSpeedButtons)

function moveSnake(snake, gameboardArray) {
    for (let i = 0; i < snake.length; i++) {
        if (snake[i].part === "head") {
            savePosition(snake[i].position.row, snake[i].position.column)
            moveSnakeHead(i, gameboardArray, snake)
        } else if (snake[i].part === "body") {
            saveCopyOfCurrentPosition(snake[i].position.row, snake[i].position.column)
            moveSnakeBody(i, snake);
            savePosition(copyOfCurrentPosition.row, copyOfCurrentPosition.column)
        }
    }
}

function moveSnakeHead(index, gameboardArray, snake) {
    switch (direction) {
        case "up":
            if (snake[index].position.row === 0) {
                snake[index].position.row = gameboardArray.length - 1;
                break;
            }
            snake[index].position.row = snake[index].position.row - 1;
            break;
        case "down":
            if (snake[index].position.row === gameboardArray.length - 1) {
                snake[index].position.row = 0;
                break;
            }
            snake[index].position.row = snake[index].position.row + 1;
            break;
        case "left":
            if (snake[index].position.column === 0) {
                snake[index].position.column = gameboardArray[0].length - 1;
                break;
            }
            snake[index].position.column = snake[index].position.column - 1;
            break;
        case "right":
            if (snake[index].position.column === gameboardArray[0].length - 1) {
                snake[index].position.column = 0;
                break;
            }
            snake[index].position.column = snake[index].position.column + 1;
            break;
    }
}

function moveSnakeBody(index, snake) {
    snake[index].position.row = savedPosition.row;
    snake[index].position.column = savedPosition.column;
}

function enableKeys(event) {
    switch (event.key) {
        case "w":
            if (direction !== "down") {
                direction = "up";
            }
            break;
        case "s":
            if (direction !== "up") {
                direction = "down";
            }
            break;
        case "a":
            if (direction !== "right") {
                direction = "left";
            }
            break;
        case "d":
            if (direction !== "left") {
                direction = "right";
            }
            break;
    }
}

function disableKeys() {
    document.removeEventListener("keydown", enableKeys)
}

function savePosition(row, column) {
    savedPosition.row = row;
    savedPosition.column = column;
}

function saveCopyOfCurrentPosition(row, column) {
    copyOfCurrentPosition.row = row;
    copyOfCurrentPosition.column = column;
}

function placeSnakeOnBoard(gameboardArray, snake) {
    snake.forEach(element => {
        if (element.part === "head") {
            if (gameboardArray[element.position.row][element.position.column] === 2) {
                clearInterval(mainInterval);
                finalScore.textContent = score;
                gameOverScreen.style.display = "flex";
                finalScore.textContent = score;
            }
            if (gameboardArray[element.position.row][element.position.column] === 3) {
                snake.push({ part: "body", position: { row: savedPosition.row, column: savedPosition.column } })
                score += 10;
                scoreTable.textContent = score;
            }
            gameboardArray[element.position.row][element.position.column] = 1;
        } else if (element.part === "body") {
            gameboardArray[element.position.row][element.position.column] = 2;
        }
    })
}

function renderGameboard(gameboard, gameboardArray) {
    for (let row = 0; row < gameboardArray.length; row++) {
        let newRow = createRow();

        for (let column = 0; column < gameboardArray[row].length; column++) {
            if (gameboardArray[row][column] === 0) {
                newRow.appendChild(createField("empty-field"));
            } else if (gameboardArray[row][column] === 1) {
                newRow.appendChild(createField("snake-head"));
            } else if (gameboardArray[row][column] === 2) {
                newRow.appendChild(createField("snake-body"));
            } else if (gameboardArray[row][column] === 3) {
                newRow.appendChild(createField("food"));
            }
        }
        gameboard.appendChild(newRow);
    }
}

function resetGameboard(gameboardArray) {
    for (let row = 0; row < gameboardArray.length; row++) {
        for (let column = 0; column < gameboardArray[row].length; column++) {
            if (gameboardArray[row][column] !== 3)
                gameboardArray[row][column] = 0;
        }
    }
}

function generateFood() {
    while (true) {
        let row = Math.round(Math.random() * (mainGameboardArray.length - 1));
        let column = Math.round(Math.random() * (mainGameboardArray[0].length - 1));
        if (mainGameboardArray[row][column] === 0) {
            mainGameboardArray[row][column] = 3;
            break;
        }
    }
}

function deleteFood() {
    for (let row = 0; row < mainGameboardArray.length; row++) {
        for (let column = 0; column < mainGameboardArray[row].length; column++) {
            if (mainGameboardArray[row][column] === 3) {
                mainGameboardArray[row][column] = 0;
            }
        }
    }
}

function gameOverTrigger() {
    moveSnake(mainSnake, mainGameboardArray);
}

function createField(typeOfField) {
    let field = document.createElement("div");
    field.className = typeOfField;
    return field;
}

function createRow() {
    let row = document.createElement("div");
    row.className = "row-container";
    return row;
}

let foodCounter = 5;
let eatCounter = "";
function game() {
    if (eatCounter === 0) {
        deleteFood();
    }
    if (foodCounter === 0) {
        generateFood();
        eatCounter = 40;
        foodCounter = 45;
    }
    foodCounter--;
    eatCounter--;

    mainGameboard.innerHTML = "";
    moveSnake(mainSnake, mainGameboardArray);
    placeSnakeOnBoard(mainGameboardArray, mainSnake);
    resetGameboard(mainGameboardArray);
    placeSnakeOnBoard(mainGameboardArray, mainSnake);
    renderGameboard(mainGameboard, mainGameboardArray);
}

function preview() {
    previewGameboard.innerHTML = "";
    resetGameboard(previewGameboardArray);
    moveSnake(previewSnake, previewGameboardArray);
    placeSnakeOnBoard(previewGameboardArray, previewSnake);
    renderGameboard(previewGameboard, previewGameboardArray);
}

renderGameboard(previewGameboard, previewGameboardArray);
let startGameWindowInterval = setInterval(preview, gameSpeed)