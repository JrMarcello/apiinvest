define({ "api": [
  {
    "type": "post",
    "url": "/builder",
    "title": "Create",
    "name": "CreateBuilder",
    "group": "Builder",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "params",
            "description": "<p>Builder params em breve aqui</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"builder\": {\n     \"id_user\": \"647ac188-62c8-4618-8a0a-be14174aac49\",\n     \"cnpj\": \"34096667000152\",\n     \"company_name\": \"Razão social da Construtora\",\n     \"company_fancy_name\": \"Nome fantasia da Construtora\",\n     \"address_street\": \"Rua da construtora\",\n     \"address_number\": \"123\",\n     \"address_neighborhood\": \"Bairro\",\n     \"address_city\": \"Cidade\",\n     \"address_state\": \"Estado\",\n     \"address_country\": \"Pais\",\n     \"address_cep\": \"58000000\"\n   },\n   \"phones\": [{\"number\":\"8332333333\"},{\"number\":\"8332344444\"}],\n   \"partners\": [{\n     \"name\": \"Nome do socio 1\",\n     \"company_name\": null,\n     \"cpf\": \"06595212446\",\n     \"cnpj\": null,\n     \"phone\":\"8332447788\",\n     \"address_street\": \"Rua do socio 1\",\n     \"address_number\": \"123\",\n     \"address_neighborhood\": \"Bairro\",\n     \"address_city\": \"Cidade\",\n     \"address_state\": \"Estado\",\n     \"address_country\": \"Pais\",\n     \"address_cep\": \"58000000\"\n   },\n   {\n      \"name\": \"Nome fantasia do socio 2\",\n      \"company_name\": \"Razão social do socio 2\",\n      \"cpf\": null,\n      \"cnpj\": \"34096667000151\",\n      \"phone\":\"8332447788\",\n      \"address_street\": \"Rua do socio 2\",\n      \"address_number\": \"123\",\n      \"address_neighborhood\": \"Bairro\",\n      \"address_city\": \"Cidade\",\n      \"address_state\": \"Estado\",\n      \"address_country\": \"Pais\",\n      \"address_cep\": \"58000000\"\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Construtora criada com sucesso\",\n   \"builder\": {\n     \"id_user\": \"647ac188-62c8-4618-8a0a-be14174aac49\",\n     \"cnpj\": \"34096667000152\",\n     \"company_name\": \"Razão social da Construtora\",\n     \"company_fancy_name\": \"Nome fantasia da Construtora\",\n     \"address_street\": \"Rua da construtora\",\n     \"address_number\": \"123\",\n     \"address_neighborhood\": \"Bairro\",\n     \"address_city\": \"Cidade\",\n     \"address_state\": \"Estado\",\n     \"address_country\": \"Pais\",\n     \"address_cep\": \"58000000\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{\n     \"msg\": \"Invalid value\",\n     \"param\": \"cnpj\",\n     \"location\": \"body\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/builder/controller.js",
    "groupTitle": "Builder"
  },
  {
    "type": "post",
    "url": "/builder/:idBuilder/partners",
    "title": "Create Partners",
    "name": "CreateBuilderPartner",
    "group": "Builder",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "idBuilder",
            "description": "<p>Builder ID</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "partners",
            "description": "<p>Partners data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \"partners\": [{\n    \"name\": \"Nome do socio 1\",\n    \"company_name\": null,\n    \"cpf\": \"06595212446\",\n    \"cnpj\": null,\n    \"phone\": \"8332447788\",\n    \"address_street\": \"Rua do socio 1\",\n    \"address_number\": \"123\",\n    \"address_neighborhood\": \"Bairro\",\n    \"address_city\": \"Cidade\",\n    \"address_state\": \"Estado\",\n    \"address_country\": \"Pais\",\n    \"address_cep\": \"58000000\"\n  }]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 9000,\n   \"message\": \"Sócio criado com sucesso\",\n   \"partners\": [\n     {\n       \"id\": \"4\",\n       \"id_builder\": \"3136962d-e525-4eb8-9721-ba7dc329d622\",\n       \"name\": \"Nome do socio 2\",\n       \"company_name\": null,\n       \"cpf\": \"06595212556\",\n       \"cnpj\": null,\n       \"phone\": \"8332447799\",\n       \"address_street\": \"Rua do socio 2\",\n       \"address_number\": \"321\",\n       \"address_neighborhood\": \"Bairro\",\n       \"address_city\": \"Cidade\",\n       \"address_state\": \"Estado\",\n       \"address_country\": \"Pais\",\n       \"address_cep\": \"58000000\",\n       \"created_date\": \"2019-12-08T18:31:15.589Z\"\n     }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{\n     \"msg\": \"Invalid value\",\n     \"param\": \"cnpj\",\n     \"location\": \"body\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/builder-partner/controller.js",
    "groupTitle": "Builder"
  },
  {
    "type": "post",
    "url": "/builder/:idBuilder/phones",
    "title": "Create Phone",
    "name": "CreateBuilderPhone",
    "group": "Builder",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "idBuilder",
            "description": "<p>Builder ID</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "phones",
            "description": "<p>Phones numbers</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \"phones\": [{ \"83988317864\" }] }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Telefone criado com sucesso\",\n   \"phone\": [{\n     \"id\": \"123\",\n     \"id_builder\": \"eb76cd10-367b-447d-b238-fa8e9eef2a1f\",\n     \"number\": \"83988317864\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{\n     \"msg\": \"Invalid value\",\n     \"param\": \"numero\",\n     \"location\": \"body\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/builder-phone/controller.js",
    "groupTitle": "Builder"
  },
  {
    "type": "delete",
    "url": "/builder/:id",
    "title": "Delete",
    "name": "DeleteBuilder",
    "group": "Builder",
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
            "description": "<p>Builder ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Construtora deletada com sucesso\"\n}",
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
    "filename": "src/modules/builder/controller.js",
    "groupTitle": "Builder"
  },
  {
    "type": "delete",
    "url": "/builder/:idBuilder/partners",
    "title": "Delete Partners",
    "name": "DeleteBuilderPartner",
    "group": "Builder",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "idBuilder",
            "description": "<p>Builder ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \"ids\": [1, 2] }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Sócio deletado com sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{\n     \"msg\": \"Invalid value\",\n     \"param\": \"id\",\n     \"location\": \"params\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/builder-partner/controller.js",
    "groupTitle": "Builder"
  },
  {
    "type": "delete",
    "url": "/builder/:idBuilder/phones",
    "title": "Delete Phones",
    "name": "DeleteBuilderPhone",
    "group": "Builder",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "idBuilder",
            "description": "<p>Builder ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \"ids\": [1, 2] }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Telefone deletado com sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{\n     \"msg\": \"Invalid value\",\n     \"param\": \"id\",\n     \"location\": \"params\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/builder-phone/controller.js",
    "groupTitle": "Builder"
  },
  {
    "type": "get",
    "url": "/builder/:id/buildings",
    "title": "Get all Buildings (By Builder ID)",
    "name": "GetAllBuildingsByID",
    "group": "Builder",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "id",
            "description": "<p>Builder ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    \"id\": \"69cb237c-c53a-4619-8433-d80719c0c18f\",\n    \"id_builder\": \"7de6982f-6989-45bd-97d4-973ebeb75295\",\n    \"spe\": \"34096667000199\",\n    \"registration\": \"789456\",\n    \"name\": \"Nome da obra\",\n    \"description\": \"Descrição da obra\",\n    \"address_street\": \"Rua da obraa\",\n    \"address_number\": \"123\",\n    \"address_neighborhood\": \"Bairro\",\n    \"address_city\": \"Cidade\",\n    \"address_state\": \"Estado\",\n    \"address_country\": \"Pais\",\n    \"address_cep\": \"58000000\",\n    \"amount\": \"1000000.00\",\n    \"initial_date\": \"2019-08-27T00:00:00.000Z\",\n    \"final_date\": \"2022-08-27T00:00:00.000Z\",\n    \"created_date\": \"2019-09-24T00:50:58.550Z\",\n    \"active\": true\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n  {\n     \"code\": 9999,\n     \"message\": \"Requisição inválida\",\n     \"errors\": [{\n       \"msg\": \"Invalid value\",\n       \"param\": \"id\",\n       \"location\": \"params\"\n     }]\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/builder/controller.js",
    "groupTitle": "Builder"
  },
  {
    "type": "get",
    "url": "/builder/:id",
    "title": "Get (By ID)",
    "name": "GetBuilder",
    "group": "Builder",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "ID",
            "description": "<p>Builder ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"id\": \"7de6982f-6989-45bd-97d4-973ebeb75295\",\n   \"id_user\": \"647ac188-62c8-4618-8a0a-be14174aac49\",\n   \"cnpj\": \"34096667000152\",\n   \"company_name\": \"Razão social da Construtora\",\n   \"company_fancy_name\": \"Nome fantasia da Construtora\",\n   \"address_street\": \"Rua da construtora\",\n   \"address_number\": \"123\",\n   \"address_neighborhood\": \"Bairro\",\n   \"address_city\": \"Cidade\",\n   \"address_state\": \"Estado\",\n   \"address_country\": \"Pais\",\n   \"address_cep\": \"58000000\",\n   \"logo_url\": null,\n   \"created_date\": \"2019-09-24T00:01:22.722Z\",\n   \"active\": true,\n   \"phones\": [\n     {\n        \"id\": \"1\",\n        \"id_builder\": \"7de6982f-6989-45bd-97d4-973ebeb75295\",\n        \"number\": \"8332333333\"\n     },\n     {\n        \"id\": \"2\",\n        \"id_builder\": \"7de6982f-6989-45bd-97d4-973ebeb75295\",\n        \"number\": \"8332344444\"\n     }\n   ],\n   \"partners\": [\n     {\n        \"id\": \"1\",\n        \"id_builder\": \"7de6982f-6989-45bd-97d4-973ebeb75295\",\n        \"name\": \"Nome do socio 1\",\n        \"company_name\": null,\n        \"cpf\": \"06595212446\",\n        \"cnpj\": null,\n        \"phone\": \"8332447788\",\n        \"address_street\": \"Rua do socio 1\",\n        \"address_number\": \"123\",\n        \"address_neighborhood\": \"Bairro\",\n        \"address_city\": \"Cidade\",\n        \"address_state\": \"Estado\",\n        \"address_country\": \"Pais\",\n        \"address_cep\": \"58000000\",\n        \"created_date\": \"2019-09-24T00:01:22.960Z\"\n     },\n     {\n        \"id\": \"2\",\n        \"id_builder\": \"7de6982f-6989-45bd-97d4-973ebeb75295\",\n        \"name\": \"Nome fantasia do socio 2\",\n        \"company_name\": \"Razão social do socio 2\",\n        \"cpf\": null,\n        \"cnpj\": \"34096667000151\",\n        \"phone\": \"8332447788\",\n        \"address_street\": \"Rua do socio 2\",\n        \"address_number\": \"123\",\n        \"address_neighborhood\": \"Bairro\",\n        \"address_city\": \"Cidade\",\n        \"address_state\": \"Estado\",\n        \"address_country\": \"Pais\",\n        \"address_cep\": \"58000000\",\n        \"created_date\": \"2019-09-24T00:01:22.960Z\"\n     }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{\n     \"msg\": \"Invalid value\",\n     \"param\": \"id\",\n     \"location\": \"params\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/builder/controller.js",
    "groupTitle": "Builder"
  },
  {
    "type": "get",
    "url": "/builder/user/:id",
    "title": "Get (By User ID)",
    "name": "GetBuilderByUserId",
    "group": "Builder",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "id",
            "description": "<p>User ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   [{\n       \"code\": 5000,\n       \"message\": \"Construtora criada com sucesso\",\n         \"builder\": {\n           \"id\": \"7de6982f-6989-45bd-97d4-973ebeb75295\",\n           \"id_user\": \"647ac188-62c8-4618-8a0a-be14174aac49\",\n           \"cnpj\": \"34096667000152\",\n           \"company_name\": \"Razão social da Construtora\",\n           \"company_fancy_name\": \"Nome fantasia da Construtora\",\n           \"address_street\": \"Rua da construtora\",\n           \"address_number\": \"123\",\n           \"address_neighborhood\": \"Bairro\",\n           \"address_city\": \"Cidade\",\n           \"address_state\": \"Estado\",\n           \"address_country\": \"Pais\",\n           \"address_cep\": \"58000000\",\n           \"logo_url\": null,\n           \"created_date\": \"2019-09-24T00:01:22.722Z\",\n           \"active\": true\n         }\n    }]\n}",
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
    "filename": "src/modules/builder/controller.js",
    "groupTitle": "Builder"
  },
  {
    "type": "get",
    "url": "/builder/:idBuilder/partners",
    "title": "Get Partners (By Builder ID)",
    "name": "GetBuilderPartner",
    "group": "Builder",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "ID",
            "description": "<p>Builder ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n   \"id\": \"1\",\n   \"id_builder\": \"7de6982f-6989-45bd-97d4-973ebeb75295\",\n   \"name\": \"Nome do socio 1\",\n   \"company_name\": null,\n   \"cpf\": \"06595212446\",\n   \"cnpj\": null,\n   \"phone\": \"8332447788\",\n   \"address_street\": \"Rua do socio 1\",\n   \"address_number\": \"123\",\n   \"address_neighborhood\": \"Bairro\",\n   \"address_city\": \"Cidade\",\n   \"address_state\": \"Estado\",\n   \"address_country\": \"Pais\",\n   \"address_cep\": \"58000000\",\n   \"created_date\": \"2019-09-24T00:01:22.960Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{\n     \"msg\": \"Invalid value\",\n     \"param\": \"id\",\n     \"location\": \"params\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/builder-partner/controller.js",
    "groupTitle": "Builder"
  },
  {
    "type": "get",
    "url": "/builder/:idBuilder/phones",
    "title": "Get Phone (By Builder ID)",
    "name": "GetBuilderPhone",
    "group": "Builder",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "Builder",
            "description": "<p>ID Builder ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n   \"id\": 123,\n   \"id_builder\": \"eb76cd10-367b-447d-b238-fa8e9eef2a1f\",\n   \"number\": \"83988317864\"\n}]",
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
    "filename": "src/modules/builder-phone/controller.js",
    "groupTitle": "Builder"
  },
  {
    "type": "get",
    "url": "/builder",
    "title": "Get all",
    "name": "GetBuilders",
    "group": "Builder",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   [{\n       \"code\": 5000,\n       \"message\": \"Construtora criada com sucesso\",\n         \"builder\": {\n           \"id\": \"7de6982f-6989-45bd-97d4-973ebeb75295\",\n           \"id_user\": \"647ac188-62c8-4618-8a0a-be14174aac49\",\n           \"cnpj\": \"34096667000152\",\n           \"company_name\": \"Razão social da Construtora\",\n           \"company_fancy_name\": \"Nome fantasia da Construtora\",\n           \"address_street\": \"Rua da construtora\",\n           \"address_number\": \"123\",\n           \"address_neighborhood\": \"Bairro\",\n           \"address_city\": \"Cidade\",\n           \"address_state\": \"Estado\",\n           \"address_country\": \"Pais\",\n           \"address_cep\": \"58000000\",\n           \"logo_url\": null,\n           \"created_date\": \"2019-09-24T00:01:22.722Z\",\n           \"active\": true\n         }\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n  {\n     \"code\": 9999,\n     \"message\": \"Erro ao buscar construtora(s)\",\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/builder/controller.js",
    "groupTitle": "Builder"
  },
  {
    "type": "put",
    "url": "/builder",
    "title": "Update",
    "name": "UpdateBuilder",
    "group": "Builder",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "params",
            "description": "<p>Builder params em breve</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"id_user\": \"647ac188-62c8-4618-8a0a-be14174aac49\",\n   \"cnpj\": \"34096667000152\",\n   \"company_name\": \"Razão social da Construtora\",\n   \"company_fancy_name\": \"Nome fantasia da Construtora\",\n   \"address_street\": \"Rua da construtora\",\n   \"address_number\": \"123\",\n   \"address_neighborhood\": \"Bairro\",\n   \"address_city\": \"Cidade\",\n   \"address_state\": \"Estado\",\n   \"address_country\": \"Pais\",\n   \"address_cep\": \"58000000\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Construtora atualizada com sucesso\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{\n     \"msg\": \"Invalid value\",\n     \"param\": \"cnpj\",\n     \"location\": \"body\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/builder/controller.js",
    "groupTitle": "Builder"
  },
  {
    "type": "post",
    "url": "/building/:idBuilding/images",
    "title": "Add Images",
    "name": "CreateBuilderImage",
    "group": "Building",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "idBuilding",
            "description": "<p>Building ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"images\": [[image buffer], [image buffer]]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Imagens enviadas com sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{}]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/building-image/controller.js",
    "groupTitle": "Building"
  },
  {
    "type": "post",
    "url": "/building",
    "title": "Create",
    "name": "CreateBuilding",
    "group": "Building",
    "version": "1.0.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"id_builder\": \"7de6982f-6989-45bd-97d4-973ebeb75295\",\n   \"spe\": \"34096667000199\",\n   \"registration\": \"789456\",\n   \"name\": \"Nome da obra\",\n   \"description\": \"Descrição da obra\",\n   \"address_street\": \"Rua da obraa\",\n   \"address_number\": \"123\",\n   \"address_neighborhood\": \"Bairro\",\n   \"address_city\": \"Cidade\",\n   \"address_state\": \"Estado\",\n   \"address_country\": \"Pais\",\n   \"address_cep\": \"58000000\",\n   \"amount\": \"1000000.00\",\n   \"initial_date\": \"2019-08-27T00:00:00.000Z\",\n   \"final_date\": \"2022-08-27T00:00:00.000Z\",\n   \"created_date\": \"2019-09-24T00:50:58.550Z\",\n   \"active\": true\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Obra criada com sucesso\",\n   \"builder\": [{\n     \"code\": 6000,\n     \"message\": \"Obra criada com sucesso\",\n     \"building\": {\n       \"id\": \"69cb237c-c53a-4619-8433-d80719c0c18f\",\n       \"id_builder\": \"7de6982f-6989-45bd-97d4-973ebeb75295\",\n       \"cnpj\": \"34096667000199\",\n       \"registration\": \"789456\",\n       \"name\": \"Nome da obra\",\n       \"description\": \"Descrição da obra\",\n       \"address_street\": \"Rua da obraa\",\n       \"address_number\": \"123\",\n       \"address_neighborhood\": \"Bairro\",\n       \"address_city\": \"Cidade\",\n       \"address_state\": \"Estado\",\n       \"address_country\": \"Pais\",\n       \"address_cep\": \"58000000\",\n       \"vgv\": \"1000000.00\",\n       \"initial_date\": \"2019-08-27T00:00:00.000Z\",\n       \"final_date\": \"2022-08-27T00:00:00.000Z\",\n       \"created_date\": \"2019-09-24T00:50:58.550Z\",\n       \"active\": true\n     }\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{\n     \"msg\": \"Invalid value\",\n     \"param\": \"spe\",\n     \"location\": \"body\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/building/controller.js",
    "groupTitle": "Building"
  },
  {
    "type": "delete",
    "url": "/building/:idBuilding/images",
    "title": "Delete Images",
    "name": "DeleteBuilderImages",
    "group": "Building",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "idBuilder",
            "description": "<p>Builder ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"ids\": [1, 2]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Imagens deletadas com sucesso\"\n}",
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
    "filename": "src/modules/building-image/controller.js",
    "groupTitle": "Building"
  },
  {
    "type": "delete",
    "url": "/building/:id",
    "title": "Delete",
    "name": "DeleteBuilding",
    "group": "Building",
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
            "description": "<p>Building ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Obra deletada com sucesso\"\n}",
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
    "filename": "src/modules/building/controller.js",
    "groupTitle": "Building"
  },
  {
    "type": "get",
    "url": "/building/avaliables",
    "title": "Get avaliables",
    "name": "GetAvaliablesBuildings",
    "group": "Building",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    \"id\": \"69cb237c-c53a-4619-8433-d80719c0c18f\",\n    \"id_builder\": \"7de6982f-6989-45bd-97d4-973ebeb75295\",\n    \"spe\": \"34096667000199\",\n    \"registration\": \"789456\",\n    \"name\": \"Nome da obra\",\n    \"description\": \"Descrição da obra\",\n    \"address_street\": \"Rua da obraa\",\n    \"address_number\": \"123\",\n    \"address_neighborhood\": \"Bairro\",\n    \"address_city\": \"Cidade\",\n    \"address_state\": \"Estado\",\n    \"address_country\": \"Pais\",\n    \"address_cep\": \"58000000\",\n    \"amount\": \"1000000.00\",\n    \"initial_date\": \"2019-08-27T00:00:00.000Z\",\n    \"final_date\": \"2022-08-27T00:00:00.000Z\",\n    \"created_date\": \"2019-09-24T00:50:58.550Z\",\n    \"active\": true\n}]",
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
    "filename": "src/modules/building/controller.js",
    "groupTitle": "Building"
  },
  {
    "type": "get",
    "url": "/building/:id",
    "title": "Get (By ID)",
    "name": "GetBuilding",
    "group": "Building",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "ID",
            "description": "<p>Building ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"id\": \"69cb237c-c53a-4619-8433-d80719c0c18f\",\n   \"id_builder\": \"7de6982f-6989-45bd-97d4-973ebeb75295\",\n   \"spe\": \"34096667000199\",\n   \"registration\": \"789456\",\n   \"name\": \"Nome da obra\",\n   \"description\": \"Descrição da obra\",\n   \"address_street\": \"Rua da obraa\",\n   \"address_number\": \"123\",\n   \"address_neighborhood\": \"Bairro\",\n   \"address_city\": \"Cidade\",\n   \"address_state\": \"Estado\",\n   \"address_country\": \"Pais\",\n   \"address_cep\": \"58000000\",\n   \"amount\": \"1000000.00\",\n   \"initial_date\": \"2019-08-27T00:00:00.000Z\",\n   \"final_date\": \"2022-08-27T00:00:00.000Z\",\n   \"created_date\": \"2019-09-24T00:50:58.550Z\",\n   \"active\": true,\n   \"images\": [],\n   \"fundraisings\": []\n}",
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
    "filename": "src/modules/building/controller.js",
    "groupTitle": "Building"
  },
  {
    "type": "get",
    "url": "/building/builder/:id",
    "title": "Get all (By Builder ID)",
    "name": "GetBuildingByBuilderId",
    "group": "Building",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "ID",
            "description": "<p>Builder ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    \"id\": \"69cb237c-c53a-4619-8433-d80719c0c18f\",\n    \"id_builder\": \"7de6982f-6989-45bd-97d4-973ebeb75295\",\n    \"spe\": \"34096667000199\",\n    \"registration\": \"789456\",\n    \"name\": \"Nome da obra\",\n    \"description\": \"Descrição da obra\",\n    \"address_street\": \"Rua da obraa\",\n    \"address_number\": \"123\",\n    \"address_neighborhood\": \"Bairro\",\n    \"address_city\": \"Cidade\",\n    \"address_state\": \"Estado\",\n    \"address_country\": \"Pais\",\n    \"address_cep\": \"58000000\",\n    \"amount\": \"1000000.00\",\n    \"initial_date\": \"2019-08-27T00:00:00.000Z\",\n    \"final_date\": \"2022-08-27T00:00:00.000Z\",\n    \"created_date\": \"2019-09-24T00:50:58.550Z\",\n    \"active\": true\n}]",
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
    "filename": "src/modules/building/controller.js",
    "groupTitle": "Building"
  },
  {
    "type": "get",
    "url": "/building/:idBuilding/images",
    "title": "Get Image (By Building ID)",
    "name": "GetBuildingImage",
    "group": "Building",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "idBuilding",
            "description": "<p>Building ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"id\": \"1234560\",\n   \"id_building\": \"eb76cd10-367b-447d-b238-fa8e9eef2a1f\",\n   \"url\": \"https://storage.googleapis.com/buildinvest/building/545121513535151311.png\"\n}",
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
    "filename": "src/modules/building-image/controller.js",
    "groupTitle": "Building"
  },
  {
    "type": "get",
    "url": "/building",
    "title": "Get all",
    "name": "GetBuildings",
    "group": "Building",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    \"id\": \"69cb237c-c53a-4619-8433-d80719c0c18f\",\n    \"id_builder\": \"7de6982f-6989-45bd-97d4-973ebeb75295\",\n    \"spe\": \"34096667000199\",\n    \"registration\": \"789456\",\n    \"name\": \"Nome da obra\",\n    \"description\": \"Descrição da obra\",\n    \"address_street\": \"Rua da obraa\",\n    \"address_number\": \"123\",\n    \"address_neighborhood\": \"Bairro\",\n    \"address_city\": \"Cidade\",\n    \"address_state\": \"Estado\",\n    \"address_country\": \"Pais\",\n    \"address_cep\": \"58000000\",\n    \"amount\": \"1000000.00\",\n    \"initial_date\": \"2019-08-27T00:00:00.000Z\",\n    \"final_date\": \"2022-08-27T00:00:00.000Z\",\n    \"created_date\": \"2019-09-24T00:50:58.550Z\",\n    \"active\": true\n}]",
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
    "filename": "src/modules/building/controller.js",
    "groupTitle": "Building"
  },
  {
    "type": "put",
    "url": "/building",
    "title": "Update",
    "name": "UpdateBuilding",
    "group": "Building",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "params",
            "description": "<p>Building params em breve</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"id\": \"69cb237c-c53a-4619-8433-d80719c0c18f\",\n   \"id_builder\": \"7de6982f-6989-45bd-97d4-973ebeb75295\",\n   \"spe\": \"34096667000199\",\n   \"registration\": \"789456\",\n   \"name\": \"Nome da obra\",\n   \"description\": \"Descrição da obra\",\n   \"address_street\": \"Rua da obraa\",\n   \"address_number\": \"123\",\n   \"address_neighborhood\": \"Bairro\",\n   \"address_city\": \"Cidade\",\n   \"address_state\": \"Estado\",\n   \"address_country\": \"Pais\",\n   \"address_cep\": \"58000000\",\n   \"amount\": \"1000000.00\",\n   \"initial_date\": \"2019-08-27T00:00:00.000Z\",\n   \"final_date\": \"2022-08-27T00:00:00.000Z\",\n   \"created_date\": \"2019-09-24T00:50:58.550Z\",\n   \"active\": true\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Obra atualizada com sucesso\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{\n     \"msg\": \"Invalid value\",\n     \"param\": \"spe\",\n     \"location\": \"body\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/building/controller.js",
    "groupTitle": "Building"
  },
  {
    "type": "post",
    "url": "/custodian",
    "title": "Create",
    "name": "CreateCustodian",
    "group": "Custodian",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cnpj",
            "description": "<p>Custodian cnpj</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "company_name",
            "description": "<p>Custodian company name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "company_fancy_name",
            "description": "<p>Custodian company fancy name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>Custodian phone</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"cnpj\": \"34096667000151\",\n   \"company_name\": \"Custodiadora Default SA\",\n   \"company_fancy_name\": \"Custodiadora Default\",\n   \"phone\": \"8333334444\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Custodiadora criada com sucesso\",\n   \"builder\": [{\n     \"id\": \"647ac188-62c8-4618-8a0a-be14174aac49\",\n     \"cnpj\": \"34096667000151\",\n     \"company_name\": \"Custodiadora Default SA\",\n     \"company_fancy_name\": \"Custodiadora Default\",\n     \"phone\": \"8333334444\",\n     \"create_date\": \"2019-09-24T04:29:51.726Z\",\n     \"active\": true\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{\n     \"msg\": \"Invalid value\",\n     \"param\": \"cnpj\",\n     \"location\": \"body\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/custodian/controller.js",
    "groupTitle": "Custodian"
  },
  {
    "type": "delete",
    "url": "/custodian/:id",
    "title": "Delete",
    "name": "DeleteCustodian",
    "group": "Custodian",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "ID",
            "description": "<p>Custodian ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Custodiadora deletada com sucesso\"\n}",
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
    "filename": "src/modules/custodian/controller.js",
    "groupTitle": "Custodian"
  },
  {
    "type": "get",
    "url": "/custodian/:id",
    "title": "Get (By ID)",
    "name": "GetCustodian",
    "group": "Custodian",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "id",
            "description": "<p>Custodian ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n     \"id\": \"647ac188-62c8-4618-8a0a-be14174aac49\",\n     \"cnpj\": \"34096667000151\",\n     \"company_name\": \"Custodiadora Default SA\",\n     \"company_fancy_name\": \"Custodiadora Default\",\n     \"phone\": \"8333334444\",\n     \"agent_name\": \"João da Silva\",\n\t    \"agent_email\": \"joaosilva@custodiadora.com.br\",\n\t    \"agent_phone\": \"83988317867\",\n     \"create_date\": \"2019-09-24T04:29:51.726Z\",\n     \"active\": true\n  }",
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
    "filename": "src/modules/custodian/controller.js",
    "groupTitle": "Custodian"
  },
  {
    "type": "get",
    "url": "/custodian",
    "title": "Get all",
    "name": "GetCustodians",
    "group": "Custodian",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  [{\n      \"id\": \"647ac188-62c8-4618-8a0a-be14174aac49\",\n      \"cnpj\": \"34096667000151\",\n      \"company_name\": \"Custodiadora Default SA\",\n      \"company_fancy_name\": \"Custodiadora Default\",\n      \"phone\": \"8333334444\",\n      \"agent_name\": \"João da Silva\",\n\t     \"agent_email\": \"joaosilva@custodiadora.com.br\",\n\t     \"agent_phone\": \"83988317867\",\n      \"create_date\": \"2019-09-24T04:29:51.726Z\",\n      \"active\": true\n  }]",
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
    "filename": "src/modules/custodian/controller.js",
    "groupTitle": "Custodian"
  },
  {
    "type": "put",
    "url": "/custodian",
    "title": "Update",
    "name": "UpdateCustodian",
    "group": "Custodian",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "ID",
            "description": "<p>Custodian ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cnpj",
            "description": "<p>Custodian cnpj</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "company_name",
            "description": "<p>Custodian company name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "company_fancy_name",
            "description": "<p>Custodian company fancy name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>Custodian phone</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"id\": \"647ac188-62c8-4618-8a0a-be14174aac49\",\n   \"cnpj\": \"34096667000151\",\n   \"company_name\": \"Custodiadora Default SA\",\n   \"company_fancy_name\": \"Custodiadora Default\",\n   \"phone\": \"8333334444\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Custodiadora atualizada com sucesso\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{\n     \"msg\": \"Invalid value\",\n     \"param\": \"cnpj\",\n     \"location\": \"body\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/custodian/controller.js",
    "groupTitle": "Custodian"
  },
  {
    "type": "post",
    "url": "/fundraising",
    "title": "Create",
    "name": "CreateFundraising",
    "group": "Fundraising",
    "version": "1.0.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"id_building\": \"e69738af-8619-4335-99b9-153da3f723c6\",\n   \"id_custodian\": null,\n   \"amount\": \"2536216.00\",\n   \"investment_min_value\": \"1000\",\n   \"investment_percentage\": \"0.05\",\n   \"return_date\": \"2022-12-15\",\n   \"initial_date\": \"2019-09-24\",\n   \"final_date\": \"2019-09-30\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 6000,\n   \"message\": \"Captação criada com sucesso\",\n   \"fundraising\": [\n     {\n        \"id\": \"164164dd-2b2c-4bbd-8d06-0d67e7ca242f\",\n        \"id_building\": \"8dff5f89-dbd1-4db1-b3ac-ee4d3904429a\",\n        \"id_custodian\": \"647ac188-62c8-4618-8a0a-be14174aac49\",\n        \"amount\": \"1000.00\",\n        \"investment_min_value\": \"1000\",\n        \"investment_percentage\": \"0.05\",\n        \"return_date\": \"2022-12-15\",\n        \"initial_date\": \"2019-08-25T03:00:00.000Z\",\n        \"final_date\": \"2020-02-25T03:00:00.000Z\",\n        \"finished\": false,\n        \"created_date\": \"2019-09-25T00:32:04.442Z\",\n        \"active\": true\n     }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{\n     \"msg\": \"Invalid value\",\n     \"param\": \"cnpj\",\n     \"location\": \"body\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/fundraising/controller.js",
    "groupTitle": "Fundraising"
  },
  {
    "type": "put",
    "url": "/fundraising/:id/finish",
    "title": "Finish",
    "name": "FinishFundraising",
    "group": "Fundraising",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "id",
            "description": "<p>Fundraising ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Captação encerrada com sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{\n     \"msg\": \"Invalid value\",\n     \"param\": \"id\",\n     \"location\": \"params\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/fundraising/controller.js",
    "groupTitle": "Fundraising"
  },
  {
    "type": "get",
    "url": "/fundraising/:id/amountraised",
    "title": "Get Amount Raised",
    "name": "GetAmountRaised",
    "group": "Fundraising",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "id",
            "description": "<p>Fundraising ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"amount\": 100000\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Erro ao buscar total captado\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/fundraising/controller.js",
    "groupTitle": "Fundraising"
  },
  {
    "type": "get",
    "url": "/fundraising/:id",
    "title": "Get (By ID)",
    "name": "GetFundraising",
    "group": "Fundraising",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "id",
            "description": "<p>Fundraising ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"cd99df55-e99b-4db1-86cd-143430f1a19a\",\n    \"id_building\": \"e69738af-8619-4335-99b9-153da3f723c6\",\n    \"id_custodian\": null,\n    \"amount\": \"2536216.00\",\n    \"investment_min_value\": \"1000\",\n    \"investment_percentage\": \"0.05\",\n    \"return_date\": \"2022-12-15\",\n    \"initial_date\": \"2019-09-24T03:00:00.000Z\",\n    \"final_date\": \"2019-09-30T03:00:00.000Z\",\n    \"finished\": false,\n    \"created_date\": \"2019-09-24T19:08:56.438Z\",\n    \"active\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{\n     \"msg\": \"Invalid value\",\n     \"param\": \"id\",\n     \"location\": \"params\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/fundraising/controller.js",
    "groupTitle": "Fundraising"
  },
  {
    "type": "get",
    "url": "/fundraising/:id/investors",
    "title": "Get Fundraising's investors",
    "name": "GetFundraisingInvestors",
    "group": "Fundraising",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "id",
            "description": "<p>Fundraising ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n   {\n      \"id\": \"a897eacd-2681-4e08-8062-c8f7e174bace\",\n      \"name\": \"Investidor Buildinvest\",\n      \"avatar_url\": null\n   },\n   {\n      \"id\": \"a897eacd-2681-4e08-8062-c8f7e174bace\",\n      \"name\": \"Investidor Buildinvest\",\n      \"avatar_url\": null\n   }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Erro ao buscar os Investidores da Captação\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/fundraising/controller.js",
    "groupTitle": "Fundraising"
  },
  {
    "type": "get",
    "url": "/fundraising",
    "title": "Get all",
    "name": "GetFundraisings",
    "group": "Fundraising",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    \"id\": \"cd99df55-e99b-4db1-86cd-143430f1a19a\",\n    \"id_building\": \"e69738af-8619-4335-99b9-153da3f723c6\",\n    \"id_custodian\": null,\n    \"amount\": \"2536216.00\",\n    \"investment_min_value\": \"1000\",\n    \"investment_percentage\": \"0.05\",\n    \"return_date\": \"2022-12-15\",\n    \"initial_date\": \"2019-09-24T03:00:00.000Z\",\n    \"final_date\": \"2019-09-30T03:00:00.000Z\",\n    \"finished\": false,\n    \"created_date\": \"2019-09-24T19:08:56.438Z\",\n    \"active\": true\n}]",
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
    "filename": "src/modules/fundraising/controller.js",
    "groupTitle": "Fundraising"
  },
  {
    "type": "get",
    "url": "/fundraising/building/:idBuilding",
    "title": "Get (By Building ID)",
    "name": "GetFundraisingsByBuildingID",
    "group": "Fundraising",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "idBuilding",
            "description": "<p>Building ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    \"id\": \"cd99df55-e99b-4db1-86cd-143430f1a19a\",\n    \"id_building\": \"e69738af-8619-4335-99b9-153da3f723c6\",\n    \"id_custodian\": null,\n    \"amount\": \"2536216.00\",\n    \"investment_min_value\": \"1000\",\n    \"investment_percentage\": \"0.05\",\n    \"return_date\": \"2022-12-15\",\n    \"initial_date\": \"2019-09-24T03:00:00.000Z\",\n    \"final_date\": \"2019-09-30T03:00:00.000Z\",\n    \"finished\": false,\n    \"created_date\": \"2019-09-24T19:08:56.438Z\",\n    \"active\": true\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n  {\n     \"code\": 9999,\n     \"message\": \"Requisição inválida\",\n     \"errors\": [{\n       \"msg\": \"Invalid value\",\n       \"param\": \"idBuilding\",\n       \"location\": \"params\"\n     }]\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/fundraising/controller.js",
    "groupTitle": "Fundraising"
  },
  {
    "type": "get",
    "url": "/investment/fundraising/:id",
    "title": "Get (By Fundraising ID)",
    "name": "GetInvestmentsByFundraisingId",
    "group": "Fundraising",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "id",
            "description": "<p>Fundraising ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    \"id\": \"5e891a4e-9195-412a-9f02-135f632c15d0\",\n    \"id_investor\": \"a897eacd-2681-4e08-8062-c8f7e174bace\",\n    \"id_fundraising\": \"54b07d12-e847-4158-9569-71fd1bf1da29\",\n    \"amount\": \"1500.00\",\n    \"amount_returned\": null,\n   \"date\": \"2019-09-25T03:00:00.000Z\",\n     \"ted_proof_url\": null,\n    \"confirmed\": false,\n    \"created_date\": \"2019-12-17T01:20:56.397Z\",\n    \"active\": true\n}]",
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
    "filename": "src/modules/investment/controller.js",
    "groupTitle": "Fundraising"
  },
  {
    "type": "delete",
    "url": "/fundraising/:id",
    "title": "Remove",
    "name": "RemoveFundraising",
    "group": "Fundraising",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "id",
            "description": "<p>Fundraising ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Captação removida com sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{\n     \"msg\": \"Invalid value\",\n     \"param\": \"id\",\n     \"location\": \"params\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/fundraising/controller.js",
    "groupTitle": "Fundraising"
  },
  {
    "type": "put",
    "url": "/fundraising",
    "title": "Update",
    "name": "UpdateFundraising",
    "group": "Fundraising",
    "version": "1.0.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"id\": \"164164dd-2b2c-4bbd-8d06-0d67e7ca242f\",\n   \"amount\": \"100000\",\n   \"investment_min_value\": \"1000\",\n   \"investment_percentage\": \"0.05\",\n   \"return_date\": \"2022-12-15\",\n   \"initial_date\": \"2019-08-25\",\n   \"final_date\": \"2020-02-25\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Captação atualizada com sucesso\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{\n     \"msg\": \"Invalid value\",\n     \"param\": \"cnpj\",\n     \"location\": \"body\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/fundraising/controller.js",
    "groupTitle": "Fundraising"
  },
  {
    "type": "delete",
    "url": "/investment/:id",
    "title": "Cancel",
    "name": "CancelInvestment",
    "group": "Investment",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "id",
            "description": "<p>Investment ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Investimento cancelado com sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{}]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/investment/controller.js",
    "groupTitle": "Investment"
  },
  {
    "type": "post",
    "url": "/investment",
    "title": "Create",
    "name": "CreateInvestment",
    "group": "Investment",
    "version": "1.0.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"id_investor\": \"35bd3682-0a9f-42fa-a98e-24cba9e78729\",\n   \"id_fundraising\": \"164164dd-2b2c-4bbd-8d06-0d67e7ca242f\",\n   \"amount\": 1000,\n   \"date\": \"2019-11-16\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 4000,\n   \"message\": \"Investimento criado com sucesso\",\n   \"investment\": [\n     {\n        \"id\": \"5e891a4e-9195-412a-9f02-135f632c15d0\",\n        \"id_investor\": \"a897eacd-2681-4e08-8062-c8f7e174bace\",\n        \"id_fundraising\": \"54b07d12-e847-4158-9569-71fd1bf1da29\",\n        \"amount\": \"1500.00\",\n        \"amount_returned\": null,\n        \"date\": \"2019-09-25T03:00:00.000Z\",\n        \"ted_proof_url\": null,\n        \"confirmed\": false,\n        \"created_date\": \"2019-12-17T01:20:56.397Z\",\n        \"active\": true\n     }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 4502,\n   \"message\": \"Erro ao tentar criar a investimento\",\n   \"errors\": \"Valor abaixo do mínimo nescessário\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/investment/controller.js",
    "groupTitle": "Investment"
  },
  {
    "type": "get",
    "url": "/investment/:id",
    "title": "Get (By ID)",
    "name": "GetInvestment",
    "group": "Investment",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "id",
            "description": "<p>Investment ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"id\": \"5e891a4e-9195-412a-9f02-135f632c15d0\",\n   \"id_investor\": \"a897eacd-2681-4e08-8062-c8f7e174bace\",\n   \"id_fundraising\": \"54b07d12-e847-4158-9569-71fd1bf1da29\",\n   \"amount\": \"1500.00\",\n   \"amount_returned\": null,\n   \"date\": \"2019-09-25T03:00:00.000Z\",\n   \"ted_proof_url\": null,\n   \"confirmed\": false,\n   \"created_date\": \"2019-12-17T01:20:56.397Z\",\n   \"active\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{\n     \"msg\": \"Invalid value\",\n     \"param\": \"id\",\n     \"location\": \"params\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/investment/controller.js",
    "groupTitle": "Investment"
  },
  {
    "type": "get",
    "url": "/investment",
    "title": "Get all",
    "name": "GetInvestments",
    "group": "Investment",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    \"id\": \"f77880cf-4864-4a27-b15c-34fae2566a38\",\n    \"id_investor\": \"35bd3682-0a9f-42fa-a98e-24cba9e78729\",\n    \"id_fundraising\": \"164164dd-2b2c-4bbd-8d06-0d67e7ca242f\",\n    \"amount\": \"1000.00\",\n    \"amount_returned\": \"0\",\n    \"date\": \"2019-09-25T03:00:00.000Z\",\n    \"ted_proof_url\": null,\n    \"confirmed\": false,\n    \"created_date\": \"2019-09-25T01:59:29.077Z\",\n    \"active\": true\n}]",
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
    "filename": "src/modules/investment/controller.js",
    "groupTitle": "Investment"
  },
  {
    "type": "get",
    "url": "/investment/investor/:id",
    "title": "Get (By Investor ID)",
    "name": "GetInvestmentsByInvestorId",
    "group": "Investment",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "id",
            "description": "<p>Investor ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    \"id\": \"44cec654-9c2f-4586-90ab-bf1490de5146\",\n    \"id_investor\": \"a897eacd-2681-4e08-8062-c8f7e174bace\",\n    \"id_fundraising\": \"54b07d12-e847-4158-9569-71fd1bf1da29\",\n    \"amount\": \"1000.00\",\n    \"amount_returned\": null,\n    \"date\": \"2019-11-16T03:00:00.000Z\",\n    \"ted_proof_url\": null,\n    \"confirmed\": false,\n    \"created_date\": \"2019-12-17T01:34:42.000Z\",\n    \"active\": true,\n    \"amount_fundraising\": \"100000.00\",\n    \"investment_percentage\": \"0.05\",\n    \"return_date\": \"2022-12-15T03:00:00.000Z\",\n    \"id_building\": \"a8bf6952-f81d-425b-9c84-478a55829027\",\n    \"cnpj_building\": \"34096667000188\",\n    \"name_building\": \"Nome da obra\",\n    \"vgv_building\": \"1000000.00\",\n    \"final_date_building\": \"2022-12-15T03:00:00.000Z\"\n}]",
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
    "filename": "src/modules/investment/controller.js",
    "groupTitle": "Investment"
  },
  {
    "type": "get",
    "url": "/investment/pendings",
    "title": "Get all pedings",
    "name": "GetInvestmentsPendings",
    "group": "Investment",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    \"id\": \"5e891a4e-9195-412a-9f02-135f632c15d0\",\n    \"id_investor\": \"a897eacd-2681-4e08-8062-c8f7e174bace\",\n    \"id_fundraising\": \"54b07d12-e847-4158-9569-71fd1bf1da29\",\n    \"amount\": \"1500.00\",\n    \"amount_returned\": null,\n    \"date\": \"2019-09-25T03:00:00.000Z\",\n    \"ted_proof_url\": \"https://storage.googleapis.com/storebuild-01/teds/5e891a4e-9195-412a-9f02-135f632c15d0/1577555579630.png\",\n    \"confirmed\": false,\n    \"created_date\": \"2019-12-17T01:20:56.397Z\",\n    \"active\": true,\n    \"amount_fundraising\": \"100000.00\",\n    \"investment_percentage\": \"0.05\",\n    \"return_date\": \"2022-12-15T03:00:00.000Z\",\n    \"id_building\": \"a8bf6952-f81d-425b-9c84-478a55829027\",\n    \"cnpj_building\": \"34096667000188\",\n    \"name_building\": \"Nome da obra\",\n    \"vgv_building\": \"1000000.00\",\n    \"final_date_building\": \"2022-12-15T03:00:00.000Z\"\n}]",
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
    "filename": "src/modules/investment/controller.js",
    "groupTitle": "Investment"
  },
  {
    "type": "put",
    "url": "/investment/confirm",
    "title": "Investment Confirmation",
    "name": "InvestmentConfirmation",
    "group": "Investment",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "confirmations",
            "description": "<p>Investment IDs</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"investments\": [\"791c50c6-f1eb-4efe-ba41-315d4e3c5e83\", \"a788426a-258c-49a5-a905-abec5bba222a\"]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Investimentos confirmados com sucesso\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{}]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/investment/controller.js",
    "groupTitle": "Investment"
  },
  {
    "type": "put",
    "url": "/investment/:id/ted",
    "title": "TED Confirmation",
    "name": "TEDConfirmation",
    "group": "Investment",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "id",
            "description": "<p>Investment ID</p>"
          },
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "file",
            "description": "<p>Image</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"file\": [buffer]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Comprovante de TED enviado com sucesso\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{}]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/investment/controller.js",
    "groupTitle": "Investment"
  },
  {
    "type": "post",
    "url": "/investor/:idInvestor/bank-accounts",
    "title": "Create Bank Account",
    "name": "CreateBankAccount",
    "group": "Investor",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "idInvestor",
            "description": "<p>Investor ID</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "accounts",
            "description": "<p>Bank Account data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"accounts\": [{\n      \"bank_code\": \"001\",\n      \"agency\": \"1234\",\n      \"account\": \"1234567\"\n     }]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Conta criada com sucesso\",\n   \"account\": [{\n     \"id\": \"1\",\n     \"id_investor\": \"35bd3682-0a9f-42fa-a98e-24cba9e78729\",\n     \"bank_code\": \"001\",\n     \"agency\": \"1234\",\n     \"account\": \"1234567\",\n     \"created_date\": \"2019-09-25T01:44:41.530Z\",\n     \"active\": true\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{\n     \"msg\": \"Invalid value\",\n     \"param\": \"cnpj\",\n     \"location\": \"body\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/investor-bank-account/controller.js",
    "groupTitle": "Investor"
  },
  {
    "type": "post",
    "url": "/investor/:id/documents",
    "title": "Create Documents",
    "name": "CreateDocuments",
    "group": "Investor",
    "version": "1.0.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"docs\": [[buffer], [buffer], [buffer]]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Documentos eviados com sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{}]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/investor-document/controller.js",
    "groupTitle": "Investor"
  },
  {
    "type": "post",
    "url": "/investor/:idInvestor/phones",
    "title": "Create Phone",
    "name": "CreateInvestorPhone",
    "group": "Investor",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "idInvestor",
            "description": "<p>Investor ID</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "phones",
            "description": "<p>Phones numbers</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"phones\": [{\"number\":\"83988317864\"}, {\"number\":\"83988776655\"}]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Telefone criado com sucesso\",\n   \"phone\": [{\n     \"id\": \"123\",\n     \"id_builder\": \"eb76cd10-367b-447d-b238-fa8e9eef2a1f\",\n     \"number\": \"83988317864\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{\n     \"msg\": \"Invalid value\",\n     \"param\": \"numero\",\n     \"location\": \"body\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/investor-phone/controller.js",
    "groupTitle": "Investor"
  },
  {
    "type": "post",
    "url": "/investor",
    "title": "Create",
    "name": "Createinvestor",
    "group": "Investor",
    "version": "1.0.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "  {\n     \"investor\": {\n\t      \"id_user\": \"647ac188-62c8-4618-8a0a-be14174aac49\",\n\t      \"cpf\": \"06595512416\",\n\t      \"name\": \" Investidor Buildinvest\",\n\t      \"address_street\": \"Rua do investidor\",\n\t      \"address_number\": \"123\",\n\t      \"address_neighborhood\": \"Bairro do investidor\",\n\t      \"address_city\": \"Cidade do Investidor\",\n\t      \"address_state\": \"Estado do Investidor\",\n\t      \"address_country\": \"Pais do Investidor\",\n\t      \"address_cep\": \"58000000\"\n     },\n     \"phones\":[{\"number\":\"8332333333\"},{\"number\":\"8332344444\"}],\n     \"accounts\": [{\"agency\":\"1234\", \"account\":\"1234567\"}]\n     \"docs\": [[buffer], [buffer], [buffer]]\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 3000,\n   \"message\": \"Investidor criado com sucesso\",\n   \"investor\": {\n     \"id\": \"35bd3682-0a9f-42fa-a98e-24cba9e78729\",\n     \"id_user\": \"647ac188-62c8-4618-8a0a-be14174aac49\",\n     \"cpf\": \"06595512416\",\n     \"cnpj\": null,\n     \"name\": \" Investidor Buildinvest\",\n     \"company_name\": null,\n     \"address_street\": \"Rua do investidor\",\n     \"address_number\": \"123\",\n     \"address_neighborhood\": \"Bairro do investidor\",\n     \"address_city\": \"Cidade do Investidor\",\n     \"address_state\": \"Estado do Investidor\",\n     \"address_country\": \"Pais do Investidor\",\n     \"address_cep\": \"58000000\",\n     \"created_date\": \"2019-09-25T01:44:40.034Z\",\n     \"active\": true\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{\n     \"msg\": \"Invalid value\",\n     \"param\": \"cnpj\",\n     \"location\": \"body\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/investor/controller.js",
    "groupTitle": "Investor"
  },
  {
    "type": "delete",
    "url": "/investor/:idInvestor/bank-accounts",
    "title": "Delete Investor Bank Accounts",
    "name": "DeleteBankAccount",
    "group": "Investor",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "idInvestor",
            "description": "<p>Investor ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"ids\": [1, 2]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Conta deletada com sucesso\"\n}",
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
    "filename": "src/modules/investor-bank-account/controller.js",
    "groupTitle": "Investor"
  },
  {
    "type": "delete",
    "url": "/investor/:idInvestor/phones/",
    "title": "Delete Phone",
    "name": "DeleteInvestorPhone",
    "group": "Investor",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "idInvestor",
            "description": "<p>Phone ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"ids\": [1, 2]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Telefone deletado com sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{\n     \"msg\": \"Invalid value\",\n     \"param\": \"id\",\n     \"location\": \"params\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/investor-phone/controller.js",
    "groupTitle": "Investor"
  },
  {
    "type": "get",
    "url": "/investor/:id",
    "title": "Get (By ID)",
    "name": "GetInvestor",
    "group": "Investor",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "ID",
            "description": "<p>Investor ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"id\": \"35bd3682-0a9f-42fa-a98e-24cba9e78729\",\n   \"email\": \"buildinvest@admin.com\",\n   \"username\": \"Buildinvest Admin\",\n   \"id_user\": \"647ac188-62c8-4618-8a0a-be14174aac49\",\n   \"cpf\": \"06595512416\",\n   \"cnpj\": null,\n   \"name\": \" Investidor Buildinvest\",\n   \"company_name\": null,\n   \"address_street\": \"Rua do investidor\",\n   \"address_number\": \"123\",\n   \"address_neighborhood\": \"Bairro do investidor\",\n   \"address_city\": \"Cidade do Investidor\",\n   \"address_state\": \"Estado do Investidor\",\n   \"address_country\": \"Pais do Investidor\",\n   \"address_cep\": \"58000000\",\n   \"created_date\": \"2019-09-25T01:44:40.034Z\",\n   \"active\": true,\n   \"phones\": [\n     {\n        \"id\": \"1\",\n        \"id_investor\": \"35bd3682-0a9f-42fa-a98e-24cba9e78729\",\n        \"number\": \"8332333333\"\n     },\n     {\n        \"id\": \"2\",\n        \"id_investor\": \"35bd3682-0a9f-42fa-a98e-24cba9e78729\",\n        \"number\": \"8332344444\"\n     }\n   ],\n   \"accounts\": [\n     {\n        \"id\": \"1\",\n        \"id_investor\": \"35bd3682-0a9f-42fa-a98e-24cba9e78729\",\n        \"agency\": \"1234\",\n        \"account\": \"1234567\",\n        \"created_date\": \"2019-09-25T01:44:41.530Z\",\n        \"active\": true\n     }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{\n     \"msg\": \"Invalid value\",\n     \"param\": \"id\",\n     \"location\": \"params\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/investor/controller.js",
    "groupTitle": "Investor"
  },
  {
    "type": "get",
    "url": "/investor/:idInvestor/bank-accounts",
    "title": "Get Bank Account (By Investor ID)",
    "name": "GetInvestorBankAccount",
    "group": "Investor",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "idInvestor",
            "description": "<p>Investor ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    \"id\": \"1\",\n    \"id_investor\": \"35bd3682-0a9f-42fa-a98e-24cba9e78729\",\n    \"bank_code\": \"001\",\n    \"agency\": \"1234\",\n    \"account\": \"1234567\",\n    \"created_date\": \"2019-09-25T01:44:41.530Z\",\n    \"active\": true\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{\n     \"msg\": \"Invalid value\",\n     \"param\": \"idInvestor\",\n     \"location\": \"params\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/investor-bank-account/controller.js",
    "groupTitle": "Investor"
  },
  {
    "type": "get",
    "url": "/investor/user/:id",
    "title": "Get (By User ID)",
    "name": "GetInvestorByUserId",
    "group": "Investor",
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
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"email\": \"buildinvest@admin.com\",\n   \"username\": \"Buildinvest Admin\",\n   \"id\": \"35bd3682-0a9f-42fa-a98e-24cba9e78729\",\n   \"id_user\": \"647ac188-62c8-4618-8a0a-be14174aac49\",\n   \"cpf\": \"06595512416\",\n   \"cnpj\": null,\n   \"name\": \" Investidor Buildinvest\",\n   \"company_name\": null,\n   \"address_street\": \"Rua do investidor\",\n   \"address_number\": \"123\",\n   \"address_neighborhood\": \"Bairro do investidor\",\n   \"address_city\": \"Cidade do Investidor\",\n   \"address_state\": \"Estado do Investidor\",\n   \"address_country\": \"Pais do Investidor\",\n   \"address_cep\": \"58000000\",\n   \"created_date\": \"2019-09-25T01:44:40.034Z\",\n   \"active\": true,\n   \"phones\": [\n     {\n        \"id\": \"1\",\n        \"id_investor\": \"35bd3682-0a9f-42fa-a98e-24cba9e78729\",\n        \"number\": \"8332333333\"\n     },\n     {\n        \"id\": \"2\",\n        \"id_investor\": \"35bd3682-0a9f-42fa-a98e-24cba9e78729\",\n        \"number\": \"8332344444\"\n     }\n   ],\n   \"accounts\": [\n     {\n        \"id\": \"1\",\n        \"id_investor\": \"35bd3682-0a9f-42fa-a98e-24cba9e78729\",\n        \"agency\": \"1234\",\n        \"account\": \"1234567\",\n        \"created_date\": \"2019-09-25T01:44:41.530Z\",\n        \"active\": true\n     }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{\n     \"msg\": \"Invalid value\",\n     \"param\": \"id\",\n     \"location\": \"params\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/investor/controller.js",
    "groupTitle": "Investor"
  },
  {
    "type": "get",
    "url": "/investor/:idInvestor/documents",
    "title": "Get Documents (By Investor ID)",
    "name": "GetInvestorDocuments",
    "group": "Investor",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "idInvestor",
            "description": "<p>Investor ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n   {\n      \"id\": 1,\n      \"id_investor\": \"35bd3682-0a9f-42fa-a98e-24cba9e78729\",\n      \"url\": \"https://storage.googleapis.com/buildinvest/documents/545121513535151311.png\"\n      \"order\": 1\n   },\n   {\n      \"id\": 2,\n      \"id_investor\": \"35bd3682-0a9f-42fa-a98e-24cba9e78729\",\n      \"url\": \"https://storage.googleapis.com/buildinvest/documents/545121513535151312.png\"\n      \"order\": 2\n   },\n   {\n      \"id\": 3,\n      \"id_investor\": \"35bd3682-0a9f-42fa-a98e-24cba9e78729\",\n      \"url\": \"https://storage.googleapis.com/buildinvest/documents/545121513535151313.png\"\n      \"order\": 3\n   }\n]",
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
    "filename": "src/modules/investor-document/controller.js",
    "groupTitle": "Investor"
  },
  {
    "type": "get",
    "url": "/investor/:idInvestor/phones",
    "title": "Get Phone (By Investor ID)",
    "name": "GetInvestorPhone",
    "group": "Investor",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "idInvestor",
            "description": "<p>Investor ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n   \"id\": 1,\n   \"id_investor\": \"eb76cd10-367b-447d-b238-fa8e9eef2a1f\",\n   \"number\": \"83988317864\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{\n     \"msg\": \"Invalid value\",\n     \"param\": \"id\",\n     \"location\": \"params\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/investor-phone/controller.js",
    "groupTitle": "Investor"
  },
  {
    "type": "get",
    "url": "/investor",
    "title": "Get all",
    "name": "GetInvestors",
    "group": "Investor",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    \"id\": \"35bd3682-0a9f-42fa-a98e-24cba9e78729\",\n    \"id_user\": \"647ac188-62c8-4618-8a0a-be14174aac49\",\n    \"cpf\": \"06595512416\",\n    \"cnpj\": null,\n    \"name\": \" Investidor Buildinvest\",\n    \"company_name\": null,\n    \"address_street\": \"Rua do investidor\",\n    \"address_number\": \"123\",\n    \"address_neighborhood\": \"Bairro do investidor\",\n    \"address_city\": \"Cidade do Investidor\",\n    \"address_state\": \"Estado do Investidor\",\n    \"address_country\": \"Pais do Investidor\",\n    \"address_cep\": \"58000000\",\n    \"created_date\": \"2019-09-25T01:44:40.034Z\",\n    \"active\": true\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n  {\n     \"code\": 9999,\n     \"message\": \"Requisição inválida\",\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/investor/controller.js",
    "groupTitle": "Investor"
  },
  {
    "type": "get",
    "url": "/investor/:id/investments",
    "title": "Get all from Investor",
    "name": "getAllInvestmentsById",
    "group": "Investor",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    \"id\": \"f77880cf-4864-4a27-b15c-34fae2566a38\",\n    \"id_investor\": \"35bd3682-0a9f-42fa-a98e-24cba9e78729\",\n    \"id_fundraising\": \"164164dd-2b2c-4bbd-8d06-0d67e7ca242f\",\n    \"amount\": \"1000.00\",\n    \"amount_returned\": null,\n    \"date\": \"2019-09-25T03:00:00.000Z\",\n    \"ted_proof_url\": null,\n    \"confirmed\": false,\n    \"created_date\": \"2019-09-25T01:59:29.077Z\",\n    \"active\": true\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n  {\n     \"code\": 9999,\n     \"message\": \"Requisição inválida\",\n     \"errors\": [{\n       \"msg\": \"Invalid value\",\n       \"param\": \"id\",\n       \"location\": \"params\"\n     }]\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/investor/controller.js",
    "groupTitle": "Investor"
  },
  {
    "type": "get",
    "url": "/investor/:id/investments/invested-amount",
    "title": "Get the invested amount from Investor",
    "name": "getInvestedAmount",
    "group": "Investor",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"amount\": 21564.78\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n  {\n     \"code\": 9999,\n     \"message\": \"Requisição inválida\",\n     \"errors\": [{\n       \"msg\": \"Invalid value\",\n       \"param\": \"id\",\n       \"location\": \"params\"\n     }]\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/investor/controller.js",
    "groupTitle": "Investor"
  },
  {
    "type": "get",
    "url": "/investor/:id/investments/count",
    "title": "Get the total number of investments from Investor",
    "name": "getInvestmentsCount",
    "group": "Investor",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"count\": 13\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n  {\n     \"code\": 9999,\n     \"message\": \"Requisição inválida\",\n     \"errors\": [{\n       \"msg\": \"Invalid value\",\n       \"param\": \"id\",\n       \"location\": \"params\"\n     }]\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/investor/controller.js",
    "groupTitle": "Investor"
  },
  {
    "type": "get",
    "url": "/investor/:id/investments/projected-amount",
    "title": "Get the projected amount from Investor",
    "name": "getProjectedAmount",
    "group": "Investor",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"amount\": 21564.78\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n  {\n     \"code\": 9999,\n     \"message\": \"Requisição inválida\",\n     \"errors\": [{\n       \"msg\": \"Invalid value\",\n       \"param\": \"id\",\n       \"location\": \"params\"\n     }]\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/investor/controller.js",
    "groupTitle": "Investor"
  },
  {
    "type": "get",
    "url": "/investor/:id/investments/received-amount",
    "title": "Get the amount received from Investor",
    "name": "getReceivedAmount",
    "group": "Investor",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"amount\": 21564.78\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n  {\n     \"code\": 9999,\n     \"message\": \"Requisição inválida\",\n     \"errors\": [{\n       \"msg\": \"Invalid value\",\n       \"param\": \"id\",\n       \"location\": \"params\"\n     }]\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/investor/controller.js",
    "groupTitle": "Investor"
  },
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
          "content": "{\n   \"email\": \"marcello@mail.com\",\n   \"username\": \"Marcello Jr\",\n   \"password\": \"123456\"\n}",
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
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Usuário deletado com sucesso\"\n}",
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
      }
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
          "content": "{\n   \"email\": \"marcello@mail.com\",\n   \"password\": \"123456\"\n}",
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
          "content": "{\n   \"email\": \"marcello@mail.com\",\n   \"username\": \"Marcello Jr\",\n   \"password\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Usuário atualizado com sucesso\"\n}",
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
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "  {\n\t    \"id\": \"647ac188-62c8-4618-8a0a-be14174aac49\",\n\t    \"cpf\": \"06595512416\",\n     \"cnpj\": null\n\t    \"name\": \" Investidor Buildinvest\",\n     \"company_name\": null,\n\t    \"address_street\": \"Rua do investidor\",\n\t    \"address_number\": \"123\",\n\t    \"address_neighborhood\": \"Bairro do investidor\",\n\t    \"address_city\": \"Cidade do Investidor\",\n\t    \"address_state\": \"Estado do Investidor\",\n\t    \"address_country\": \"Pais do Investidor\",\n\t    \"address_cep\": \"58000000\"\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 3000,\n   \"message\": \"Investidor atualizado com sucesso\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{\n     \"msg\": \"Invalid value\",\n     \"param\": \"cpf\",\n     \"location\": \"body\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "src/modules/investor/controller.js",
    "group": "_home_majun_Desenvolvimento_Workspace_Projects_buildinvest_web_api_src_modules_investor_controller_js",
    "groupTitle": "_home_majun_Desenvolvimento_Workspace_Projects_buildinvest_web_api_src_modules_investor_controller_js",
    "name": ""
  }
] });
