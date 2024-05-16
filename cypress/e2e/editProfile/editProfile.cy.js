describe("CUpdate Profile", () => {
    it("Update the details of the user", () => {
      cy.visit("https://demo.guru99.com/insurance/v1/index.php");
      //login with a valid credential
      cy.get("#email").click().type("ram@gmail.com");
      cy.get("#password").click().type("12345678");
      cy.get(":nth-child(3) > .btn").click();

      //request quotation
      cy.get("#ui-id-5").click();
      //select Title
      cy.get("#user_title").select("Mr");
      //surname
      cy.get("#user_surname").click().type("Thapa");
      //firstname
      cy.get("#user_firstname").click().type("Ram");
      //phone
      cy.get("#user_phone").click().type("9805811222");
      //date of birth
      cy.get("#user_dateofbirth_1i").select("1995");
      //licence type
      cy.get("#user_licencetype_t").click();
      //licencetype
      cy.get("#user_licenceperiod").select("2");
      //street
      cy.get("#user_address_attributes_street").click().type("Pokhara");
      //city
      cy.get("#user_address_attributes_city").click().type("New Road");
      //country
      cy.get("#user_address_attributes_county").click().type("Nepal");
      //post code
      cy.get("#user_address_attributes_postcode").click().type("33700");
      //update user
      cy.get("#edit_user_ > .actions > .btn").click()
    })

})