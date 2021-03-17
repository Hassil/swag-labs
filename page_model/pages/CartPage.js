import { Selector } from 'testcafe';

class CartPage {
    constructor() {
        this.labelProducts = Selector('.subheader')
        this.btnMenu = Selector('#react-burger-menu-btn')
    }
}

export default new CartPage();