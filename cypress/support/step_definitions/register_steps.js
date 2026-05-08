/// <reference types="cypress"/>

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { faker } from '@faker-js/faker'

import common_page from '../pages/common_page'
import cadastro_usuario_page from '../pages/cadastro_usuario_page'

let nome
let email
let senha

Given("I am on register screen", () => {

    common_page.acessarCadastroUsuario()

})

Given("I fill name", () => {

    nome = faker.person.fullName()

    cadastro_usuario_page.preenchendoCampoNome(nome)

})

Given("I fill invalid email", () => {

    cadastro_usuario_page.preenchendoCampoEmailInvalido()

})

Given("I fill valid email", () => {

    email = faker.internet.email()

    cadastro_usuario_page.preenchendoCampoEmailValido(email)

})

Given("I fill invalid password", () => {

    cadastro_usuario_page.preenchendoCampoSenhaInvalido()

})

Given("I fill valid password", () => {

    senha = faker.internet.password()

    cadastro_usuario_page.preenchendoCampoSenhaValido(senha)

})

Given("I fill valid register data", () => {

    nome = faker.person.fullName()
    email = faker.internet.email()
    senha = faker.internet.password()

    cadastro_usuario_page.preenchendoCampoNome(nome)
    cadastro_usuario_page.preenchendoCampoEmailValido(email)
    cadastro_usuario_page.preenchendoCampoSenhaValido(senha)

})

Given("I fill email without at", () => {

    cadastro_usuario_page.preenchendoCampoEmailInvalido()

})

Given("I fill email with spaces", () => {

    cadastro_usuario_page.preenchendoCampoEmailComEspacos()

})

Given("I fill password with six characters", () => {

    cadastro_usuario_page.preenchendoCampoSenhaSeisCaracteres()

})

When("I click on register button", () => {

    cadastro_usuario_page.clicarBotaoCadastrar()

})

Then("I see the register message {string}", (mensagem) => {

    cadastro_usuario_page.validarMensagemErro(mensagem)

})

Then("I see register success message", () => {

    cadastro_usuario_page.validarMensagemSucesso(nome)

})

Then("I see register form fields", () => {

    cadastro_usuario_page.validarCamposFormulario()

})

Then("I see register button", () => {

    cadastro_usuario_page.validarBotaoCadastrar()

})