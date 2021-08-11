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
      | teste@gmail.com | "tzH6RvlfSTg=" |
      
    @LoginEmailInvalido
  Esquema do Cenario: Mensagem de Login Invalido - E-mail Invalido
    Dado que o usuario esta na tela de Login
    Quando preencher dados invalidos no campo <email>
    E preencher o campo senha com <senha>
    E clicar na opcao entrar
    Entao o sistema apresenta a mensagem de dados invalidos

    Exemplos: 
      | email 						| senha  					|
      | teste@gmail.com1 	| "tzH6RvlfSTg="	 |

    @LoginSenhaInvalida
  Esquema do Cenario: Mensagem de Login Invalido - E-mail Invalido
    Dado que o usuario esta na tela de Login
    Quando preencher o campo email com <email>
    E preencher o campo <senha> com dados invalidos
    E clicar na opcao entrar
    Entao o sistema apresenta a mensagem de dados invalidos

    Exemplos: 
      | email 						| senha  	|
      | teste@gmail.com1 | "tzH6RvlfSTg=" | 
   	