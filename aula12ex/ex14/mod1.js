function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 23
    msg.innerHTML = `Agora são ${hora} horas.`
    msg.style.textAlign = 'center'
    if (hora >= 0 && hora < 12){
        //Bom Dia!
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora < 19){
        //Boa Tarde!
        img.src = 'tarde.jpg'
        document.body.style.background = "#b9846f"
    }else{
        //Boa Noite!
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }
}
