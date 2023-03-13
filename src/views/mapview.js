export default class MapView {

    constructor(player) {
        this.maze = player.maze;
        this.player = player;
    }

    draw() {
        console.log("I'm the MAP")
        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext("2d");
        ctx.strokeStyle = "black";
        ctx.fillStyle = "grey";

        let centerX = canvas.width / 2;
        let centerY = canvas.height / 2;

        let w1 = canvas.width / 2.5;
        let h1 = canvas.height / 2.5;
        let x1 = centerX - w1 / 2;
        let y1 = centerY - h1 / 2;

        let w2 = w1 * 1.75;
        let h2 = h1 * 1.75;
        let x2 = centerX - w2 / 2;
        let y2 = centerY - h2 / 2;

        let w3 = w1 * 2.2;
        let h3 = h1 * 2.3;
        let x3 = centerX - w3 / 2;
        let y3 = centerY - h3 / 2;

        let w4 = canvas.height / 1.33;
        let h4 = canvas.height / 1.33;
        let x4 = centerX - w4 / 2;
        let y4 = centerY - h4 / 2;

        // map
        ctx.strokeRect(x3, y3, w3, h3);
        ctx.fillRect(x3, y3, w3, h3);

        // inner map
        ctx.strokeRect(x4, y4, w4, h4);

        // tiles
        let w5 = h4 / this.maze.jSize;
        let h5 = h4 / this.maze.iSize;
        for (let i = 0; i < this.maze.iSize; i++) {
            for (let j = 0; j < this.maze.jSize; j++) {
                let x5 = x4 + j * w5;
                let y5 = y4 + i * h5;
                ctx.strokeRect(x5, y5, w5, h5);
                if (this.maze.at([i, j]) === 1) ctx.fillStyle = "#3d3d3d";
                else if (this.player.posEquals([i, j])) ctx.fillStyle = "blue";
                else ctx.fillStyle = "black";
                ctx.fillRect(x5, y5, w5, h5);
            }
        }




    }

    secretDraw(maze) {
        
    }

}
