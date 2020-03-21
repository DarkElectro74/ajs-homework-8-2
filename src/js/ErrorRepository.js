export default class ErrorRepository {
  constructor() {
    this.mapError = new Map();
    this.mapError.set(111, 'error111');
    this.mapError.set(222, 'error222');
    this.mapError.set(333, 'error333');
    this.mapError.set(444, 'error444');
    this.mapError.set(555, 'error555');
  }

  errorSet(key, text) {
    this.mapError.set(key, text);
  }

  translate(code) {
    if (this.mapError.get(code)) {
      return this.mapError.get(code);
    }

    return 'Unknown error';
  }
}
