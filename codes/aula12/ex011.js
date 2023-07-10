var idade = 68
console.log(`Voçê tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
} else   // console.log('Vota')
    if ( idade < 18 || idade > 65) { //(idade >= 16 &&) codigo logico sobrando intenção já aplicada nas linhas anteriores
        console.log('Voto opcional')
    } else { (idade >= 18) 
        console.log('Voto obrigatório')
    }

