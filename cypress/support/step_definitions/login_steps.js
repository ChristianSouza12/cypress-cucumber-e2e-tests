/// <reference types="cypress"/>

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import home_page from '../pages/home_page'
import login_page from "../pages/login_page"
import { faker } from '@faker-js/faker'

let email
let senha

Given("I am on login screen", () => {
    home_page.accessLogin()
})

Given("Fill email", () => {

    email = faker.internet.email()

    login_page.preenchendoCampoEmailValido(email)
})

Given("Fill invalid email", () => {
    login_page.preenchendoCampoEmailInvalido()
})

Given("Fill invalid password", () => {
    login_page.preenchendoCampoSenhaInvalido()
})

Given("I fill my credentials", () => {

    email = faker.internet.email()
    senha = faker.internet.password()

    login_page.preenchendoCampoEmailValido(email)
    login_page.preenchendoCampoSenhaValido(senha)
})

When("I click on Login Button", () => {
    login_page.clicarBotaoLogin()
})
When("I click on register link", () => {
    login_page.clicarLinkCadastro()
})
When("I check remember me checkbox", () => {
    login_page.marcarLembrarDeMim()
})
When("I uncheck remember me checkbox", () => {
    login_page.desmarcarLembrarDeMim()
})
When("I click on remember me text", () => {
    login_page.clicarTextoLembrarDeMim()
})
Then("I should be redirected to register screen", () => {
    login_page.validarRedirecionamento()
})
Then("I see the message {string}", (message) => {
    login_page.validarMensagemErro(message)
})
Then("Remember me checkbox should be unchecked", () => {
    login_page.validarCheckboxLembrarDeMimDesmarcado()
})

Then("I see success message", () => {
    login_page.validarMensagemSucesso(email)
})
Then("Remember me checkbox should be checked", () => {
    login_page.marcarLembrarDeMim()
})