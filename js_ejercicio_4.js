/**
 * 4. Filtro de Búsqueda en Tiempo Real
 * 
 * Objetivo del ejercicio: Practicar la interacción entre eventos del DOM y lógica en JavaScript.
 * 
 * Ejercicio:
 * Crea una página con un campo de texto y una lista predefinida de elementos.
 * - Mientras el usuario escribe en el campo, la lista debe actualizarse en tiempo real para mostrar 
 *   solo los elementos que contienen el texto escrito.
 * - Ejemplo: Si la lista contiene ["Perro", "Gato", "Pez"] y el usuario escribe "Ga", solo "Gato" debe quedar visible.
 */

// 1. Lista predefinida de elementos según el enunciado
const items = ['Perro', 'Gato', 'Pez', 'Loro', 'Hámster', 'Tortuga', 'Caballo', 'Elefante', 'Delfín', 'Tigre'];

// 2. Selección de elementos del DOM
const searchInput = document.getElementById('search-input');
const itemsList = document.getElementById('items-list');

/**
 * Renderiza en pantalla un array de elementos dados
 * @param {Array<string>} filteredItems Lista de elementos a mostrar
 */
function renderItems(filteredItems) {
  // Limpiamos el contenido anterior de la lista
  itemsList.innerHTML = '';

  // Si no hay coincidencias con la búsqueda
  if (filteredItems.length === 0) {
    itemsList.innerHTML = '<li class="no-results">No se encontraron resultados que coincidan con la búsqueda.</li>';
    return;
  }

  // Generamos un <li> por cada elemento del array filtrado
  filteredItems.forEach(item => {
    const li = document.createElement('li');
    li.className = 'item-card';
    li.textContent = item;
    itemsList.appendChild(li);
  });
}

/**
 * Función que filtra la lista en tiempo real según lo que escribe el usuario
 */
function filterItems() {
  // Convertimos la búsqueda a minúsculas y eliminamos espacios extra
  const query = searchInput.value.toLowerCase().trim();

  // Filtramos el array original comparando en minúsculas
  const filtered = items.filter(item => item.toLowerCase().includes(query));

  // Volvemos a pintar la lista filtrada
  renderItems(filtered);
}

// 3. Renderizado inicial de todos los elementos al cargar la página
renderItems(items);

// 4. Escuchamos el evento 'input' para reaccionar en tiempo real al tipear
searchInput.addEventListener('input', filterItems);
