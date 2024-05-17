describe("Checking request quotation", () => {
    it("login with correct credentials", () => {
      cy.visit("https://demo.guru99.com/insurance/v1/index.php");
      //login with a valid credential
      cy.get("#email").click().type("ram@gmail.com");
      cy.get("#password").click().type("12345678");
      cy.get(":nth-child(3) > .btn").click();

      //request quotation
      cy.get("#ui-id-2").click();

      //breakdowncover
      cy.get("#quotation_breakdowncover").select("Roadside");
      //windscreenrepair
      cy.get("#quotation_windscreenrepair_t").click();
      //incidents
      cy.get("#quotation_incidents").click().type("Hit and Run");
      //registration
      cy.get("#quotation_vehicle_attributes_registration")
        .click()
        .type("2231212");
      //annual mileage
      cy.get("#quotation_vehicle_attributes_mileage").click().type("22");
      //estimated value
      cy.get("#quotation_vehicle_attributes_value").click().type("100000");
      //parking location
      cy.get("#quotation_vehicle_attributes_parkinglocation").select(
        "Private Property"
      );
      //start of policy year
      cy.get("#quotation_vehicle_attributes_policystart_1i").select("2022");
      //save quotation
      cy.get("#new_quotation > .actions > .btn-success").click()
      
    });
});
