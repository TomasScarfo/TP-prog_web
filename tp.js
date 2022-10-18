const estado = {
    excelente: "img/emoticonos.png",
    buena: "img/feliz.png",
    intermedio: "img/pensando.png",
    mala: "img/triste.png",
    muyMala: "img/muy-triste.png"    
}

function experiencia() {
    var a = document.getElementById("animo-input").value
    
    var imgPath = null
 
    if (10 >= a && a > 8) {
        imgPath = estado.excelente
    } else if (8 >= a && a > 6) {
        imgPath = estado.buena
    } else if (6 >= a && a > 4) {
        imgPath = estado.intermedio
    } else if (4 >= a && a > 2) {
        imgPath = estado.mala
    } else if (a <= 2 && a >= 0) {
        imgPath = estado.muyMala
    } else {
        alert('Valor invalido, ingrese un numero entre 1-10')
        imgPath = "/TP-prog_web/img/tenedor.png"
    }

    var cara = document.getElementById('animo-img')
    cara.src = imgPath
}


var myObject = new Vue({
    el: '#app',
    data: {message: 'Hello Vue!'}
})