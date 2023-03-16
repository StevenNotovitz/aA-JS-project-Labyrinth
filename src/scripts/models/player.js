export default class Player {

    constructor(pos, dir, maze) {
        this.pos = pos;
        this.dir = dir;
        // console.log(this.pos);
        // console.log(this.dir);
        this.maze = maze;
        this.dirs = [
            [-1, 0],    // N
            [0, 1],     // E
            [1, 0],     // S
            [0, -1]     // W
        ];
        this.canMove = true;
        
        this.visited = {};
        for (let i = 0; i < maze.iSize; i++) {
            for (let j = 0; j < maze.jSize; j++) {
                this.visited[[i, j].toString()] = false;
            }
        }
        this.visited[pos.toString()] = true;        
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
            if (this.maze.array[this.pos[0] + this.dir[0]][this.pos[1] + this.dir[1]] === 0) {
                this.pos[0] += this.dir[0];
                this.pos[1] += this.dir[1];

                this.canMove = false;
                setTimeout(() => {
                    this.canMove = true;
                }, 500);
            }
            else if (this.maze.array[this.pos[0] + this.dir[0]][this.pos[1] + this.dir[1]] === 2) {
                this.pos[0] += this.dir[0];
                this.pos[1] += this.dir[1];
            }
            this.visited[this.pos.toString()] = true;
            // console.log(this.pos);
        }
    }

    turnLeft() {
        if (!this.maze.at(this.pos) && this.canMove) {
            let i = this.indexOf(this.dir);
            if (i - 1 < 0) i += this.dirs.length;
            this.dir = this.dirs[i - 1];
            // console.log(this.dir);

            this.canMove = false;
            setTimeout(() => {
                this.canMove = true;
            }, 500);
        }
    }

    turnRight() {
        if (!this.maze.at(this.pos) && this.canMove) {
            let i = this.indexOf(this.dir);
            this.dir = this.dirs[(i + 1) % this.dirs.length];
            // console.log(this.dir);

            this.canMove = false;
            setTimeout(() => {
                this.canMove = true;
            }, 500);
        }
    }

    indexOf(dir) {
        for (let i = 0; i < this.dirs.length; i++) {
            if (this.dirs[i].toString() === dir.toString()) return i;
        }
    }

    posEquals(pos) {
        return this.pos[0] === pos[0] && this.pos[1] === pos[1];
    }
    
    hasVisited(pos) {
        return this.visited[pos.toString()];
    }

    traveledFar() {
        let visited = []
        for (let key in this.visited) {
            let a = []
            if (this.visited[key]) {
                key.split(",").forEach(ele => a.push(parseInt(ele)))
                visited.push(a)
            }
        }
        for (let pos of visited) {
            if (Math.abs(pos[0] - this.maze.startPos[0]) > 4) return true;
            if (Math.abs(pos[1] - this.maze.startPos[1]) > 4) return true;
        }
        return false;
    }

    reset() {
        this.pos[0] = this.maze.startPos[0];
        this.pos[1] = this.maze.startPos[1];
        this.dir = this.maze.startDir;
    }

}