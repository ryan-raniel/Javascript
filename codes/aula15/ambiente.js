let num = [5, 8, 4]
num[3] = 6
num.push(7)
num.sort()
console.log(`Nosso vetor é o ${num} ${num.length}`)

console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é o ${num[0]}`)

///

for(let pos=0; pos<num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 4 está na posição ${pos}`)
}
