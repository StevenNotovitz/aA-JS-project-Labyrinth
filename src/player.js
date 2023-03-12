export default class Player {

    constructor(pos, dir, maze) {
        this.pos = pos;
        this.dir = dir;
        console.log(this.pos);
        console.log(this.dir);
        this.maze = maze
        this.dirs = [
            [-1, 0],    // N
            [0, 1],     // E
            [1, 0],     // S
            [0, -1]     // W
        ];
    }

    move() {
        if (this.maze[this.pos[0] + this.dir[0]][this.pos[1] + this.dir[1]] === 0) {
            this.pos[0] += this.dir[0];
            this.pos[1] += this.dir[1];
        }
        else if (this.maze[this.pos[0] + this.dir[0]][this.pos[1] + this.dir[1]] === 2) {
            this.pos[0] += this.dir[0];
            this.pos[1] += this.dir[1];
        }
        console.log(this.pos);
    }

    indexOf(dir) {
        for (let i = 0; i < this.dirs.length; i++) {
            if (this.dirs[i].toString() === dir.toString()) return i
        }
    }

    turnLeft() {
        let i = this.indexOf(this.dir);
        if (i - 1 < 0) i += this.dirs.length;
        this.dir = this.dirs[i - 1];
        console.log(this.dir)
    }

    turnRight() {
        let i = this.indexOf(this.dir);
        this.dir = this.dirs[(i + 1) % this.dirs.length];
        console.log(this.dir)
    }

}