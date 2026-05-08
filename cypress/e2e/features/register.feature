Feature: Cadastro de usuário

  Eu como novo usuário
  Quero realizar meu cadastro na aplicação
  Para acessar minha conta

  Scenario: Cadastro com campo nome vazio
    Given I am on register screen
    When I click on register button
    Then I see the register message "O campo nome deve ser prenchido"

  Scenario: Cadastro com campo email vazio
    Given I am on register screen
    And I fill name
    When I click on register button
    Then I see the register message "O campo e-mail deve ser prenchido corretamente"

  Scenario: Cadastro com campo email inválido
    Given I am on register screen
    And I fill name
    And I fill invalid email
    When I click on register button
    Then I see the register message "O campo e-mail deve ser prenchido corretamente"

  Scenario: Cadastro com campo senha vazia
    Given I am on register screen
    And I fill name
    And I fill valid email
    When I click on register button
    Then I see the register message "O campo senha deve ter pelo menos 6 dígitos"

  Scenario: Cadastro com campo senha inválida
    Given I am on register screen
    And I fill name
    And I fill valid email
    And I fill invalid password
    When I click on register button
    Then I see the register message "O campo senha deve ter pelo menos 6 dígitos"

  Scenario: Cadastro com sucesso
    Given I am on register screen
    And I fill valid register data
    When I click on register button
    Then I see register success message

  Scenario: Cadastro com todos os campos vazios
    Given I am on register screen
    When I click on register button
    Then I see the register message "O campo nome deve ser prenchido"

  Scenario: Cadastro com email sem arroba
    Given I am on register screen
    And I fill name
    And I fill email without at
    And I fill valid password
    When I click on register button
    Then I see the register message "O campo e-mail deve ser prenchido corretamente"

#   Scenario: Cadastro com email com espaços
#     Given I am on register screen
#     And I fill name
#     And I fill email with spaces
#     And I fill valid password
#     When I click on register button
#     Then I see the register message "O campo e-mail deve ser prenchido corretamente"

  Scenario: Cadastro com senha no limite mínimo permitido
    Given I am on register screen
    And I fill name
    And I fill valid email
    And I fill password with six characters
    When I click on register button
    Then I see register success message

  Scenario: Validar campos do formulário de cadastro
    Given I am on register screen
    Then I see register form fields

  Scenario: Validar botão cadastrar visível
    Given I am on register screen
    Then I see register button