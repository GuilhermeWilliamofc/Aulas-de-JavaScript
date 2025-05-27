var num = 10 // var é uma variável global, independente de onde ela foi declarada a chamada irá funcionar

if (true){
    let num2 = 20 // let é uma variável que nem a do python, depende do bloco onde ela foi declarada para a sua chamada funcionar
    console.log(num2)
} // let só existe dentro desse if, o mesmo caso para o const, agora com o var ele existe globalmente, mesmo declarado dentro do bloco if

// o comando console.log(num2) fora do bloco if daria erro

const num3 = 30 // const é parecido com o let com a diferença de ser quase imutável, com exeções de arrays e objetos, quando seus metodos de substituir dados são utilizados (ex: pessoa.nome = 'Guilherme' - substituindo dados de um objeto)
// o comando "num3 = 35" vai dar erro
