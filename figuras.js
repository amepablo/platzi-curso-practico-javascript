// Código Cuadrado
console.group("Cuadrado");

    // Lados 
    const ladoCuadrado = 5;
    console.log("Los lados del cuadrado mide: " + ladoCuadrado + " cm");

    // Perimetros
    const perimetroCuadrado = ladoCuadrado * 4;
    console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

    // Área
    const areaCuadrado = ladoCuadrado * ladoCuadrado;
    console.log("El área del cuadrado es: " + areaCuadrado+ " cm^2");

console.groupEnd();


// Código Triángulo

console.group("Triángulo");

    const ladoTriangulo1 = 6;
    const ladotriangulo2 = 6;
    const baseTriangulo = 4;
    const alturatriangulo = 5.5;

    // Lados
    console.log("Los lados del triángulo miden: " + ladoTriangulo1 + " cm, " + baseTriangulo + " cm");

    // Altura
    console.log("La altura del triángulo es de: " + alturatriangulo);

    // Perimetro
    const perimetroTriangulo = ladoTriangulo1 + ladotriangulo2 + baseTriangulo;
    console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm");

    // Área
    const areaTriangulo = (baseTriangulo * alturatriangulo) / 2;
    console.log("El área del triángulo es: " + areaTriangulo + " cm^2");

console.groupEnd();


// Código Círculo

console.group("Círculo");

    // Radio
    const radioCirculo = 4;
    console.log("El radio del Círculo es: " + radioCirculo + " cm");

    // Diámetro
    const diametroCirculo = radioCirculo * 2;
    console.log("El diámetro del Círculo es: " + diametroCirculo + " cm");

    // PI
    const pi = Math.PI;
    console.log("El valor de PI es: " + pi);

    // Circunferencia
    const perimetroCirculo = diametroCirculo * pi;
    console.log("La circunferencia del Círculo es: " + perimetroCirculo + " cm");

    // Área
    const areaCirculo = (radioCirculo * radioCirculo) * pi;
    console.log("El Área del círculo es: " + areaCirculo  + " cm^2");


console.groupEnd();

