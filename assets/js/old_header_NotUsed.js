var div_header = document.getElementById("div_header");

if (div_header) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "assets/js/htmls_sources/header.html", true);
  xhr.onreadystatechange = function () {
    if (this.readyState !== 4) return;
    if (this.status !== 200) return; // or whatever error handling you want
    div_header.innerHTML = this.response.split("%¬%")[1];
  };
  xhr.send();

  console.log(div_header);
}
