let pessoa = {nome: 'Guilherme', 
    idade: 18, 
    sexo: 'M',
    peso: 85.4,
    engordar(p = 0){ // função dentro do object
        console.log(`${pessoa.nome} engordou ${p}Kg`)
        this.peso += p // this é semelhante ao self das classes mas no contexto de funções
    }} // object em javascript é semelhante aos dicionários em python

pessoa.engordar(2)
console.log(`${pessoa.nome} pesa ${pessoa.peso}Kg`) // semelhante ao pessoa[nome] nos dict em python
