import { Selector } from 'testcafe';

class LoginPage {
    constructor() {
        this.logoBot = Selector('.bot_column')
        this.txtUsername = Selector('#user-name')
        this.txtPassword = Selector('#password')
        this.btnLogin = Selector('#login-button')
        this.msgFailedLogin = Selector('h3[data-test]')
    }
}

export default new LoginPage();