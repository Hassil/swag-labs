import LoginPage from '../pages/LoginPage'

fixture('Login in SwagLabs')
    .page `https://www.saucedemo.com/`

test('Login with a valid user', async t => {
    await t
        .typeText(LoginPage.txtUsername,'standard_user')
        .typeText(LoginPage.txtPassword,'secret_sauce')
        .click(LoginPage.btnLogin)
})    