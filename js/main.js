// Inicio la estructura del programa

// Creo un contador para aplicar en la condicion
var contador = 0;
var jugador1;
var jugador2;


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
    'Akuma': Akuma
}

// Funcion de cambio de pantalla
function change(a, b, action = null) {
    document.getElementById(a).style.display = "none";
    document.getElementById(b).style.display = "block";

    if (action == "players")
        document.getElementById("textSelect").innerHTML = 'Selecciona player ONE';
}



// Asignamos los objetos a los jugadores
function selChar(a) {
    if (contador < 2) {
        if (contador == 0) {
            document.getElementById(a).style.filter = 'grayscale(100%)';
            jugador1 = pool[a];
            contador++;

            document.getElementById("textSelect").innerHTML = 'Selecciona player TWO';
        }
        else {
            document.getElementsByClassName('textSelect').innerHTML = 'Player 2 Select your Fighter';
            document.getElementById(a).style.filter = 'grayscale(100%)';
            jugador2 = pool[a];
            contador++;
        }
    }
    else {
        alert()
    }
}



// Cuando el jugador haga su seleccion marcamos al luchador en gris y lo inhabilitamos de la seleccion
/*const Select = (player) => {
    document.getElementById(player).innerHTML;
    document.getElementById(player).style.filter = 'grayscale(100%)';
}*/



// Funcion para el cambio de pantalla
let display = ['display Start', 'display Char', 'display Fight'];


