export default class GameView {

    constructor(worldState) {
        this.worldState = worldState
    }

    draw() {
        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext("2d");

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

        ctx.strokeStyle = "white";
        ctx.fillStyle = "white";
        
        let ceilStyle = "white";
        let floorStyle = "white";
        let leftStyle = "white";
        let farLeftStyle = "white";
        let farStyle = "white";
        let farRightStyle = "white";
        let rightStyle = "white";
        let nearStyle = "white";

        var grd = ctx.createRadialGradient(centerX, centerY, centerY / 4, centerX, centerY, centerY * 4);
        grd.addColorStop(0, "black");
        grd.addColorStop(1, "grey");

        var grd2 = ctx.createRadialGradient(centerX, centerY, centerY / 20, centerX, centerY, centerY * 3)
        grd2.addColorStop(0, "#3d3d3d");
        grd2.addColorStop(0.5, "black");

        var grd3 = ctx.createRadialGradient(centerX, centerY, centerY / 20, centerX, centerY, centerY / 1.33)
        grd3.addColorStop(0, "#3d3d3d");
        grd3.addColorStop(1, "black");

        if (!this.worldState.maze.at(this.worldState.pos)) {
            ctx.strokeStyle = "grey";
            ctx.fillStyle = "#3d3d3d";
            // ctx.fillStyle = grd;

            let ceilGradient = ctx.createLinearGradient(0, 0, 0, centerY);
            ceilGradient.addColorStop(0, "#3d3d3d");
            ceilGradient.addColorStop(0.75, "black");

            let floorGradient = ctx.createLinearGradient(0, centerY, 0, centerY * 2);
            floorGradient.addColorStop(1, "#3d3d3d");
            floorGradient.addColorStop(0.25, "black");

            let leftGradient = ctx.createLinearGradient(0, 0, centerX, 0);
            leftGradient.addColorStop(0, "#3d3d3d");
            leftGradient.addColorStop(0.75, "black");

            let rightGradient = ctx.createLinearGradient(centerX, 0, centerX * 2, 0);
            rightGradient.addColorStop(1, "#3d3d3d");
            rightGradient.addColorStop(0.25, "black");

            ceilStyle = ceilGradient;
            floorStyle = floorGradient;
            leftStyle = "#3d3d3d";
            leftStyle = leftGradient;
            farLeftStyle = "#3d3d3d";
            farLeftStyle = leftGradient;
            farStyle = "#3d3d3d";
            farStyle = grd3;
            // farRightStyle = "#3d3d3d";
            farRightStyle = rightGradient;
            // rightStyle = "#3d3d3d";
            rightStyle = rightGradient;
            nearStyle = "transparent";

            if (!this.worldState.left()) leftStyle = "black";
            if (!this.worldState.farLeft()) farLeftStyle = "black";
            if (!this.worldState.far()) farStyle = "black";
            if (!this.worldState.farRight()) farRightStyle = "black";
            if (!this.worldState.right()) rightStyle = "black";
            if (this.worldState.near()) nearStyle = "#3d3d3d";
            if (this.worldState.near()) nearStyle = grd2;
            if (this.worldState.near() === 2) nearStyle = "white";
            if (this.worldState.far() === 2) farStyle = "white";
            if (this.worldState.left() === 2) leftStyle = "white";
            if (this.worldState.farLeft() === 2) farLeftStyle = "white";
            if (this.worldState.far() === 2) farStyle = "white";
            if (this.worldState.farRight() === 2) farRightStyle = "white";
            if (this.worldState.right() === 2) rightStyle = "white";
        }

        // ceil 1
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(canvas.width, 0);
        ctx.lineTo(x2 + w2, y2);
        ctx.lineTo(x2, y2);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = ceilStyle;
        ctx.fill();

        // ceil 2
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(x2 + w2, y2);
        ctx.lineTo(x1 + w1, y1);
        ctx.lineTo(x1, y1);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = ceilStyle;
        ctx.fill();

        // floor 1
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        ctx.lineTo(x2, y2 + h2);
        ctx.lineTo(x2 + w2, y2 + h2);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = floorStyle;
        ctx.fill();

        // floor 2
        ctx.beginPath();
        ctx.moveTo(x2, y2 + h2);
        ctx.lineTo(x1, y1 + h1);
        ctx.lineTo(x1 + w1, y1 + h1);
        ctx.lineTo(x2 + w2, y2 + h2);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = floorStyle;
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
        
        // if (!this.worldState.maze.at(this.worldState.pos)) this.drawCompass()
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
        let dir = this.worldState.player.dir;
        let i = this.worldState.player.indexOf(dir);
        if (i === 0) d = "N";
        else if (i === 1) d = "E";
        else if (i === 2) d = "S";
        else if (i === 3) d = "W";
        ctx.fillText(d, canvas.width / 2 - r/3.5, canvas.height / 12);
    }

    reset() {
        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

}