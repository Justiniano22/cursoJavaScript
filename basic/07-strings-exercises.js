let miNombre = "Justi";
let miNombre2 = "Justi";
let oracion = "Hola " + miNombre + ", Buen día!!";
console.log(oracion);

//Longitud de cadena
console.log(oracion.length);

//Primer y ultimo caracter del String
console.log(oracion[0]);
console.log(oracion[21]);

//Convierte en mayusculas y en minusculas a todo el String
console.log(oracion.toUpperCase());
console.log(oracion.toLowerCase());

//Cadena de texto en varias lineas
let oracionVariasLineas = `Esta es
una oración 
de varias
lineas`

// Interpola el valor de una variable en un Strin (con templates literals)
let oracionTemplate = (`Hola, ${miNombre}, ${oracionVariasLineas}`);
console.log(oracionTemplate);

//Reemplaza espacios en blanco en un String por guiones
console.log(oracion.replaceAll(" ", "-"));

//Comprueba si una cadena de texto contiene una palabra
console.log(oracion.includes("Justi"));

//Comprueba si dos strings son iguales
console.log(oracion == oracionVariasLineas);
console.log(miNombre == miNombre2);
console.log(miNombre === miNombre2);

//Comprueba si dos strings tienen la misma longitud
console.log(oracion.length == miNombre.length);
console.log(miNombre.length == miNombre2.length);