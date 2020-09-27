// Declaro las variables con las que vamos a trabajar
let contador = 0;
let player1;
let player2;
let player1Life;
let player2Life;

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


let pool = {
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
                player1Life = player1.life;
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
                player2Life = player2.life;
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
        document.getElementById('lifeBarP2').innerHTML = player2.life;
        
        if (player2.life <= 0) {
            document.getElementById('winnerText').innerText = player1.name + " " + "Win"
            document.getElementById('winnerPortrait').innerHTML = '<img src="../img/' + player1.name + '-win.webp" height="160" width="140" />';
            document.getElementById('phase4').style.display = 'block';
            document.getElementById('phase3').style.display = 'none';
        }
    }
    // Pega el player 2 si el numero obtenido en random es 1
    else {
        player1.life = player1.life - player2.strength;
        document.getElementById('lifeBarP1').innerHTML = player1.life;
        
        if (player1.life <= 0) {
            document.getElementById('winnerText').innerText = player2.name + " " + "Win"
            document.getElementById('winnerPortrait').innerHTML = '<img src="../img/' + player2.name + '-win.webp" height="160" width="140" />';
            document.getElementById('phase4').style.display = 'block';
            document.getElementById('phase3').style.display = 'none';
        } 
    }
}

// Funcion para realizar el reset
const Reset = () => {

    document.getElementById('phase4').style.display = 'none';
    document.getElementById('phase1').style.display = 'block';

    contador = 0;
    document.getElementById("fighterP1").innerHTML = '<img src="" />';
    document.getElementById("fighterP2").innerHTML = '<img src="" />';

    document.getElementById(player1.name).style.filter = 'grayscale(0%)';
    document.getElementById(player2.name).style.filter = 'grayscale(0%)';

    document.getElementById("buttonFight").style.display ="none";
    
    player1.life = player1Life;
    player2.life = player2Life;

    pool[player1.name] = player1;
    pool[player2.name] = player2;

    document.getElementById("lifeBarP1").innerHTML = player1.life;
    document.getElementById("lifeBarP2").innerHTML = player2.life;
}