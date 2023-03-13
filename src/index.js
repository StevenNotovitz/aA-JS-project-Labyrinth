import Game from "./game.js"

document.addEventListener("DOMContentLoaded", () => {

    let game = new Game()

    document.getElementById("startGame").addEventListener("click", (e) => {
        game.view.draw();
    });

});