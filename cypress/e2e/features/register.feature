Feature: Cadastro de usuário

  Eu como novo usuário
  Quero realizar meu cadastro na aplicação
  Para acessar minha conta

  Background: Access register screen
    Given I am on register screen

  Scenario: Cadastro com campo nome vazio
  
    When I click on register button
    Then I see the register message "O campo nome deve ser prenchido"

  Scenario: Cadastro com campo email vazio
    
    And I fill name
    When I click on register button
    Then I see the register message "O campo e-mail deve ser prenchido corretamente"

  Scenario: Cadastro com campo email inválido
    
    And I fill name
    And I fill invalid email
    When I click on register button
    Then I see the register message "O campo e-mail deve ser prenchido corretamente"

  Scenario: Cadastro com campo senha vazia
   
    And I fill name
    And I fill valid email
    When I click on register button
    Then I see the register message "O campo senha deve ter pelo menos 6 dígitos"

  Scenario: Cadastro com campo senha inválida
    
    And I fill name
    And I fill valid email
    And I fill invalid password
    When I click on register button
    Then I see the register message "O campo senha deve ter pelo menos 6 dígitos"

  Scenario: Cadastro com sucesso
    
    And I fill valid register data
    When I click on register button
    Then I see register success message

  Scenario: Cadastro com todos os campos vazios
    
    When I click on register button
    Then I see the register message "O campo nome deve ser prenchido"

  Scenario: Cadastro com email sem arroba
    
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
    
    And I fill name
    And I fill valid email
    And I fill password with six characters
    When I click on register button
    Then I see register success message

  Scenario: Validar campos do formulário de cadastro
    
    Then I see register form fields

  Scenario: Validar botão cadastrar visível
    
    Then I see register button