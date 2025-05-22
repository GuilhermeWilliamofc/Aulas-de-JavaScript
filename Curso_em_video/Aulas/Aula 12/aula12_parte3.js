var agora = new Date()
var dia_semana = agora.getDay()

/*
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sábado
*/ 

switch(dia_semana){ // switch não funciona bem com intervalos númericos, porém com valores exatos e strings ele funciona bem
    case 0:
        dia_semana = 'Domingo'
        break // break é obrigatório no final de todos os case (no default é opcional)
    
    case 1:
        dia_semana = 'Segunda-Feira'
        break

    case 2:
        dia_semana = 'Terça-Feira'
        break

    case 3:
        dia_semana = 'Quarta-Feira'
        break

    case 4:
        dia_semana = 'Quinta-Feira'
        break

    case 5:
        dia_semana = 'Sexta-Feira'
        break

    case 6:
        dia_semana = 'Sábado'
        break

    default: /// o else do switch
        dia_semana = 'Erro: Dia da Semana Inválido!'
        break
}

console.log(`Hoje é ${dia_semana}`)
