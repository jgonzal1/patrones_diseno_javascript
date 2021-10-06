const assets = {
  /**
   * dependencias: body (HTML)
   * @param {string} elementoDom p, div, select, option, a
   * @param contenidosDelElementoDom HTML
   * @param {{position:string, height:number, width:number}} opciones
   * @returns {boolean} nuevo elemento DOM en la página web
   */
  constuctorDom: function(
    elementoDom,
    contenidosDelElementoDom,
    opciones = {position:"", height:NaN, width:NaN}
  ) {
    const elementoDomConContenidos = document.createElement(
      elementoDom
    );
    elementoDomConContenidos.innerHTML = contenidosDelElementoDom;
    Object.keys(opciones).map(
      opt => {
        elementoDomConContenidos.style[opt] = opciones[opt]
      }
    );
    document.body.appendChild(elementoDomConContenidos);
    return true;
  },
  /**
   * dependencias: body (HTML)
   * @param {string} nombreElementoDomExistente id del elemento
   * @param contenidosDelElementoDom HTML
   * @param {{position:string, height:number, width:number}} opciones
   * @returns {boolean} nuevo elemento DOM en la página web
   */
  constuctorDomSobreDom: function(nombreElementoDomExistente, contenidosDelElementoDom, opciones = {position:"", height:NaN, width:NaN}) {
    const elementoDomConContenidos = document.createElement(nombreElementoDomExistente);
    elementoDomConContenidos.innerHTML = contenidosDelElementoDom;
    Object.keys(opciones).map(
      opt => {
        elementoDomConContenidos.style[opt] = opciones[opt]
      }
    );
    document.body.appendChild(elementoDomConContenidos);
    return true;
  },
  /**
   * dependencias: body (HTML)
   * @param {string} urlDeLaImagen http(s)?://... también valdría una imagen local
   * @param {{width:number}} opciones
   * @returns {boolean} nuevo elemento DOM en la página web que es una imagen
   */
   constuctorDomDeImagenes: function(urlDeLaImagen, opciones = {width:NaN}) {
    const elementoDomConContenidos = document.createElement("img");
    elementoDomConContenidos.src = urlDeLaImagen;
    document.body.appendChild(elementoDomConContenidos);
    elementoDomConContenidos.style.width = opciones["width"]+"px";
    return true;
  }
}