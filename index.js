const Node = require('./lib/node');
const Tree = require('./lib/tree');

let root = new Node();

let tree = new Tree(root);

tree.addSpecification('group',
  {
    "swagger": "2.0",
    "info": {
      "version": "1.0.0",
      "title": "Swagger Petstore",
      "description": "A sample API that uses a petstore as an example to demonstrate features in the swagger-2.0 specification",
      "termsOfService": "http://swagger.io/terms/",
      "contact": {
        "name": "Swagger API Team"
      },
      "license": {
        "name": "MIT"
      }
    },
    "host": "petstore.swagger.io",
    "basePath": "/api",
    "schemes": [
      "http"
    ],
    "consumes": [
      "application/json"
    ],
    "produces": [
      "application/json"
    ],
    "paths": {
      "/pets/store": {},
      "/pets/store/for": {},
      "/pets/palace": {},
      "/pets/store/for/the": {},
      "/pets/store/for/the/win": {},
    },
    "definitions": {
      "Pet": {
        "type": "object",
        "required": [
          "id",
          "name"
        ],
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "name": {
            "type": "string"
          },
          "tag": {
            "type": "string"
          }
        }
      }
    }
  });

console.log(JSON.stringify(tree.lookup('/path1/sub-path/sub-sub-path', 'get')));