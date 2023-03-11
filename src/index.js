import Player from "./player.js";
import WorldState from "./world_state.js";
import View from "./view.js";

// document.addEventListener("DOMContentLoaded", () => {
    let startPos = [1, 0];
    let startDir = [0, 1];
    let maze = [
        [1, 1, 1, 1, 1],
        [0, 0, 0, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 1, 1, 0, 1]
    ];
    window.p = new Player(startPos, startDir, maze);
    window.w = new WorldState(startPos, startDir, maze);
    window.v = new View(window.w);


// });