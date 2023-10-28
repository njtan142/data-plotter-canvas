class CanvasClass {
    constructor(identifier) {
        this.self = document.getElementById(identifier);
        if (this.self == null) {
            this.self = document.createElement("canvas");
            this.self.id = identifier;
            this.self.style.visibility = "hidden";
        }
        this.context = this.self.getContext('2d');
    }

    setDimensions(width, height) {
        this.self.width = width;
        this.self.height = height;
    }

    getDimensions() {
        return {
            width: this.self.width,
            height: this.self.height
        };
    }

    mount(parent_identifier) {
        const parent_element = document.getElementById(parent_identifier);
        parent_element.appendChild(this.self);
        this.self.style.visibility = "visible";
    }

    clear() {
        this.context.clearRect(0, 0, this.self.width, this.self.height);
    }

    drawCircle(size, x, y, color="#000") {
        const context = this.context;

        const default_fill_style = context.fillStyle;

        context.fillStyle = color;
        context.beginPath();
        context.arc(x, y, size, 0, 2 * Math.PI);
        context.fill();
        context.closePath();

        context.fillStyle = default_fill_style;
    }
}

