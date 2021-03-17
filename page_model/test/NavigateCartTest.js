import CartPage from '../pages/CartPage'
import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'

fixture('Cart')
    .page `https://www.saucedemo.com/`

test('Navigate to the shopping cart', async t => {
    await t
        .typeText(LoginPage.txtUsername,'standard_user')
        .typeText(LoginPage.txtPassword,'secret_sauce')
        .click(LoginPage.btnLogin)
        await t.expect(ProductsPage.labelProducts.exists).ok()
        .click(ProductsPage.imgCart)
        await t.expect(CartPage.labelProducts.exists).ok()
})