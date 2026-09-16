/**
 * EJERCICIO 1: Cambiador de Color de Fondo
 * 
 * Ejercicio: 
 * Crea una página web con un botón que diga "Cambiar color". Cada vez que el usuario haga clic en el 
 * botón, el color de fondo de la página debe cambiar a un color aleatorio. 
 */

// 1. Seleccionamos los elementos HTML que necesitamos manipular
const btnChangeColor = document.getElementById('btn-change-color');
const colorCodeText = document.getElementById('color-code-text');

/**
 * Función que genera un código de color hexadecimal aleatorio (ejemplo: #A3F12C)
 * @returns {string} Código hexadecimal de color
 */
function generateRandomHexColor() {
  // Los caracteres posibles en hexadecimal (0-9 y A-F)
  const hexDigits = '0123456789ABCDEF';
  let color = '#';

  // Un color HEX se compone de 6 caracteres después del '#'
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexDigits.length);
    color += hexDigits[randomIndex];
  }

  return color;
}

/**
 * Función manejadora del evento 'click'
 */
function changeBackgroundColor() {
  // Generamos el nuevo color aleatorio
  const newColor = generateRandomHexColor();

  // Aplicamos el nuevo color al background del body de la página
  document.body.style.backgroundColor = newColor;

  // Actualizamos el texto informativo en la pantalla con el código del color
  colorCodeText.textContent = newColor;
}

// 2. Asociamos la función al evento 'click' del botón
btnChangeColor.addEventListener('click', changeBackgroundColor);
