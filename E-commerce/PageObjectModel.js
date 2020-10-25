import {Selector} from 'testcafe';

class Page{
    constructor() {
        this.signin_Link = Selector('a').withText('');
        this.email_input = Selector('#email_create');
        this.createAccount_btn = Selector('#SubmitCreate');
        this.firstname_input = Selector('#customer_firstname');
        this.lastname_input = Selector('#customer_lastname');
        this.email_form = Selector('#email');
        this.password_input = Selector('#passwd');
        this.firstname_Address = Selector('#firstname');
        this.lastname_Address = Selector('#lastname');
        this.address = Selector('#address1');
    }
}

export default new Page();