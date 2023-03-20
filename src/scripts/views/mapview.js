export default class MapView {

    constructor(mapState) {
        this.mapState = mapState;
        this.maze = mapState.player.maze;
        this.player = mapState.player;
    }

    draw() {
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
        if (this.player.traveledFar()) {
            let w5 = h4 / (this.maze.jSize - 2);
            let h5 = h4 / (this.maze.iSize - 2);
            let startI = 1;
            let startJ = 1;
            for (let i = 0; i < this.maze.iSize - 2; i++) {
                for (let j = 0; j < this.maze.jSize - 2; j++) {
                    let x5 = x4 + j * w5;
                    let y5 = y4 + i * h5;

                    let grd1 = ctx.createRadialGradient(x5 + h5 / 2, y5 + h5 / 2, h5 / 16, x5 + h5 / 2, y5 + h5 / 2, h5 / 5);
                    grd1.addColorStop(0, "rgba(128, 0, 128, .95");
                    grd1.addColorStop(1, "rgba(0, 0, 0, .95");

                    let grd2 = ctx.createRadialGradient(x5 + h5 / 2, y5 + h5 / 2, h5 / 16, x5 + h5 / 2, y5 + h5 / 2, h5 / 6);
                    grd2.addColorStop(0, "rgba(218, 165, 32, .95");
                    grd2.addColorStop(1, "rgba(0, 0, 0, .95");

                    ctx.strokeRect(x5, y5, w5, h5);
                    ctx.fillStyle = "black";
                    if (this.player.posEquals([startI + i, startJ + j]) && !this.maze.at([startI + i, startJ + j])) ctx.fillStyle = grd1;
                    else if (this.mapState.exposed([startI + i, startJ + j])) {
                        if (this.maze.at([startI + i, startJ + j]) === 1) ctx.fillStyle = "#3d3d3d";
                        if (this.maze.at([startI + i, startJ + j]) === 0) ctx.fillStyle = "rgba(0, 0, 0, .95";
                        if (this.player.hasVisited([startI + i, startJ + j])) ctx.fillStyle = grd2;
                        if (this.maze.at([startI + i, startJ + j]) === 2) ctx.fillStyle = "white";
                    }
                    ctx.fillRect(x5, y5, w5, h5);
                }
            }
        } else {
            let mazeSize = Math.max(this.maze.iSize, this.maze.jSize);
            let radius = Math.min(mazeSize, 7);
            let w5 = h4 / radius;
            let h5 = h4 / radius;
            let startI = 1;
            let startJ = 1;
            for (let i = 0; i < radius; i++) {
                for (let j = 0; j < radius; j++) {
                    let x5 = x4 + j * w5;
                    let y5 = y4 + i * h5;

                    let grd1 = ctx.createRadialGradient(x5 + h5 / 2, y5 + h5 / 2, h5 / 16, x5 + h5 / 2, y5 + h5 / 2, h5 / 5);
                    grd1.addColorStop(0, "rgba(128, 0, 128, .95");
                    grd1.addColorStop(1, "rgba(0, 0, 0, .95");

                    let grd2 = ctx.createRadialGradient(x5 + h5 / 2, y5 + h5 / 2, h5 / 16, x5 + h5 / 2, y5 + h5 / 2, h5 / 6);
                    grd2.addColorStop(0, "rgba(218, 165, 32, .95");
                    grd2.addColorStop(1, "rgba(0, 0, 0, .95");

                    ctx.strokeRect(x5, y5, w5, h5);
                    ctx.fillStyle = "black";
                    if (this.player.posEquals([startI + i, startJ + j]) && !this.maze.at([startI + i, startJ + j])) ctx.fillStyle = grd1;
                    else if (this.mapState.exposed([startI + i, startJ + j])) {
                        if (this.maze.at([startI + i, startJ + j]) === 1) ctx.fillStyle = "#3d3d3d";
                        if (this.maze.at([startI + i, startI + j]) === 0) ctx.fillStyle = "rgba(0, 0, 0, .95";
                        if (this.player.hasVisited([startI + i, startJ + j])) ctx.fillStyle = grd2;
                        if (this.maze.at([startI + i, startI + j]) === 2) ctx.fillStyle = "white";
                    }
                    ctx.fillRect(x5, y5, w5, h5);
                }
            }
        }
        // this.drawCompass();
    }

    drawCompass() {        
        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext("2d");

        ctx.strokeStyle = "black";
        ctx.fillStyle = "grey";

        let x = canvas.width / 2;
        let y = canvas.height / 15;
        let r = canvas.height / 20;
        let T = 2 * Math.PI;

        ctx.beginPath();
        ctx.arc(x, y, r, 0, T);
        ctx.stroke();
        ctx.fill();
        
        ctx.font = "30px Arial";
        ctx.fillStyle = "black";
        let d = "";
        let dir = this.mapState.player.dir;
        let i = this.mapState.player.indexOf(dir);
        if (i === 0) d = "N";
        else if (i === 1) d = "E";
        else if (i === 2) d = "S";
        else if (i === 3) d = "W";
        ctx.fillText(d, canvas.width / 2 - r/3.5, canvas.height / 12);
    }

    reveal() {
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
                ctx.fillStyle = "black";
                if (this.player.posEquals([i, j])) ctx.fillStyle = "blue";
                else {
                    if (this.maze.at([i, j]) === 1) ctx.fillStyle = "#3d3d3d";
                    else if (this.maze.at([i, j]) === 0) ctx.fillStyle = "black";
                    else if (this.maze.at([i, j]) === 2) ctx.fillStyle = "white";
                }
                ctx.fillRect(x5, y5, w5, h5);
            }
        }
    }

}
