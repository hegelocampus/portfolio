/// <reference types="cypress" />

context('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('has basic front page content that successfully loads', () => {
    cy.get('.masthead').contains('Bee Ellis');
    cy.contains('Learn more about me').click();
  });
  it('test that the menu toggle is rendering and expands the sidebar', () => {
    cy.get('#sidebar-wrapper').should('not.have.class', "active");
    cy.get('.menu-toggle').click();
    cy.get('#sidebar-wrapper').should('have.class', "active");
    cy.get('.menu-toggle').click();
    cy.get('#sidebar-wrapper').should('not.have.class', "active");
  });


})
