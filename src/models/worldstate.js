export default class WorldState {   // playerCamera

    constructor(player) {
        this.player = player;
        this.pos = player.pos;
        this.dir = player.dir;
        this.maze = player.maze;
    }

    next() {
        return [this.player.pos[0] + this.player.dir[0], this.player.pos[1] + this.player.dir[1]];
    }

    near() {
        if (this.next()[0] < 0 || this.next()[0] >= this.maze.level.length || this.next()[1]  < 0 || this.next()[1]  >= this.maze.level[0].length) return 2;
        return this.maze.at(this.next());
    }

    far() {
        let farI = this.player.pos[0] + this.player.dir[0] * 2;
        let farJ = this.player.pos[1] + this.player.dir[1] * 2;
        if (farI < 0 || farI >= this.maze.level.length || farJ < 0 || farJ >= this.maze.level[0].length) return 1;
        return this.maze.at([this.player.pos[0] + this.player.dir[0] * 2, this.player.pos[1] + this.player.dir[1] * 2]);
    }

    left() {
        let i = this.indexOf(this.player.dir);
        if (i - 1 < 0) i += this.player.dirs.length;
        return this.maze.level[this.player.pos[0] + this.player.dirs[i - 1][0]][this.player.pos[1] + this.player.dirs[i - 1][1]];
    }

    right() {
        let i = this.indexOf(this.player.dir);
        return this.maze.level[this.player.pos[0] + this.player.dirs[(i + 1) % this.player.dirs.length][0]][this.player.pos[1] + this.player.dirs[(i + 1) % this.player.dirs.length][1]];
    }

    farLeft() {
        let i = this.indexOf(this.player.dir);
        if (i - 1 < 0) i += this.player.dirs.length;

        let farLeftI = this.next()[0] + this.player.dirs[i - 1][0];
        let farLeftJ = this.next()[1] + this.player.dirs[i - 1][1];
        if (farLeftI < 0 || farLeftI >= this.maze.level.length || farLeftJ < 0 || farLeftJ >= this.maze.level[0].length) return 1;

        return this.maze.at([this.next()[0] + this.player.dirs[i - 1][0], this.next()[1] + this.player.dirs[i - 1][1]]);
    }

    farRight() {
        let i = this.indexOf(this.player.dir);

        let farRightI = this.next()[0] + this.player.dirs[(i + 1) % this.player.dirs.length][0];
        let farRightJ = this.next()[1] + this.player.dirs[(i + 1) % this.player.dirs.length][1];
        if (farRightI < 0 || farRightI >= this.maze.level.length || farRightJ < 0 || farRightJ >= this.maze.level[0].length) return 1;
        
        return this.maze.level[this.next()[0] + this.player.dirs[(i + 1) % this.player.dirs.length][0]][this.next()[1] + this.player.dirs[(i + 1) % this.player.dirs.length][1]];
    }

    indexOf(dir) {
        for (let i = 0; i < this.player.dirs.length; i++) {
            if (this.player.dirs[i].toString() === dir.toString()) return i;
        }
    }

}