

document.addEventListener('DOMContentLoaded', function() {

    // se necesitará crear constantes de las cartas 
    const caballero = '<div class="charcont" id="cab"><div id="cabSalto"></div></div>';
    const demon = '<div class="charcont" id="demon"><div id="demSal"></div></div>'
    const lobo = '<div class="charcont" id="lobo"><div id="lobosalto"></div></div>';
    const samurai = '<div class="charcont" id="samurai"><div id="samcorrer"></div></div>';

    let opciones = [caballero, demon, lobo, samurai];
    let eleccionesSimon = [];
    let eleccionesJugador = [];

    // Rondas jugadas y ganadas
    let rondas = 0;
    let contadorRondas = document.querySelector('#roundCounter');
    contadorRondas.innerHTML = rondas;
    // Contador de peronajes restantes
    let contadorRestantes = document.querySelector('#countRestantes');
    contadorRestantes.innerHTML = rondas; 

    // seleccion e insercion de datos en html
    function simonRandom(){
        let espacio = document.querySelector('#simonInsertar');
        let decision = opciones[(Math.floor(Math.random() * 4))];
        espacio.innerHTML = decision;
        return decision;
    }
    
    let vidaJugador = true;
    // mostrar carta
    simonRandom();
    eleccionesSimon.push(simonRandom());
    console.log(eleccionesSimon[0]);

});
// si acierta volver a repetir ciclo