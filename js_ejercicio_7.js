/**
 * 7. Generador de Contraseñas Aleatorias
 * 
 * Objetivo del ejercicio: Practicar generación de cadenas aleatorias y uso de formularios.
 * 
 * Ejercicio:
 * Crea una página con un campo de entrada para especificar la longitud de una contraseña y un botón que diga "Generar contraseña".
 * - Al hacer clic en el botón, se debe mostrar una contraseña generada aleatoriamente usando letras, números y caracteres especiales.
 * - Si la longitud es menor a 4 o el campo está vacío, muestra un mensaje de error indicando que la longitud debe ser mayor o igual a 4.
 */

// 1. Conjunto de caracteres disponibles para generar la contraseña
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?';

// Unimos todos los conjuntos de caracteres en una sola cadena
const ALL_CHARACTERS = LOWERCASE + UPPERCASE + NUMBERS + SYMBOLS;

// 2. Selección de elementos del DOM
const lengthInput = document.getElementById('length-input');
const btnGenerate = document.getElementById('btn-generate');
const passwordResult = document.getElementById('password-result');
const errorMsg = document.getElementById('error-msg');

/**
 * Muestra u oculta el mensaje de error de validación
 * @param {string|null} message Texto del error o null para ocultar
 */
function setErrorMessage(message) {
  if (message) {
    errorMsg.textContent = message;
    errorMsg.style.display = 'block';
  } else {
    errorMsg.textContent = '';
    errorMsg.style.display = 'none';
  }
}

/**
 * Función que genera y devuelve una contraseña aleatoria dada una longitud
 * @param {number} length Longitud de la contraseña
 * @returns {string} Contraseña aleatoria
 */
function generatePassword(length) {
  let password = '';
  
  for (let i = 0; i < length; i++) {
    // Obtenemos un índice aleatorio dentro del rango de la cadena de caracteres
    const randomIndex = Math.floor(Math.random() * ALL_CHARACTERS.length);
    password += ALL_CHARACTERS[randomIndex];
  }

  return password;
}

/**
 * Función manejadora del evento del botón
 */
function handleGeneratePassword() {
  const rawValue = lengthInput.value.trim();
  const length = parseInt(rawValue, 10);

  // 3. Validaciones solicitadas en el enunciado
  if (rawValue === '' || isNaN(length) || length < 4) {
    setErrorMessage('La longitud de la contraseña debe ser un número mayor o igual a 4.');
    passwordResult.textContent = '---';
    return;
  }

  // Si pasa la validación, limpiamos cualquier error anterior
  setErrorMessage(null);

  // Generamos y mostramos la nueva contraseña
  const newPassword = generatePassword(length);
  passwordResult.textContent = newPassword;
}

// 4. Escuchadores de eventos
btnGenerate.addEventListener('click', handleGeneratePassword);

// Generar una contraseña automáticamente al cargar la página
handleGeneratePassword();
