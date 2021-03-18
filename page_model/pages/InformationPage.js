import { Selector } from 'testcafe';

class InformationPage {
    constructor() {
        this.btnContinue = Selector('.cart_button')
        this.inputName = Selector('#first-name')
        this.inputLastName = Selector('#last-name')
        this.inputPostalCode = Selector('#postal-code')
        this.msgFailedNameRequerid = Selector('h3[data-test]')
        this.labelYourInformation = Selector('.subheader')
    }
}

export default new InformationPage();