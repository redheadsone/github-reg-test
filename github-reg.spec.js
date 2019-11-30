describe("github registration", function() {
  it("should open github.com", function() {
    const login = "heyare34";
    const email = "heyare34@gmail.com";
    const password = "qwerty321!@##";

    browser.waitForAngularEnabled(false);
    browser.get("https://github.com/");

    const loginForm = $$(".js-signup-form").first();

    loginForm.$("#user\\[login\\]").sendKeys(login);

    loginForm.$("#user\\[email\\]").sendKeys(email);
    loginForm.$("#user\\[password\\]").sendKeys(password);
    loginForm.$("[type=submit]").click();

    browser.sleep(10000);
  });
});
