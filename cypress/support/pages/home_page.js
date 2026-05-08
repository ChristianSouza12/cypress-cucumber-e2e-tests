/// <reference types="cypress"/>




// 3 - Criar as ações da page

export default {
    accessLogin(){
        cy.visit("/")
        .get('#top_header')

         cy.get('.fa-user')
            .click()
    }
}