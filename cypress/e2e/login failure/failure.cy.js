describe("test login failure", () => {
    before(() => {
    cy.visit("https://demo.guru99.com/insurance/v1/index.php");
    });
  it("login functionality", () => {
    //login with invalid credentials
    cy.get("#email").click().type("abc@gmail.com")
    cy.get("#password").click().type("12")
    cy.get(":nth-child(3) > .btn").click()
    cy.get("span > b").should('be.visible')
});


});
