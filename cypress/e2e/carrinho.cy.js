describe('Módulo 03 - Carrinho', () => {

  beforeEach(() => {
    cy.visit('https://automationteststore.com/')
  })

  it('RF-09 - Existe botão de adicionar ao carrinho', () => {

    cy.get('.productcart')
      .first()
      .should('be.visible')

  })

  it('RF-10 - Produto possui preço', () => {

    cy.get('.oneprice')
      .first()
      .should('be.visible')

  })

  it('RF-11 - Carrinho está disponível', () => {

    cy.get('#main_menu_top')
      .should('contain.text', 'Cart')

  })

  it('RF-12 - Produto possui imagem', () => {

    cy.get('.thumbnail img')
      .first()
      .should('be.visible')

  })

})
