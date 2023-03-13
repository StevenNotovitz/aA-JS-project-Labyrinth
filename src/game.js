import Maze from "./models/maze.js"
import Player from "./models/player.js";
import WorldState from "./models/worldstate.js";
import GameView from "./views/gameview.js";
import MapView from "./views/mapview.js";
import EndView from "./views/endview.js";


export default class Game {

    constructor() {
        this.maze = new Maze()
        this.player = new Player(this.maze.startPos, this.maze.startDir, this.maze)
        this.worldState = new WorldState(this.player)    // playerCamera
        this.view = new GameView(this.worldState)
        this.map = new MapView(this)
        this.end = new EndView()
        this.mapOpen = false

        document.addEventListener("keydown", (e) => {
            if (!this.mapOpen) {
                if (e.key === "ArrowUp" || e.key === "Up") this.player.move();
                else if (e.key === "ArrowLeft" || e.key === "Left") this.player.turnLeft();
                else if (e.key === "ArrowRight" || e.key === "Right") this.player.turnRight();
        
                this.view.draw();
                if (this.player.maze.at(this.player.pos)) setTimeout(this.end.draw.bind(this), 4000);
            }
        });

        document.getElementById("mapButton").addEventListener("click", (e) => {
            if (!this.mapOpen) {
                this.mapOpen = true;
                this.map.draw(maze);
            } else if (mapOpen) {
                this.mapOpen = false;
                this.view.draw();
            }
        });
    }

}