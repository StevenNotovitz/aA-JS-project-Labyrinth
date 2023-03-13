export default class Maze {

    constructor(level) {
        this.startPos = [1, 1];
        this.startDir = [0, 1];
        this.level = level;
        this.iSize = this.level.length;
        this.jSize = this.level[0].length;
    }

    at(pos) {
        return this.level[pos[0]][pos[1]];
    }

}