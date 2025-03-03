//Capturamos los números y el resultado	

const resultado = document.getElementById('resultado');

//Capturamos los botones

const btnSumar = document.getElementById('btnSumar');
const btnRestar = document.getElementById('btnRestar');
const btnMultiplicar = document.getElementById('btnMultiplicar');
const btnDividir = document.getElementById('btnDividir');


//funciones de los botones

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => {
  try {
    if (b === 0) {
      throw new Error("No se puede dividir por cero");
    }
    return a / b;
  } catch (error) {
    console.error(error.message);
    alert(error.message);
    return null;
  }
};

//Eventos de los botones


//Sumar
btnSumar.addEventListener('click', () => {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  resultado.value = sumar(num1, num2);
});

//Restar
btnRestar.addEventListener('click', () => {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  resultado.value = restar(num1, num2);
});

//Multiplicar
btnMultiplicar.addEventListener('click', () => {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  resultado.value = multiplicar(num1, num2);
});

//Dividir
btnDividir.addEventListener('click', () => {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  resultado.value = dividir(num1, num2);
});