describe("Register user", () => {
    it("Register user with valaid credentials", () => {
    //create user with valid information
    cy.visit("https://demo.guru99.com/insurance/v1/index.php");
    cy.get("a.btn").click()
    cy.url().should('contains','/register.php');
    cy.get("#user_title").select('Mr')
    cy.get("#user_firstname").click().type('Ram')
    cy.get("#user_surname").click().type('Thapa')
    cy.get("#user_phone").click().type('9801234567')
    cy.get("#user_dateofbirth_1i").select('1995')
    cy.get("#licencetype_t").click()
    cy.get("#user_licenceperiod");
    cy.get("#user_occupation_id").select('Academic')
    cy.get("#user_address_attributes_street").click().type('New Road')
    cy.get("#user_address_attributes_city").click().type('Pokhara')
    cy.get("#user_address_attributes_county").click().type('Nepal')
    cy.get("#user_address_attributes_postcode").click().type('33700')
    cy.get("#user_user_detail_attributes_email").click().type('ram@gmail.com')
    cy.get("#user_user_detail_attributes_password").click().type('12345678')
    cy.get("#user_user_detail_attributes_password_confirmation").click().type('12345678')
    cy.get('[name="submit"]').click()
    cy.url().should('contains',"/index.php");

    



  });

});
