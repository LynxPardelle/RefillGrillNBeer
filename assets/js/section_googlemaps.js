var div_google_maps = document.getElementById("div_google_maps");

if (div_google_maps) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "assets/js/htmls_sources/div_google_maps.html", true);
  xhr.onreadystatechange = function () {
    if (this.readyState !== 4) return;
    if (this.status !== 200) return; // or whatever error handling you want
    div_google_maps.innerHTML = this.response.split("%¬%")[1];
  };
  xhr.send();

  console.log(div_google_maps);
}
