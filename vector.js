class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.z = 1;
    }

    object() {
        return {
            x: this.x,
            y: this.y
        }
    }

    scale(scale, vector=null){
        if(vector != null){
            this.x *= scale;
            this.y *= scale;
            return this;
        }else{
            vector.x *= scale;
            vector.y *= scale;
            return vector;
        }
    }
}

