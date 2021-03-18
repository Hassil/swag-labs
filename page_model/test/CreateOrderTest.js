import CartPage from '../pages/CartPage'
import InformationPage from '../pages/InformationPage'
import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'

fixture('Create Order')
    .page `https://www.saucedemo.com/`

test('Continue with missing mail information', async t => {
    await t
        .typeText(LoginPage.txtUsername,'standard_user')
        .typeText(LoginPage.txtPassword,'secret_sauce')
        .click(LoginPage.btnLogin)
        await t.expect(ProductsPage.labelProducts.exists).ok()
        .click(ProductsPage.btnAddToCart)
        await t.expect(ProductsPage.btnRemoveProduct.exists).ok()
        .click(ProductsPage.imgCart)
        await t.expect(CartPage.btnCheckout.exists).ok()
        .click(CartPage.btnCheckout)
        await t.expect(InformationPage.labelYourInformation.exists).ok()
        await t.expect(InformationPage.labelYourInformation.innerText).eql('Checkout: Your Information')
        .click(InformationPage.btnContinue)
        await t.expect(InformationPage.msgFailedNameRequerid.exists).ok()
        await t.expect(InformationPage.msgFailedNameRequerid.innerText).eql('Error: First Name is required')

})