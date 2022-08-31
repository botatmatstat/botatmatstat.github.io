let links = {
    "Файнал 2016": "2016_1.js",
    "Файнал 2017": "2017_1.js",
    "Файнал 2018-1": "2018_1.js",
    "Файнал 2018-1": "2018_2.js",
    "Файнал 2018-3": "2018_3.js",
    "Файнал 2018-4": "2018_4.js",
    "Файнал 2018-5": "2018_retake.js",
    "Файнал 2019-1": "2019_1.js",
    "Файнал 2019-2": "2019_2.js"
}
let verified_links = {
    "Файнал 2018-5": "2018_retake.js",
    "Файнал 2019-1": "2019_1.js",
    "Файнал 2019-2": "2019_2.js",
}

Object.keys(links).forEach(
    function(link) {
        let path = `scripts/questions/${links[link]}&theme=${theme}`
        if (link in verified_links) {background_color = "#178b00"} else {background_color = "#8b0012"}
        document.getElementById("choose").innerHTML +=
        `<button class="button" onclick="location.href='quiz.html?path=${path}';" style="background: ${background_color};">
            ${link}
        </button>`
})
;
