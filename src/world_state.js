export default class WorldState {

    constructor(pos, dir, maze) {
        this.pos = pos
        this.dir = dir
        this.maze = maze
        this.dirs = [
            [-1, 0],    // N
            [0, 1],     // E
            [1, 0],     // S
            [0, -1]     // W
        ];
        this.left = this.left()
        this.farLeft = this.farLeft()
        this.far = this.maze[this.far()[0]][this.far()[1]]
        this.farRight = this.farRight()
        this.right = this.right()
        this.next = this.maze[this.next()[0]][this.next()[1]]
    }

    next() {
        return [this.pos[0] + this.dir[0], this.pos[1] + this.dir[1]]
    }

    far() {
        return [this.pos[0] + this.dir[0] * 2, this.pos[1] + this.dir[1] * 2]
    }

    left() {
        let i = this.indexOf(this.dir);
        if (i - 1 < 0) i += this.dirs.length;
        return this.maze[this.pos[0] + this.dirs[i - 1][0]][this.pos[1] + this.dirs[i - 1][1]]
    }

    right() {
        let i = this.indexOf(this.dir);
        return this.maze[this.pos[0] + this.dirs[(i + 1) % this.dirs.length][0]][this.pos[1] + this.dirs[(i + 1) % this.dirs.length][1]]
    }

    farLeft() {
        let i = this.indexOf(this.dir);
        if (i - 1 < 0) i += this.dirs.length;
        return this.maze[this.next()[0] + this.dirs[i - 1][0]][this.next()[1] + this.dirs[i - 1][1]]
    }

    farRight() {
        let i = this.indexOf(this.dir);
        return this.maze[this.next()[0] + this.dirs[(i + 1) % this.dirs.length][0]][this.next()[1] + this.dirs[(i + 1) % this.dirs.length][1]]
    }

    indexOf(dir) {
        for (let i = 0; i < this.dirs.length; i++) {
            if (this.dirs[i].toString() === dir.toString()) return i
        }
    }

}