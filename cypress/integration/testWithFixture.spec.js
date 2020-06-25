describe("Simple fixture test", () => {
  it("displays response", function () {
    cy.server({ delay: 2000 });
    cy.fixture("ExAmPLeFiXtuRe").as("response");
    cy.route("/api/endpoint", "@response");

    cy.visit("/");

    cy.get("@response").then((res) => {
      console.log(res);
      cy.get("#main").should("have.text", res);
    });
  });
});
