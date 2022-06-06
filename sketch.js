let scale = 20

function setup() {
	createCanvas(1600,920)
	frameRate(10)

	snake = new Snake()
	food = new Food()
}

function draw() {
	background(51)

	// Checks if food eaten
	if (JSON.stringify(snake.getPos()) === JSON.stringify(food.getPos())) {
		food.update()
		snake.grow()
	}

	food.show()

	snake.update()
	snake.show()
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.direction(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.direction(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    snake.direction(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    snake.direction(-1, 0);
  }
}