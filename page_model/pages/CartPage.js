import { Selector } from 'testcafe';

class CartPage {
    constructor() {
        this.labelProducts = Selector('.subheader')
        this.btnCheckout = Selector('.checkout_button')
    }
}

export default new CartPage();