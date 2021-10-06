const assets = {
  /**
   * @param {string} el texto que se vaya a mostrar
   * @returns elemento h1 que dice `cadenaAEscribir`
   */
  constructorDeElementoH1 : function(cadenaAEscribir){
    const h1 = document.createElement("h1");
    h1.innerText = cadenaAEscribir;
    document.body.appendChild(h1);
  },
  /**
   * @param {string} el texto que se vaya a mostrar
   * @returns id del elemento p que dice `cadenaAEscribir`
   */
  constructorDeElementoP : function(cadenaAEscribir){
    const p = document.createElement("p");
    p.innerText = cadenaAEscribir;
    const id = Math.random().toString().substring(2);
    p.id = id;
    document.body.appendChild(p);
    return id;
  },
  /**
   * @param {Function} callback permite tratar la asincronía
   */
  plantillaAsincronia : function(callback){
    setTimeout(
      ()=>{
        callback("Hola, me ejecuto de forma asíncrona");
      }
      ,3000
    );
  },
  /**
   * @param {string} urlDeLaImagen dirección web donde apunta
   * @returns elemento img de la `urlDeLaImagen` aportada
   */
  constructorDeElementoImagen : function(urlDeLaImagen){
    const img = document.createElement("img");
    img.src = urlDeLaImagen;
    document.body.appendChild(img);
  },
  factoriaDeElementosDom: function() {
    this.constructorDeElementoH1("Bienvenidos a esta página web");
    this.constructorDeElementoP("Hola, me llamo Javier");
    this.constructorDeElementoImagen(
      "https://cdn.pixabay.com/photo/" +
      "2021/08/23/21/12/duckling-6568845_960_720.jpg"
    );
  },
  iteradorDeVectorLongitudDiez: function() {
    return Array.from(
      Array(10), (_,i) => {
        this.constructorDeElementoP(
          "Me gusta programar en JavaScript"
        )
      }
    );
  },
  plantillaDePersonaIndecisa: function() {
    const plantilla = this.iteradorDeVectorLongitudDiez();
    plantilla[plantilla.length-1] = this.constructorDeElementoP(
      "No me gusta programar en JavaScript"
    );
  },

}