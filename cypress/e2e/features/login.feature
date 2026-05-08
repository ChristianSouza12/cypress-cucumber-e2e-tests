

## 1 - Criar meu cenário

Feature: Login

   Eu como cliente
   Quero fazer login na aplicação
   Para fazer um pedido de compra

   Scenario: Login com campo email vazio
      Given I am on login screen
      When I click on Login Button
      Then I see the message "E-mail inválido."

   Scenario: Login com campo senha vazio
      Given I am on login screen
      And Fill email
      When I click on Login Button
      Then I see the message "Senha inválida."

   Scenario: Login com email inválido
      Given I am on login screen
      And Fill invalid email
      When I click on Login Button
      Then I see the message "E-mail inválido."

   Scenario: Login com senha inválida
      Given I am on login screen
      And Fill email
      And Fill invalid password
      When I click on Login Button
      Then I see the message "Senha inválida."

   Scenario: Login com sucesso
      Given I am on login screen
      And I fill my credentials
      When I click on Login Button
      Then I see success message

   Scenario: Validar link ainda não tem conta
      Given I am on login screen
      When I click on register link
      Then I should be redirected to register screen

   Scenario: Checkbox lembrar de mim deve iniciar desmarcado
      Given I am on login screen
      Then Remember me checkbox should be unchecked

   Scenario: Marcar checkbox lembrar de mim
      Given I am on login screen
      When I check remember me checkbox
      Then Remember me checkbox should be checked

   Scenario: Desmarcar checkbox lembrar de mim
      Given I am on login screen
      And I check remember me checkbox
      When I uncheck remember me checkbox
      Then Remember me checkbox should be unchecked

   Scenario: Clicar no texto lembrar de mim deve marcar checkbox
      Given I am on login screen
      When I click on remember me text
      Then Remember me checkbox should be checked