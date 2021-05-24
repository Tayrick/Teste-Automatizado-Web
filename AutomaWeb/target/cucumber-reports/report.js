$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Compra.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Comprar",
  "description": "",
  "id": "comprar",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@Compra"
    },
    {
      "line": 2,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "realizar uma compra",
  "description": "",
  "id": "comprar;realizar-uma-compra",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@RealizarCompra"
    },
    {
      "line": 8,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "quando o usuario clicar no produto",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "adicionar o produto ao carrinho de compras",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no icone do carrinho de compras",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "clicar no botao checkout",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "preencher os campos \"\u003cFirst Name\u003e\", \"\u003cLast Name\u003e\", \"\u003cZip\u003e\" com dados validos",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "clicar no botao Continue",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "o usuario pode clicar no botao Finish para realizar a compra.",
  "keyword": "Entao "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "comprar;realizar-uma-compra;",
  "rows": [
    {
      "cells": [
        "First Name",
        "Last Name",
        "Zip"
      ],
      "line": 19,
      "id": "comprar;realizar-uma-compra;;1"
    },
    {
      "cells": [
        "Rafael",
        "Souza",
        "33130160"
      ],
      "line": 20,
      "id": "comprar;realizar-uma-compra;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 3358292700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja logado no sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "CompraSteps.que_o_usuario_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 1418899300,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "realizar uma compra",
  "description": "",
  "id": "comprar;realizar-uma-compra;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 8,
      "name": "@RealizarCompra"
    },
    {
      "line": 2,
      "name": "@Compra"
    },
    {
      "line": 8,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "quando o usuario clicar no produto",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "adicionar o produto ao carrinho de compras",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no icone do carrinho de compras",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "clicar no botao checkout",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "preencher os campos \"Rafael\", \"Souza\", \"33130160\" com dados validos",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "clicar no botao Continue",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "o usuario pode clicar no botao Finish para realizar a compra.",
  "keyword": "Entao "
});
formatter.match({
  "location": "CompraSteps.quando_o_usuario_clicar_no_produto()"
});
formatter.result({
  "duration": 476584000,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.adicionar_o_produto_ao_carrinho_de_compras()"
});
formatter.result({
  "duration": 244338300,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.clicar_no_icone_do_carrinho_de_compras()"
});
formatter.result({
  "duration": 174166300,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.clicar_no_botao_checkout()"
});
formatter.result({
  "duration": 167780500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rafael",
      "offset": 21
    },
    {
      "val": "Souza",
      "offset": 31
    },
    {
      "val": "33130160",
      "offset": 40
    }
  ],
  "location": "CompraSteps.preencher_os_campos_com_dados_validos(String,String,String)"
});
formatter.result({
  "duration": 599997700,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.clicar_no_botao_Continue()"
});
formatter.result({
  "duration": 190509500,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.o_usuario_pode_clicar_no_botao_Finish_para_realizar_a_compra()"
});
formatter.result({
  "duration": 216340300,
  "status": "passed"
});
formatter.after({
  "duration": 752964900,
  "status": "passed"
});
formatter.uri("Features/Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Realizar Login com Sucesso",
  "description": "",
  "id": "login;realizar-login-com-sucesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@RealizarLogin"
    },
    {
      "line": 8,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "informar o campo Username como \"\u003cusuario\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "informar o campo Password como \"\u003csenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema devera autorizar o Login e exibindo pagina contendo o Dashborad principal.",
  "keyword": "Entao "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login;realizar-login-com-sucesso;",
  "rows": [
    {
      "cells": [
        "usuario",
        "senha"
      ],
      "line": 16,
      "id": "login;realizar-login-com-sucesso;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 17,
      "id": "login;realizar-login-com-sucesso;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 1573822300,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina inicial do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_inicial_do_sistema()"
});
formatter.result({
  "duration": 384661500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Realizar Login com Sucesso",
  "description": "",
  "id": "login;realizar-login-com-sucesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 8,
      "name": "@RealizarLogin"
    },
    {
      "line": 8,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "informar o campo Username como \"standard_user\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "informar o campo Password como \"secret_sauce\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema devera autorizar o Login e exibindo pagina contendo o Dashborad principal.",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 32
    }
  ],
  "location": "LoginSteps.informar_o_campo_Username_como(String)"
});
formatter.result({
  "duration": 283276600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 32
    }
  ],
  "location": "LoginSteps.informar_o_campo_Password_como(String)"
});
formatter.result({
  "duration": 199772400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicar_no_botao_Login()"
});
formatter.result({
  "duration": 337419400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.o_sistema_devera_autorizar_o_Login_e_exibindo_pagina_contendo_o_Dashborad_principal()"
});
formatter.result({
  "duration": 321685100,
  "status": "passed"
});
formatter.after({
  "duration": 770258400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Realizar Login invalido",
  "description": "",
  "id": "login;realizar-login-invalido",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 19,
      "name": "@RealizarLoginInvalido"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "informar o campo Username como \"\u003cusuario\u003e\" invalido",
  "keyword": "Quando "
});
formatter.step({
  "line": 22,
  "name": "informar o campo Password como \"\u003csenha\u003e\" invalido",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "o sistema devera exibir uma mensagem de erro",
  "keyword": "Entao "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "login;realizar-login-invalido;",
  "rows": [
    {
      "cells": [
        "usuario",
        "senha"
      ],
      "line": 27,
      "id": "login;realizar-login-invalido;;1"
    },
    {
      "cells": [
        "test",
        "test123"
      ],
      "line": 28,
      "id": "login;realizar-login-invalido;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 1574485500,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina inicial do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_inicial_do_sistema()"
});
formatter.result({
  "duration": 350344800,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Realizar Login invalido",
  "description": "",
  "id": "login;realizar-login-invalido;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 19,
      "name": "@RealizarLoginInvalido"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "informar o campo Username como \"test\" invalido",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 22,
  "name": "informar o campo Password como \"test123\" invalido",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "o sistema devera exibir uma mensagem de erro",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 32
    }
  ],
  "location": "LoginSteps.informar_o_campo_Username_como_invalido(String)"
});
formatter.result({
  "duration": 286377700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 32
    }
  ],
  "location": "LoginSteps.informar_o_campo_Password_como_invalido(String)"
});
formatter.result({
  "duration": 193266600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicar_no_botao_Login()"
});
formatter.result({
  "duration": 286367300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.o_sistema_devera_exibir_uma_mensagem_de_erro()"
});
formatter.result({
  "duration": 38500,
  "status": "passed"
});
formatter.after({
  "duration": 734084100,
  "status": "passed"
});
});