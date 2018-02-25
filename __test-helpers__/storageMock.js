class LocalStorage {
  constructor() {
    this.store = {};
    this.length = 0;
  }

  setItem(key, string) {
    this.store[key] = string;
    this.length++;
  }

  getItem(key) {
    return this.store[key];
  }

  clear() {
    this.store = {};
  }
}

global.localStorage = new LocalStorage;

