$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/jackson.teixeira/git/NextStarAutomationKatalon/Include/features/Login.feature");
formatter.feature({
  "name": "Verificando Tela de Login",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Realizando Login",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@LoginValido"
    }
  ]
});
formatter.step({
  "name": "que o usuario esta na tela de Login",
  "keyword": "Dado "
});
formatter.step({
  "name": "preencher o campo email com \u003cemail\u003e",
  "keyword": "Quando "
});
formatter.step({
  "name": "preencher o campo senha com \u003csenha\u003e",
  "keyword": "E "
});
formatter.step({
  "name": "clicar na opcao entrar",
  "keyword": "E "
});
formatter.step({
  "name": "o sistema apresenta a tela inicial",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "email",
        "senha"
      ]
    },
    {
      "cells": [
        "teste@gmail.com",
        "\"tzH6RvlfSTg\u003d\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Realizando Login",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@LoginValido"
    }
  ]
});
formatter.step({
  "name": "que o usuario esta na tela de Login",
  "keyword": "Dado "
});
formatter.match({
  "location": "Login.queUsuarioEstaNaTelaDeLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo email com teste@gmail.com",
  "keyword": "Quando "
});
formatter.match({
  "location": "Login.preencherCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo senha com \"tzH6RvlfSTg\u003d\"",
  "keyword": "E "
});
formatter.match({
  "location": "Login.preencherCampoSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar na opcao entrar",
  "keyword": "E "
});
formatter.match({
  "location": "Login.clicarNaOpcaoEntrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema apresenta a tela inicial",
  "keyword": "Entao "
});
formatter.match({
  "location": "Login.oSistemaApresentaATelaInicial()"
});
formatter.result({
  "status": "passed"
});
});