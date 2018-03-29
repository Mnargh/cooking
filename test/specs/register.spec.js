import Register from '../page-objects/register.page';

describe('Register', () => {

    before('Navigate to Register page', () => {
        browser.url('/register');
    });

    it('should navigate to contact page', () => {
        Register.contact.moveToObject();
        Register.contact.waitForVisible();
        Register.contact.click();
        expect(browser.getUrl()).to.contain('/contact');
    });

    it('should navigate to recipe store page', () => {
        Register.recipeStore.moveToObject();
        Register.recipeStore.waitForVisible();
        Register.recipeStore.click();
        expect(browser.getUrl()).to.contain('/recipeStore');
    });

    it('should navigate to the register page', () => {
        Register.login.moveToObject();
        Register.login.waitForVisible();
        Register.login.click();
        expect(browser.getUrl()).to.contain('/login');
    });

    it('should navigate to the search page', () => {
        Register.search.moveToObject();
        Register.search.waitForVisible();
        Register.search.click();
        expect(browser.getUrl()).to.equal('http://localhost:3000/');
    });

});
