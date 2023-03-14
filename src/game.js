import Maze from "./models/maze.js"
import Player from "./models/player.js";
import WorldState from "./models/worldstate.js";
import GameView from "./views/gameview.js";
import MapState from "./models/mapstate.js";
import MapView from "./views/mapview.js";
import EndView from "./views/endview.js";

export default class Game {

    constructor(level) {
        this.maze = new Maze(level);
        this.player = new Player(this.maze.startPos, this.maze.startDir, this.maze);
        this.worldState = new WorldState(this.player);    // playerCamera
        this.view = new GameView(this.worldState);
        this.mapState = new MapState(this.player);
        this.map = new MapView(this.mapState);
        this.end = new EndView(this.worldState);
        this.mapOpen = false;
        let end = false;

        let startButtons = document.getElementsByClassName("startButton");
        for (let i = 0; i < startButtons.length; i++) {
            startButtons[i].classList.add("hidden");
        }
        document.getElementById("mapButton").classList.remove("hidden");

        document.addEventListener("keydown", (e) => {
            if (!this.mapOpen && !this.maze.at(this.player.pos)) {
                if (e.key === "ArrowUp" || e.key === "Up") this.player.move();
                else if (e.key === "ArrowLeft" || e.key === "Left") this.player.turnLeft();
                else if (e.key === "ArrowRight" || e.key === "Right") this.player.turnRight();
        
                this.view.draw();
                if (this.maze.level.at(this.player.pos)) {
                    setTimeout(() => {end = true}, 2000);
                    setTimeout(this.end.draw.bind(this), 2000);
                }
            }
        });

        document.getElementById("mapButton").addEventListener("click", (e) => {
            if (!this.mapOpen && (!this.maze.level.at(this.player.pos) || end)) {
                this.mapOpen = true;
                this.map.draw();
            } else if (this.mapOpen) {
                this.mapOpen = false;
                if (!this.maze.level.at(this.player.pos)) this.view.draw();
                else this.end.draw();
            }
        });

        // setInterval(() => {
        //     console.log('hi!!!!');
        // }, 1000);
    }

}