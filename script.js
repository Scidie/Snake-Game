let mainGameboard = document.querySelector("#gameboard");
let previewGameboard = document.querySelector("#preview-gameboard")
let startGame_window = document.querySelector("#start-game-window");
let startGame_button = document.querySelector("#start-game-button");
let speedButtons = document.querySelectorAll(".speed-button")
let mainGame_window = document.querySelector("#main-game-window");
let scoreTable = document.querySelector("#score-table");
let score = 0;
let foodCounter = 0;
let foodTimer = 5;
let exitGame_button = document.querySelector("#exit-game-button");
let finalScore = document.querySelector("#final-score")
let gameOverScreen = document.querySelector("#game-over-screen")
let direction = "left";
let savedPosition = { row: 0, column: 0 };
let snakeLength = 4;
let gameSpeed = 120;
let mainInterval = undefined;
let eatTimer = undefined;
let foodPosition = { row: undefined, column: undefined };

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

let previewGameboardArray = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

let mainSnakeData = [{ part: "head", position: { row: 18, column: 30 } }, { part: "body", position: { row: 18, column: 31 } }, { part: "body", position: { row: 18, column: 32 } }, { part: "body", position: { row: 18, column: 33 } }, { part: "body", position: { row: 18, column: 34 } }];
let previewSnakeData = [{ part: "head", position: { row: 3, column: 10 } }, { part: "body", position: { row: 3, column: 9 } }, { part: "body", position: { row: 3, column: 8 } }, { part: "body", position: { row: 3, column: 7 } }, { part: "body", position: { row: 3, column: 6 } }];

startGame_button.addEventListener("click", () => {
    direction = "left";
    clearInterval(startGameWindowInterval);
    document.addEventListener("mousedown", enableTouchControl);
    document.addEventListener("keydown", enableKeys)
    mainInterval = setInterval(gameLoop, gameSpeed);
    setTimeout(() => {
        clearInterval(startGameWindowInterval)
        startGame_window.style.display = "none";
        mainGame_window.style.display = "flex";
    }, 200)
})

exitGame_button.addEventListener("click", () => {
    document.removeEventListener("mousedown", enableTouchControl);
    document.removeEventListener("keydown", enableKeys)
    score = 0;
    scoreTable.textContent = "0";
    direction = "left";
    clearInterval(mainInterval);
    gameSpeed = 120;
    startGameWindowInterval = setInterval(previewLoop, gameSpeed)
    mainGame_window.style.display = "none";
    gameOverScreen.style.display = "none";
    startGame_window.style.display = "flex";
    resetGameboardArray(mainGameboardArray)
    resetSnake();
})

toggleSpeedButtons(enableSpeedButtons)
renderGameboard(previewGameboard, previewGameboardArray);
let startGameWindowInterval = setInterval(previewLoop, gameSpeed)

function gameLoop() {
    if (eatTimer === 0) {
        deleteFood();
    }
    if (foodTimer === 0) {
        putFoodInGameboardArray();
        eatTimer = 55;
        foodTimer = 60;
    }
    foodTimer--;
    eatTimer--;

    mainGameboard.innerHTML = "";
    updateSnakePosition(mainSnakeData, mainGameboardArray);
    if (foundFood()) {
        foodTimer = 0;
        extendSnake();
    }

    if (collision()) {
        endGame();
    }

    resetGameboardArray(mainGameboardArray);
    updateGameboardArray(mainGameboardArray, mainSnakeData);
    renderGameboard(mainGameboard, mainGameboardArray);


}

function enableTouchControl(event) {
    if (direction === "up" || direction === "down") {
        if (getSnakePositionOnScreen().x < event.clientX) {
            direction = "right";
        } else if (getSnakePositionOnScreen().x > event.clientX) {
            direction = "left";
        }
    } else if (direction === "left" || direction === "right") {
        if (getSnakePositionOnScreen().y < event.clientY) {
            direction = "down";
        } else if (getSnakePositionOnScreen().y > event.clientY) {
            direction = "up";
        }
    }
}

