export default class GameView {

    constructor(worldState) {
        this.worldState = worldState
    }

    draw() {
        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext("2d");
        ctx.strokeStyle = "white";
        ctx.fillStyle = "white";

        let leftStyle = "white";
        let farLeftStyle = "white";
        let farStyle = "white";
        let farRightStyle = "white";
        let rightStyle = "white";
        let nearStyle = "white";

        if (!this.worldState.maze.at(this.worldState.pos)) {
            ctx.strokeStyle = "grey";
            ctx.fillStyle = "#3d3d3d";
            
            leftStyle = "#3d3d3d";
            farLeftStyle = "#3d3d3d";
            farStyle = "#3d3d3d";
            farRightStyle = "#3d3d3d";
            rightStyle = "#3d3d3d";
            nearStyle = "transparent";

            if (!this.worldState.left()) leftStyle = "black";
            if (!this.worldState.farLeft()) farLeftStyle = "black";
            if (!this.worldState.far()) farStyle = "black";
            if (!this.worldState.farRight()) farRightStyle = "black";
            if (!this.worldState.right()) rightStyle = "black";
            if (this.worldState.near()) nearStyle = "#3d3d3d";
            if (this.worldState.near() === 2) nearStyle = "white";
            if (this.worldState.far() === 2) farStyle = "white";
        }

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

        // ceil 1
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(canvas.width, 0);
        ctx.lineTo(x2 + w2, y2);
        ctx.lineTo(x2, y2);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        // ceil 2
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(x2 + w2, y2);
        ctx.lineTo(x1 + w1, y1);
        ctx.lineTo(x1, y1);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();    

        // floor 1
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        ctx.lineTo(x2, y2 + h2);
        ctx.lineTo(x2 + w2, y2 + h2);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        // floor 2
        ctx.beginPath();
        ctx.moveTo(x2, y2 + h2);
        ctx.lineTo(x1, y1 + h1);
        ctx.lineTo(x1 + w1, y1 + h1);
        ctx.lineTo(x2 + w2, y2 + h2);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        // #1 (left)
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x2, y2 + h2);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = leftStyle;
        ctx.fill();

        // #2 (up-left)
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(x1, y1);
        ctx.lineTo(x1, y1 + h1);
        ctx.lineTo(x2, y2 + h2);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = farLeftStyle;
        ctx.fill();

        // #3 (up-2)
        ctx.strokeRect(x1, y1, w1, h1);
        ctx.fillStyle = farStyle;
        ctx.fillRect(x1, y1, w1, h1);

        // #4 (up-right)
        ctx.beginPath();
        ctx.moveTo(x1 + w1, y1);
        ctx.lineTo(x2 + w2, y2);
        ctx.lineTo(x2 + w2, y2 + h2);
        ctx.lineTo(x1 + w1, y1 + h1);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = farRightStyle;
        ctx.fill();

        // #5 (right)
        ctx.beginPath();
        ctx.moveTo(x2 + w2, y2);
        ctx.lineTo(canvas.width, 0);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(x2 + w2, y2 + h2);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = rightStyle;
        ctx.fill();

        // #0 (up-1)
        ctx.strokeRect(x2, y2, w2, h2);
        ctx.fillStyle = nearStyle;
        ctx.fillRect(x2, y2, w2, h2);
    }

}