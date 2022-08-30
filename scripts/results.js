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

result = getQueryVariable("result")
max_result = getQueryVariable("max_result")

let result_label = document.getElementById("result-label")
result_label.innerHTML = `Ваш результат: ${result} из ${max_result}<br>  ${Math.round(result / max_result * 100)}%`