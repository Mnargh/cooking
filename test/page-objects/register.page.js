class Register {

  get contact() { return $('a[href="/contact"]'); }
  get recipeStore() { return $('a[href="/recipeStore"]'); }
  get login() { return $('a[href="/login"]'); }
  get search() { return $('a[href="/"]'); }

}
export default new Register();
