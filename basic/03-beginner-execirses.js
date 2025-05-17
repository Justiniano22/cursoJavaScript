// Comentario de una linea

/*
Comentario
de 
varias
lineas.
*/

let nombre = "Justiniano";

let edad = 23;

let isStudent = true;

let undefinedValue;

let nullValue = null;

let mySymbol = Symbol("miSimbolo");

let myBigInt = BigInt(2222222223333333333333333333333333666666666666666666888888888888888);


console.log(nombre);
console.log(edad);
console.log(isStudent);
console.log(undefinedValue);
console.log(nullValue);
console.log(mySymbol);
console.log(myBigInt);

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof isStudent);
console.log(typeof undefinedValue);
console.log(typeof nullValue);
console.log(typeof mySymbol);
console.log(typeof myBigInt);

nombre = "Justi";
edad = 24;
isStudent = false;
undefinedValue = "Hola Mundo";
nullValue = true;
mySymbol = "symbol2";
myBigInt = 46666666666666666666666666666666666666622222222222222222222222223333n;

console.log(nombre);
console.log(edad);
console.log(isStudent);
console.log(undefinedValue);
console.log(nullValue);
console.log(mySymbol);
console.log(myBigInt);

nombre = true;
edad = "Veintitres";
isStudent = 1;
undefinedValue = null;
nullValue = 46666666666666666666666666666666666666622222222222222222222222223333n;
mySymbol = undefined;
myBigInt = "symbol2";

console.log(nombre);
console.log(edad);
console.log(isStudent);
console.log(undefinedValue);
console.log(nullValue);
console.log(mySymbol);
console.log(myBigInt);

const nombre2 = "Justiniano";

const edad2 = 23;

const isStudent2 = true;

const undefinedValueTwo; //Error al ejecutar

const nullValue2 = null;

const mySymbol2 = Symbol("miSimbolo");

const myBigInt2 = BigInt(2222222223333333333333333333333333666666666666666666888888888888888);

nombre2 = "Justi"; // Error al ejecutar por intentar modificar una constante
edad2 = 24;
isStudent2 = false;
undefinedValueTwo = "Hola Mundo";
nullValue2 = true;
mySymbol2 = "symbol2";
myBigInt2 = 46666666666666666666666666666666666666622222222222222222222222223333n;