const Config = require('./Config');
const BlockType = require('./BlockType')

class ServerChunk {
    constructor() {
        this.data = new Array(Config.CHUNK_SIZE).fill(new Array(Config.CHUNK_HEIGHT).fill(new Uint8Array(Config.CHUNK_SIZE).fill(BlockType.AIR)));
        console.log(this.data);
    }

    checkBounds(x, y, z) {
        if(x < 0 || x > Config.CHUNK_SIZE - 1 || y < 0 || y > Config.CHUNK_HEIGHT - 1 || z < 0 || z > Config.CHUNK_SIZE) {
            return false;
        }
        return true;
    }

    getBlockAt(x, y, z) {
        if(!checkBlockAt(x, y, z)) {
            throw new Error('Invalid getBlockAt()');
        }
        return this.data[x][y][z];
    }

    setBlockAt(x, y, z, id) {
        if(!checkBlockAt(x, y, z)) {
            throw new Error('Invalid setBlockAt()');
        }

        this.data[x][y][z] = id;
        return this;
    }
}

module.exports = ServerChunk;