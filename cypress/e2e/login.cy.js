/// < reference types="cypress"/>

// const { it } = require("mocha")

// feature
describe('login', () => {

    //cenários
it('Login com sucesso', () => {

    // 1- Acessar o site - tela login
       cy.visit('/login')
    // 2- Escrever no campo email
    cy.get('#user').type('hugo@gmail.com')

    // 3- escrever no campo senha
   cy.get('#password').type('123456')

    // 4- clicar em login
    cy.get('#btnLogin').click()
   
    // 5- Verificar se o login foi bem-sucedido
   cy.url().should('include', 'my-account')

   })
   
    //cenários
    it.only('Assinar News', () => {

        // 1- Acessar o site - tela login
           cy.visit('/')
           cy.get('.form-control').type('Hugo@gmail.com{enter}')

       })

})

