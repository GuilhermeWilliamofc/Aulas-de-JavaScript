function carregar(){
    var mensagem = document.getElementById('mensagem')
    var fundo = document.getElementById('fundo')
    var titulo = document.getElementById('titulo')
    var copyright = document.getElementById('copyright')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    if (hora >= 0 && hora < 12){ // se for de manhã
        var texto = 'horas'

        if (hora == 1){
            var texto = 'hora'
        }

        mensagem.innerHTML = `Agora são ${hora} ${texto} e ${minutos} min da Manhã<br>Bom Dia!`
        fundo.style.backgroundColor = 'rgb(252, 250, 127)'
        titulo.style.color = 'rgb(224, 158, 158)'
        copyright.style.color = "rgb(255, 148, 148)"
        document.body.style.transitionDuration = "2s" // transição
    }
    else if (hora <= 18){ // se for de tarde
        var hora = hora - 12
        var texto = 'horas'

        if (hora == 1){
            var texto = 'hora'
        }

        mensagem.innerHTML = `Agora são ${hora} ${texto} e ${minutos} min da Tarde<br>Boa Tarde!`
        imagem.src = 'tarde.png'
        fundo.style.backgroundColor = 'rgb(130, 216, 238)'
        titulo.style.color = 'rgb(252, 250, 127)'
        copyright.style.color = 'rgb(255, 251, 0)'
        document.body.style.transitionDuration = "2s"
    }
    else{ // se não for nem manhã e nem tarde (vulgo noite)
        var hora = hora - 12

        mensagem.innerHTML = `Agora são ${hora} horas e ${minutos} min da Noite<br>Boa Noite!`
        imagem.src = 'noite.png'
        fundo.style.backgroundColor = 'rgb(86, 27, 121)'
        titulo.style.color = 'rgb(157, 163, 252)'
        copyright.style.color = 'rgb(157, 163, 252)'
        document.body.style.transitionDuration = "2s"
    }
}