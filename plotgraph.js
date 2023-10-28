//needs to import canvas_class.js and camera.js first 


class PlotGraph {
    constructor(identifier) {
        this.canvas_class = new CanvasClass(identifier);
        this.camera = new Camera();
        this.labels = {};
        this.objects = []
    }

    initLabels(x_axis_label, y_axis_label) {
        this.labels.x = x_axis_label;
        this.labels.y = y_axis_label;
    }

    plot(){
        this.camera.render(this.objects, this.canvas_class)
    }
}
