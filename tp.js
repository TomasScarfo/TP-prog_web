const estado = {
    excelente: "/TP-prog_web/img/emoticonos.png",
    buena: "/TP-prog_web/img/feliz.png",
    intermedio: "/TP-prog_web/img/pensando.png",
    mala: "/TP-prog_web/img/triste.png",
    muyMala: "/TP-prog_web/img/muy-triste.png"    
}

function experiencia() {
    var fuel = document.getElementById("animo-input").value
    
    var imgPath = null
 
    if (10 <= fuel && fuel < 8) {
        imgPath = estado.excelente
    } else if (8 <= fuel && fuel < 6) {
        imgPath = estado.buena
    } else if (6 <= fuel && fuel < 4) {
        imgPath = estado.intermedio
    } else if (4 <= fuel && fuel < 2) {
        imgPath = estado.mala
    } else if (fuel >= 0 && fuel <= 2) {
        imgPath = estado.muyMala
    } else {
        prompt('valor invalido, ingrese un numero entre 1-10')
    }

    var medidor = document.getElementById('animo-img')
    medidor.src = imgPath
}