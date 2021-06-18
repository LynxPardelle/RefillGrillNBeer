var platillos = [
  {
    imagen: "https://scontent.fdgo1-1.fna.fbcdn.net/v/t1.6435-9/106687414_2113596805450686_4375080348902482572_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Yq9ygwZAn6cAX9-uNsL&_nc_ht=scontent.fdgo1-1.fna&oh=46721828bad70d278d20ac1d7f2529ef&oe=60D0580A",
    titulo: "Hamburguesa con papas RG&B Especial",
    descripcion: "Es una hamburguesa especial con mucha cebolla.",
  },
  {
    imagen: "https://scontent.fdgo1-1.fna.fbcdn.net/v/t1.6435-9/84045472_1950043315139370_2471821105539579904_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=A56m0HUz1ZAAX-8KPzB&tn=CrpH1EaEkcn38YTb&_nc_ht=scontent.fdgo1-1.fna&oh=40fb5f1e328768358a27154af3b003ef&oe=60D1D54E",
    titulo: "Corte al carbón",
    descripcion: "Se trata de un corte proveniente de la parte media del lomo, de un músculo que no trabaja mucho, de ahí su particularidad principal: ser carne tierna. Si quieres saborear de este delicioso corte, te recomendamos prepararlo en un término ¾ para que no pierda su jugosidad..",
  },
  {
    imagen: "https://scontent.fdgo1-1.fna.fbcdn.net/v/t1.6435-9/54523635_1642983219178716_8129699352693178368_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=730e14&_nc_ohc=W8VVH7YHKncAX-1RjMf&_nc_ht=scontent.fdgo1-1.fna&oh=8ea4d07a7e835f986ddeb8ebcb64e591&oe=60D18AF7",
    titulo: "Cerveza artesanal RG&B",
    descripcion: "Disfruta de nuestras cervezas artesanales.",
  },
  {
    imagen: "https://scontent.fdgo1-1.fna.fbcdn.net/v/t1.6435-9/59864874_1680148358795535_366319225259687936_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=sSYRYf17UYAAX_pMBj8&_nc_ht=scontent.fdgo1-1.fna&oh=56a6a154cc8d74976fc6954bfb5dfead&oe=60D0434C",
    titulo: "Corte angus al carbón",
    descripcion: "Rico angus acompañado con una ración de papas y ensalada, no olvides pedir tu salsa de molcajete.",
  },
];

var iframe = document.getElementById("platillo_iframe").contentWindow.document;

setTimeout(() => {
  getPlatillo();
}, 100);

function getPlatillo() {
  let i = 0;
  for (let platillo of platillos) {
    if (iframe) {
      if (iframe.getElementById("platillo_image")) {
        iframe.getElementById("platillo_image").innerHTML = `
        <img src="${platillo.imagen}" alt="${platillo.imagen}">
        <div class="letras">
          <h2 id="platillo_titulo">
          </h2>
          <p id="platillo_descripción">
          </p>
        </div>
        `;
        if (iframe.getElementById("platillo_titulo")) {
          iframe.getElementById("platillo_titulo").innerHTML = platillo.titulo;
        }
        if (iframe.getElementById("platillo_descripción")) {
          iframe.getElementById("platillo_descripción").innerHTML = platillo.descripcion;
        }
        if (iframe.getElementById("div_platillo")) {
          document.getElementById("platillos").innerHTML += iframe.getElementById("div_platillo").innerHTML;
        }
      }
    }
    i++;
  }
}
