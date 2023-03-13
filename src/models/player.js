export default class Player {

    constructor(pos, dir, maze) {
        this.pos = pos;
        this.dir = dir;
        console.log(this.pos);
        console.log(this.dir);
        this.maze = maze;
        this.dirs = [
            [-1, 0],    // N
            [0, 1],     // E
            [1, 0],     // S
            [0, -1]     // W
        ];
        this.canMove = true
    }

    //states -> empty, wall, exit

    move() {
        // let position = this.pos
        // let inFront = this.maze.get(position);
        // if (inFront === states.empty || inFront === states.exit) {
        //     // move the player forward
        // } else {
        //     // do nothing
        // }

        if (!this.maze.at(this.pos) && this.canMove) {
            if (this.maze.level[this.pos[0] + this.dir[0]][this.pos[1] + this.dir[1]] === 0) {
                this.pos[0] += this.dir[0];
                this.pos[1] += this.dir[1];
            }
            else if (this.maze.level[this.pos[0] + this.dir[0]][this.pos[1] + this.dir[1]] === 2) {
                this.pos[0] += this.dir[0];
                this.pos[1] += this.dir[1];
            }

            this.canMove = false;
            setTimeout(() => {
                this.canMove = true;
            }, 750);
        }
        console.log(this.pos);
    }

    turnLeft() {
        if (this.canMove) {
            let i = this.indexOf(this.dir);
            if (i - 1 < 0) i += this.dirs.length;
            this.dir = this.dirs[i - 1];
            console.log(this.dir);

            this.canMove = false;
            setTimeout(() => {
                this.canMove = true;
            }, 750);
        }
    }

    turnRight() {
        if (this.canMove) {
            let i = this.indexOf(this.dir);
            this.dir = this.dirs[(i + 1) % this.dirs.length];
            console.log(this.dir);

            this.canMove = false;
            setTimeout(() => {
                this.canMove = true;
            }, 750);
        }
    }

    indexOf(dir) {
        for (let i = 0; i < this.dirs.length; i++) {
            if (this.dirs[i].toString() === dir.toString()) return i;
        }
    }

    posEquals(pos) {
        return this.pos[0] === pos[0] && this.pos[1] === pos[1]
    }

}