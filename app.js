

document.addEventListener('DOMContentLoaded', function() {

    // se necesitará crear constantes de las cartas 
    const caballero = '<div class="charcont" id="cab"><div id="cabSalto"></div></div>';
    const demon = '<div class="charcont" id="demon"><div id="demSal"></div></div>'
    const lobo = '<div class="charcont" id="lobo"><div id="lobosalto"></div></div>';
    const samurai = '<div class="charcont" id="samurai"><div id="samcorrer"></div></div>';

    let opciones = [caballero, demon, lobo, samurai];
    let eleccionesSimon = [];
    let eleccionesJugador = [];


    let espacio = document.querySelector('#test');
    let decision = opciones[(Math.floor(Math.random() * 4))];
    espacio.innerHTML = decision;
    

    console.log(decision);
    console.log(espacio);



});

// mostrar cuenta atras, mostrar suecesion random de X lenght cada vez +1 si acierta
// añadir espacios en blanco con cartas vacias, al pulsar una, pintar espacio
// si acierta volver a repetir ciclo