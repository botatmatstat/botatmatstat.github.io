result = getQueryVariable("result")
max_result = getQueryVariable("max_result")
let result_label = document.getElementById("result-label")
result_label.innerHTML += `Ваш результат: ${result} из ${max_result}<br>  ${Math.round(result / max_result * 100)}%`