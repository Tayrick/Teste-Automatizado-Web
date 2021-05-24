#language: pt
@Login @End2End
  Funcionalidade: Login

    Contexto:
      Dado que o usuario esteja na pagina inicial do sistema

    @RealizarLogin @SmokeTest
    Esquema do Cenario: Realizar Login com Sucesso
      Quando informar o campo Username como "<usuario>"
      E informar o campo Password como "<senha>"
      E clicar no botao Login
      Entao o sistema devera autorizar o Login e exibindo pagina contendo o Dashborad principal.

      Exemplos:
      | usuario | senha |
      | standard_user | secret_sauce |
      
    @RealizarLoginInvalido
    Esquema do Cenario: Realizar Login invalido
      Quando informar o campo Username como "<usuario>" invalido
      E informar o campo Password como "<senha>" invalido
      E clicar no botao Login
      Entao o sistema devera exibir uma mensagem de erro
      
      Exemplos:
      | usuario | senha |
      | test | test123 |
    

