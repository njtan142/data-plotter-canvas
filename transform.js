// needs to import vector.js first

class Transform {
    constructor() {
        this.position = new Vector(0, 0)
    }

    toScreenPosition(camera_pos) {
        const scale = Math.inv(camera_pos.z);
        const x = this.position.x - camera_pos.x;
        const y = this.position.y - camera_pos.y;
        const panned_vector = new Vector(x, y);
        const transformed_vector = Vector.scale(scale, panned_vector)
        return transformed_vector;
    }

    translate(x, y) {
        this.position.x += x;
        this.position.y += y
    }

    
}