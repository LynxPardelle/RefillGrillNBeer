var div_logos = document.getElementById("div_logos");

if (div_logos) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "assets/js/htmls_sources/div_logos.html", true);
  xhr.onreadystatechange = function () {
    if (this.readyState !== 4) return;
    if (this.status !== 200) return; // or whatever error handling you want
    div_logos.innerHTML = this.response.split("%¬%")[1];
  };
  xhr.send();

  console.log(div_logos);
}
