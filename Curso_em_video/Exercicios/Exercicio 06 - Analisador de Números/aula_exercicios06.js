document.getElementById('inputnum').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        adicionar();
    }
});

num = []
var texto_de_baixo = document.getElementById('texto_de_baixo')

function adicionar(){
    var numero_digitado = document.getElementById('inputnum') // variavel do numero digitado pelo usuario

    if (numero_digitado.value <= 0 || numero_digitado.value > 100 || numero_digitado.value.length == 0){ // se o numero digitado não estiver entre 1 e 100 ou se o usuario não digitar nada
        alert('Erro! Por favor digite um número entre 1 e 100!')
        texto_de_baixo.innerHTML = 'Erro! Por favor digite um número entre 1 e 100!'
        texto_de_baixo.style.color = 'red'
    }
    else if (num.indexOf(numero_digitado.value) != -1){
        alert(`Erro! O Número ${numero_digitado.value} já foi adicionado a lista!`)
        texto_de_baixo.innerHTML = `Erro! O Número ${numero_digitado.value} já foi adicionado a lista!`
        texto_de_baixo.style.color = 'red'
    }
    else { // caso os dados estiverem corretos
    var selector = document.getElementById('array') // variavel DOM do selector

    num.push(numero_digitado.value) // adiciona o número no array
    var texto = document.createElement('option') // adiciona o texto no selector

    texto.innerHTML = `O valor ${numero_digitado.value} foi adicionado` // texto no selector
    selector.appendChild(texto) // adiciona a option no selector

    texto_de_baixo.innerHTML = ''

    numero_digitado.value = '' // para remover o número digitado
    numero_digitado.focus() // para já deixar a opção selecionada

    }
}

function analisador(){
    if (num.length == 0){
        alert('Erro! Adicione valores antes de finalizar!')
        texto_de_baixo.innerHTML = 'Erro! Adicione valores antes de finalizar!'
        texto_de_baixo.style.color = 'red'
    }
    else{
    var array_ordem = num.sort()
    var soma_array = 0
    var tamanho_array = num.length

    for (cont = 0; cont < tamanho_array; cont++){
        soma_array += Number(num[cont])
    }

    var media = Number(soma_array) / Number(tamanho_array)

    texto_de_baixo.innerHTML = `Ao todo, temos ${num.length} números cadastrados.<br><br>O maior valor informado foi ${array_ordem[tamanho_array - 1]}.<br><br>O menor valor informado foi ${array_ordem[0]}.<br><br>Somando todos os valores, temos ${soma_array}.<br><br>A média dos valores digitados é ${media}.`
    texto_de_baixo.style.color = 'black'
    }
}