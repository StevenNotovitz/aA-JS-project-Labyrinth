// level class that has 2d array, startpos? startdir?

export default class Level {

    constructor(array) {
        this.array = array
    }

    at(pos) {
        return this.array[pos[0]][pos[1]];
    }
}