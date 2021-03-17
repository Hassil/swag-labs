import { Selector } from 'testcafe';

class ProductsPage {
    constructor() {
        this.labelProducts = Selector('.product_label')
    }
}

export default new ProductsPage();