import RecipeStore from '../page-objects/recipeStore.page';

describe('Cooking homepage', () => {

    before('Navigate to Recipe store page', () => {
        browser.url('/recipeStore');
    });

    it('should navigate to search page', () => {
        RecipeStore.search.moveToObject();
        RecipeStore.search.waitForVisible();
        RecipeStore.search.click();
        expect(browser.getUrl()).to.equal('http://localhost:3000/');
    });

    it('should navigate to contact page', () => {
        RecipeStore.contact.moveToObject();
        RecipeStore.contact.waitForVisible();
        RecipeStore.contact.click();
        expect(browser.getUrl()).to.contain('/contact');
    });

    it('should navigate to login page', () => {
        RecipeStore.login.moveToObject();
        RecipeStore.login.waitForVisible();
        RecipeStore.login.click();
        expect(browser.getUrl()).to.contain('/login');
    });

    it('should navigate to the register page', () => {
        RecipeStore.register.moveToObject();
        RecipeStore.register.waitForVisible();
        RecipeStore.register.click();
        expect(browser.getUrl()).to.contain('/register');
    });

    it('should navigate to back to search page', () => {
        RecipeStore.backToSearch.moveToObject();
        RecipeStore.backToSearch.waitForVisible();
        RecipeStore.backToSearch.click();
        expect(browser.getUrl()).to.equal('http://localhost:3000/');
    });

    // it('should have the correct placholder text', () => {
    //   RecipeStore.getElementById('#inputRecipeName')
    //   expect(RecipeStore.inputRecipeName).toEqual('Recipe name');
    // });
    //
    // it('should show error message when required fields are not filled in', () => {
    //   //RecipeStore.inputRecipeName.setValue('#inputRecipeName' 'HotPot');
    //   RecipeStore.inputRecipeName.moveToObject();
    //   browser.setValue('#inputRecipeName', 'hotpot');
    //   RecipeStore.addRecipe.click();
    //   expect(RecipeStore.errorMsgs.isVisible()).to.be.true;
    // });

  });
