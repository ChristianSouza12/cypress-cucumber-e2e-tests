/// <reference types="cypress"/>

export default {

    clicarBotaoCadastrar() {
        cy.get('#btnRegister')
            .click()
    },

    validarMensagemErro(mensagem) {

        cy.get('.errorLabel')
            .should('be.visible')
            .and('contain.text', mensagem)

    },

    validarMensagemSucesso(nome) {

        cy.get('#swal2-html-container')
            .should('be.visible')
            .and('contain.text', `Bem-vindo ${nome}`)

    },

    preenchendoCampoNome(nome) {

        cy.get('#user')
            .type(nome)

    },

    preenchendoCampoEmailInvalido() {

        cy.get('#email')
            .type('emailinvalido.com')

    },

    preenchendoCampoEmailValido(email) {

        cy.get('#email')
            .type(email)

    },

    preenchendoCampoSenhaInvalido() {

        cy.get('#password')
            .type('12345')

    },

    preenchendoCampoSenhaValido(senha) {

        cy.get('#password')
            .type(senha)

    },

    preenchendoCampoEmailComEspacos() {

        cy.get('#email')
            .type('teste @teste.com')

    },

    preenchendoCampoSenhaSeisCaracteres() {

        cy.get('#password')
            .type('123456')

    },

    validarCamposFormulario() {

        cy.get('#user')
            .should('be.visible')

        cy.get('#email')
            .should('be.visible')

        cy.get('#password')
            .should('be.visible')

    },

    validarBotaoCadastrar() {

        cy.get('#btnRegister')
            .should('be.visible')

    }

}