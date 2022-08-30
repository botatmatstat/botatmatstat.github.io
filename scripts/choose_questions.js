let links = {
    "Задания 2018-1": "questions_2018_1.js", 
    "Задания 2018-1": "questions_2018_2.js",
    "Задания 2018-3": "questions_2018_3.js",
    "Задания 2018-4": "questions_2018_4.js",
    "Задания 2018-5": "questions_2018_retake.js",
    "Задания 2019-1": "questions_2019_1.js",
    "Задания 2019-2": "questions_2019_2.js"
}


Object.keys(links).forEach(
    function(link) {
        let path = `scripts/questions/${links[link]}`
        document.getElementById("choose").innerHTML +=
        `<button class="button" onclick="location.href='quiz.html?path=${path}';">${link}</button>`
})
;