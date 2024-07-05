export default class HolbertonCourse {
  // Constructor function
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter methods
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // Setter methods
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name should be a string!');
    } else this._name = value;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('length should be a number!');
    } else this._length = value;
  }

  set students(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('students should be an Array!');
    } else {
      value.forEach((el) => {
        if (typeof el !== 'string') {
          throw new TypeError('Each name should be a string!');
        }
      });
    }

    this._students = value;
  }
}
