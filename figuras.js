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

