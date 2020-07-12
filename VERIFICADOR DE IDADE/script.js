function verificar() {
    var data =new Date()
    var ano =data.getFullYear()
    var fano =document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number (fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else { 
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) { 
                //criança
                img.setAttribute('src', 'CRIANÇA-homen.png')
                document.body.style.background ='#48E5E1'
            } else if (idade < 21) { 
                document.body.style.background ='#D4E16C'
                //Jovem
                img.setAttribute('src', 'homen-jovem.png')
            } else if (idade < 50) { 
                document.body.style.background ='#803A2C'
                //Adulto
                img.setAttribute('src', 'adultHOMEN.png')
            } else {  
                document.body.style.background ='#AA7A63'
                //idoso
                img.setAttribute('src', 'VOVO-homen.png')
            }
        } else if (fsex[1].checked) {  
            genero = 'Mulher'
            if (idade >=0 && idade < 10) { 
                document.body.style.background ='#CB8252'
                //criança
                img.setAttribute('src', 'CRIANÇA-MULHER.png')
            } else if (idade < 21) { 
                document.body.style.background ='#D32B39'
                //Jovem
                img.setAttribute('src', 'mulher-jovem.png')
            } else if (idade < 50) { 
                document.body.style.background ='#5D70B3'
                //Adulto
                img.setAttribute('src', 'ADULT-MULHER.png')
            } else {  
                document.body.style.background ='#EC9DA7'
                //idoso
                img.setAttribute('src', 'VOVO-MULHER.png')
            }
        }
        res.style.texAlign = 'center'
        res.innerHTML =`Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}