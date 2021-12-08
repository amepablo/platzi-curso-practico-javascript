var name = "Pablo Daniel";
var lastName = "Amé";
var nameUser = "amepablo";
var email = "amepablo@gmail.com";
var age = 35;
var cash = 250000;
var due = 10000;

var nameLastName = name + " " + lastName;
console.log(nameLastName);

var real = cash - due;
console.log(real);

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function decirNombre(name,lastname,nickname) {
    var completeName = name + " " + lastName;
    var frase = console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
    return frase;
}

// ************************************************************************************************

var typeSuscrip = "ExpertPlus";

if (typeSuscrip == "free") {
    console.log("Solo puedes tomar los cursos gratis");
}else if ( typeSuscrip == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if ( typeSuscrip == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else if ( typeSuscrip == "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

// ************************************************************************************************

var typeSuscrip = "Pablo";

if (typeSuscrip == "free") {
    console.log("Solo puedes tomar los cursos gratis");
}

if (typeSuscrip == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}

if (typeSuscrip == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}

if (typeSuscrip == "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

if(typeSuscrip != "free" && typeSuscrip != "Basic" && typeSuscrip != "Expert" && typeSuscrip != "ExpertPlus") {
    console.log("NO ES NADA");
}

// *****************************************************************************************************


const tipoDeSuscripcion = "Free";

const Suscripciones= ["Free","Basic","Expert","Expert+"];
const Respuestas=["Solo puedes tomar los cursos gratis",
                  "Puedes tomar casi todos los cursos de Platzi durante un mes",
                  "Puedes tomar casi todos los cursos de Platzi durante un año",
                  "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];

index=Suscripciones.indexOf(tipoDeSuscripcion);

if (index==-1){
    console.error("No exisite este plan u.u");
}
else{
    console.log(Respuestas[index]);
}

// *************************************************************************************************************

var i = 10;

while (i >=2) {
    console.log("El valor de i es: " + i);
    i--;
}

var i = 0;

while (i <= 5) {
    console.log("El valor de i es: " + i);
    i++;
}

// ****************************************************************************************************

var resultado = 0;

while (resultado != "4"){

    resultado = prompt("Cuanto es 2 + 2?");

}

console.log("El resultado es el correcto");

// ******************************************************************************************************

var array = []

function mostrar(array) {
    console.log(array[0]);
}

// *****

var array = ["Pablo", "Daniel", "Amé"];

function mostrar(array) {
    console.log( array);
}

for(var i = 0; i < array.length; i++) {
    mostrar(array[i]);
}


// ******

var articulos = [
    { nombre: "Bici", costo: "3000" },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 }
    ];
    
    articulos.forEach(function(articulo){
        console.log(articulo.nombre + " " + articulo.costo);
    });
        