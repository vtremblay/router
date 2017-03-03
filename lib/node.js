class Node {

  constructor (key, methods, produces, value) {
    Reflect.defineProperty(this, 'key', {
      get: () => key,
      enumerable: true
    });

    Reflect.defineProperty(this, 'methods', {
      get: () => methods,
      enumerable: true
    });

    Reflect.defineProperty(this, 'produces', {
      get: () => produces,
      enumerable: true
    });

    Reflect.defineProperty(this, 'value', {
      get: () => value,
      enumerable: true
    });

    Reflect.defineProperty(this, 'parent', {
      writable: true,
      enumerable: false
    });

    Reflect.defineProperty(this, 'children', {
      value: [],
      writable: true,
      enumerable: false
    });
  }

  addChild(child) {
    child.parent = this;
    this.children.push(child)
  }

  toJSON() {
    return {
      key: this.key,
      methods: this.methods,
      produces: this.produces,
      value: this.value
    }
  }
}

module.exports = Node;