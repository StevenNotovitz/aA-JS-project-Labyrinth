export default class Compass {

    constructor(mapState) {
        this.mapState = mapState;
        this.maze = mapState.player.maze;
        this.player = mapState.player;
    }

    drawCompass() {        
        let canvas = document.getElementById("compass");
        let ctx = canvas.getContext("2d");
        
        ctx.fillStyle = "#3d3d3d";
        ctx.fillRect(0, 0, canvas.height, canvas.width);

        ctx.strokeStyle = "black";
        ctx.fillStyle = "lightgrey";
        let x = canvas.width / 2;
        let y = canvas.height / 2;
        let r = canvas.height / 2.4;
        let T = 2 * Math.PI;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, T);
        ctx.stroke();
        ctx.fill();
        
        ctx.font = "42px Arial";
        ctx.fillStyle = "black";
        let d = "";
        let dir = this.mapState.player.dir;
        let i = this.mapState.player.indexOf(dir);
        if (i === 0) d = "N";
        else if (i === 1) d = "E";
        else if (i === 2) d = "S";
        else if (i === 3) d = "W";
        ctx.fillText(d, x*.7, y*1.3);

        // ctx.beginPath();
        // ctx.arc(x, y - r, r*1.5, T / 7.6, T / 2.75);
        // ctx.strokeStyle = "red";
        // ctx.stroke();
    }

    reset() {
        let canvas = document.getElementById("compass");
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

}