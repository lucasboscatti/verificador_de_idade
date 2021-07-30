function verificar() {
    let hoje = new Date().getFullYear()
    img = window.document.getElementById('imagem')
    var nasc = window.document.getElementById('nascimento')
    var res = window.document.getElementById('resultado')
    var sexo = window.document.getElementsByName('sex')
    var ano = Number(nasc.value)
    var idade = hoje - ano
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (idade < 0 || nasc.value.length == 0) {
        window.alert('[ERRO] Você preencheu incorretamente o ano')
    } else {
        if (sexo[0].checked) {
            genero = 'Homem'
            document.body.style.background ='CornflowerBlue'
            if (idade <= 10) {
                img.setAttribute('src', 'imagens/homem-10.png')
            } else if (idade <= 20) {
                img.setAttribute('src', 'imagens/homem-20.png')
            } else if (idade <= 40) {
                img.setAttribute('src', 'imagens/homem-40.png')
            } else if (idade <= 60) {
                img.setAttribute('src', 'imagens/homem-50.png')
            } else if (idade < 120) {
                img.setAttribute('src', 'imagens/homem-60.png')
            } else {
                img.setAttribute('src', 'imagens/esqueleto-120.png')
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            document.body.style.background ='pink'
            if (idade <= 10) {
                img.setAttribute('src', 'imagens/mulher-10.png')
            } else if (idade <= 20) {
                img.setAttribute('src', 'imagens/mulher-20.png')
            } else if (idade <= 40) {
                img.setAttribute('src', 'imagens/mulher-40.png')
            } else if (idade <= 60) {
                img.setAttribute('src', 'imagens/mulher-50.png')
            } else if (idade < 120) {
                img.setAttribute('src', 'imagens/mulher-60.png')
            } else {
                img.setAttribute('src', 'imagens/esqueleto-120.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        res.appendChild(img)
    }

} 
