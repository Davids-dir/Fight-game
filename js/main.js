// Declaro las variables con las que vamos a trabajar
var contador = 0;
var player1;
var player2;


// Creamos la clase de los luchadores
class Fighter {
    constructor(name, life, strength) {
        this.name = name;
        this.life = life;
        this.strength = strength;
    }
}

// Añadimos los luchadores asignando las propiedades de la clase 'Fighter'
let Ryu = new Fighter("Ryu", 180, 23);
let Ken = new Fighter("Ken", 160, 25);
let Chunli = new Fighter("Chunli", 145, 20);
let Akuma = new Fighter("Akuma", 190, 28);

// Creamos el array con los luchadores del pool asignandolos mediante 'clave:valor'
pool = {
    'Ryu': Ryu,
    'Ken': Ken,
    'Chunli': Chunli,
    'Akuma': Akuma,
}

// Funcion de cambio de pantalla
const Change = (a, b) => {
    document.getElementById(a).style.display = "none";
    document.getElementById(b).style.display = "block";
}

// Asignamos los objetos a los jugadores cuando pulsen sobre el personaje
const selChar = (a) => {

    if (pool[a] && contador < 2) {
        
            if (contador < 1) {
                player1 = pool[a];
                delete pool[a];
                document.getElementById(a).style.filter = 'grayscale(100%)';
                document.getElementById("fighterP1").innerHTML = '<img src="../img/' + a + '-move.webp" />';
                document.getElementById("player1Stage").innerHTML = '<img src="../img/' + a + '-move.webp" />';
                document.getElementById("textSelect").innerHTML = 'Select player Two';
                contador++;
            }

            else {
                player2 = pool[a];
                delete pool[a];
                document.getElementById(a).style.filter = 'grayscale(100%)';
                document.getElementById("fighterP2").innerHTML = '<img src="../img/' + a + '-move.webp" />';
                document.getElementById("player2Stage").innerHTML = '<img src="../img/' + a + '-move.webp" />';
                document.getElementById("textSelect").innerHTML = 'Press Fight';
                contador++;
                document.getElementById("buttonFight").style.display ="block";
            }
    }
}




