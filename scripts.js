    //O DOM é acionado quando todo HTML foi completamente carregado
document.addEventListener('DOMContentLoaded', function() {

    //Tipos de dados
    //String: Sequencia de caracter
    //Number: Números inteiros ou pontos flutuantes (10.4)
    //BooLean: Retorna dois valores,  true ou false
    //Object: Estrutura de dados que pode armazenar múltiplos valores
    //Null: Quando está vazio
    //Array: Objeto especial ordenado
    //Function: Bloco de código reutilizável
   
    //Const: É usado para declarar uma variável cujo valor é permanente
    const A = 0;

    //Let: É usado para delcarar variáveis que os valores podem ser retribuidos
    let B = 0
    B = 10;
  console.log(B);

  const notaMedia = 6;
  if (notaMedia >= 6) {
    //aqui vai o código
   // alert("aluno aprovado");
  } 
  else if (notaMedia >= 4 && notaMedia < 6) {
   // alert("aluno quase pasou")
  } 
  else {
    //aqui vai o codigo
   // alert("aluno reprovado");
  }

  //----------operadores-----------

  // = sinal de atribuição 
  // == sinal de comparação 
  // === verifica se os dois são iguais e tem o mesmo tipo de dados 
  // != compara se é diferente 
  // !== compara se é estritamente diferente 
  // >maior 
  // < menor 


  const numero = "6";
  if (numero == 6){
    alert("é igual");
  }
  else {
    alert( "o tipo de dado é diferente ");
  }

//Funções são blocos de codigo que podem ser chamados e reutilizados

function primeiraFuncao() {
    //Aqui vai os cóidigos
    return "Olá, essa é a disciplina de Desenvolvimento Web";
}

});
