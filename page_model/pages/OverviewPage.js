import { Selector } from 'testcafe';

class OverviewPage {
    constructor() {
        this.labelPaymentInformation = Selector('.summary_info')
        this.btnFinish = Selector('.cart_button')  
        this.msgSucces = Selector('.complete-header')
        this.labelOverview = Selector('.subheader')
    }
}

export default new OverviewPage();