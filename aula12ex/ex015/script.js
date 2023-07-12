function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number (fano.value) > ano) {
        window.alert('[error] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homen'
            if (idade >= 0 && idade < 18) {
                //criança
                img.setAttribute('src', 'criança homen.png')
            } else if (idade >= 18 && idade < 60) {
                //adulto
                img.setAttribute('src', 'adulto homen .png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso homen.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 18) {
                //criança
                img.setAttribute('src', 'criança mulher.png')
            } else if (idade >= 18 && idade < 60) {
                //adulto
                img.setAttribute('src', 'adulto mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}