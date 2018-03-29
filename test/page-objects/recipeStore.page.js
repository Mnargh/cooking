class RecipeStore {

    get search() { return $('a[href="/"]'); }
    get contact() { return $('a[href="/contact"]'); }
    get login() { return $('a[href="/login"]'); }
    get register() { return $('a[href="/register"]'); }
    get backToSearch() { return $('a[href="/"]')}
    get inputRecipeName () { return $('#inputRecipeName'); }
    get addRecipe () { return $('button#btnAddRecipe.btn.btn-primary'); }
    get errorMsgs () { return $('ul.hs-error-msgs'); }

}
export default new RecipeStore();
