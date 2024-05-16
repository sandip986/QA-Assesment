describe("test login failure", () => {
    beforeEach(() => {
    cy.visit("https://demo.guru99.com/insurance/v1/index.php");
    });
  it("login with invalid credentials", () => {
    //login with invalid credentials
    cy.get("#email").click().type("abc@gmail.com")
    cy.get("#password").click().type("12")
    cy.get(":nth-child(3) > .btn").click()
    cy.get("span > b").should('be.visible')
});

  it("login with correct email and wrong password", () => {
    //login with correct email and wrong password
    cy.get("#email").click().type("ram@gmail.com");
    cy.get("#password").click().type("12");
    cy.get(":nth-child(3) > .btn").click();
    cy.get("span > b").should("be.visible");
  });

  it("login with wrong email and correct password", () => {
    //login with correct email and wrong password
    cy.get("#email").click().type("r@gmail.com");
    cy.get("#password").click().type("1234678");
    cy.get(":nth-child(3) > .btn").click();

   });


});
