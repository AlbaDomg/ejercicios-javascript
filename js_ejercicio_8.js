/**
 * 8. Contador de Palabras y Caracteres
 * 
 * Objetivo del ejercicio: Practicar eventos en tiempo real y manipulación avanzada del DOM.
 * 
 * Ejercicio:
 * Crea una página con un campo de texto donde el usuario pueda escribir un párrafo.
 * - Muestra en tiempo real el número de caracteres y palabras ingresados debajo del campo.
 * - Palabras deben ser separadas por espacios, y los caracteres no deben incluir espacios ni saltos de línea.
 */

// 1. Selección de elementos del DOM
const textInput = document.getElementById('text-input');
const charCountDisplay = document.getElementById('char-count');
const wordCountDisplay = document.getElementById('word-count');

/**
 * Función que analiza el texto ingresado y calcula las métricas solicitadas
 */
function updateMetrics() {
  const text = textInput.value;

  // 2. Cálculo de caracteres excluyendo espacios en blanco, tabulaciones y saltos de línea (\s)
  // La expresión regular /\s/g busca globalmente cualquier espacio en blanco o salto de línea y lo elimina.
  const cleanCharacters = text.replace(/\s/g, '');
  const charCount = cleanCharacters.length;

  // 3. Cálculo de palabras separadas por uno o más espacios en blanco (\s+)
  const trimmedText = text.trim();
  let wordCount = 0;

  if (trimmedText.length > 0) {
    // Dividimos por cualquier secuencia de espacios/salto de línea y filtramos entradas vacías
    const words = trimmedText.split(/\s+/).filter(word => word.length > 0);
    wordCount = words.length;
  }

  // 4. Actualización del DOM en tiempo real
  charCountDisplay.textContent = charCount;
  wordCountDisplay.textContent = wordCount;
}

// 5. Escuchamos el evento 'input' para recalcular instantáneamente en cada modificación
textInput.addEventListener('input', updateMetrics);
