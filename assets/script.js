document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // // fillRect()
    // ctx.fillStyle = "red";
    // ctx.fillRect(20, 20, 150, 100);
    // ctx.fillStyle = "blue";
    // ctx.fillRect(200, 20, 150, 100);

    // // strokRect()
    // ctx.lineWidth = 5;
    // ctx.strokeStyle = "green";
    // ctx.strokeRect(100, 200, 150, 100);

    // // clearRect()
    // ctx.clearRect(25, 25, 140, 90);

    // // fillText()
    // ctx.font = "30px Arial";
    // ctx.fillStyle = "purple";
    // ctx.fillText("Hello World", 400, 50);

    // // strokeText()
    // ctx.lineWidth = 1;
    // ctx.strokeStyle = "orange";
    // ctx.strokeText("Hello World", 400, 100);

    // Paths
    ctx.strokeStyle = "grey";

    // // Triangle
    // ctx.beginPath();
    // ctx.moveTo(50, 400);
    // ctx.lineTo(150, 400);
    // ctx.lineTo(100, 550);
    // // ctx.lineTo(50, 400);
    // ctx.closePath();
    // // ctx.stroke();
    // ctx.fillStyle = "coral";
    // ctx.fill();

    // ctx.beginPath();
    // ctx.moveTo(200, 400);
    // ctx.lineTo(150, 550);
    // ctx.lineTo(250, 550);
    // ctx.closePath();
    // ctx.stroke();

    // // Rectangle
    // ctx.beginPath();
    // ctx.rect(300, 400, 150, 100);
    // ctx.fillStyle = "teal";
    // ctx.fill();

    // // Arc (circles)
    // ctx.beginPath();
    // // ctx.arc(600, 450, 40, 0, 2 * Math.PI);
    // let x = canvas.width / 2;
    // let y = canvas.height / 2;
    // let r = canvas.height / 2 - 10;
    let T = 2 * Math.PI;
    // // Draw head
    // ctx.arc(x, y, r, 0, T);
    // // Move to mouth
    // ctx.moveTo(x + (2/3)*r, y);
    // // Draw mouth
    // ctx.arc(x, y, (2/3)*r, 0, (1/2)*T);
    // // Move to left eye
    // ctx.moveTo(x - (1/3)*r + 30, y - (1/3)*r);
    // // Draw left eye
    // ctx.arc(x - (1/3)*r, y - (1/3)*r, 30, 0, 2*T);
    // // Move to right eye
    // ctx.moveTo(x + (1/3)*r + 30, y - (1/3)*r);
    // // Draw right eye
    // ctx.arc(x + (1/3)*r, y - (1/3)*r, 30, 0, 2*T);

    // // Quadratic curve
    // ctx.moveTo(75, 25);
    // ctx.quadraticCurveTo(25, 25, 25, 62.5);
    // ctx.quadraticCurveTo(25, 100, 50, 100);
    // ctx.quadraticCurveTo(50, 120, 30, 125);
    // ctx.quadraticCurveTo(60, 120, 65, 100);
    // ctx.quadraticCurveTo(125, 100, 125, 62.5);
    // ctx.quadraticCurveTo(125, 25, 75, 25);

    // ctx.stroke();

    // // Animation 1
    // const circle = {
    //     x: 200,
    //     y: 200,
    //     r: 30,
    //     dx: 5,
    //     dy: 4
    // };

    // function drawCircle() {
    //     ctx.beginPath();
    //     ctx.arc(circle.x, circle.y, circle.r, 0, 2*T);
    //     ctx.fillStyle = "purple";
    //     ctx.fill();
    // }

    // function update() {
    //     ctx.clearRect(0, 0, canvas.width, canvas.height)

    //     drawCircle();
        
    //     // Change position
    //     circle.x += circle.dx;
    //     circle.y += circle.dy;

    //     // Detect side walls
    //     if (circle.x + circle.r > canvas.width || circle.x - circle.r < 0) {
    //         circle.dx *= -1;
    //     }
    //     // Detect top and bottom walls
    //     if (circle.y + circle.r > canvas.height || circle.y - circle.r < 0) {
    //         circle.dy *= -1;
    //     }
        
    //     requestAnimationFrame(update);
    // }

    // // drawCircle();
    // update();

    // Animation 2 - Character

    const image = document.getElementById("source");

    const player = {
        w: 50,
        h: 70,
        x: 700,
        y: 400,
        speed: 5,
        dx: 0,
        dy: 0
    };

    function drawPlayer() {
        ctx.drawImage(image, player.x, player.y, player.w, player.h);
    }

    function clear() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function newPos() {
        player.x += player.dx
        player.y += player.dy

        detectWalls();
    }

    function detectWalls() {
        // Left wall
        if (player.x < 0) player.x = 0
        // Right wall
        if (player.x > canvas.width - player.w) player.x = canvas.width - player.w
        // Top wall
        if (player.y < 0) player.y = 0
        // Bottom wall
        if (player.y > canvas.height - player.h) player.y = canvas.height - player.h
    }

    function update() {
        clear();

        drawPlayer();

        newPos();

        requestAnimationFrame(update);
    }

    function moveLeft() {
        player.dx = -player.speed;
    }
    function moveRight() {
        player.dx = player.speed;
    }
    function moveUp() {
        player.dy = -player.speed;
    }
    function moveDown() {
        player.dy = player.speed;
    }

    function keyDown(e) {
        if (e.key === "ArrowLeft" || e.key === "Left") {
            moveLeft();
        } else if (e.key === "ArrowRight" || e.key === "Right") {
            moveRight();
        } else if (e.key === "ArrowUp" || e.key === "Up") {
            moveUp();
        } else if (e.key === "ArrowDown" || e.key === "Down") {
            moveDown();
        }
    }

    function keyUp(e) {
        if (
            e.key === "ArrowLeft" ||
            e.key === "Left" ||
            e.key === "ArrowRight" ||
            e.key === "Right" ||
            e.key === "ArrowUp" ||
            e.key === "Up" ||
            e.key === "ArrowDown" ||
            e.key === "Down"
        ) {
            player.dx = 0;
            player.dy = 0;
        }
    }

    update();

    document.addEventListener("keydown", keyDown);
    document.addEventListener("keyup", keyUp);

});