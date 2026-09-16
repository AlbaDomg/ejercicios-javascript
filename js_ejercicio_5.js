/**
 * 5. Calculadora Sencilla
 * 
 * Objetivo del ejercicio: Practicar la manipulación de formularios, eventos, y lógica básica de JavaScript.
 * 
 * Ejercicio:
 * Crea una página con dos campos de entrada de números y cuatro botones: "Sumar", "Restar", "Multiplicar", y "Dividir".
 * - Al hacer clic en cualquiera de los botones, debe mostrarse el resultado de la operación en un área de texto o debajo de los botones.
 * - Asegúrate de validar los datos para evitar errores (como división por cero o entradas vacías).
 */

// 1. Selección de elementos del DOM
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultValue = document.getElementById('result-value');

const btnAdd = document.getElementById('btn-add');
const btnSubtract = document.getElementById('btn-subtract');
const btnMultiply = document.getElementById('btn-multiply');
const btnDivide = document.getElementById('btn-divide');

/**
 * Muestra un mensaje de error estilizado en la caja de resultados
 * @param {string} msg Mensaje a mostrar
 */
function showError(msg) {
  resultValue.className = 'result-value error-msg';
  resultValue.textContent = msg;
}

/**
 * Muestra un resultado numérico correcto en pantalla
 * @param {number} val Resultado numérico
 */
function showResult(val) {
  resultValue.className = 'result-value';
  // Redondeamos a máximo 4 decimales si tiene decimales largos para mejorar legibilidad
  const formattedVal = Number.isInteger(val) ? val : parseFloat(val.toFixed(4));
  resultValue.textContent = formattedVal;
}

/**
 * Función principal que procesa la operación matemática
 * @param {string} operation Tipo de operación ('add', 'subtract', 'multiply', 'divide')
 */
function executeOperation(operation) {
  // 2. Validación de entradas vacías: los inputs leen valores en texto
  const val1Str = num1Input.value.trim();
  const val2Str = num2Input.value.trim();

  if (val1Str === '' || val2Str === '') {
    showError('Error: Ingresa ambos números.');
    return;
  }

  // 3. Conversión de texto a número decimal
  const val1 = parseFloat(val1Str);
  const val2 = parseFloat(val2Str);

  // Comprobación si la conversión dio NaN (Not a Number)
  if (isNaN(val1) || isNaN(val2)) {
    showError('Error: Ingrese valores numéricos válidos.');
    return;
  }

  let result = 0;

  // 4. Lógica de las operaciones
  switch (operation) {
    case 'add':
      result = val1 + val2;
      break;
    case 'subtract':
      result = val1 - val2;
      break;
    case 'multiply':
      result = val1 * val2;
      break;
    case 'divide':
      // Validación especial: División por cero
      if (val2 === 0) {
        showError('Error: No se puede dividir entre 0.');
        return;
      }
      result = val1 / val2;
      break;
    default:
      return;
  }

  showResult(result);
}

// 5. Asignación de eventos 'click' a cada botón
btnAdd.addEventListener('click', () => executeOperation('add'));
btnSubtract.addEventListener('click', () => executeOperation('subtract'));
btnMultiply.addEventListener('click', () => executeOperation('multiply'));
btnDivide.addEventListener('click', () => executeOperation('divide'));
