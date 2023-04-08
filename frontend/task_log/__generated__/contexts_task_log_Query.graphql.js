/**
 * @generated SignedSource<<c4e2ec0350af9102a7af8c39562b6cdb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "taskId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "taskId",
        "variableName": "taskId"
      }
    ],
    "concreteType": "TaskLog",
    "kind": "LinkedField",
    "name": "taskLogMessages",
    "plural": true,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "assistantTimestamp",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "userTimestamp",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "userResponse",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "command",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Agent",
        "kind": "LinkedField",
        "name": "agent",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "contexts_task_log_Query",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "contexts_task_log_Query",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "56ceca7e8eb81cc0a03d1746ecdd350d",
    "id": null,
    "metadata": {},
    "name": "contexts_task_log_Query",
    "operationKind": "query",
    "text": "query contexts_task_log_Query(\n  $taskId: ID!\n) {\n  taskLogMessages(taskId: $taskId) {\n    id\n    assistantTimestamp\n    userTimestamp\n    userResponse\n    command\n    agent {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();

node.hash = "cb97356c78e2eb1b1f60cc89195f0d78";

module.exports = node;
