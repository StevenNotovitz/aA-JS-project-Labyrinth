export default class Maze {

    constructor() {
        this.startPos = [1, 1];
        this.startDir = [0, 1];
        this.level = [
            [1, 1, 1, 1, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1],
            [1, 1, 1, 2, 1]
        ];
    }

    at(pos) {
        return this.level[pos[0]][pos[1]];
    }

}