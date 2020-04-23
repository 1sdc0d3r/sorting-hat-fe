describe("Render Quiz Component", () => {
  it("Visits the quiz", () => {
    cy.start();
  });

  it("Start of the Quiz", () => {
    cy.contains("Question 1");
    cy.get('[cy="question"]').should("have.length", 1);
    cy.get(".ansBtn").should("have.length", 4);
  });

  it("Returns to Landing page", () => {
    cy.clickBack();
    cy.start();
    cy.url("contains", "/quiz");
  });

  it("Next works if answer selected", () => {
    // for (let i = 1; i <= 7; i++) {
    //   // unsucceful button click: checks if current question is still rendered if answer is chosen
    //   cy.contains(`Question ${i}`);
    //   cy.get(".bg-purple-400").click();
    //   // tests a successful next button click/enter
    //   cy.contains(`Question ${i}`);
    //   //   (i % 2 = 0) ? cy.clickAnswer().type("{Enter}") : cy.clickAnswer().tab();
    //   cy.clickAnswer().tab();
    // }
    cy.contains(`Question 1`);
    cy.get("[cy='nextBtn']").click();
    cy.contains(`Question 1`);
    //   (i % 2 = 0) ? cy.clickAnswer().type("{Enter}") : cy.clickAnswer().tab();
    cy.get("[cy='answer-1']").click();
    cy.clickNext();
  });

  it("Clicks back through Quiz and forward again", () => {
    // for (let i = 0; i <= 6; i++) {
    //   cy.clickBack();
    // }
    // for (let i = 0; i <= 7; i++) {
    //   cy.clickAnswer();
    //   cy.clickNext();
    // }
  });

  it("Reaches Reusults component", () => {
    cy.url("contains", "/results");
  });
});
