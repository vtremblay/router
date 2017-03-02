class Node {

  constructor (key, methods, value) {
    Reflect.defineProperty(this, 'key', {
      get: () => key,
      enumerable: true
    });

    Reflect.defineProperty(this, 'methods', {
      get: () => methods,
      enumerable: true
    });

    Reflect.defineProperty(this, 'value', {
      get: () => value,
      enumerable: true
    });

    Reflect.defineProperty(this, 'children', {
      value: [],
      writable: true,
      enumerable: false
    });
  }

  addChild(child) {
    this.children.push(child)
  }
}

module.exports = Node;