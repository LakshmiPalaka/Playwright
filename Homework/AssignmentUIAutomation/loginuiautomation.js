class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async validLogin(username, password) {
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[name="password"]', password);
    await this.page.click('button[type="submit"]');
  }

  async invalidLogin(invalidUsername, invalidPassword) {
    await this.page.fill('input[name="username"]', invalidUsername);
    await this.page.fill('input[name="password"]', invalidPassword);
    await this.page.click('button[type="submit"]');
  }

  async logout() {
    await this.page.click('span.oxd-userdropdown-tab');
    await this.page.click('a[href*="logout"]');
  }
}

module.exports = { LoginPage };