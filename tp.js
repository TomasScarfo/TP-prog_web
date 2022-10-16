const estados = {
    excelente: "/practica-ej/ej-combustible-2/fuel_meter_f.png",
    muyBuena: '/practica-ej/ej-combustible-2/fuel_meter_3-4.png',
    intermedia: '/practica-ej/ej-combustible-2/fuel_meter_1-2.png',
    mala: '/practica-ej/ej-combustible-2/fuel_meter_1-4.png',
    muyMala: 'practica-ej/ej-combustible-2/fuel_meter_e.png'
}


function MedidorCombustible() {
    var fuel = document.getElementById("medidor-input").value
    
    var imgPath = null
 
    if ( 45 <= fuel) {
        imgPath = estados.excelente
    } else if (35 <= fuel && fuel < 45) {
        imgPath = estados.muyBuena
    } else if (20 <= fuel && fuel < 35) {
        imgPath = estados.intermedia
    } else if (10 <= fuel && fuel < 20) {
        imgPath = estados.mala
    } else if (fuel >= 0 && fuel < 10) {
        imgPath = estados.muyMala
    } else {
        console.log('“Fuel tank: Invalid argument, must be >= 0')
    }

    var medidor = document.getElementById('medidor-img')
    medidor.src = imgPath
}