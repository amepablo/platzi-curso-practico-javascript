// Código Cuadrado
console.group("Cuadrado");

    function perimetroCuadrado(lado) {
        return lado * 4;
    }

    function areaCuadrado(lado){
        return lado * lado;
    }

console.groupEnd();


// Código Triángulo

console.group("Triángulo");

    // Perimetro
    function perimetroTriangulo(lado1, lado2, base){

        return lado1 + lado2 + base;

    }
    // Área
    function areaTriangulo(base, altura) {

        return (base * altura) / 2;

    }

console.groupEnd();


// Código Círculo

console.group("Círculo");
    // Diámetro
    function diametroCirculo(radio) {

        return radio * 2

    }

    // PI
    const pi = Math.PI;
    console.log("El valor de PI es: " + pi);

    // Circunferencia
    function perimetroCirculo(radio) {

        const diametro = diametroCirculo(radio);
        return diametro * pi;

    }

    // Área

    function areaCirculo (radio) {

        return (radio * radio) * pi

    }
    // console.log("El Área del círculo es: " + areaCirculo  + " cm^2");


console.groupEnd();



// Aquí interactuamos con el HTML

// Funciones calculos cuadrado

function calcularPerimetroCuadrado(){

    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

function calcularAreaCuadrado(){

    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);

}

// Funciones calculos triángulo

    // Perimetro
    function calcularPerimetroTriangulo(){

        const inputL1Tri = document.getElementById("inputL1Triangulo");
        const inputL2Tri = document.getElementById("inputL2Triangulo");
        const inputbaTri = document.getElementById("inputbaTriangulo");
        const valueL1Tri = Number(inputL1Tri.value);
        const valueL2Tri = Number(inputL2Tri.value) ;
        const valuebaTri = Number(inputbaTri.value);

        const perimetrotria = perimetroTriangulo(valueL1Tri,valueL2Tri,valuebaTri);
        alert(perimetrotria);

    }
    // Área
    function calcularAreaTriangulo() {

        const inputbaTri = document.getElementById("inputbaTriangulo");
        const inputAlTri = document.getElementById("inputAlTriangulo");
        const valuebaTri = Number(inputbaTri.value);
        const valueAlTri = Number(inputAlTri.value);
        const areaTri = areaTriangulo(valuebaTri,valueAlTri);
        alert(areaTri);

    }


// Funciones calculos círculo

    // Diámetro
    function calcularDiametroCirculo(){

        const inputRaCirculo = document.getElementById("inputRaCirculo");
        const valueRaCir = Number(inputRaCirculo.value);
        const diametroCir = diametroCirculo(valueRaCir);
        alert(diametroCir);

    }


    // Circunferencia

    function calcularCircunferenciaCirculo(){

        const inputRaCirculo = document.getElementById("inputRaCirculo");
        const valueRaCir = Number(inputRaCirculo.value);
        const CircuneferenciaCirculo = perimetroCirculo(valueRaCir);
        alert(CircuneferenciaCirculo);
    }

    // Área

    function calcularAreaCirculo(){
        const inputRaCirculo = document.getElementById("inputRaCirculo");
        const valueRaCir = Number(inputRaCirculo.value);
        const areaCir = areaCirculo(valueRaCir);
        alert(areaCir);
    }

