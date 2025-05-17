
let a = 5;
let b = 10;
let c = 5;
let d = "5";

let suma = a + b;
console.log(suma);
let resta = a - b;
console.log(resta);
let multi = a * b;
console.log(multi);
let divi = a / b;
console.log(divi);
let modulo = a%b;
console.log(modulo);
let exponente = a**b;
console.log(exponente);

/*
suma++;
resta--;
console.log(suma);
console.log(resta);*/

suma+=2;
console.log(suma);
resta-=2;
console.log(resta);
suma*=2;
console.log(suma);
multi/=2;
console.log(multi);
suma%=2;
console.log(suma);
multi**=2;
console.log(multi);

console.log(a >= c);
console.log(a < b);
console.log(b >= a);
console.log(a <= b);
console.log(a == c);

console.log(a===d);
console.log(a >= b);
console.log(a != 5);
console.log(a == b);
console.log(b <= a);

console.log(a < b && c > a);
console.log(a > b || b >= a);

console.log(a < b && c > a || b >= a);

let ganaste = true;
console.log(!(ganaste));
console.log(!(5 > 10 && 15 > 20));
console.log(" ");

const ganasteElPartido = true;
ganasteElPartido ? console.log("Felicitaciones ganaste!!!") : console.log("Perdiste, volvelo a intentar!!");

