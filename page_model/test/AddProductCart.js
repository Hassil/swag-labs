import CartPage from '../pages/CartPage'
import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'

fixture('Add product ')
    .page `https://www.saucedemo.com/`

test('Add one product', async t => {
    await t
        .typeText(LoginPage.txtUsername,'standard_user')
        .typeText(LoginPage.txtPassword,'secret_sauce')
        .click(LoginPage.btnLogin)
        await t.expect(ProductsPage.labelProducts.exists).ok()
        .click(ProductsPage.btnAddToCart)
        await t.expect(ProductsPage.btnRemoveProduct.exists).ok()
        .click(ProductsPage.imgCart)
        await t.expect(CartPage.btnCheckout.exists).ok()
})