let links_matstat = {
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
    "2018 КР-1 (1)": "metrix_kr1_2018.js", 
}

let links_terver = {
    "2018-1": "terver_2018_1.js",
    "2018-2": "terver_2018_2.js",
}
let links_metrix = {
    "2016 КР-1": "metrix_kr1_2016.js", 
    "2017 КР-1": "metrix_kr1_2017.js", 
    "2018 КР-1 (1)": "metrix_kr1_2018.js", 
    "2018 КР-1 (2)": "metrix_kr1.js",
    "КР-2 2018": "metrix_midterm.js",
    "КР-3 2018": "metrix_kr3.js",
    "КР-4 2018": "metrix_final_0.js",
}

let links_games = {
    "Тигры-1": "games_0.js",
    "Тигры-2": "games_1.js",
    "Тигры-3": "games_2.js",
}
let quizes = {
    "matstat": links_matstat, 
    "terver": links_terver, 
    "metrix": links_metrix, 
    "games": links_games,
}

let test = getQueryVariable("test")
links = quizes[test]

Object.keys(links).forEach(
    function(link) {
        let path = `scripts/questions/${links[link]}&theme=${theme}`
        if (link in verified_links) {background_color = "#178b00"} else {background_color = "#8b0012"}
        document.getElementById("choose").innerHTML +=
        `<button class="button" onclick="location.href='quiz.html?path=${path}&test=${test}';" style="background: ${background_color};">
            ${link}
        </button>`
})
;
