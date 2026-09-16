/**
 * 3. Lista Dinámica
 * 
 * Objetivo del ejercicio: Trabajar con la creación, eliminación y manipulación de elementos del DOM.
 * 
 * Ejercicio:
 * Crea una página con un campo de texto, un botón que diga "Agregar", y una lista vacía debajo.
 * - Cuando el usuario escriba un texto y haga clic en "Agregar", el texto debe añadirse como un nuevo elemento de la lista.
 * - Añade un botón al lado de cada elemento para eliminarlo de la lista.
 */

// 1. Selección de elementos del DOM
const itemInput = document.getElementById('item-input');
const btnAdd = document.getElementById('btn-add');
const dynamicList = document.getElementById('dynamic-list');
const emptyMsg = document.getElementById('empty-msg');

/**
 * Muestra u oculta el mensaje de "Lista vacía" según el número de elementos existentes
 */
function updateEmptyState() {
  if (dynamicList.children.length === 0) {
    emptyMsg.style.display = 'block';
  } else {
    emptyMsg.style.display = 'none';
  }
}

/**
 * Función que crea y agrega un nuevo elemento <li> a la lista
 */
function addItem() {
  const textValue = itemInput.value.trim();

  // Validación: Evitamos agregar cadenas vacías o solo con espacios
  if (textValue === '') {
    alert('Por favor, escribe un texto antes de agregar.');
    return;
  }

  // 2. Creación dinámica del elemento <li>
  const li = document.createElement('li');
  li.className = 'list-item';

  // 3. Creación del texto dentro del <li>
  const span = document.createElement('span');
  span.textContent = textValue;

  // 4. Creación dinámica del botón "Eliminar" para este elemento concreto
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Eliminar';
  deleteBtn.className = 'btn btn-danger';
  deleteBtn.style.padding = '0.4rem 0.8rem';
  deleteBtn.style.fontSize = '0.85rem';

  // Escuchador de eventos para borrar ESTE elemento al pulsar "Eliminar"
  deleteBtn.addEventListener('click', function() {
    li.remove(); // Elimina la etiqueta <li> del DOM
    updateEmptyState(); // Revisa si la lista quedó vacía
  });

  // 5. Ensamblaje de los elementos (span + deleteBtn dentro del li)
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // 6. Añadir el <li> completo a la lista <ul> del HTML
  dynamicList.appendChild(li);

  // 7. Limpieza del input y foco para seguir escribiendo cómodamente
  itemInput.value = '';
  itemInput.focus();

  // Ocultamos el mensaje de lista vacía
  updateEmptyState();
}

// Escuchador de clic en el botón "Agregar"
btnAdd.addEventListener('click', addItem);

// Permite presionar la tecla 'Enter' dentro del input para agregar elementos fácilmente
itemInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addItem();
  }
});
