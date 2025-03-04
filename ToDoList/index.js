//Seleccionamos los elementos del DOM

const tareaInput = document.getElementById("tareaInput"); // Input para agregar tareas
const agregarBtn = document.getElementById("agregarBtn"); // Botón para agregar tareas
const listaTareas = document.getElementById("listaTareas"); // Lista de tareas

// Función para agregar una nueva tarea
function agregarTarea() {
  // Obtener valor del input
  const textoTarea = tareaInput.value.trim();

  // Verificamos que el input no está vacío
  if (textoTarea !== "") {
    // Creamos elemento <li> para la tarea
    const li = document.createElement("li");

    // Agregamos el texto de la tarea al <li>
    li.textContent = textoTarea;

    // Creamos un botón de la tarea a completar
    const completarBtn = document.createElement("button");
    completarBtn.textContent = "Completada";
    completarBtn.addEventListener("click", () => {
      // subrayamos la tarea completada
      li.classList.toggle("completada");
    });

    // Agregar el botón al <li>
    li.appendChild(completarBtn);

    // Agregar el <li> a la lista de tareas
    listaTareas.appendChild(li);

    // Limpiar el input después de agregar la tarea
    tareaInput.value = "";
  } else {
    alert("Por favor, ingresa una tarea válida");
  }
}

// Evento para agregar una tarea al hacer clic en el botón
agregarBtn.addEventListener("click", agregarTarea);

