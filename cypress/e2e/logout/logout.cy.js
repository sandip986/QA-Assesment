describe("Checking logout functionality", () => {
  it("Logout", () => {
    cy.visit("https://demo.guru99.com/insurance/v1/index.php");
    cy.get("#email").click().type("ram@gmail.com");
    cy.get("#password").click().type("12345678");
    cy.get(":nth-child(3) > .btn").click();
    // click on logout button
    cy.get(".button_to > .btn").click()


  });
});
