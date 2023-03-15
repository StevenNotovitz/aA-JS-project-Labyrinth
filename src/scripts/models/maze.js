export default class Maze {

    constructor(level) {
        this.array = JSON.parse(JSON.stringify(level.array));
        this.startPos = level.startPos;
        this.startDir = level.startDir;
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