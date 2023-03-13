export default class Maze {

    constructor(level) {
        this.startPos = [1, 1];
        this.startDir = [0, 1];
        this.level = level;
        this.array = JSON.parse(JSON.stringify(this.level.array));
        this.iSize = this.array.length;
        this.jSize = this.array[0].length;
    }

    at(pos) {
        return this.array[pos[0]][pos[1]];
    }

    // switch(pos) {
    //     this.array[pos[0]][pos[1]] = 3;
    // }

}