/*
Alura desafio Listas:

1. Crea una lista vacía llamada "listaGenerica".
2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
6. Crea una función que calcule el promedio de los elementos en una lista de números.
7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
8. Crea una función que devuelva la suma de todos los elementos en una lista.
9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

JOHNN GIL GUTIERREZ
jg_gutierrez@yahoo.es
01-2024
*/

let listaGenerica = [];
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
lenguagesDeProgramacion.push('Java');
lenguagesDeProgramacion.push('Ruby');
lenguagesDeProgramacion.push('GoLang');

function muestraLista() {
    for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
        console.log(cars[i]);
    }
};
muestraLista();

function muestraListaInversa() {
    for (let i = (lenguagesDeProgramacion.length - 1); i >= 0; i++) {
        console.log(cars[i]);
    }
};
muestraListaInversa();

function calculaPromedio() {
    let listaNumeros = [20.00, 5.00, 3.00, 12.00, 18.00, 12.00];
    let fPromedio = 0.00;
    let fSuma = 0.00;
    for (let i = 0; i < listaNumeros.length; i++) {
        fSuma = fSuma + listaNumeros[i];
    }
    fPromedio = (fSuma / listaNumeros.length);
    console.log(fPromedio);
};
calculaPromedio();

function buscaNumeroGrandePequeno() {
    let listaNumeros = [20.00, 5.00, 3.00, 12.00, 18.00, 12.00];
    let fmasGrande = 0.00;
    let fmasPequeno = 9999999999999;

    for (let i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] > fmasGrande) {
            fmasGrande = listaNumeros[i]
        }
        if (listaNumeros[i] < fmasPequeno) {
            fmasPequeno = listaNumeros[i]
        }
    }
    console.log(`El número mas grande es: ${fmasGrande}`);
    console.log(`El número mas pequeño es: ${fmasPequeno}`);
};
buscaNumeroGrandePequeno();

function sumaelementos() {
    let listaNumeros = [20.00, 5.00, 3.00, 12.00, 18.00, 12.00];
    let fSuma = 0.00;
    for (let i = 0; i < listaNumeros.length; i++) {
        fSuma = fSuma + listaNumeros[i];
    }
    console.log(fSuma);
};
sumaelementos();

function buscaElemento(pValue) {
    let listaNumeros = [20.00, 5.00, 3.00, 12.00, 18.00, 12.00];
    if (listaNumeros.includes(pValue)) {

        for (let i = 0; i < listaNumeros.length; i++) {
            if (listaNumeros[i] == pValue) {
                console.log(i)
            }
        }


    } else {
        console.log(-1);
    }
};
buscaElemento(5);
buscaElemento(50);

function sumalistas(pliata1, plista2) {
    let listaRespuesta = [];
    let fSuma = 0.00;
    let i;
    for (i = 0; i < pliata1.length; i++) {
        fSuma = fSuma + pliata1[i];
        listaRespuesta.push(fSuma);
    }

    for (i = 0; i < plista2.length; i++) {
        fSuma = fSuma + plista2[i];
        listaRespuesta.push(fSuma);
    }

    console.log(fSuma);
    return listaRespuesta;
};

let lista1 = [2.00, 4.00, 6.00, 8.00, 10.00, 12.00];
let lista2 = [20.00, 5.00, 3.00, 12.00, 18.00, 12.00];
console.log(sumalistas(lista1, lista2));

function cuadradoNumeros(pliata1) {
    let listaRespuesta = [];
    let fCuadrado = 0.00;
    let i;
    for (i = 0; i < pliata1.length; i++) {
        fCuadrado = Math.sqrt(pliata1[i]);
        listaRespuesta.push(fCuadrado);
    }
    return listaRespuesta;
};

let listaN = [2.00, 4.00, 6.00, 8.00, 10.00, 12.00];
console.log(cuadradoNumeros(listaN));