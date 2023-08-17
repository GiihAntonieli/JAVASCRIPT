var agr = new Date()
var hora = agr.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12){
    console.log('Bom Dia!')
}else if(hora > 12 && hora < 19){
    console.log('Boa Tarde!!')
}else if(hora < 24){
    console.log('Boa Noite!!!')
}