class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.fuel = fuel;
    }

    drive(fuelLoss) {
        this.fuel -= fuelLoss;
    }

    get parts() {
        return this._parts;
    }

    set parts(parts) {
        this._parts = {
            engine: parts.engine,
            power: parts.power,
            quality: parts.engine * parts.power
        };
    }
}