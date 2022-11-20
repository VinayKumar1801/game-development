import { SNAKE_SPEED, update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from "./food.js"
import { outSideGrid } from './grid.js'

const gameBoard = document.getElementById("game-board")
let lastRenderime = 0
let gameOver = false

function main(currentTime) {
    if (gameOver) {
        if (confirm("You Lost. Press OK to restart.")) {
            window.location = "/"
        }
        return
    }
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
    console.log("render")
    lastRenderime = currentTime
    update()
    draw()

}
window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}


function checkDeath() {
    gameOver = outSideGrid(getSnakeHead()) || snakeIntersection()
}
