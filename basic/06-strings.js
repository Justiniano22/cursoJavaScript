// Strings


//Concatenación
let myName = "Justiniano";
let greeting = "Hola, " + myName + "!";
console.log(greeting);
console.log(typeof(greeting));

//Longitud
console.log(greeting.length);

//Acceso a caracteres
console.log(greeting[0]);
console.log(greeting[15]);
console.log(greeting[16]);


//Métodos comunes
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
console.log(greeting.indexOf("Hola"));
console.log(greeting.indexOf("Justiniano"));
console.log(greeting.indexOf("Chau"));
console.log(greeting.includes("Hola"));
console.log(greeting.includes("Justiniano"));
console.log(greeting.includes("Chau"));
console.log(greeting.length);
console.log(greeting.slice(0, 10));
console.log(greeting.replace("Justiniano", "Justi"));

//Templates literals (plantillas literales)
let message = `Hola, este es mi
                curso de JavaScript`
console.log(message)

let email = "justi@gmail.com"

let greeting2 = (`Hola, ${myName}!, ${message}!! Tu email es: ${email}`);
console.log(greeting2);