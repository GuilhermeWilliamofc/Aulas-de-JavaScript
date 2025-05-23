document.getElementById('ano_nascimento').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        verificar();
    }
}); // se o enter for pressionado

function verificar(){
    var data_atual = new Date()
    var ano_atual = data_atual.getFullYear() // vai pegar o ano inteiro e não só os 2 ultimos digitos
    var ano_digitado = document.getElementById('ano_nascimento') // pegar o ano digitado pelo usuário
    var resposta = document.getElementById('resposta') // o texto de instrução
    var resposta2 = document.getElementById('resposta2') // o texto que aparece abaixo da instrução

    // se o ano for vazio ou maior que o ano atual
    if (ano_digitado.value.length == 0 || ano_digitado.value > ano_atual){
        resposta.style.textAlign = 'left'
        resposta.innerHTML = 'Preencha os dados acima para ver o resultado!'

        resposta2.innerHTML = 'Erro! Por favor, Digite um ano válido!'
        resposta2.style.color = 'red'

        alert(`O Ano "${ano_digitado.value}" não é um ano válido!`)
    }
    else{
        var sexo_escolhido = document.getElementsByName('sexo')
        var imagem = document.createElement('img') // criando elemento imagem dinamicamente
        imagem.setAttribute('id', 'imagem') // adicionado o id da foto

        // calculando idade
        var idade = ano_atual - ano_digitado.value

        // ver o gênero escolhido
        var genero = ''

        if (sexo_escolhido[0].checked){ // se o sexo masculino (index 0) foi escolhido
            var genero = 'um Homem'
            if (idade >= 0 && idade < 10){ // se for criança
                imagem.setAttribute('src', 'crianca_masculino.png')
            }
            else if (idade < 21){ // se for jovem
                imagem.setAttribute('src', 'jovem_masculino.png')
            }
            else if (idade < 50){ // se for adulto
                imagem.setAttribute('src', 'adulto_masculino.png')
            }
            else if (idade > 50){ // se for idoso (poderia colocar só else mas quero garantir)
                imagem.setAttribute('src', 'idoso_masculino.png')
            }
        }
        else if (sexo_escolhido[1].checked){ // se o sexo for feminino (index 1)
            var genero = 'uma Mulher'
            
            if (idade >= 0 && idade < 10){ // se for criança
                imagem.setAttribute('src', 'crianca_feminino.png')
            }
            else if (idade < 21){ // se for jovem
                imagem.setAttribute('src', 'jovem_feminino.png')
            }
            else if (idade < 50){ // se for adulta
                imagem.setAttribute('src', 'adulto_feminino.png')
            }
            else if (idade > 50){ // se for idosa
                imagem.setAttribute('src', 'idoso_feminino.png')
            }
        }

        resposta.style.textAlign = 'center' // centralizar o texto na tela
        resposta.innerHTML = `Detectamos ${genero} com ${idade} ano(s).`
        resposta.appendChild(imagem) // vai adicionar a imagem abaixo do texto (sem isso a imagem não aparece)
        resposta2.innerHTML = ''
    }

}