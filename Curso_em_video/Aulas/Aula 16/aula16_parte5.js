function fatorial(num){
    if (num == 1){
        return 1
    }
    else{
        return num * fatorial(num - 1) // recursão (uma função chamando ela mesma)
    }
}

console.log(fatorial(5))
