/*
Alura desafio HTML:

1. Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
2. Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
3. Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
4. Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
5. Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.

JOHNN GIL GUTIERREZ
jg_gutierrez@yahoo.es
01-2024
*/

let oh1=document.querySelector('h1');
oh1.innerHTML='Hora del Desafío';

function btn_clic(){
    console.log('el boton fue cliqueado!');
}
function msg_prompt(){
    let cCiudad=prompt('Nombre una ciudad de brasil'); 
    alert(`Estuve en ${cCiudad} y me acordé de ti`);
}
function msg_love_js(){
    alert('Yo amo JS');
}

function msg_suma(){
    let numero1=prompt('Ingrese un numero :'); 
    let numero2=prompt('Ingrese otro numero :'); 
    let numerosuma= parseInt(numero1)+parseInt(numero2);
    alert(`la suma es: ${numerosuma}`);
}