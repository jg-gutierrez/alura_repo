/*
Alura desafio Reiniciando el juego:
1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.
3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

JOHNN GIL GUTIERREZ
jg_gutierrez@yahoo.es
01-2024
*/

function calculaMasaCorporal(pPeso, pEstatura) {
    let fMasaCorporal = (pPeso / Math.sqrt(pEstatura));
    console.log(fMasaCorporal);
}
calculaMasaCorporal(180, 1.714);

function factorialNumero(pNumero) {
    let factorial = 1;
    for (let i = 1; i <= pNumero; i++) {
        factorial = factorial * i;
    }

    console.log(factorial);
}
factorialNumero(5);

function realesADolares(pMontoReales) {
    let fdolares = 0.00;
    fdolares = pMontoReales / 4.80;

    console.log(fdolares);
}
realesADolares(50);

function calculaareaPermetroCuadrado(pAlto, pAncho) {
    let area = pAlto * pAncho;
    let perimetro = 2 * (pAlto + pAncho);
    console.log(`El area es: ${area}, el perimetro es:${perimetro}`);
}
calculaareaPermetroCuadrado(2, 8);

function calculaareaPermetroCirculo(pRadio) {
    let area = Math.PI * Math.sqrt(pRadio);
    let perimetro = 2 * (Math.PI * Math.sqrt(pRadio));
    console.log(`El area es: ${area}, el perimetro es:${perimetro}`);
}
calculaareaPermetroCirculo(2, 8);

function tablaMultiplicar(pNumero) {
    let multi = 0.00;
    for (var i = 1; i <= 12; i++) {
        multi = pNumero * i;
        console.log(pNumero + "x" + i + "=" + multi);
    }
}
tablaMultiplicar(2);

