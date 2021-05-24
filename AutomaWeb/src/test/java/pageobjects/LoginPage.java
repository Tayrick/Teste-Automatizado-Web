package pageobjects;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import utils.MetodosUteis;

import static org.junit.Assert.assertTrue;

public class LoginPage  extends MetodosUteis {

    protected WebDriver driver;

    public LoginPage(WebDriver driver){
        this.driver = driver;
        PageFactory.initElements(driver,this);
    }

    @FindBy (how = How.ID, using = "user-name")
    private WebElement usuario;

    @FindBy (how = How.ID, using = "password")
    private WebElement senha;

    @FindBy (how = How.ID, using = "login-button")
    private WebElement btnLogin;

    @FindBy (how = How.ID, using = "contents_wrapper")
    private WebElement dashboard;
    
    @FindBy (how = How.CLASS_NAME, using = "error-message-container error")
    private WebElement loginInvalido;

    public void preencherUsuario(String nomeUsuario){
        esperarElemento(usuario);
        usuario.sendKeys(nomeUsuario);
    }

    public void preencherSenha(String senhaUsuario){
        esperarElemento(senha);
        senha.sendKeys(senhaUsuario);
    }

    public void clickBotaoLogin(){
        esperarElemento(btnLogin);
        btnLogin.click();
    }

    public void validarDashboard(){
        esperarElemento(dashboard);
        assertTrue(dashboard.isEnabled());
    }
    
    public void loginInvalido() {
    	esperarElemento(loginInvalido);
    	assertTrue(loginInvalido.isEnabled());
    }
}
