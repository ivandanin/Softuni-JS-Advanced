function f() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }
        changeUnits(unit) {
            this.units = unit;
        }

        convertUnit(val) {
            if (this.units == 'm') {
                return val /= 10;
            } else if (this.units == 'mm') {
                return val *= 10;
            }
            return val;
        }
        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this._radius = radius;
        }
        get area() {
            this.radius = this.convertUnit(this._radius);
            return Math.PI * Math.pow(this.radius, 2);
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        }

        get area() {
            this.width = this.convertUnit(this._width);
            this.height = this.convertUnit(this._height);
            return this.width * this.height;
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }
    return {
        Figure, Circle, Rectangle
    }
}