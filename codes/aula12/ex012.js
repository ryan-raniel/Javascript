var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são extamente ${hora} horas.`)
if (hora >= 5 && hora <= 11) {
    console.log('bom dia!')
}else if (hora >= 12 && hora <= 17) {
    console.log(`boa tarde!`)
} else if (hora >= 18 && hora <= 23) {
    console.log('boa noite!') 
} else if (hora >= 0  && hora <= 5) {
    console.log(`Está madrugando! vá dormir viciado`)
}
