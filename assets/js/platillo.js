var platillos = [
  {
    imagen: "./assets/images/Fotos_RG/HGCPA.jpg",
    titulo: "Hamburguesa con papas RG&B #1",
    descripcion: "Es una hamburguesa especial con papas, hecha con pan brioche artesanal.",
    type: "Hamburguesa",
  },
  {
    imagen: "./assets/images/Fotos_RG/HGEN.jpg",
    titulo: "Hamburguesa con piña RG&B",
    descripcion: "Hamburguesa con piña y ración de ensalada.",
    type: "Hamburguesa",
  },
  {
    imagen: "./assets/images/Fotos_RG/HGCA.jpg",
    titulo: "Hamburguesa especial con cebolla",
    descripcion:
      "Es una hamburguesa especial con cebolla y ración de ensalada.",
    type: "Hamburguesa",
  },
  {
    imagen: "./assets/images/Fotos_RG/HGPA.jpg",
    titulo: "Hamburguesa con papas RG&B #2",
    descripcion: "Es una hamburguesa especial con papas.",
    type: "Hamburguesa",
  },
  {
    imagen: "./assets/images/Fotos_RG/CORCA.jpg",
    titulo: "Corte al carbón",
    descripcion:
      "Corte proveniente de la parte media del lomo con ración de enselada.",
    type: "Corte",
  },
  {
    imagen: "./assets/images/Fotos_RG/CORVE.jpg",
    titulo: "Corte al carbón",
    descripcion:
      "Proveniente de la parte media del lomo, acompañado de una ración de papas, ensalada y salsa agria",
    type: "Corte",
  },
  {
    imagen: "./assets/images/Fotos_RG/CORVESA.jpg",
    titulo: "Corte a la parrilla con ensalada",
    descripcion: "Corte acompañado de ensalada.",
    type: "Corte",
  },
  {
    imagen: "./assets/images/Fotos_RG/CORPA.jpg",
    titulo: "Corte a la parrilla",
    descripcion: "Corte acompañado con papas.",
    type: "Corte",
  },
  {
    imagen: "./assets/images/Fotos_RG/CERVE.jpg",
    titulo: "Cerveza artesanal RG&B",
    descripcion: "Disfruta de nuestras cervezas artesanales.",
    type: "Cerveza",
  },
  {
    imagen: "./assets/images/Fotos_RG/CERV.jpg",
    titulo: "Cerveza artesanal RG&B",
    descripcion:
      "Disfruta de nuestras cervezas artesanales en presentación de lata.",
    type: "Cerveza",
  },
  {
    imagen: "./assets/images/Fotos_RG/CERRE.jpg",
    titulo: "Cerveza artesanal RG&B",
    descripcion:
      "Disfruta de nuestras cervezas artesanales, tenemos variedad de producto.",
    type: "Cerveza",
  },
  {
    imagen: "./assets/images/Fotos_RG/CERV3.jpg",
    titulo: "Cerveza artesanal RG&B",
    descripcion:
      "Disfruta de nuestras cervezas artesanales, con toques exóticos según el color.",
    type: "Cerveza",
  },
];

function getPlatillo() {
  let i = 0;

  for (let platillo of platillos) {
    let iframe =
      document.getElementById("platillo_iframe").contentWindow.document;
    if (iframe) {
      // console.log(iframe);
      if (iframe.getElementById("div_platillo")) {
        // console.log(iframe.getElementById("div_platillo"));
        if (iframe.getElementById("platillo_image")) {
          var oldIframe = iframe.getElementById("platillo_image").innerHTML;
          iframe.getElementById("platillo_image").innerHTML =
            `
            <img class="w-100" src="${platillo.imagen}" alt="${platillo.titulo}" title="${platillo.titulo}">
            ` + oldIframe;
          // console.log(iframe.getElementById("platillo_image").innerHTML);
          if (iframe.getElementById("platillo_titulo")) {
            iframe.getElementById("platillo_titulo").innerHTML =
              platillo.titulo;
          }
          if (iframe.getElementById("platillo_descripción")) {
            iframe.getElementById("platillo_descripción").innerHTML =
              platillo.descripcion;
          }
          /* console.log(document.getElementById("platillos"));
          console.log(iframe.getElementById("div_platillo").innerHTML); */
          // console.log(platillo.type);
          switch (platillo.type) {
            case "Corte":
              document.getElementById("platillos_cortes").innerHTML +=
                iframe.getElementById("div_platillo").innerHTML;
              break;
            case "Cerveza":
              document.getElementById("platillos_cervezas").innerHTML +=
                iframe.getElementById("div_platillo").innerHTML;
              break;
            case "Hamburguesa":
              document.getElementById("platillos_hamburguesas").innerHTML +=
                iframe.getElementById("div_platillo").innerHTML;
              break;
          }
          // document.getElementById("platillos").innerHTML += iframe.getElementById("div_platillo").innerHTML;
          iframe.getElementById("platillo_image").innerHTML = oldIframe;
        }
      }
    }
    i++;
  }
}
