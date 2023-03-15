import Game from "./scripts/game.js";
import * as l from "./scripts/models/levels.js";


document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.getElementById("canvas");
    canvas.width = window.innerHeight;
    canvas.height = window.innerHeight / 1.25;

    document.getElementById("startGame-0").addEventListener("click", (e) => {
        let game0 = new Game(l.level_0);
        game0.view.draw();
    })

    document.getElementById("startGame-1").addEventListener("click", (e) => {
        let game1 = new Game(l.level_1);
        game1.view.draw();
    });

    document.getElementById("startGame-2").addEventListener("click", (e) => {
        let game2 = new Game(l.level_2);
        game2.view.draw();
    });

    document.getElementById("startGame-3").addEventListener("click", (e) => {
        let game3 = new Game(l.level_3);
        game3.view.draw();
    });

    // document.getElementById("resetGame").addEventListener("click", (e) => {
    // })

});