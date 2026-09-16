/**
 * 2. Contador de Clics
 * 
 * Objetivo del ejercicio: Practicar el manejo de eventos y la actualización del contenido del DOM.
 * 
 * Ejercicio:
 * Crea una página con un botón que diga "Contar clics" y un texto inicial que muestre "Clics: 0". 
 * Cada vez que se haga clic en el botón, el texto debe actualizarse para mostrar el número total de clics realizados.
 */

// 1. Variable de estado para almacenar la cuenta de clics en memoria
let count = 0;

// 2. Selección de los elementos HTML requeridos
const counterText = document.getElementById('counter-text');
const btnCount = document.getElementById('btn-count');
const btnReset = document.getElementById('btn-reset');

/**
 * Función que incrementa el contador y actualiza el elemento en el DOM
 */
function incrementCounter() {
  count++; // Incrementamos en 1 el valor de la variable
  counterText.textContent = `Clics: ${count}`; // Actualizamos el texto
}

/**
 * Función adicional opcional para reiniciar la cuenta a 0
 */
function resetCounter() {
  count = 0;
  counterText.textContent = `Clics: ${count}`;
}

// 3. Registrar los eventos de clic en los botones
btnCount.addEventListener('click', incrementCounter);
btnReset.addEventListener('click', resetCounter);
