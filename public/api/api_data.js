define({ "api": [
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
  }
] });
