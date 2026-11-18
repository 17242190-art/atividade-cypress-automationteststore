describe('Módulo 01 - Navegação e Organização da Interface', () => {

  beforeEach(() => {
    cy.visit('https://automationteststore.com/')
  })

  it('RF-01 - Página inicial carregada', () => {

    cy.get('body')
      .should('contain.text', 'Automation Test Store')

  })

  it('RF-02 - Menu de categorias disponível', () => {

    cy.get('#categorymenu')
      .should('exist')
      .and('be.visible')

  })

  it('RF-03 - Menu possui categorias', () => {

    cy.get('#categorymenu')
      .should('contain.text', 'Makeup')

  })

  it('RF-04 - Navegação principal disponível', () => {

    cy.get('#categorymenu a')
      .its('length')
      .should('be.greaterThan', 5)

  })

})