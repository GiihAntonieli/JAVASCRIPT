function contar(){
    let inicio =  document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let resp = document.getElementById('resp')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.legth == 0){
        resp.innerHTML ='Impossível contar!'
        window.alert('[ERRO] Faltam dados!')
    }
    else{
        resp.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f){
            //contagem crescente 
            for(let c = i; c <= f; c += p){
                resp.innerHTML += ` ${c} \u{1f449} `
                
            }
            
        }else{
            //contagem regressiva
            for(let c = i; c >= f; c -= p){
                resp.innerHTML += `${c} \u{1f449}`
            }
            
        }
        resp.innerHTML += `\u{1F3C1}`
    }
}

