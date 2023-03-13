export default class EndView {

    constructor() {

    }

    draw() {
        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext("2d");

        ctx.font = "30px Arial";
        ctx.fillStyle = "purple";
        ctx.fillText("Congratulations", canvas.width / 2 - 100, canvas.height / 5);
    }

}