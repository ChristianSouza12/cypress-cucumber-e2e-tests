//3 - criar as ações da page

import { faker } from "@faker-js/faker"

export default {

    clicarBotaoLogin() {
        cy.get('#btnLogin')
            .click()

    },
    validarMensagemErro(mensagem) {

        cy.get('.invalid_input')
            .should('be.visible')
            .and('contain.text', mensagem)



    },
    preenchendoCampoEmailValido(email) {

    

        cy.get('#user')
            .type(email)
    },
    preenchendoCampoEmailInvalido() {
        cy.get('#user')
            .type('emailinvalido.com')
    },
    preenchendoCampoSenhaInvalido() {
        cy.get('#password')
            .type('12345')
    },
    preenchendoCampoSenhaValido(senha) {
        cy.get('#password')
            .type(senha)
    },
    validarMensagemSucesso(nome) {
        cy.get('#swal2-html-container')
            .should('be.visible')
            .and('contain.text', `Olá, ${nome}`)



    },
    clicarLinkCadastro() {
        cy.get('#createAccount')
            .click()
    },
    validarRedirecionamento() {
        cy.url().should('include', '/register')
        cy.contains('Cadastro de usuário')
            .should('be.visible')

    },
    validarCheckboxLembrarDeMimDesmarcado() {
        cy.get('input[type="checkbox"]')
            .should('not.be.checked')
    },

    marcarLembrarDeMim() {
        cy.get('input[type="checkbox"]')
            .check()
            .should('be.checked')
    },

    desmarcarLembrarDeMim() {
        cy.get('input[type="checkbox"]')
            .uncheck()
            .should('not.be.checked')
    },

    clicarTextoLembrarDeMim() {
        cy.contains('Lembrar de mim')
            .click()

        cy.get('input[type="checkbox"]')
            .should('be.checked')
    }

}