function getSnakePositionOnScreen() {
    let allGameBoardFields = document.querySelectorAll(".field")
    for (let i = 0; i < allGameBoardFields.length; i++) {
        if (allGameBoardFields[i].classList.contains("snake-head")) {
            let fieldPositionProperties = allGameBoardFields[i].getBoundingClientRect();
            let x = Math.round(fieldPositionProperties.x + (fieldPositionProperties.width / 2));
            let y = Math.round(fieldPositionProperties.y + (fieldPositionProperties.height / 2))
            return { x: x, y: y }
        }
    }
}

function foundFood() {
    if (mainSnakeData[0].position.row === foodPosition.row && mainSnakeData[0].position.column === foodPosition.column) {
        foodCounter++;
        return true;
    }
}

function collision() {
    if (mainGameboardArray[mainSnakeData[0].position.row][mainSnakeData[0].position.column] === 2) {
        return true;
    }
}

function endGame() {
    document.removeEventListener("mousedown", enableTouchControl);
    document.removeEventListener("keydown", enableKeys)
    clearInterval(mainInterval);
    finalScore.textContent = score;
    gameOverScreen.style.display = "flex";
    finalScore.textContent = score;
}

function extendSnake() {
    mainSnakeData.push({ part: "body", position: { row: savedPosition.row, column: savedPosition.column } })
    score += 10;
    scoreTable.textContent = score;
    if (foodCounter === 6 && gameSpeed > 10) {
        foodCounter = 0;
        gameSpeed -= 10;
        clearInterval(mainInterval);
        mainInterval = mainInterval = setInterval(gameLoop, gameSpeed);
    }
}

function previewLoop() {
    previewGameboard.innerHTML = "";
    resetGameboardArray(previewGameboardArray);
    updateSnakePosition(previewSnakeData, previewGameboardArray);
    updateGameboardArray(previewGameboardArray, previewSnakeData);
    renderGameboard(previewGameboard, previewGameboardArray);
}

function resetSnake() {
    let counter = mainSnakeData.length - 1;
    let snakeDefaultState = [{ part: "head", position: { row: 18, column: 30 } }, { part: "body", position: { row: 18, column: 31 } }, { part: "body", position: { row: 18, column: 32 } }, { part: "body", position: { row: 18, column: 33 } }, { part: "body", position: { row: 18, column: 34 } }];
    for (let i = 0; i < counter; i++) {
        if (i >= snakeDefaultState.length - 1) {
            mainSnakeData.pop();
        } else {
            mainSnakeData[i].position.row = snakeDefaultState[i].position.row;
            mainSnakeData[i].position.column = snakeDefaultState[i].position.column;
        }
    }
}

function updateSnakePosition(snake, gameboardArray) {
    moveSnakeBody(snake)
    moveSnakeHead(gameboardArray, snake);
}

function moveSnakeBody(snake) {
    for (let i = snake.length - 1; i > 0; i--) {
        if (i === snake.length - 1) {
            savedPosition = {row:snake[i].position.row, column:snake[i].position.column}
        }
        snake[i].position.row = snake[i - 1].position.row;
        snake[i].position.column = snake[i - 1].position.column;
    }
}

function moveSnakeHead(gameboardArray, snake) {
    switch (direction) {
        case "up":
            if (snake[0].position.row === 0) {
                snake[0].position.row = gameboardArray.length - 1;
                break;
            }
            snake[0].position.row = snake[0].position.row - 1;
            break;
        case "down":
            if (snake[0].position.row === gameboardArray.length - 1) {
                snake[0].position.row = 0;
                break;
            }
            snake[0].position.row = snake[0].position.row + 1;
            break;
        case "left":
            if (snake[0].position.column === 0) {
                snake[0].position.column = gameboardArray[0].length - 1;
                break;
            }
            snake[0].position.column = snake[0].position.column - 1;
            break;
        case "right":
            if (snake[0].position.column === gameboardArray[0].length - 1) {
                snake[0].position.column = 0;
                break;
            }
            snake[0].position.column = snake[0].position.column + 1;
            break;
    }
}

