console.log('Hola TypeScript');

function add (a: number, b:number) {
  return a + b;
}

add(1,2);

//array
let people: string[] = [];
people = ["Andres", "Andres", "Felipe"];

let peopleAndNumber: Array< string | number > = [];
peopleAndNumber.push(1);
peopleAndNumber.push('Andres');

//enum
enum color {
  rojo = "Rojo",
  amarillo = "Amarillo",
  azul = "Azul"
}

console.log(color.azul);

//Any
let comodin: any = 'Joker';
comodin = { type: 'Wildcard'};

//Object
let someObject: object = { type: 'Wildcard' };

//Interfaces
interface Rectangulo {
  ancho: number,
  alto: number
}

let rect: Rectangulo = {
  ancho: 4,
  alto:6
}

function area ( r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);