document.getElementById('inicio').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        contar();
    }
});
document.getElementById('fim').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        contar();
    }
});
document.getElementById('passo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        contar();
    }
});

function contar(){
    // pegando os valores
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var texto = document.getElementById('preparando')
    var texto2 = document.createElement('div')
    var aviso = ''

    var texto2_existe = document.getElementById('texto2')
    if (texto2_existe){
        texto2_existe.remove()
    }

    texto2.setAttribute('id', 'texto2')
    texto.appendChild(texto2)

    // se um dos campos estiver vazio
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        texto.innerHTML = 'Erro, Impossível Contar!<br>Por favor, Digite valores válidos!'
        texto.style.color = 'red'
    }

    if (passo.value != 0){ // se o passo não for zero
        passo = Number(passo.value)
    }

    if (passo.value == 0){ // se o passo for zero
        aviso = '<span style="color: orange;">Passo Inválido! Considerando Passo 1<br></span>' // span para mudar a cor quando for copiada
        passo = 1
    }

    // "filtrando" os valores
    if(inicio.value < fim.value || inicio.value.length != 0 && fim.value.length != 0 && passo.value.length != 0){
    inicio = Number(inicio.value) // acho q nem precisa desse Number mas é só pra garantir
    fim = Number(fim.value)

    // realizando a contagem
        texto.innerHTML = aviso + 'Contando...<br>' // para não apagar a mensagem de passo inválido

    for (inicio; inicio <= fim; inicio += passo){
        texto.innerHTML += `${inicio} \u{1F449} `
        texto.style.color = 'black'
    }
    texto.innerHTML += '\u{1F3C1}'
}
    else if (inicio.value > fim.value){
        texto.innerHTML = 'Erro! O Início é maior que o Fim'
        texto.style.color = 'red'
    }
}
