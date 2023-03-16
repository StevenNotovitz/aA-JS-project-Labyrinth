import Maze from "./models/maze.js"
import Player from "./models/player.js";
import WorldState from "./models/worldstate.js";
import GameView from "./views/gameview.js";
import MapState from "./models/mapstate.js";
import MapView from "./views/mapview.js";
import EndView from "./views/endview.js";
import MiniMap from "./views/minimap.js";
import Compass from "./views/compass.js";

export default class Game {

    constructor(level) {
        this.maze = new Maze(level);
        this.player = new Player([this.maze.startPos[0], this.maze.startPos[1]], this.maze.startDir, this.maze);
        this.worldState = new WorldState(this.player);  // playerCamera
        this.view = new GameView(this.worldState);
        this.mapState = new MapState(this.player);
        this.map = new MapView(this.mapState);
        this.end = new EndView(this.worldState);
        this.mapOpen = false;
        let over = false;
        let free = false;
        this.minimap = new MiniMap(this.mapState);
        this.compass = new Compass(this.mapState);
        this.minimap.draw();
        this.compass.drawCompass();
        this.endview = document.getElementsByClassName("endview")[Math.floor(Math.random() * 4)];
        // this.endaudio = new Audio();
        // this.endaudio.src = "../assets/audio/Claude-Debussy-Maid-with-the-Flaxen-Hair.mp3";

        document.addEventListener("keydown", (e) => {
            if (!over) {
                if (!this.mapOpen) {
                    if (e.key === "ArrowUp" || e.key === "Up") this.player.move();
                    else if (e.key === "ArrowLeft" || e.key === "Left") this.player.turnLeft();
                    else if (e.key === "ArrowRight" || e.key === "Right") this.player.turnRight();
                    
                    this.minimap.draw();
                    this.compass.drawCompass();
                    this.view.draw();

                    if (this.maze.at(this.player.pos)) {
                        setTimeout(() => {over = true}, 2000);
                        setTimeout(() => {free = true}, 2000);
                        setTimeout(this.endDraw.bind(this), 2000);
                        // setTimeout(this.end.draw.bind(this), 2000);
                    }
                }
            }
        });

        document.getElementById("map").classList.remove("hidden")

        document.getElementById("map").addEventListener("click", (e) => {
            if (!over || free) {
                if (!this.mapOpen) {
                    this.mapOpen = true;
                    this.map.draw();
                } else if (this.mapOpen) {
                    this.mapOpen = false;
                    if (!over) this.view.draw();
                    else this.end.draw();
                }
            }
        });

        document.addEventListener('keydown', (e) => {
            if (!over || free) {
                if (e.key === "m") {
                    if (!this.mapOpen) {
                        this.mapOpen = true;
                        this.map.draw();
                    } else if (this.mapOpen) {
                        this.mapOpen = false;
                        if (!over) this.view.draw();
                        else this.end.draw();
                    }
                }
                if (e.key === "n") {
                    if (!this.mapOpen) {
                        this.mapOpen = true;
                        this.map.reveal();
                    } else if (this.mapOpen) {
                        this.mapOpen = false;
                        if (!over) this.view.draw();
                        else this.end.draw();
                    }
                }
            }
        });

        // setInterval(() => {
        //     console.log('hi!!!!');
        // }, 1000);

        document.getElementById("resetGame").addEventListener("click", (e) => {
            this.reset();
            over = true;
            free = false;
        });

        // document.getElementById("startGame-0").addEventListener("click", (e) => {
        //     this.resetEnd()
        // })
    
        document.getElementById("startGame-1").addEventListener("click", (e) => {
            this.resetEnd()
        });
    
        document.getElementById("startGame-2").addEventListener("click", (e) => {
            this.resetEnd()
        });
    
        document.getElementById("startGame-3").addEventListener("click", (e) => {
            this.resetEnd()
        });
    }

    reset() {
        this.player.reset();
        this.view.reset();
        this.minimap.reset();
        this.compass.reset();
        document.getElementById("map").classList.add("hidden");
        this.resetEnd();
    }

    endDraw() {
        // let navs = document.getElementsByClassName("nav")
        // for (let i = 0; i < navs.length; i++) {
        //     navs[i].classList.add("hidden");
        // }
        // document.getElementById("left").classList.add("hidden");
        document.getElementById("canvas").classList.add("hidden");
        document.getElementById("endviewDiv").classList.remove("hidden");
        this.endview.classList.remove("hidden");
        this.endview.classList.add("fade-in-image");

        // this.endaudio.play();
    }

    resetEnd() {
        // let navs = document.getElementsByClassName("nav")
        // for (let i = 0; i < navs.length; i++) {
        //     navs[i].classList.remove("hidden");
        // }
        // document.getElementById("left").classList.remove("hidden");
        document.getElementById("canvas").classList.remove("hidden");
        document.getElementById("endviewDiv").classList.add("hidden");
        this.endview.classList.add("hidden");
        this.endview.classList.remove("fade-in-image");

        // this.endaudio.pause();
    }

}