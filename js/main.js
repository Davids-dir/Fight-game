// Inicio la estructura del programa
// Creamos la clase de los luchadores
class Fighter {

    constructor (name, life, strength) {
        this.name = name;
        this.life = life;
        this.strength = strength;
    }    
}

// Añadimos los luchadores asignando las propiedades de la clase 'Fighter'
let Ryu = new Fighter ("Ryu", 180, 23);
let Ken = new Fighter ("Ken", 160, 25);
let Chunli = new Fighter ("Chunli", 145, 20);
let Akuma = new Fighter ("Akuma", 190, 28);

// Creamos el array con los luchadores del pool
pool = [Ryu, Ken, Chunli, Akuma];

// Creo el contador para la condicion

// Creando la asignacion del luchador al jugador
// Cuando el jugador haga su seleccion marcamos al luchador en gris y lo inhabilitamos de la seleccion
const Select = (a) => {
        let pickChar = document.getElementById (a).innerHTML; 
        document.getElementById(a).style.filter = 'grayscale(100%)';

}