const estado = {
    excelente: "/TP-prog_web/img/emoticonos.png",
    buena: "/TP-prog_web/img/feliz.png",
    intermedio: "/TP-prog_web/img/pensando.png",
    mala: "/TP-prog_web/img/triste.png",
    muyMala: "/TP-prog_web/img/muy-triste.png"    
}

function experiencia() {
    var a = document.getElementById("animo-input").value
    
    var imgPath = null
 
    if (10 <= a && a < 8) {
        imgPath = estado.excelente
    } else if (8 <= a && a < 6) {
        imgPath = estado.buena
    } else if (6 <= a && a < 4) {
        imgPath = estado.intermedio
    } else if (4 <= a && a < 2) {
        imgPath = estado.mala
    } else if (a >= 0 && a <= 2) {
        imgPath = estado.muyMala
    } else {
        prompt('valor invalido, ingrese un numero entre 1-10')
    }

    var cara = document.getElementById('animo-img')
    cara.src = imgPath
}