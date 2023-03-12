import Player from "./player.js";
import WorldState from "./world_state.js";
import View from "./view.js";

document.addEventListener("DOMContentLoaded", () => {
    let startPos = [1, 1];
    let startDir = [0, 1];
    let maze = [
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 1, 1, 2, 1]
    ];
    window.p = new Player(startPos, startDir, maze);
    window.w = new WorldState(p.pos, p.dir, maze);
    window.v = new View(window.w);

    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowUp" || e.key === "Up") p.move();
        else if (e.key === "ArrowLeft" || e.key === "Left") p.turnLeft();
        else if (e.key === "ArrowRight" || e.key === "Right") p.turnRight();
        w = new WorldState(p.pos, p.dir, maze);
        v = new View(window.w);
    })
});