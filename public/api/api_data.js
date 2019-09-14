define({ "api": [
  {
    "type": "post",
    "url": "/user",
    "title": "Create",
    "name": "CreateUser",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>User usermane</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "passwaord",
            "description": "<p>User password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"email\": \"marcello@mail.com\",\n   \"username\": \"Marcello Jr\",\n   \"password\": \"123456\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Usuário criado com sucesso\",\n   \"user\": [{\n     \"id\": \"eb76cd10-367b-447d-b238-fa8e9eef2a1f\",\n     \"id_profile\": 1,\n     \"email\": \"marcello@mail.com\",\n     \"username\": \"Marcello Jr\",\n     \"password\": \"$2b$10$qnkfSsxQEjdTW0CHGw1z0eR/vko.vhJrqpq.xeb/T0nR4R55VpNy.\",\n     \"avatar_url\": null,\n     \"create_date\": \"2019-09-14T19:25:26.560Z\",\n     \"active\": true\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{\n     \"msg\": \"Invalid value\",\n     \"param\": \"email\",\n     \"location\": \"body\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/user/controller.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/user/:id",
    "title": "Delete",
    "name": "DeleteUser",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"id\": eb76cd10-367b-447d-b238-fa8e9eef2a1f\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "ID",
            "description": "<p>User ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Usuário deletado com sucesso\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{\n     \"msg\": \"Invalid value\",\n     \"param\": \"id\",\n     \"location\": \"body\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/user/controller.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Get (By ID)",
    "name": "GetUser",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "ID",
            "description": "<p>User ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"id\": eb76cd10-367b-447d-b238-fa8e9eef2a1f\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Usuário criado com sucesso\",\n   \"user\": {\n     \"id\": \"eb76cd10-367b-447d-b238-fa8e9eef2a1f\",\n     \"id_profile\": 1,\n     \"email\": \"marcello@mail.com\",\n     \"username\": \"Marcello Jr\",\n     \"password\": \"$2b$10$qnkfSsxQEjdTW0CHGw1z0eR/vko.vhJrqpq.xeb/T0nR4R55VpNy.\",\n     \"avatar_url\": null,\n     \"create_date\": \"2019-09-14T19:25:26.560Z\",\n     \"active\": true\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{\n     \"msg\": \"Invalid value\",\n     \"param\": \"id\",\n     \"location\": \"body\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/user/controller.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "Get all",
    "name": "GetUsers",
    "group": "User",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   [\n      {\n         \"id\": \"647ac188-62c8-4618-8a0a-be14174aac49\",\n         \"id_profile\": 3,\n         \"email\": \"buildinvest@admin.com\",\n         \"username\": \"Buildinvest Admin\",\n         \"password\": \"$2b$10$o8Av/20hYJX3IKRRUKK5UO/bfjWIbYTIpLc6dtlvnk8NrTxTdf9r2\",\n         \"avatar_url\": null,\n         \"create_date\": \"2019-09-08T18:12:22.205Z\",\n         \"active\": true\n      },\n      {\n         \"id\": \"eb76cd10-367b-447d-b238-fa8e9eef2a1f\",\n         \"id_profile\": 1,\n         \"email\": \"marcello@mail.com\",\n         \"username\": \"Marcello Jr\",\n         \"password\": \"$2b$10$qnkfSsxQEjdTW0CHGw1z0eR/vko.vhJrqpq.xeb/T0nR4R55VpNy.\",\n         \"avatar_url\": null,\n         \"create_date\": \"2019-09-14T19:25:26.560Z\",\n         \"active\": true\n      }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n  {\n     \"code\": 9999,\n     \"message\": \"Requisição inválida\",\n     \"errors\": [{}]\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/user/controller.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "Login",
    "name": "LoginUser",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"email\": \"marcello@mail.com\",\n   \"password\": \"123456\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0003\",\n   \"message\": \"Usuario logado\",\n   \"token\": \"eyJhbGciOiJIUzI1NiIsIdkadjJHJHKkjnbajbHBNAIKGMA\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 2505,\n   \"message\": \"Email ou senha inválido\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/user/controller.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user",
    "title": "Update",
    "name": "UpdateUser",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>User username</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "passwaord",
            "description": "<p>User password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"email\": \"marcello@mail.com\",\n   \"username\": \"Marcello Jr\",\n   \"password\": \"123456\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Usuário atualizado com sucesso\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{\n     \"msg\": \"Invalid value\",\n     \"param\": \"email\",\n     \"location\": \"body\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/user/controller.js",
    "groupTitle": "User"
  }
] });
