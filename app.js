let eleccionesSimon = [];
let eleccionesJugador = [];

// se añade al array
function seleccionar(data){
    caballero = '<div class="charcont" id="cab"><div id="cabSalto"></div></div>';
    demon = '<div class="charcont" id="demon"><div id="demSal"></div></div>'
    lobo = '<div class="charcont" id="lobo"><div id="lobosalto"></div></div>';
    samurai = '<div class="charcont" id="samurai"><div id="samcorrer"></div></div>';
    // testing
    eleccionesJugador.push(data);
    return data;
}

document.addEventListener('DOMContentLoaded', function() {

    // se necesitará crear constantes de las cartas 
    function simonRandom(){

        const caballero = '<div class="charcont" id="cab"><div id="cabSalto"></div></div>';
        const demon = '<div class="charcont" id="demon"><div id="demSal"></div></div>'
        const lobo = '<div class="charcont" id="lobo"><div id="lobosalto"></div></div>';
        const samurai = '<div class="charcont" id="samurai"><div id="samcorrer"></div></div>';
        
        let opciones = [caballero, demon, lobo, samurai];
        // seleccion e insercion de datos en html + deicision simon
        let espacio = document.querySelector('#simonInsertar');
        let decision = opciones[(Math.floor(Math.random() * 4))];
        espacio.innerHTML = decision;
        eleccionesSimon.push(decision);
    }
    

    // boton inicio
    let iniciarButt = document.querySelector('#butt');
    iniciarButt.addEventListener('click', function(){
        simonRandom();
        rondas=1;
        let contadorRondas = document.querySelector('#roundCounter');
        contadorRondas.innerHTML = rondas;
    });



    // listeners de jugador
    let botonesJugador = document.querySelectorAll('.charcont2');
    botonesJugador.forEach(boton => {
        boton.addEventListener('click', function() {
            if(eleccionesJugador.join('')===eleccionesSimon.join('')){
                alert("meme")
            }
            else {alert("No meme")}
            console.log("Jugador: "+eleccionesJugador.join(''));
            console.log("Bot:     "+eleccionesSimon.join(''));
        });
    });


});
