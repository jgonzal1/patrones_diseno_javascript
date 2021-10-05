const assets = {
  escribir10Numeros: function(domEl) {
    const arrayDeNumeros = [...Array(10).keys()];
    console.log(arrayDeNumeros);
    try {
      document.getElementById(domEl).innerText = arrayDeNumeros.toString();
    } catch(e) {
      if(e.toString() === "ReferenceError: document is not defined") {
        console.warn("Ejecutando fuera del navegador")
      } else {
        console.error(e);
      }
    }
  }
}
if (typeof(document) === "undefined") {
  assets.escribir10Numeros();
}