// script.js
function cifrar() {
    let texto = document.getElementById('inputTexto').value;
    if (!validarTexto(texto)) {
        alert("Solo se permiten letras minúsculas y espacios.");
        return;
    }
    let resultado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    document.getElementById('resultado').innerText = resultado;
}

function descifrar() {
    let texto = document.getElementById('inputTexto').value;
    if (!validarTexto(texto)) {
        alert("Solo se permiten letras minúsculas y espacios.");
        return;
    }
    let resultado = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.getElementById('resultado').innerText = resultado;
}

function copiar() {
    let contenido = document.getElementById('resultado').innerText;
    navigator.clipboard.writeText(contenido);
    alert("Texto copiado!");
}
