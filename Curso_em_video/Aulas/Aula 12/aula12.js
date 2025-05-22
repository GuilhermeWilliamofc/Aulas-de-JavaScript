var idade = 12

console.log(`Sua Idade: ${idade}`)

if (idade < 16) {
    console.log('Não Vota')
}
else if (idade < 18 || idade > 65) { // "&&" (vulgo and) se quiser adicionar mais de uma condição
        console.log('Voto opcional') // "||" (vulgo or) se quiser adicionar uma condição
}
else{
    console.log('Voto obrigatório')
    }
