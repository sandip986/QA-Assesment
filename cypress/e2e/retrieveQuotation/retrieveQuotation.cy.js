describe("Checking retrieve quotation", () => {
    it("retrieve quotation", () => {
        cy.visit("https://demo.guru99.com/insurance/v1/index.php");
        //login with a valid credential
        cy.get("#email").click().type("ram@gmail.com");
        cy.get("#password").click().type("12345678");
        cy.get(":nth-child(3) > .btn").click();

        //retrive quotation
        cy.get("#ui-id-3").click();

        //enter quotation number
        cy.get('form > [type="text"]').click().type("35935");
        //click retrive button
        cy.get("#getquote").click()
        


    });
})