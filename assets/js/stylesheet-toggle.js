// Button to disable and re-enable the page's stylesheet.
const btn = document.querySelector(".stylesheet-toggle-button");
const stylesheet = document.querySelector("link[rel='stylesheet']"); 
btn.addEventListener("click", () => { stylesheet.disabled = !stylesheet.disabled; });