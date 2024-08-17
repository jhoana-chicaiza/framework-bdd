const{I}=inject()

class LoginPage{

    constructor(){
        this.navBar = "//header/div[1]";
        this.inputEmail = "input[placeholder='Email']";
        this.inputPassword = "input[placeholder='Password']";
        this.inputButton = "(//button[1][@type='submit'])[1]";
        this.loginPageText = "//h2[contains(text(),'Hi,')]";
    }

    visit(){
        I.amOnPage(login)
        I.waitForElement(this.navBar)
        I.seeInCurrentUrl('login')

    }

    login(email,password){

        I.waitForElement(this.inputEmail)
        I.fillField(this.inputEmail,email)
        I.fillField(this.inputPassword,password)
        I.click(this.sumbitButton)
        I.saveScreenshot('algo.png')
    }

    validateLogin(){

        I.waitForElement(this.loginPageText)
        I.waitForElement(this.navBar)
    }
}

module.exports=new LoginPage()
module.exports.LoginPage= LoginPage