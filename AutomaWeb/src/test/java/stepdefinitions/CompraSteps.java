package stepdefinitions;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import org.openqa.selenium.WebDriver;
import pageobjects.LoginPage;
import pageobjects.CompraPage;

public class CompraSteps {
	WebDriver driver;
	
	@Dado("^que o usuario esteja logado no sistema$")
	public void que_o_usuario_esteja_logado_no_sistema() throws Throwable {
		 Hooks.abrirUrl("https://www.saucedemo.com/");
	     driver = Hooks.getDriver();
	     LoginPage lp = new LoginPage(driver);
	     lp.preencherUsuario("standard_user");
	     lp.preencherSenha("secret_sauce");
	     lp.clickBotaoLogin();
	}

	@Quando("^quando o usuario clicar no produto$")
	public void quando_o_usuario_clicar_no_produto() throws Throwable {
		CompraPage cp = new CompraPage(driver);
		cp.clickProduto();
	}

	@E("^adicionar o produto ao carrinho de compras$")
	public void adicionar_o_produto_ao_carrinho_de_compras() throws Throwable {
		CompraPage cp = new CompraPage(driver);
		cp.adicionarProdutoCarrinho();
	}

	@E("^clicar no icone do carrinho de compras$")
	public void clicar_no_icone_do_carrinho_de_compras() throws Throwable {
		CompraPage cp = new CompraPage(driver);
		cp.clickCarrinho();
	}

	@E("^clicar no botao checkout$")
	public void clicar_no_botao_checkout() throws Throwable {
		CompraPage cp = new CompraPage(driver);
		cp.clickCheckout();
	}

	@E("^preencher os campos \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\" com dados validos$")
	public void preencher_os_campos_com_dados_validos(String arg1, String arg2, String arg3) throws Throwable {
		CompraPage cp = new CompraPage(driver);
		cp.campoFirstName(arg1);
		cp.campoLastName(arg2);
		cp.campoZip(arg3);
	}

	@E("^clicar no botao Continue$")
	public void clicar_no_botao_Continue() throws Throwable {
		CompraPage cp = new CompraPage(driver);
		cp.clickContinue();
	}

	@Entao("^o usuario pode clicar no botao Finish para realizar a compra\\.$")
	public void o_usuario_pode_clicar_no_botao_Finish_para_realizar_a_compra() throws Throwable {
		CompraPage cp = new CompraPage(driver);
		cp.clickFinish();
	}
}
