let cavas = document.getElementById('game');
let context = cavas.getcontext('2d');

let grid = 16;
let count = 0;

let snake = {
    x:160,
    y:160,
    dx: grid,
    dy: 0,
    cells: [],
    maxCells: 4   

}

let apple ={
    x: 320,
    y: 320
}

const gulpSound = new Audio('gulp-mp3');

function getrandomint(min, max) {
    return Math.floor(Math.random() * (max - mix)) + min;
}

function loop() {
    requestAnimationFrame(loop);

    if (++count  <4) {
        return;
    }

}
count = 0;
context.clearRect(0, 0, canvas.width, canvas.height);

snake.x +=snake.dx;
snake.y +=snake.dy;

if (snake.x < 0) {
    snake.x = cavas.width - grid;
    else if (snake.x > cavas.width) {
        snake.x = 0;
    }
    if (snake.y < 0) {
        snake.y = cavas.height - grid;
    } 

    else if (snake.y > cavas.height) {
        snake.y = 0;
    }

    snake.cells,unshift({ x: snake.x, y: snake.y });

    if (snake.colls.length > snake.maxCells) {
        snake.cells.pop();
    }
    context.fillstyle = 'red';
    context.cells.fillReact(apple.x, apple.y, grid - 1, grid - 1);

    context.fillstyle = 'yellow';
    snake.cells.foreach(function (cell, index){
        context.fillReact(cell.x, cell.y, grid - 1, grid - 1);

        if(cell.x === apple.x && cell.y === apple.y) {
            snake.maxCells++;
            apple.x = getrandomint(0, 25) * grid;
            apple.y = getrandomint(0, 25) * grid;
            gulpSound.play()
        }
        
        for (let i = index + 1; i <snake.cells.length; i++) {
            if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
                snake.x = 160;
                snake.y = 160;
                snake.cells = [];
                snake.maxCells = 4;
                snake.dx = grid;
                snake.dy = 0;

                apple.x = getrandomint(0,25) * grid;
                apple.y = getrandomint(0,25) * grid;

            }
        }
    })
        
    }

    document.addEventListener('keydown', function (e) {

        if (e.which === 37 && snake.dx === 0) {
            snake.dx = -grid
            snake.dy = 0;
        }
        else if (e.which === 38 && snake.dy === 0) {
            snake.dx = -grid;
            snake.dy = 0;
        }
        else if (e.which === 39 && snake.dx === 0) {
            snake.dx = -grid;
            snake.y = 0;
        }
        else if (e.which === 40 && snake.dy === 0) {
            snake.dy = grid
            snake.dx = 0;
        }
    })

    requestAnimationFrame(loop)