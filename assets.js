const assets = {
  /**
   * @param {string} el texto que se vaya a mostrar
   * @returns elemento h1 que dice `cadenaAEscribir`
   */
  constructorDeElementoH1 : function(cadenaAEscribir){
    const p = document.createElement("h1");
    p.innerText = cadenaAEscribir;
    document.body.appendChild(p);
  },
  /**
   * @param {string} el texto que se vaya a mostrar
   * @returns elemento p que dice `cadenaAEscribir`
   */
  constructorDeElementoP : function(cadenaAEscribir){
    const p = document.createElement("p");
    p.innerText = cadenaAEscribir;
    document.body.appendChild(p);
  },
  factoriaDeElementosDom: function() {
    this.constructorDeElementoH1("Bienvenidos a esta página web");
    this.constructorDeElementoP("Hola, me llamo Javier");
  }
}