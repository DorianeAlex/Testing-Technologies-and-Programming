// describe block defines a test suite with a descriptive name
describe('Game test', () => {
  // the it block defines a test with a descriptive name and is designed to test the following scenarios
  it('visits the page, queries elements, interacts with it and assert about the content', () => {
    // visit the page of the game we want to test giving a specific URL
    cy.visit('http://127.0.0.1:5500/index.html');

    // query for an element with the class h2 and then within the element search for an element which contains our game title
    cy.get('h2').should('have.text', 'Challenge Rock Paper Scissors');
    // query for the element with an id "#result" and assert about the content on the page
    cy.get('#result').should('contain.text', 'Result');
    // query for the image element
    cy.get('img');

    // Query for the three action buttons with the class ".option"and click multiple elements by passing multiple:true to simulate a click event
    cy.get('.option').click({multiple:true});

    // using the cy.root() method to find the root DOM of an element and assert it
    cy.root().should('match', 'html')
    cy.get('.options').within(() =>{
      cy.root().should('have.class', 'options')
    })
    

  })
  // it('should update the result when Rock is clicked', () => {
  //   cy.contains('Rock').click();
  //   cy.get('#result').should('not.contain.text', 'Result'); // Ensure result has been updated
  // });

  // it('should reset the result after each click', () => {
  //   cy.contains('Rock').click();
  //   cy.get('#result').should('not.contain.text', 'Result');
  //   cy.contains('Paper').click();
  //   cy.get('#result').should('not.contain.text', 'Rock');
  // });
})
