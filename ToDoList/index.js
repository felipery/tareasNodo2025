//traemos los elementos del DOM

const input = document.getElementById("tareaInput");
const btnAgregar = document.getElementById("agregarBtn");
const lista = document.getElementById("listaTareas");


//Agregamos los eventos
btnAgregar.addEventListener("click", agregarTarea);
btnCompletar.addEventListener("click", completarTarea);

//Funciones


function agregarTarea() {
  const tarea = input.value;
  if (tarea === "") {
    alert("Debes escribir una tarea");
    return;
  }
  const li = document.createElement("li");
  li.textContent = tarea;
  lista.appendChild(li);
  input.value = "";

  const btnCompletar = document.createElement("button");
  btnCompletar.textContent = "✓";

  li.appendChild(btnCompletar);
  lista.appendChild(li);
  input.value = "";

}

function completarTarea(event) {
  const li = event.target.parentElement.remove();
  li.style.backgroundColor = "green";
}
