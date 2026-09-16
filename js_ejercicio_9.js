/**
 * 9. Lista de Tareas con LocalStorage
 * 
 * Objetivo del ejercicio: Practicar persistencia de datos con localStorage.
 * 
 * Ejercicio:
 * Crea una aplicación de lista de tareas.
 * - Cada tarea debe incluir un texto y un checkbox para marcarla como completada.
 * - Las tareas se deben guardar en localStorage para que persistan incluso si la página se recarga.
 * - Debe incluir un botón para limpiar todas las tareas completadas y actualizar el localStorage.
 */

// Key usada para identificar nuestros datos en localStorage
const LOCAL_STORAGE_KEY = 'conquer_js_tasks';

// 1. Cargar las tareas guardadas previamente o inicializar un array vacío
let tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

// 2. Selección de elementos del DOM
const taskInput = document.getElementById('task-input');
const btnAddTask = document.getElementById('btn-add-task');
const taskList = document.getElementById('task-list');
const emptyState = document.getElementById('empty-state');
const taskCounter = document.getElementById('task-counter');
const btnClearCompleted = document.getElementById('btn-clear-completed');

/**
 * Guarda el array actual de tareas en localStorage convirtiéndolo a JSON
 */
function saveTasksToLocalStorage() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
}

/**
 * Actualiza el contador de tareas pendientes y la visibilidad del mensaje de lista vacía
 */
function updateUI() {
  const pendingCount = tasks.filter(t => !t.completed).length;
  taskCounter.textContent = `${pendingCount} tarea(s) pendiente(s)`;

  if (tasks.length === 0) {
    emptyState.style.display = 'block';
  } else {
    emptyState.style.display = 'none';
  }
}

/**
 * Pinta todas las tareas en el DOM según el array en memoria
 */
function renderTasks() {
  taskList.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = `task-item ${task.completed ? 'completed' : ''}`;

    // Contenedor izquierdo (Checkbox + Texto)
    const taskLeft = document.createElement('div');
    taskLeft.className = 'task-left';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    checkbox.checked = task.completed;

    // Escuchador para marcar/desmarcar tarea como completada
    checkbox.addEventListener('change', () => {
      task.completed = checkbox.checked;
      saveTasksToLocalStorage();
      renderTasks();
    });

    const spanText = document.createElement('span');
    spanText.className = 'task-text';
    spanText.textContent = task.text;

    taskLeft.appendChild(checkbox);
    taskLeft.appendChild(spanText);

    // Botón de eliminar individual
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger';
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.style.padding = '0.3rem 0.6rem';
    deleteBtn.style.fontSize = '0.8rem';

    deleteBtn.addEventListener('click', () => {
      tasks = tasks.filter(t => t.id !== task.id);
      saveTasksToLocalStorage();
      renderTasks();
    });

    li.appendChild(taskLeft);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });

  updateUI();
}

/**
 * Añade una nueva tarea al array y actualiza el almacenamiento
 */
function addTask() {
  const textValue = taskInput.value.trim();

  if (textValue === '') {
    alert('Por favor, escribe una descripción para la tarea.');
    return;
  }

  // Creamos el objeto tarea con id único generado con Date.now()
  const newTask = {
    id: Date.now(),
    text: textValue,
    completed: false
  };

  tasks.push(newTask);
  saveTasksToLocalStorage();
  renderTasks();

  taskInput.value = '';
  taskInput.focus();
}

/**
 * Elimina todas las tareas marcadas como completadas y actualiza localStorage
 */
function clearCompletedTasks() {
  const hasCompleted = tasks.some(t => t.completed);

  if (!hasCompleted) {
    alert('No hay tareas completadas para limpiar.');
    return;
  }

  // Filtramos manteniendo únicamente las no completadas
  tasks = tasks.filter(task => !task.completed);
  saveTasksToLocalStorage();
  renderTasks();
}

// 3. Asignación de escuchadores de eventos
btnAddTask.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});

btnClearCompleted.addEventListener('click', clearCompletedTasks);

// Renderizado inicial al cargar la página
renderTasks();
