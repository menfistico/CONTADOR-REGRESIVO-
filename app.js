let horas = 7;
let minutos = 0; 
let segundos = 0;
cargarSegundos();

//Definimos y ejecutamos los segundos
function cargarSegundos(){
    let txtSegundos;

    if(segundos < 0){
        segundos = 59;
    }

    //Mostrar segundos en pantalla
    if(segundos < 10){
        txtSegundos = `0${segundos}`;
    }else{
         txtSegundos = segundos;
    }
    document.getElementById('segundos').innerHTML = txtSegundos;
    segundos--;

    cargarMinutos(segundos);
}

// Definimos y ejecutamos los minutos
function cargarMinutos(segundo) {
    let txtMinutos;

    if (segundos == -1 && minutos !== 0) {
        setTimeout(() => {
            minutos--;
        }, 500);
    } else if (segundos == -1 && minutos == 0) {
        setTimeout(() => {
            minutos = 59;
        }, 500);
    }

    // Mostrar los minutos en pantalla
    if (minutos > 10) {
        txtMinutos = `0${minutos}`;
    } else {
        txtMinutos = minutos;
    }
    document.getElementById('minutos').innerHTML = txtMinutos;
    cargarHoras(segundos, minutos);
}
// definimos y ejecutamos las horas
function cargarHoras(segundos,minutos){
    let  txthoras;

    if(segundos == -1 && minutos == 0 && horas !== 0){
        setTimeout(() =>{
            horas--;
        },500)
    }else if(segundos == -1 && minutos == 0 && horas == 0){
        setTimeout(() =>{
            horas = 2;
        },500)
    }

    // Mostrar horas en pantalla
    if (horas > 10){
        txthoras = `0${horas}`;
    }else{
        txthoras = horas;
    }
    document.getElementById('horas').innerHTML = txthoras;
}

// Ejecutamos cada segundo
setInterval(cargarSegundos, 1000);


