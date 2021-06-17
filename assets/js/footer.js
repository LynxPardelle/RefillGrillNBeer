var div_footer = document.getElementById("div_footer");

if (div_footer) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "assets/js/htmls_sources/div_footer.html", true);
  xhr.onreadystatechange = function () {
    if (this.readyState !== 4) return;
    if (this.status !== 200) return; // or whatever error handling you want
    div_footer.innerHTML = this.response.split("%¬%")[1];
  };
  xhr.send();

  console.log(div_footer);
}
