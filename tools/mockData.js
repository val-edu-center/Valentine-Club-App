const users = {
  "results": [
    {
        "objectId": "ScPJhZhiYy",
        "username": "djimenez",
        "createdAt": "2021-04-08T23:45:45.777Z",
        "updatedAt": "2021-11-07T14:02:01.889Z",
        "ACL": {
            "*": {
                "read": true
            },
            "ScPJhZhiYy": {
                "read": true,
                "write": true
            }
        }
    },
    {
        "objectId": "VXgWG7dGjW",
        "username": "jcanty",
        "createdAt": "2021-10-26T03:45:11.089Z",
        "updatedAt": "2021-11-07T14:03:35.327Z",
        "ACL": {
            "*": {
                "read": true
            },
            "VXgWG7dGjW": {
                "read": true,
                "write": true
            },
            "role:Staff": {
                "read": true,
                "write": true
            },
            "role:Director": {
                "read": true,
                "write": true
            }
        }
    },
    {
        "objectId": "7vR9hH9JG9",
        "username": "Yeet",
        "createdAt": "2021-11-01T00:20:26.329Z",
        "updatedAt": "2021-11-07T14:01:18.842Z",
        "ACL": {
            "7vR9hH9JG9": {
                "read": true,
                "write": true
            },
            "*": {
                "read": true
            }
        }
    },
    {
        "objectId": "n29DH7w6Vw",
        "username": "Temaris",
        "createdAt": "2021-11-03T19:16:55.545Z",
        "updatedAt": "2021-11-07T01:30:05.081Z",
        "ACL": {
            "*": {
                "read": true
            },
            "n29DH7w6Vw": {
                "read": true,
                "write": true
            },
            "role:Director": {
                "read": true,
                "write": true
            }
        }
    },
    {
        "objectId": "SwONbdgcpV",
        "username": "test2",
        "createdAt": "2021-11-06T17:00:31.632Z",
        "updatedAt": "2021-11-06T17:11:52.321Z",
        "ACL": {
            "*": {
                "read": true
            },
            "SwONbdgcpV": {
                "read": true,
                "write": true
            },
            "role:Director": {
                "read": true,
                "write": true
            },
            "role:Staff": {
                "read": true,
                "write": true
            }
        }
    },
    {
        "objectId": "DhitI8jDbZ",
        "username": "test3",
        "createdAt": "2021-11-06T17:06:58.084Z",
        "updatedAt": "2021-11-06T17:11:37.603Z",
        "ACL": {
            "*": {
                "read": true
            },
            "DhitI8jDbZ": {
                "read": true,
                "write": true
            },
            "role:Staff": {
                "read": true,
                "write": true
            },
            "role:Director": {
                "read": true,
                "write": true
            }
        }
    },
    {
        "objectId": "BSXBqo8J7I",
        "username": "test7",
        "createdAt": "2021-11-06T17:08:13.906Z",
        "updatedAt": "2021-11-06T17:10:08.270Z",
        "ACL": {
            "*": {
                "read": true
            },
            "BSXBqo8J7I": {
                "read": true,
                "write": true
            },
            "role:Staff": {
                "read": true,
                "write": true
            },
            "role:Director": {
                "read": true,
                "write": true
            }
        }
    }
]
}

const newCredentials = {
  username: '',
  password: ''
}

const login = {
  "objectId": "7vR9hH9JG9",
  "username": "ya",
  "createdAt": "2021-10-30T22:43:26.382Z",
  "updatedAt": "2021-10-30T22:43:26.382Z",
  "ACL": {
    "*": {
      "read": true,
      "write": true
    }
  },
  "sessionToken": "r:46008f49e00cf39391ab752133674c6e"
}

const newUser = {
  id: null,
  username: "",
  password: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCredentials,
  newUser,
  users,
  login
};
