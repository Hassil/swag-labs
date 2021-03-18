import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'

fixture('Logout in SwagLabs')
    .page `https://www.saucedemo.com/`

test('Logout test', async t => {
    await t
        .typeText(LoginPage.txtUsername,'standard_user')
        .typeText(LoginPage.txtPassword,'secret_sauce')
        .click(LoginPage.btnLogin)
        await t.expect(ProductsPage.labelProducts.exists).ok()
        .click(ProductsPage.btnMenu)
        await t.expect(ProductsPage.linkLogout.exists).ok()
        .click(ProductsPage.linkLogout)
        await t.expect(LoginPage.logoBot.exists).ok()
})