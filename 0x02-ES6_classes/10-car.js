export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  set brand(value) {
    this._brand = value;
  }

  get brand() {
    return this._brand;
  }

  set motor(value) {
    this._motor = value;
  }

  get motor() {
    return this._motor;
  }

  set color(value) {
    this._color = value;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Create = this.constructor[Symbol.species];
    return new Create();
  }
}
