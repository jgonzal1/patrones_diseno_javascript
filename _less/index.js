( /** dependencias: assets, body (HTML)
  @returns {boolean}*/
  function index(){
    assets.constuctorDom("h1","Bienvenidos a mi página web");
    assets.constuctorDom(
      "div", "/////", {
        "position":"absolute", "height":200, "width":200
      }
    );
    assets.constuctorDom(
      "p",
      "Hola, soy Javier, y os doy la bienvenida a esta página web"
    );
    assets.constuctorDomDeImagenes(
      "https://cdn.pixabay.com/photo/2021/09/29/13/17/redwood-national-park-6667452_960_720.jpg"
      ,{width: 300}
    );
    return true;
  }
)()