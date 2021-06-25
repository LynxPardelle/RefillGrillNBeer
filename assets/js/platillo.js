var platillos = [
  {
    imagen: "./assets/images/Fotos_RG/106687414_2113596805450686_4375080348902482572_n.jpg",
    titulo: "Hamburguesa con papas RG&B Especial",
    descripcion: "Es una hamburguesa especial con mucha cebolla.",
  },
  {
    imagen: "./assets/images/Fotos_RG/51440592_1604582569685448_1888478810605617152_n.jpg",
    titulo: "Corte al carbón",
    descripcion: "Se trata de un corte proveniente de la parte media del lomo, de un músculo que no trabaja mucho, de ahí su particularidad principal: ser carne tierna. Si quieres saborear de este delicioso corte, te recomendamos prepararlo en un término ¾ para que no pierda su jugosidad..",
  },
  {
    imagen: "./assets/images/Fotos_RG/54523635_1642983219178716_8129699352693178368_n.jpg",
    titulo: "Cerveza artesanal RG&B",
    descripcion: "Disfruta de nuestras cervezas artesanales.",
  },
  {
    imagen: "./assets/images/Fotos_RG/52523796_1614220748721630_8663791889004101632_n.jpg",
    titulo: "Corte angus al carbón",
    descripcion: "Rico angus acompañado con una ración de papas y ensalada, no olvides pedir tu salsa de molcajete.",
  },
];

function getPlatillo() {
  let i = 0;
  for (let platillo of platillos) {
    let iframe = document.getElementById("platillo_iframe").contentWindow.document;
    if (iframe) {
      if (iframe.getElementById("div_platillo")) {
        if (iframe.getElementById("platillo_image")) {
          var oldIframe = iframe.getElementById("platillo_image").innerHTML;
          iframe.getElementById("platillo_image").innerHTML =
            `
            <img src="${platillo.imagen}" alt="${platillo.imagen}">
            ` + oldIframe;
          if (iframe.getElementById("platillo_titulo")) {
            iframe.getElementById("platillo_titulo").innerHTML = platillo.titulo;
          }
          if (iframe.getElementById("platillo_descripción")) {
            iframe.getElementById("platillo_descripción").innerHTML = platillo.descripcion;
          }
          document.getElementById("platillos").innerHTML += iframe.getElementById("div_platillo").innerHTML;
          iframe.getElementById("platillo_image").innerHTML = oldIframe;
        }
      }
    }
    i++;
  }
}
