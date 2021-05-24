package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import utils.MetodosUteis;
import static org.junit.Assert.assertTrue;

import static org.junit.Assert.assertTrue;

public class CompraPage extends MetodosUteis{
	protected WebDriver driver;

    public CompraPage(WebDriver driver){
        this.driver = driver;
        PageFactory.initElements(driver,this);
    }

    @FindBy (how = How.ID, using = "item_4_title_link")
    private WebElement produto;
    
    @FindBy (how = How.ID, using = "add-to-cart-sauce-labs-backpack")
    private WebElement btnAddCarrinho;
    
    @FindBy (how = How.ID, using = "shopping_cart_container")
    private WebElement btnCarrinho;
    
    @FindBy (how = How.ID, using = "checkout")
    private WebElement btnCheckout;
    
    @FindBy (how = How.ID, using = "first-name")
    private WebElement firstName;
    
    @FindBy (how = How.ID, using = "last-name")
    private WebElement lastName;
    
    @FindBy (how = How.ID, using = "postal-code")
    private WebElement zip;
    
    @FindBy (how = How.ID, using = "continue")
    private WebElement btnContinue;
    
    @FindBy (how = How.ID, using = "finish")
    private WebElement btnFinish;
    
    @FindBy (how = How.ID, using = "checkout_complete_container")
    private WebElement msgCompraFinalizada;

    public void clickProduto(){
        esperarElemento(produto);
        produto.click();
    }
    
    public void adicionarProdutoCarrinho() {
    	esperarElemento(btnAddCarrinho);
    	btnAddCarrinho.click();
    }
    
    public void clickCarrinho() {
    	esperarElemento(btnCarrinho);
    	btnCarrinho.click();
    }
    
    public void clickCheckout() {
    	esperarElemento(btnCheckout);
    	btnCheckout.click();
    }
    
    public void campoFirstName(String firstN) {
    	esperarElemento(firstName);
    	firstName.sendKeys(firstN);
    }
    
    public void campoLastName(String lastN) {
    	esperarElemento(lastName);
    	lastName.sendKeys(lastN);
    }
    
    public void campoZip(String zipCode) {
    	esperarElemento(zip);
    	zip.sendKeys(zipCode);
    }
    public void clickContinue() {
    	esperarElemento(btnContinue);
    	btnContinue.click();
    }
    
    public void clickFinish() {
    	esperarElemento(btnFinish);
    	btnFinish.click();
    	assertTrue(msgCompraFinalizada.isEnabled());
    }

}
