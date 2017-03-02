const Node = require('./lib/node');
const Tree = require('./lib/tree');

let root = new Node();

let node1 = new Node('path1');
node1.addChild(new Node('sub-path', ['get']).addChild(new Node('sub-sub-path')));
node1.addChild(new Node('sub-path', ['post']));

root.addChild(node1);

let node2 = new Node('path');

node2.addChild(new Node('sub-path', ['get']));
node2.addChild(new Node('sub-path', ['post']));

root.addChild(node2);

let tree = new Tree(root);

console.log(JSON.stringify(tree.lookup('/path1/sub-path/sub-sub-path', 'get')));