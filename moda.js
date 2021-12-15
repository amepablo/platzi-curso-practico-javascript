
// const lista1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];


    // Crear un objeto vacío
    const lista1Count = {};
    
    // Utilizar el método map para recorrer el objeto
    //  por cada elemento en cuestión, en este caso,
    //  agrupandolos por la cantidad de veces que se repite
    //  en el mismo.
    
function calcularModa(lista1){

    lista1.map(
    
        function (elemento) {
    
            // Si elemento aparece por segunda vez, se suma uno
            //  sino se crea el elemento en uno.
            if (lista1Count[elemento]) {
    
                lista1Count[elemento] += 1;
    
            } else {
    
                lista1Count[elemento] = 1;
            }
            /* Lista1Count devuelve lo siguiente:
                1: 3
                2: 5
                3: 2
                4: 1
            */
        }
    );
    
    // Object.entries convierte objeto en un Array
    //  y cada elemento del mismo es un array
    
    const lista1Array = Object.entries(lista1Count).sort(
        
        // sort() Método de ordenamiento en este caso
        //  de mayor a menor
        
        function (elementoA, elementoB) {
    
            // Ordenar Array con respecto a la posición 1
            return elementoA[1] - elementoB[1];
    
            // Equivale a
            // if (elementoA > elementoB) return 1;
            // if (elementoA == elementoB) return 0;
            // if (elementoA < elementoB) return -1; 
        }
    );
    
    const moda = lista1Array[lista1Array.length - 1];

    return moda

}
