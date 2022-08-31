theme = getQueryVariable("theme")
set_theme()

function set_theme() {
    if (theme == "night") {
        document.getElementsByTagName("html")[0].className = "night";
        document.getElementsByTagName("body")[0].className = "night";
    } else {
        document.getElementsByTagName("body")[0].className = "";
        document.getElementsByTagName("html")[0].className = ""
    }
}
function switch_theme(){
    if (theme == "night") {
        location.href = '?theme=light'
    } else {
        location.href = '?theme=night'
    }
}
function getQueryVariable(variable){
    var query = window.location.search.substring(1)
    var vars = query.split("&")
    for (var i=0; i < vars.length; i++) {
        var pair = vars[i].split("=")
        if (pair[0] == variable) {
            return pair[1]
        }
    }
    return(NaN);
}
