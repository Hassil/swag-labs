import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'

fixture('Login in SwagLabs')
    .page `https://www.saucedemo.com/`

test('Login with a valid user', async t => {
    await t
        .typeText(LoginPage.txtUsername,'standard_user')
        .typeText(LoginPage.txtPassword,'secret_sauce')
        .click(LoginPage.btnLogin)

        await t.expect(ProductsPage.labelProducts.exists).ok()
})

test('Login with a invalid user', async t => {
    await t
        .typeText(LoginPage.txtUsername,'standard_')
        .typeText(LoginPage.txtPassword,'secret_sauce')
        .click(LoginPage.btnLogin)

        await t.expect(LoginPage.msgFailedLogin.exists).ok()
        await t.expect(LoginPage.msgFailedLogin.innerText).eql('MensajeEpic sadface: Username and password do not match any user in this service')
})