describe('Módulo 02 - Catálogo e Produtos', () => {

  beforeEach(() => {
    cy.visit('https://automationteststore.com/')
  })

  it('RF-05 - Exibe produtos na página inicial', () => {

    cy.get('.thumbnail')
      .should('have.length.greaterThan', 0)

  })

  it('RF-06 - Produto possui nome visível', () => {

    cy.get('.prdocutname')
      .first()
      .should('be.visible')

  })

  it('RF-07 - Existe campo de busca', () => {

    cy.get('#filter_keyword')
      .should('exist')

  })

  it('RF-08 - Campo de busca aceita texto', () => {

    cy.get('#filter_keyword')
      .type('shampoo')
      .should('have.value', 'shampoo')

  })

})