export default class Currency {
  constructor(code, name) {
    this._name = name;
    this._code = code;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get name() {
    return this._name;
  }

  set code(value) {
    if (typeof value === 'string') {
      this._code = value;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  get code() {
    return this._code;
  }

  displayFullCurrency() {
    console.log(`${this._name} (${this._code})`);
  }
}
