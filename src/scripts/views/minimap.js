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
    let mazeSize = Math.max(this.maze.iSize, this.maze.jSize);
    let radius = Math.min(mazeSize, 5);
    let w3 = h2 / radius;
    let h3 = h2 / radius;
    let startI = this.player.pos[0] - Math.floor(radius / 2);
    let startJ = this.player.pos[1] - Math.floor(radius / 2);
    for (let i = 0; i < radius; i++) {
      for (let j = 0; j < radius; j++) {
        let x3 = x2 + j * w3;
        let y3 = y2 + i * h3;

        let grd1 = ctx.createRadialGradient(x3 + h3 / 2, y3 + h3 / 2, h3 / 16, x3 + h3 / 2, y3 + h3 / 2, h3 / 5);
        grd1.addColorStop(0, "rgba(128, 0, 128, .95");
        grd1.addColorStop(1, "rgba(0, 0, 0, .95");

        ctx.strokeRect(x3, y3, w3, h3);
        ctx.fillStyle = "black";
        if ((startI + i) < 0 || (startI + i) > mazeSize || (startJ + j) < 0 || (startJ + j) > mazeSize) ctx.fillStyle = "black";
        if (this.player.posEquals([startI + i, startJ + j]) && !this.maze.at([startI + i, startJ + j])) ctx.fillStyle = grd1;
        else if (this.mapState.exposed([startI + i, startJ + j])) {
          if (this.maze.at([startI + i, startJ + j]) === 1) ctx.fillStyle = "#3d3d3d";
          if (this.maze.at([startI + i, startJ + j]) === 0) ctx.fillStyle = "rgba(0, 0, 0, .95";
          if (this.player.hasVisited([startI + i, startJ + j])) ctx.fillStyle = "rgba(0, 0, 0, .95";
          if (this.maze.at([startI + i, startJ + j]) === 2) ctx.fillStyle = "white";
        }
        ctx.fillRect(x3, y3, w3, h3);
      }
    }
  }

  reset() {
    let canvas = document.getElementById("minimap");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}