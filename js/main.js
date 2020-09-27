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
let Ryu = new Fighter("Ryu", 190, 25);
let Ken = new Fighter("Ken", 180, 26);
let Chunli = new Fighter("Chunli", 170, 23);
let Akuma = new Fighter("Akuma", 200, 28);

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
                document.getElementById("nameP1").innerHTML = player1.name
                document.getElementById("lifeBarP1").innerText = player1.life;
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
                document.getElementById("nameP2").innerText = player2.name;
                document.getElementById("lifeBarP2").innerHTML = player2.life;
                contador++;
                document.getElementById("buttonFight").style.display ="block";
            }
    }
}



// Funcion que alterna los golpes entre los jugadores
const Hit = () => {

    //Obtengo un numero aleatorio para asignar a cada jugador con una condicion de par o impar
    chance_hit = Math.floor(Math.random() * 2);
    
    // Pega Player 1 si el numero obtenido en randon es 0
    if (chance_hit % 2 == 0) {
        player2.life = player2.life - player1.strength;
        
        if (player2.life <= 0) {
            player2.life = 0;
            document.getElementById('phase4').style.display = 'block';
            document.getElementById('phase3').style.display = 'none';
        }
    }
    // Pega el player 2 si el numero obtenido en random es 1
    else {
        player1.life = player1.life - player2.strength;
        
        if (player1.life <= 0) {
            player1.life = 0;
            document.getElementById('phase4').style.display = 'block';
            document.getElementById('phase3').style.display = 'none';
        } 
    }
}

