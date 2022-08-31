path = getQueryVariable("path")
var scriptElement = document.createElement("script");
scriptElement.src = `${path}`;
document.head.appendChild(scriptElement);