// needs to import transform.js first

class Camera {
    constructor() {
        this.transform = new Transform();
        this.transform.position.z = 10;
    }

    pan(x, y) {
        this.transform.translate(x, y);
        this.render();
    }

    render(objects, canvas_class) {
        for (let object in objects) {
            const vector = object.transform.toScreenPosition(this.transform.position);
            const x = vector.x;
            const y = vector.y;

            const object_size = Math.inv(this.transform.position.z) * GLOBAL_OBJECT_SIZE;
            canvas_class.drawCircle(object_size, x, y)
        }
    }
}
