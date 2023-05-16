function init() {
  let snakeCurrentPosition = 455;
  let snakeId;
  let direction = 1;
  let fruitCurrentPosition;
  const width = 32;
  const result = document.querySelector(".result");
  //Create grid
  const grid = document.querySelector(".grid");
  for (let i = 0; i < 1024; i++) {
    square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);
  }
  const squares = Array.from(document.querySelectorAll(".square"));
  //Create snake
  function drawSnake() {
    snake = squares[snakeCurrentPosition].classList.add("snake");
  }
  drawSnake();
  //Move Snake
  function moveSnake() {
    squares[snakeCurrentPosition].classList.remove("snake");
    snakeCurrentPosition += direction;
    squares[snakeCurrentPosition].classList.add("snake");
    checkForGameOver();
    eatFruit();
  }
  snakeId = setInterval(moveSnake, 1000);
  //check for game over
  function checkForGameOver() {
    if (squares[snakeCurrentPosition].classList.contains("wall")) {
      clearInterval(snakeId);
      snakeCurrentPosition = result.innerHTML = "Game Over";
    }
  }
  //change snake directions
  function changeDirections(e) {
    switch (e.key) {
      case "ArrowRight":
        direction = 1;
        break;
      case "ArrowLeft":
        direction = -1;
        break;
      case "ArrowUp":
        direction = -32;
        break;
      case "ArrowDown":
        direction = +32;
        break;
    }
  }
  document.addEventListener("keydown", changeDirections);
  //generate fruit
  function generateFruit() {
    let randomSquare = Math.floor(Math.random() * squares.length);
    squares[randomSquare].classList.add("fruit");
    fruitCurrentPosition = randomSquare;
  }
  generateFruit();
  function eatFruit() {
    if (snakeCurrentPosition == fruitCurrentPosition) {
      squares[snakeCurrentPosition].classList.remove("fruit");
      generateFruit();
      snake = squares[snakeCurrentPosition - 1].classList.add("snake");
      moveSnake();
    }
  }
}
