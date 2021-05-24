#language: pt
@Compra @End2End
  Funcionalidade: Comprar

    Contexto:
      Dado que o usuario esteja logado no sistema

    @RealizarCompra @SmokeTest
    Esquema do Cenario: realizar uma compra
      Quando quando o usuario clicar no produto
      E adicionar o produto ao carrinho de compras
      E clicar no icone do carrinho de compras
      E clicar no botao checkout
      E preencher os campos "<First Name>", "<Last Name>", "<Zip>" com dados validos
      E clicar no botao Continue
      Entao o usuario pode clicar no botao Finish para realizar a compra.

      Exemplos:
      | First Name | Last Name | Zip |
      | Rafael | Souza | 33130160 |
      


