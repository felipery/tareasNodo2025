//Seleccionamos los elementos del DOM

const tareaInput = document.getElementById("tareaInput"); // agregar tareas
const agregarBtn = document.getElementById("agregarBtn"); // agregar tareas
const listaTareas = document.getElementById("listaTareas"); // Lista de tareas

// Función para agregar una nueva tarea


function agregarTarea() {
  // Obtengo valor del input
  const textoTarea = tareaInput.value.trim();

  // Verificamos que el input no está vacío

  if (textoTarea !== "") {
    const li = document.createElement("li");
    li.textContent = textoTarea;
    listaTareas.appendChild(li);

    const completarBtn = document.createElement("button");
    completarBtn.textContent = "🗸";
    completarBtn.classList.add("completar");

    completarBtn.addEventListener("click", () => {
      li.classList.toggle("completada");
    });

    li.appendChild(completarBtn);

    const eliminarBtn = document.createElement("button");
    eliminarBtn.textContent = "𐄂";
    eliminarBtn.classList.add("eliminar");

    li.appendChild(eliminarBtn);

    eliminarBtn.addEventListener("click", () => {
      listaTareas.removeChild(li);
    });

    tareaInput.value = "";
  } else {
    alert("Por favor, ingresa una tarea válida");
  }
}

// Evento para agregar una tarea al hacer clic en el botón
agregarBtn.addEventListener("click", agregarTarea);
