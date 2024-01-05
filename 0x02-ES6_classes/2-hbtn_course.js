export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
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

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw new TypeError('Length must be a Number');
    }
  }

  get length() {
    return this._length;
  }

  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an Array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an Array of strings');
    }
    this._students = value;
  }

  get students() {
    return this._students;
  }
}
