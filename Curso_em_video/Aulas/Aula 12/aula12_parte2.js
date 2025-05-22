var agora = new Date()
var hora = agora.getHours() // pegar a hora do computador
var minuto = agora.getMinutes() // pega os minutos do computador

if (hora < 12) { // se for de manhã

    if (hora == 1) {
        console.log(`Agora são exatamente ${hora} hora e ${minuto} da Manhã.`)
    }
    else {
    console.log(`Agora são exatamente ${hora} horas e ${minuto} da Manhã.`)
    }

    console.log('Bom Dia!')
}
else if (hora <= 18){ // se for de tarde
    var hora = hora - 12

    if (hora == 1) {
    console.log(`Agora são exatamente ${hora} hora e ${minuto} da Tarde.`)
    }
    else{
        console.log(`Agora são exatamente ${hora} horas e ${minuto} da Tarde.`)
    }

    console.log('Boa Tarde!')
}
else { // se for de noite
    var hora = hora - 12
    console.log(`Agora são exatamente ${hora} horas e ${minuto} da Noite.`)
    console.log('Boa Noite!')
}
