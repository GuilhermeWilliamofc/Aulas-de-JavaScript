function par_ou_impar(num=' '){
    if (num === ' ' || isNaN(num)){ // se nada for digitado
        return 'Erro! Nenhum número foi digitado'
    }
    else{
        if (num % 2 == 0){ // se for par
            return `O Número ${num} é Par`
        }
        else{ // se for impar
            return `O Número ${num} é Ímpar`
        }
    }
}

console.log(par_ou_impar())
