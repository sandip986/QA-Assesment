describe("Checking request quotation", () => {
    it("login with correct credentials", () => {
      cy.visit("https://demo.guru99.com/insurance/v1/index.php");
      //login with a valid credential
      cy.get("#email").click().type("ram@gmail.com");
      cy.get("#password").click().type("12345678");
      cy.get(":nth-child(3) > .btn").click();

      //profile
      cy.get("#ui-id-4").click();

    })

})