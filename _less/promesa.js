console.trace('Vamos a ejecutar una función asíncrona con Promose!');
let miPrimeraPromise = new Promise( (resolve, reject) => {
  setTimeout(
    /**Llamamos a `resolve(...)` cuando lo que estabamos haciendo finaliza con éxito
     * , y a `reject(...)` cuando falla.
     * 
     * En este ejemplo, usamos `setTimeout(...)` para simular código asíncrono.
     * 
     * En la vida real, probablemente uses algo como XHR o una API HTML5.
     */
    function nombreQueLeQuierasPoner(){
      resolve('¡Éxito!');
    }, 1000 // milisegundos, o 1 segundo
  );
});
miPrimeraPromise.then(
  /** `succesMessage` es lo que sea que pasamos en la función `resolve(...)` de arriba.
   *No tiene por qué ser un string, pero en nuestro caso lo es.*/
  function mostrarMensajeDeExitoEnLaConsola(successMessage) {
  console.trace('¡Sí! ' + successMessage); // Devuelve "¡Sí! ¡Éxito!"
});
