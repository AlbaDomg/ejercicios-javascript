/**
 * 6. Temporizador con Inicio, Pausa y Reinicio
 * 
 * Objetivo del ejercicio: Practicar manejo de eventos, funciones de temporización y manipulación del DOM.
 * 
 * Ejercicio:
 * Crea una página con un temporizador que comience en 00:00:00. Incluye tres botones: "Iniciar", "Pausar" y "Reiniciar".
 * - Al hacer clic en "Iniciar", el temporizador debe comenzar a contar los segundos, minutos y horas.
 * - "Pausar" detiene el conteo pero mantiene el tiempo actual.
 * - "Reiniciar" pone el temporizador en 00:00:00.
 */

// 1. Variables de estado
let totalSeconds = 0; // Segundos acumulados
let timerInterval = null; // Guardará la referencia devuelta por setInterval

// 2. Selección de elementos del DOM
const timerText = document.getElementById('timer-text');
const btnStart = document.getElementById('btn-start');
const btnPause = document.getElementById('btn-pause');
const btnReset = document.getElementById('btn-reset');

/**
 * Formatea un número agregando un cero a la izquierda si tiene 1 solo dígito (ej: 5 -> "05")
 * @param {number} num Número a formatear
 * @returns {string} Texto formateado a 2 dígitos
 */
function formatTwoDigits(num) {
  return num.toString().padStart(2, '0');
}

/**
 * Actualiza el texto de la pantalla en formato hh:mm:ss según totalSeconds
 */
function updateTimerDisplay() {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  timerText.textContent = `${formatTwoDigits(hours)}:${formatTwoDigits(minutes)}:${formatTwoDigits(seconds)}`;
}

/**
 * Inicia o reanuda el conteo del temporizador
 */
function startTimer() {
  // Evitamos crear múltiples intervalos si el usuario hace clic en "Iniciar" varias veces
  if (timerInterval !== null) return;

  timerInterval = setInterval(() => {
    totalSeconds++;
    updateTimerDisplay();
  }, 1000); // 1000 milisegundos = 1 segundo
}

/**
 * Pausa el conteo manteniendo el tiempo actual transcurrido
 */
function pauseTimer() {
  if (timerInterval !== null) {
    clearInterval(timerInterval); // Detiene el intervalo
    timerInterval = null; // Reiniciamos la referencia a null
  }
}

/**
 * Reinicia el tiempo acumulado a cero y actualiza la pantalla
 */
function resetTimer() {
  pauseTimer(); // Detenemos cualquier conteo activo
  totalSeconds = 0; // Reseteamos la cuenta a 0
  updateTimerDisplay(); // Actualizamos la pantalla a 00:00:00
}

// 3. Asignación de escuchadores de eventos
btnStart.addEventListener('click', startTimer);
btnPause.addEventListener('click', pauseTimer);
btnReset.addEventListener('click', resetTimer);
