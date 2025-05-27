let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

/*
for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos + 1}º tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores){
    console.log(`A posição ${Number(pos) + 1}º tem o valor ${valores[pos]}`)
}

console.log(`O valor 7 está na posição ${valores.indexOf(7) + 1}`) // vai aparecer o index do valor 7, se não tiver o valor no vetor o "-1" aparecerá
