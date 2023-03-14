export default class miniMap {

    constructor(mapState) {
        this.mapState = mapState;
        this.maze = mapState.player.maze;
        this.player = mapState.player;
    }

    draw() {
        let canvas = document.getElementById("minimap");
        let ctx = canvas.getContext("2d");

        ctx.strokeStyle = "black";
        ctx.fillStyle = "grey";

        let centerX = canvas.width / 2;
        let centerY = canvas.height / 2;

        let w1 = canvas.width;
        let h1 = canvas.height;
        let x1 = centerX - w1 / 2;
        let y1 = centerY - h1 / 2;

        let w2 = w1 / 1.1;
        let h2 = h1 / 1.1;
        let x2 = centerX - w2 / 2;
        let y2 = centerY - h2 / 2;

        // map
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // inner map
        ctx.strokeRect(x2, y2, w2, h2);

        // tiles
        console.log("I'm the mini MAP!");
        let mazeSize = Math.max(this.maze.iSize, this.maze.jSize);
        let radius = Math.min(mazeSize, 7);
        let w3 = h2 / radius;
        let h3 = h2 / radius;
        for (let i = 0; i < radius; i++) {
            for (let j = 0; j < radius; j++) {
                let x3 = x2 + j * w3;
                let y3 = y2 + i * h3;
                ctx.strokeRect(x3, y3, w3, h3);
                ctx.fillStyle = "black";
                if (this.player.posEquals([i, j])) ctx.fillStyle = "blue";
                else if (this.mapState.exposed([i, j])) {
                    if (this.maze.at([i, j]) === 1) ctx.fillStyle = "#3d3d3d";
                    else if (this.player.hasVisited([i, j])) ctx.fillStyle = "orange";
                    else if (this.maze.at([i, j]) === 0) ctx.fillStyle = "black";
                    else if (this.maze.at([i, j]) === 2) ctx.fillStyle = "white";
                }
                ctx.fillRect(x3, y3, w3, h3);
            }
        }
    }

}