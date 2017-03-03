const Node = require('./node');

class Tree {
  constructor(node) {

    Reflect.defineProperty(this, 'root', {
      get: () => node,
      enumerable: true
    });
  }

  addSpecification(group, specification) {
    let groupNode = this.lookup(`/${group}`);

    if (!groupNode) {
      groupNode = new Node(group);
      this.root.addChild(groupNode);
    }

    if (specification.basePath) {
      let keys = specification.basePath.split('/').slice(1);

      keys.forEach(key => {
        let existingNode = groupNode.children.find(child => child.key === key);

        if (!existingNode) {
          let newNode = new Node(key);
          groupNode.addChild(newNode);
          groupNode = newNode;
        } else {
          groupNode = existingNode;
        }
      });
    }

    Object.keys(specification.paths).forEach(path => {
      let keys = path.split('/').slice(1);
      let node = groupNode;

      keys.forEach(key => {
        let existingNode = node.children.find(child => child.key === key);

        if (!existingNode) {
          let newNode = new Node(key);
          node.addChild(newNode);
          node = newNode;
        } else {
          node = existingNode;
        }
      });
    })
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

  isMatchingNode(child, key, method, produces) {
    let isMethodMatching = !child.methods || child.methods.includes(method);
    let isKeyMatching = child.key === key;
    let isProducesMatching = !produces || !child.produces || child.produces.includes(produces);

    return isMethodMatching && isProducesMatching && isKeyMatching;
  }
}

module.exports = Tree;