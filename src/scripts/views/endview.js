export default class EndView {
  constructor(worldState) {
    this.worldState = worldState;
  }

  draw() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = "30px Arial";
    ctx.fillStyle = "purple";
    ctx.fillText("Congratulations", canvas.width / 2 - 100, canvas.height / 5);
  }
}