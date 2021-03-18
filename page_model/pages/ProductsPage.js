import { Selector } from 'testcafe';

class ProductsPage {
    constructor() {
        this.labelProducts = Selector('.product_label')
        this.btnMenu = Selector('#react-burger-menu-btn')
        this.linkLogout = Selector('#logout_sidebar_link')
        this.imgCart = Selector('#shopping_cart_container')
        this.btnAddToCart = Selector('.btn_primary')
        this.btnRemoveProduct = Selector('.btn_secondary')

    }
}

export default new ProductsPage();