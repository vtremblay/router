const Node = require('./node');

class Tree {
  constructor(node) {

    Reflect.defineProperty(this, 'root', {
      get: () => node,
      enumerable: true
    });
  }

  lookup(path, method) {
    let keys = path.split('/').slice(1);

    let node = this.root;

    keys.forEach(key => {
      if (node) {
        node = node.children.find(child => this.isMatchingNode(child, key, method));
      }
    });

    return node;
  }

  isMatchingNode(child, key, method) {
    return child.key === key && (!child.methods || child.methods.includes(method));
  }
}

module.exports = Tree;