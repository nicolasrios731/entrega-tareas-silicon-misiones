// Constantes y Selección de Elementos
const LIMITE = 280;

const areaTexto = document.querySelector("#texto");
const contadorCaracteres = document.querySelector("#caracteres");
const contadorPalabras = document.querySelector("#palabras");
const contadorSinEspacios = document.querySelector("#sinEspacios");
const contadorRestantes = document.querySelector("#restantes");
const cardRestantes = document.querySelector("#card-restantes");
const btnLimpiar = document.querySelector("#btn-limpiar");

// Función principal de actualización
function actualizarMetricas() {
  const texto = areaTexto.value;

  // 1. Caracteres Totales
  contadorCaracteres.textContent = texto.length;

  // 2. Palabras
  const textoLimpio = texto.trim();
  contadorPalabras.textContent = textoLimpio === "" ? 0 : textoLimpio.split(/\s+/).length;

  // 3. Caracteres Sin Espacios
  contadorSinEspacios.textContent = texto.replaceAll(" ", "").length;

  // 4. Caracteres Restantes
  const restantes = LIMITE - texto.length;
  contadorRestantes.textContent = restantes;

  // 5. Validación de Límite (Estilos)
  if (texto.length > LIMITE) {
    areaTexto.classList.add("excedido");
    cardRestantes.classList.add("excedido");
  } else {
    areaTexto.classList.remove("excedido");
    cardRestantes.classList.remove("excedido");
  }
}

// Función para vaciar el texto
function limpiarTexto() {
  areaTexto.value = "";
  actualizarMetricas();
}

// Escuchadores de Eventos
areaTexto.addEventListener("input", actualizarMetricas);
btnLimpiar.addEventListener("click", limpiarTexto);