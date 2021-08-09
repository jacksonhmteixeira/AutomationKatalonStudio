# language: pt

@Login
Funcionalidade: Verificando Tela de Login

  @LoginValido
  Esquema do Cenario: Realizando Login
    Dado que o usuario esta na tela de Login
    Quando preencher o campo email com <email>
    E preencher o campo senha com <senha>
    E clicar na opcao entrar
    Entao o sistema apresenta a tela inicial

    Exemplos: 
      | email 						| senha  	|
      | "teste@gmail.com" | 123 |
      
   @LoginInvalido
   Cenario: Validando Usuario Inexistente
   	Dado que o usuario esta na tela de Login
   	Quando preencher dado invalido no campo email
   	E clicar na opcao entrar
   	Entao o sistema apresenta a mensagem
   	