/*const x = "Edgar";
// let puede cambiar, const no.
console.log("Hola");

const persona={
    name: 'Edgar',
    edad: 23,
    altura: 1.70,
    direccion={
        calle: 'Mision San Ignacio',
        colonia: 'El descanso',
        numero: 1289
    },
    anoNac:function(){
        return Date.getFullYear() - this.age;
    }
}
//acceder a objetos
console.log(persona['direccion']['colonia']);
//constructor. Manera nueva
class Tarea {
    constructor(name, priority) {
        this.name;
        this.priority = priority;
    }
}

//cracion de objetos
const tarea1 = new Tarea('Examen', 'Alta');
const tarea2 = new Tarea('Tareas', 'Baja');

let nombre=prompt('Ingresa tu nombre');
document.getElementById('mensaje').innerHTML= "<h1>" + nombre + "</h1>";
//document.getElementById('mensaje').innerHTML= `<h1> ${nombre} </h1>`;
//constructor alternaiva 2
function Tarea(name, priority){
    this.name;
    this.priority=priority;
}
*/


class Personaje{
    constructor(name, img, health){
        this.name=name,
        this.img=img,
        this.health = health,
        this.atacar = function(enemy){
            enemy.health = enemy.health - 8;
            if(enemy.name=='John Wick'){
                if(enemy.health<=0){
                    var GameOverdiv = document.getElementById("GameOver");
                    GameOverdiv.style.opacity = 1.0;
                    document.getElementById("GameOver").innerHTML= `<h1>Master Chief Wins</h1>`;
                    enemy.health = 0;
                    document.getElementById("Health1").innerHTML= `<h1>${enemy['health']}</h1>`;    
                }else{
                    document.getElementById("Health1").innerHTML= `<h1>${enemy['health']}</h1>`;
                }
            }else{
                if(enemy.health<=0){
                    document.getElementById("GameOver").innerHTML= `<h1>John Wick Wins</h1>`;
                    enemy.health = 0;
                    document.getElementById("Health2").innerHTML= `<h1>${enemy['health']}</h1>`;    
                }else{
                    document.getElementById("Health2").innerHTML= `<h1>${enemy['health']}</h1>`;
                }
            }
        }
    }
}

let john = new Personaje('John Wick','JohnWick.jpg',100);
let master = new Personaje('Master Chief', 'MasterChief.png',100);
let imagen = john.img;
console.log(john['name']);

document.getElementById("john").innerHTML= `<img src="${john['img']}"width="300" height="200">`;
document.getElementById("master").innerHTML= `<img src="${master['img']}"width="300" height="300">`;