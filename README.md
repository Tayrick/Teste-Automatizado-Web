# Teste-Automatizado-Web

Automação de teste Web utilizando Java, Cucumber, JUnit, Selenium. 
A pagina que sera alvo dos testes - https://www.saucedemo.com/.

Configuração:

- Instalar o Java 8 (JDK 1.8.0_281);
- Utilizar uma IDE compatível com Java, use de preferência o Eclipse IDE for Java Developers versсo 2021-03;
- Instalar o Cucumber-Eclipse atraves do repositerio: https://github.com/cucumber/cucumber-eclipse
- Utilizar o JUnit 4.13, link para importar a dependencia: https://mvnrepository.com/artifact/junit/junit/4.13
- Exportar o Selenium versão 3.141.59 para o projeto. Link de download: https://www.selenium.dev/downloads/
- Baixar o Chromedriver de acordo com a versão do navegador Google Chrome que está instalado no computador.

Melhorias

- Criar cenário de teste para inserir informações incorretas no Checkout;
- Criar cenário de teste com vários itens no carrinho de compras;
- Criar cenário de teste para remover itens do carrinho;

Observações
Passo a passo para executar o projeto, caso utilize o Eclipse:
Após configurar a IDE de acordo com as configurações acima. 
Crie um novo projeto na IDE em seguida clique em File > Import > General > Existing Project into Workspace 
na aba que irá aparecer abra o local onde baixou os arquivos e selecione a pasta que contém os arquivos, 
em seguida em Options selecione Copy projects into workspace e finalize. 

Execute o arquivo TesteRunner.java localizado dentro do src/test/java > runners para executar o projeto.

Importante: Coloque o .exe do Chromedriver na pasta raiz do Disco local C.

Cenários de Teste

Cenário 1:Realizar Login.
- Credencial Correta
- Credencial Incorreta

Cenário 2: Realizar compra.
- Realizar todo o passo a passo atж finalizar uma compra no site

Relatório
Abra o arquivo index.hmtl localizado no caminho ProjetoFinal\AutomaWeb\target\cucumber-reports para visualizar o relatório dos testes executados.

