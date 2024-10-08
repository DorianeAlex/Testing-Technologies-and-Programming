describe('Cypress Example Test', () => {
  it('Visits the Cypress example page, queries an element and interacts with it', () => {
    // visit the page
    cy.visit('https://example.cypress.io')

    // query for an element
    cy.get(".home-list").contains("Querying");
    // interact with element
    cy.get(".home-list").contains("Querying").click();
    // assert the content on the page
    cy.url().should("include", "/commands/querying");
    cy.get("h1").should("contain", "Querying");
  })

  it('Visits Cypress example page, queries for the email input field and type an email address', () => {
    // visit the page
    cy.visit('https://example.cypress.io/commands/actions');

    // query for the email input field
    cy.get('.action-email').type('ec2282645@edinburghcollege.ac.uk');
    // interact with the element
    // assert the content on the page
    cy.get('.action-email').should('have.value', 'ec2282645@edinburghcollege.ac.uk');
  })

 it('Visit this example page', () => {
// visit the page
cy.visit('https://example.cypress.io/commands/actions');
// query for the action button with a class .action-btn and click
cy.get('.action-btn').click();
// query for the element with an id "#action-canvas" and click on it.
cy.get('#action-canvas').click();
// Query for the element with an id "#action-canvas" and click on the "topLeft".
cy.get('#action-canvas').click('topLeft');
// Query for the element with an id "#action-canvas" and click on the "bottomRight".
cy.get('#action-canvas').click('bottomRight');
  }) 
})