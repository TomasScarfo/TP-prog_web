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
    var p = null

    if (10 >= a && a > 8) {
        imgPath = estado.excelente
        p = 'Wow! Estamos agradecidos'
    } else if (8 >= a && a > 6) {
        imgPath = estado.buena
        p = 'Wow! Estamos agradecidos'
    } else if (6 >= a && a > 4) {
        imgPath = estado.intermedio
        p = 'Gracias por valorarnos!'
    } else if (4 >= a && a > 2) {
        imgPath = estado.mala
        p = 'Intentaremos mejorar!'
    } else if (a <= 2 && a >= 0) {
        imgPath = estado.muyMala
        p = 'Intentaremos mejorar!'
    } else {
        alert('Valor invalido, ingrese un numero entre 1-10')
        imgPath = "/TP-prog_web/img/tenedor.png"
        p = 'Algo salio Mal'
    }

    var cara = document.getElementById('animo-img')
    var msj = document.getElementById('feedback')
    cara.src = imgPath
    msj.innerHTML = p
}



var appVue2 = new Vue({
    el: '#app',
    data: {
        mensaje: '',
        nombre: ''
    }
})

// date
var date = document.getElementById('date')

var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = mm+'-'+dd+'-'+yyyy;

date.innerHTML = today



