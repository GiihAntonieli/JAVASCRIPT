
function verificar(){
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector("div#res")
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente! ')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 12){
                //Criança
                img.setAttribute('src', 'criançah.jpg')
                img.style.width = '300px'
                img.style.height = '330px'
                img.style.borderRadius = '50%'
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'jovemh.jpg')
                img.style.width = '300px'
                img.style.height = '330px'
                img.style.borderRadius = '50%'
            }else if(idade < 60){
                //Adulto
                img.setAttribute('src', 'adultoh.jpg')
                img.style.width = '300px'
                img.style.height = '330px'
                img.style.borderRadius = '50%'
            }else {
                //Idoso
                img.setAttribute('src', 'idosoh.jpg')
                img.style.width = '300px'
                img.style.height = '330px'
                img.style.borderRadius = '50%'
            }
        }else if (fsex[1].checked){
            genero ='Mulher'
            if (idade >= 0 && idade < 12){
                //Criança
                img.setAttribute('src', 'criançam.jpg')
                img.style.width = '300px'
                img.style.height = '330px'
                img.style.borderRadius = '50%'
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'jovemm.jpg')
                img.style.width = '300px'
                img.style.height = '330px'
                img.style.borderRadius = '50%'
            }else if(idade < 60){
                //Adulto
                img.setAttribute('src', 'adultom.jpg')
                img.style.width = '300px'
                img.style.height = '330px'
                img.style.borderRadius = '50%'
            }else {
                //Idoso
                img.setAttribute('src', 'idosom.jpg')
                img.style.width = '300px'
                img.style.height = '330px'
                img.style.borderRadius = '50%'
                
            }
        }
        res.style.textAlign = 'center'
        res.style.padding = '10px'
        res.innerHTML = `Detectamos ${genero} com  ${idade} anos.`
        res.appendChild(img)
    }
}