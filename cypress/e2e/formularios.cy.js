describe('Módulo 04 - Formulários', () => {

  beforeEach(() => {
    cy.visit('https://automationteststore.com/')
  })

  it('RF-13 - Campo de busca pode receber texto', () => {

    cy.get('#filter_keyword')
      .type('perfume')
      .should('have.value', 'perfume')

  })

  it('RF-14 - Botão de busca está disponível', () => {

    cy.get('.button-in-search')
      .should('exist')

  })

})