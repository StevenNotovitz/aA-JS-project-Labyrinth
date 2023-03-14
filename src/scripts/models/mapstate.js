export default class MapState {

    constructor(player) {
        this.player = player;
        this.maze = player.maze;
        this.north = player.dirs[0];
        this.east = player.dirs[1];
        this.south = player.dirs[2];
        this.west = player.dirs[3];
    }

    exposed(pos) {
        if (this.player.hasVisited(pos)) return true;
        let n = this.next(pos, this.north);
        let e = this.next(pos, this.east);
        let s = this.next(pos, this.south);
        let w = this.next(pos, this.west);
        let nw = this.next(n, this.west);
        let ne = this.next(n, this.east);
        let sw = this.next(s, this.west);
        let se = this.next(s, this.east);
        let a = [n, e, s, w, nw, ne, sw, se];
        for (let d of a) {
            if (this.player.hasVisited(d)) return true;
        }
        return false;
    }

    next(pos, dir) {
        return [pos[0] + dir[0], pos[1] + dir[1]];
    }

    // north(pos) {
    //     return this.next(pos, this.north);
    // }

    // east(pos) {
    //     return this.next(pos, this.east);
    // }

    // south(pos) {
    //     return this.next(pos, this.south);
    // }

    // west(pos) {
    //     return this.next(pos, this.west);
    // }

}