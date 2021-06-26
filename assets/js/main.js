function getBody() {
  document.body.innerHTML =
    `
    <header id="div_header">
    </header>
      
    <main>
      <section id="div_google_maps">
      </section>
      <section id="div_menus">
      </section>
      <section id="div_logos">
      </section>
      // <div id="tester"></div>
    </main>
              
    <footer onload="getHeader()" id="div_footer">
    </footer>
                
    <!-- Recursos -->

    <iframe id="platillo_iframe" class="d-none" src="./platillo.html" frameborder="0"></iframe>

    <!-- Contenedores -->

    <iframe id="header_iframe" class="d-none" onload="getHeader()" src="/header.html" frameborder="0"></iframe>
    <iframe id="section_googlemaps_iframe" class="d-none" onload="getSGoogleMaps()" src="/div_google_maps.html" frameborder="0"></iframe>
    <iframe id="section_menus_iframe" class="d-none" onload="getSMenus()" onchange="getSMenus()" src="/div_menus.html" frameborder="0"></iframe>
    <iframe id="section_logos_iframe" class="d-none" onload="getSLogos()" src="/div_logos.html" frameborder="0"></iframe>
    <iframe id="footer_iframe" class="d-none" onload="getFooter()" src="/div_footer.html" frameborder="0"></iframe>
    ` + document.body.innerHTML;

  /*
  let myJSONs = [];

  let titles = ["Un título", "Un gran título", "El título", "Esto es un título"];

  let subtitles = ["con subtítulo", "y un subtítulo", "junto con un subtítulo", "ademas, un subtítulo"];

  let text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim amet sit id doloremque beatae adipisci dicta nisi quae fuga pariatur ad temporibus similique impedit, eius fugiat in commodi. Deleniti, quaerat?";

  subtext = ["Por lo consecuente, así será", "Y entonces es así", "Así que por eso, eso es"];

  for (let i = 0; i <= 5; i++) {
    myJSONs.push({
      title: titles[random(3)],
      subtitle: subtitles[random(3)],
      text: text,
      subtext: subtext[random(2)],
    });
  }
  console.log(myJSONs);

  for (let Json of myJSONs) {
    document.getElementById("tester").innerHTML += `
    <section class="d-block w-50 mx-auto my-3 bg-dark p-3">
    <h3 class="text-center text-honey my-3">${Json.title}</h3>
    <h4 class="text-left m-2 text-palehoney">${Json.subtitle}</h4>
    <p class="d-block w-75 mt-2 mx-auto" >
    ${Json.text}
    </p>
    <p class="text-wood mb-2">
    ${Json.subtext}
    </p>
    </section>`;
  }
  */
}
function getHeader() {
  document.getElementById("div_header").innerHTML = document.getElementById("header_iframe").contentWindow.document.getElementById("div_header").innerHTML;
}
function getSGoogleMaps() {
  document.getElementById("div_google_maps").innerHTML = document.getElementById("section_googlemaps_iframe").contentWindow.document.getElementById("div_google_maps").innerHTML;
}
function getSMenus() {
  document.getElementById("div_menus").innerHTML = document.getElementById("section_menus_iframe").contentWindow.document.getElementById("div_menus").innerHTML;
/*   console.log(document.getElementById("div_menus").innerHTML); */
  if (document.getElementById("platillo_iframe").contentWindow.document) {
    getPlatillo();
  }
}
function getSLogos() {
  document.getElementById("div_logos").innerHTML = document.getElementById("section_logos_iframe").contentWindow.document.getElementById("div_logos").innerHTML;
}
function getFooter() {
  document.getElementById("div_footer").innerHTML = document.getElementById("footer_iframe").contentWindow.document.getElementById("div_footer").innerHTML;
}

function random(max = 50) {
  return Math.floor(Math.random() * max);
}