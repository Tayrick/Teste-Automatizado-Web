package stepdefinitions;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import org.openqa.selenium.WebDriver;
import pageobjects.LoginPage;

public class LoginSteps {
    WebDriver driver;

   
    @Dado("^que o usuario esteja na pagina inicial do sistema$")
    public void que_o_usuario_esteja_na_pagina_inicial_do_sistema() throws Throwable {
        Hooks.abrirUrl("https://www.saucedemo.com/");
        driver = Hooks.getDriver();
    }
    
    //Validando login e senha corretos
    @Quando("^informar o campo Username como \"([^\"]*)\"$")
    public void informar_o_campo_Username_como(String arg1) throws Throwable {
        LoginPage lp = new LoginPage(driver);
        lp.preencherUsuario(arg1);
    }

    @E("^informar o campo Password como \"([^\"]*)\"$")
    public void informar_o_campo_Password_como(String arg1) throws Throwable {
        LoginPage lp = new LoginPage(driver);
        lp.preencherSenha(arg1);
    }

    @E("^clicar no botao Login$")
    public void clicar_no_botao_Login() throws Throwable {
        LoginPage lp = new LoginPage(driver);
        lp.clickBotaoLogin();
    }

    @Entao("^o sistema devera autorizar o Login e exibindo pagina contendo o Dashborad principal\\.$")
    public void o_sistema_devera_autorizar_o_Login_e_exibindo_pagina_contendo_o_Dashborad_principal() throws Throwable {
        LoginPage lp = new LoginPage(driver);
        lp.validarDashboard();
    }
    
    
    //Verificando login e senha incorretos
    @Quando("^informar o campo Username como \"([^\"]*)\" invalido$")
    public void informar_o_campo_Username_como_invalido(String arg1) throws Throwable {
    	LoginPage lp = new LoginPage(driver);
        lp.preencherUsuario(arg1);
    }

    @Quando("^informar o campo Password como \"([^\"]*)\" invalido$")
    public void informar_o_campo_Password_como_invalido(String arg1) throws Throwable {
    	LoginPage lp = new LoginPage(driver);
        lp.preencherSenha(arg1);
    }

    @Entao("^o sistema devera exibir uma mensagem de erro$")
    public void o_sistema_devera_exibir_uma_mensagem_de_erro() throws Throwable {
    	
    }
}