function updateGameboardArray(gameboardArray, snake) {
    snake.forEach(element => {
        if (element.part === "head") {
            gameboardArray[element.position.row][element.position.column] = 1;
        } else if (element.part === "body") {
            gameboardArray[element.position.row][element.position.column] = 2;
        }
    })
}

function enableSpeedButtons(button) {
    switch (button.target.id) {
        case "speed1":
            gameSpeed = 250;
            clearInterval(startGameWindowInterval)
            startGameWindowInterval = setInterval(previewLoop, gameSpeed)
            break;
        case "speed2":
            gameSpeed = 180;
            clearInterval(startGameWindowInterval)
            startGameWindowInterval = setInterval(previewLoop, gameSpeed)
            break;
        case "speed3":
            gameSpeed = 120;
            clearInterval(startGameWindowInterval)
            startGameWindowInterval = setInterval(previewLoop, gameSpeed)
            break;
        case "speed4":
            gameSpeed = 80;
            clearInterval(startGameWindowInterval)
            startGameWindowInterval = setInterval(previewLoop, gameSpeed)
            break;
        case "speed5":
            gameSpeed = 50;
            clearInterval(startGameWindowInterval)
            startGameWindowInterval = setInterval(previewLoop, gameSpeed)
            break;
    }
}

function disableSpeedButtons() {
    speedButtons.forEach(button => {
        button.removeEventListener("click", enableSpeedButtons)
    })
}

function toggleSpeedButtons(handler) {
    speedButtons.forEach(button => {
        button.addEventListener("click", handler)
    })
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

function renderGameboard(gameboard, gameboardArray) {
    for (let row = 0; row < gameboardArray.length; row++) {
        let newRow = createRow();
        for (let column = 0; column < gameboardArray[row].length; column++) {
            if (gameboardArray[row][column] === 0) {
                newRow.appendChild(createField("empty-field", gameboard));
            } else if (gameboardArray[row][column] === 1) {
                newRow.appendChild(createField("snake-head", gameboard));
            } else if (gameboardArray[row][column] === 2) {
                newRow.appendChild(createField("snake-body", gameboard));
            } else if (gameboardArray[row][column] === 3) {
                newRow.appendChild(createField("food", gameboard));
            }
        }
        gameboard.appendChild(newRow);
    }
}

function resetGameboardArray(gameboardArray) {
    for (let row = 0; row < gameboardArray.length; row++) {
        for (let column = 0; column < gameboardArray[row].length; column++) {
            if (gameboardArray[row][column] !== 3)
                gameboardArray[row][column] = 0;
        }
    }
}

function putFoodInGameboardArray() {
    while (true) {
        let row = Math.round(Math.random() * (mainGameboardArray.length - 1));
        let column = Math.round(Math.random() * (mainGameboardArray[0].length - 1));
        if (mainGameboardArray[row][column] === 0) {
            mainGameboardArray[row][column] = 3;
            foodPosition = { row: row, column: column }
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

function createField(typeOfField, gameboard) {
    let field = document.createElement("div");
    field.className = typeOfField;
    field.classList.add("field-settings")
    if (gameboard.id === "gameboard") {
        field.classList.add("field")
    } else {
        field.classList.add("preview-field")
    }
    return field;
}

function createRow() {
    let row = document.createElement("div");
    row.className = "row-container";
    return row;
}

function disableKeys() {
    document.removeEventListener("keydown", enableKeys)
}

function saveCurrentBodyPartPosition(row, column) {
    currentBodyPartPosition.row = row;
    currentBodyPartPosition.column = column;
}