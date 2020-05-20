function draw(){

    const canvas = document.getElementById('gameArea')
    const ctx = canvas.getContext('2d')

    return ctx
}

const snake = draw()
const food = draw()
const snakePosition = {
    posX: 10,
    posY: 10,
    width: 10,
    height: 10
}

const foodPosition = {
    posX: Math.round(Math.random() * 50) * 10,
    posY: Math.round(Math.random() * 50) * 10,
    width: 10,
    height: 10
}
const snakeSize = [snakePosition]

    snake.fillStyle = 'white'
    snake.fillRect(snakePosition.posX, snakePosition.posY, snakePosition.width, snakePosition.height)

    food.fillStyle = 'red'
    food.fillRect(foodPosition.posX, foodPosition.posY, foodPosition.width, foodPosition.height)


window.addEventListener('keydown', function (e) {

    if(e.key === 'ArrowDown'){
        updatePosition(0,10)
    }

    if(e.key === 'ArrowUp'){
        updatePosition(0,-10)
    }

    if(e.key === 'ArrowLeft'){
        updatePosition(-10,0)
    }

    if(e.key === 'ArrowRight'){
        updatePosition(10,0)
    }
})

function updatePosition(x, y){

    snakeSize.map((s) => {
        if(s.posX + x >= 0 && s.posX + x <= 490 && s.posY + y >= 0 && s.posY + y <= 490){
            snake.clearRect(s.posX, s.posY, s.width, s.height)
        }
    })

    if(snakeSize[0].posX === foodPosition.posX && snakeSize[0].posY === foodPosition.posY){
        snakeSize.push(foodPosition)

        foodPosition.posX = Math.round(Math.random() * 50) * 10
        foodPosition.posY = Math.round(Math.random() * 50) * 10

        food.fillStyle = 'red'
        food.fillRect(foodPosition.posX, foodPosition.posY, foodPosition.width, foodPosition.height)
    }

    const newPosition = {
        posX: snakeSize[0].posX + x,
        posY: snakeSize[0].posY + y,
        width: 10,
        height: 10
    }

    snakeSize.splice(0, 0, newPosition)
    snakeSize.pop()

    snakeSize.map((s) => {

        if(s.posX + x >= 0 && s.posX + x <= 500 && s.posY + y >= 0 && s.posY + y <= 500){
            snake.fillStyle = 'white'
            snake.fillRect(s.posX, s.posY, s.width, s.height)
        }
    })

    console.log(snakeSize)
}

