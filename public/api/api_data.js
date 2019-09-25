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
          "content": "  {\n     \"builder\": {\n       \"id_user\": \"647ac188-62c8-4618-8a0a-be14174aac49\",\n       \"cnpj\": \"34096667000152\",\n       \"company_name\": \"Razão social da Construtora\",\n       \"company_fancy_name\": \"Nome fantasia da Construtora\",\n       \"address_street\": \"Rua da construtora\",\n       \"address_number\": \"123\",\n       \"address_neighborhood\": \"Bairro\",\n       \"address_city\": \"Cidade\",\n       \"address_state\": \"Estado\",\n       \"address_country\": \"Pais\",\n       \"address_cep\": \"58000000\"\n     },\n     \"phones\": [{\"number\":\"8332333333\"},{\"number\":\"8332344444\"}],\n     \"partners\": [{\n       \"name\": \"Nome do socio 1\",\n       \"company_name\": null,\n       \"cpf\": \"06595212446\",\n       \"cnpj\": null,\n       \"phone\":\"8332447788\",\n       \"address_street\": \"Rua do socio 1\",\n       \"address_number\": \"123\",\n       \"address_neighborhood\": \"Bairro\",\n       \"address_city\": \"Cidade\",\n       \"address_state\": \"Estado\",\n       \"address_country\": \"Pais\",\n       \"address_cep\": \"58000000\"\n     },\n     {\n        \"name\": \"Nome fantasia do socio 2\",\n        \"company_name\": \"Razão social do socio 2\",\n        \"cpf\": null,\n        \"cnpj\": \"34096667000151\",\n        \"phone\":\"8332447788\",\n        \"address_street\": \"Rua do socio 2\",\n        \"address_number\": \"123\",\n        \"address_neighborhood\": \"Bairro\",\n        \"address_city\": \"Cidade\",\n        \"address_state\": \"Estado\",\n        \"address_country\": \"Pais\",\n        \"address_cep\": \"58000000\"\n      }]\n}",
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
    "url": "/builder/partner",
    "title": "Create Partner",
    "name": "CreateBuilderPartner",
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
            "description": "<p>Builder Partner params em breve aqui</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"id_builder\": \"7de6982f-6989-45bd-97d4-973ebeb75295\",\n   \"name\": \"Nome do socio 1\",\n   \"company_name\": null,\n   \"cpf\": \"06595212446\",\n   \"cnpj\": null,\n   \"phone\": \"8332447788\",\n   \"address_street\": \"Rua do socio 1\",\n   \"address_number\": \"123\",\n   \"address_neighborhood\": \"Bairro\",\n   \"address_city\": \"Cidade\",\n   \"address_state\": \"Estado\",\n   \"address_country\": \"Pais\",\n   \"address_cep\": \"58000000\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Construtora criada com sucesso\",\n   \"builder\": [{\n     \"id\": \"1\",\n     \"id_builder\": \"7de6982f-6989-45bd-97d4-973ebeb75295\",\n     \"name\": \"Nome do socio 1\",\n     \"company_name\": null,\n     \"cpf\": \"06595212446\",\n     \"cnpj\": null,\n     \"phone\": \"8332447788\",\n     \"address_street\": \"Rua do socio 1\",\n     \"address_number\": \"123\",\n     \"address_neighborhood\": \"Bairro\",\n     \"address_city\": \"Cidade\",\n     \"address_state\": \"Estado\",\n     \"address_country\": \"Pais\",\n     \"address_cep\": \"58000000\",\n     \"created_date\": \"2019-09-24T00:01:22.960Z\"\n   }]\n}",
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
    "url": "/builder/phone",
    "title": "Create Phone",
    "name": "CreateBuilderPhone",
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
            "description": "<p>Builder Phone params em breve aqui</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"id_builder\": \"eb76cd10-367b-447d-b238-fa8e9eef2a1f\",\n   \"number\": \"83988317864\"\n}",
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
    "url": "/builder/partner/:id",
    "title": "Delete Partner",
    "name": "DeleteBuilderPartner",
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
            "description": "<p>Builder Partner ID</p>"
          }
        ]
      }
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
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{\n     \"msg\": \"Invalid value\",\n     \"param\": \"id\",\n     \"location\": \"body\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/builder-partner/controller.js",
    "groupTitle": "Builder"
  },
  {
    "type": "delete",
    "url": "/builder/phone/:id",
    "title": "Delete Phone",
    "name": "DeleteBuilderPhone",
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
            "description": "<p>Builder Phone ID</p>"
          }
        ]
      }
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
          "content": "HTTP/1.1 200 OK\n{\n   \"id\": \"7de6982f-6989-45bd-97d4-973ebeb75295\",\n   \"id_user\": \"647ac188-62c8-4618-8a0a-be14174aac49\",\n   \"cnpj\": \"34096667000152\",\n   \"company_name\": \"Razão social da Construtora\",\n   \"company_fancy_name\": \"Nome fantasia da Construtora\",\n   \"address_street\": \"Rua da construtora\",\n   \"address_number\": \"123\",\n   \"address_neighborhood\": \"Bairro\",\n   \"address_city\": \"Cidade\",\n   \"address_state\": \"Estado\",\n   \"address_country\": \"Pais\",\n   \"address_cep\": \"58000000\",\n   \"logo_url\": null,\n   \"created_date\": \"2019-09-24T00:01:22.722Z\",\n   \"active\": true,\n   \"phones\": [\n     {\n        \"id\": \"1\",\n        \"id_builder\": \"7de6982f-6989-45bd-97d4-973ebeb75295\",\n        \"number\": \"8332333333\"\n     },\n     {\n        \"id\": \"2\",\n        \"id_builder\": \"7de6982f-6989-45bd-97d4-973ebeb75295\",\n        \"number\": \"8332344444\"\n     }\n   ],\n   \"partners\": [\n     {\n        \"id\": \"1\",\n        \"id_builder\": \"7de6982f-6989-45bd-97d4-973ebeb75295\",\n        \"name\": \"Nome do socio 1\",\n        \"company_name\": null,\n        \"cpf\": \"06595212446\",\n        \"cnpj\": null,\n        \"phone\": \"8332447788\",\n        \"address_street\": \"Rua do socio 1\",\n        \"address_number\": \"123\",\n        \"address_neighborhood\": \"Bairro\",\n        \"address_city\": \"Cidade\",\n        \"address_state\": \"Estado\",\n        \"address_country\": \"Pais\",\n        \"address_cep\": \"58000000\",\n        \"created_date\": \"2019-09-24T00:01:22.960Z\"\n     },\n     {\n        \"id\": \"2\",\n        \"id_builder\": \"7de6982f-6989-45bd-97d4-973ebeb75295\",\n        \"name\": \"Nome fantasia do socio 2\",\n        \"company_name\": \"Razão social do socio 2\",\n        \"cpf\": null,\n        \"cnpj\": \"34096667000151\",\n        \"phone\": \"8332447788\",\n        \"address_street\": \"Rua do socio 2\",\n        \"address_number\": \"123\",\n        \"address_neighborhood\": \"Bairro\",\n        \"address_city\": \"Cidade\",\n        \"address_state\": \"Estado\",\n        \"address_country\": \"Pais\",\n        \"address_cep\": \"58000000\",\n        \"created_date\": \"2019-09-24T00:01:22.960Z\"\n     }\n   ]\n }",
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
    "url": "/builder/:id/partner",
    "title": "Get Partner (By Builder ID)",
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
          "content": "HTTP/1.1 200 OK\n{\n   \"id\": \"1\",\n   \"id_builder\": \"7de6982f-6989-45bd-97d4-973ebeb75295\",\n   \"name\": \"Nome do socio 1\",\n   \"company_name\": null,\n   \"cpf\": \"06595212446\",\n   \"cnpj\": null,\n   \"phone\": \"8332447788\",\n   \"address_street\": \"Rua do socio 1\",\n   \"address_number\": \"123\",\n   \"address_neighborhood\": \"Bairro\",\n   \"address_city\": \"Cidade\",\n   \"address_state\": \"Estado\",\n   \"address_country\": \"Pais\",\n   \"address_cep\": \"58000000\",\n   \"created_date\": \"2019-09-24T00:01:22.960Z\"\n}",
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
    "filename": "src/modules/builder-partner/controller.js",
    "groupTitle": "Builder"
  },
  {
    "type": "get",
    "url": "/builder/:id/phone",
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
            "field": "ID",
            "description": "<p>Builder ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"id\": \"eb76cd10-367b-447d-b238-fa8e9eef2a1f\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n   \"id\": \"123\",\n   \"id_builder\": \"eb76cd10-367b-447d-b238-fa8e9eef2a1f\",\n   \"number\": \"83988317864\"\n}]",
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
          "content": "HTTP/1.1 500 Internal Server Error\n  {\n     \"code\": 9999,\n     \"message\": \"Requisição inválida\",\n     \"errors\": [{}]\n  }",
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
    "url": "/building/image",
    "title": "Create Image",
    "name": "CreateBuilderImage",
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
            "description": "<p>Builder iamge params em breve aqui</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"id_building\": \"eb76cd10-367b-447d-b238-fa8e9eef2a1f\",\n   \"images\": [[image buffer], [image buffer]]\n}",
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
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{\n     \"msg\": \"Invalid value\",\n     \"param\": \"numero\",\n     \"location\": \"body\"\n   }]\n}",
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
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "params",
            "description": "<p>Building params em breve aqui</p>"
          }
        ]
      },
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
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Obra criada com sucesso\",\n   \"builder\": [{\n     \"code\": 6000,\n     \"message\": \"Obra criada com sucesso\",\n     \"building\": {\n       \"id\": \"69cb237c-c53a-4619-8433-d80719c0c18f\",\n       \"id_builder\": \"7de6982f-6989-45bd-97d4-973ebeb75295\",\n       \"spe\": \"34096667000199\",\n       \"registration\": \"789456\",\n       \"name\": \"Nome da obra\",\n       \"description\": \"Descrição da obra\",\n       \"address_street\": \"Rua da obraa\",\n       \"address_number\": \"123\",\n       \"address_neighborhood\": \"Bairro\",\n       \"address_city\": \"Cidade\",\n       \"address_state\": \"Estado\",\n       \"address_country\": \"Pais\",\n       \"address_cep\": \"58000000\",\n       \"amount\": \"1000000.00\",\n       \"initial_date\": \"2019-08-27T00:00:00.000Z\",\n       \"final_date\": \"2022-08-27T00:00:00.000Z\",\n       \"created_date\": \"2019-09-24T00:50:58.550Z\",\n       \"active\": true\n     }\n   }]\n}",
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
    "url": "/building/image/:id",
    "title": "Delete Image",
    "name": "DeleteBuilderImage",
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
            "description": "<p>Builder Phone ID</p>"
          }
        ]
      }
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
    "title": "Get (By Builder ID)",
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
    "url": "/building/:id/image",
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
            "field": "ID",
            "description": "<p>Building ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"id\": \"eb76cd10-367b-447d-b238-fa8e9eef2a1f\"\n}",
          "type": "json"
        }
      ]
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
            "field": "params",
            "description": "<p>Custodian params em breve aqui</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Custodiadora criada com sucesso\",\n   \"builder\": [{}]\n}",
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
            "field": "ID",
            "description": "<p>Custodian ID</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n\n}",
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
          "content": "HTTP/1.1 200 OK\n{\n   [\n\n   ]\n}",
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
            "type": "string",
            "optional": false,
            "field": "params",
            "description": "<p>Custodian params em breve</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\n}",
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
  }
] });