document.getElementById('numinput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        tabuada();
    }
});

function tabuada(){
    let numero_digitado = document.getElementById('numinput')
    let texto = document.getElementById('textobaixo')

    if (numero_digitado.value.length == 0){ // se nada for digitado
        texto.innerHTML = 'Erro! Por favor, Digite um valor válido!'
        texto.style.color = 'red'
        texto.style.paddingTop = '10px'
    }
    else {
    let numero = numero_digitado.valueAsNumber // valueasnumber converte o valor para numero sem precisar usar o Number()
    let tabuada = document.getElementById('tabuada')
    let contador = 1

    tabuada.innerHTML = '' // limpa a tabuada
    if (texto){
        texto.innerHTML = ' '
    }

    for (contador; contador <= 10; contador ++){
        var item = document.createElement('option')
        item.text = `${numero} x ${contador} = ${numero * contador}`
        item.value = `tab${contador}` // não faz mto sentido em javascript mas em linguagens como php essa linha é importante
        tabuada.appendChild(item)
    }
    }
}