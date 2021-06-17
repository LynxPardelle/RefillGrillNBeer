var div_menus = document.getElementById("div_menus");

if (div_menus) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "assets/js/htmls_sources/div_menus.html", true);
  xhr.onreadystatechange = function () {
    if (this.readyState !== 4) return;
    if (this.status !== 200) return; // or whatever error handling you want
    div_menus.innerHTML = this.response.split("%¬%")[1];
  };
  xhr.send();

  console.log(div_menus);
}
