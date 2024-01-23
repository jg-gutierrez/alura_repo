/*
Alura desafio FUNCIONES:

1. Crear una función que muestre "¡Hola, mundo!" en la consola.
2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

JOHNN GIL GUTIERREZ
jg_gutierrez@yahoo.es
01-2024
*/
function holaMundo() {
    console.log("¡Hola, mundo!");
};
holaMundo();

function holaMundo2(pNombre) {
    console.log(`¡Hola, ${pNombre}!`);
};
holaMundo2('Johnn');

function doblarNumero(pNumero) {
    let fdoble = pNumero * 2;
    console.log(`¡Hola, ${fdoble}!`);
};
doblarNumero(12);

function promedioNumero(pNumero1, pNumero2, pNumero3) {
    let fpromedio = (pNumero1 + pNumero2 + pNumero3) / 3;
    console.log(`El promedio es: ${fpromedio}!`);
};
promedioNumero(4, 7, 21);

function numeroMayor(pNumero1, pNumero2) {
    let fmayor = 0;
    if (pNumero1 > pNumero2)
        console.log(`El numero mayor es: ${pNumero1}!`)
    else
        console.log(`El numero mayor es: ${pNumero2}!`);
};
numeroMayor(4, 7);

function numeroMultiplicador(pNumero) {
    let fMultiplicador = pNumero * pNumero;
    console.log(fMultiplicador);
};
numeroMultiplicador(12);