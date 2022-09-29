// Номер текущего вопроса 
var question_number = 0;
test = getQueryVariable("test")

let titles = {
    "matstat": "Ботать матстат", 
    "terver": "Ботать тервер", 
    "metrix": "Ботать метрику", 
}
document.getElementById("title").innerHTML = titles[getQueryVariable("test")]
// Инициализировать вопрос
function init_question() {
    document.getElementById("question-text").innerHTML = questions[question_number].question;
    document.getElementById("question-number").innerHTML = (question_number + 1) + " вопрос из " + (questions.length);
    render_answers();
}

// Перейти к предыдущему вопросу
function prev_question() {
    let options_field = document.getElementById("options");
    options_field.innerHTML = "";
    if (question_number > 0) {question_number--}
    else {location.href=`instructions.html?theme=${theme}&test=${test}` }
    init_question();
}
// Перейти к следующему вопросу
function next_question() {
    let options_field = document.getElementById("options");
    options_field.innerHTML = "";
    question_number++;
    if (question_number < questions.length) {init_question()} 
    else {results()}
    disable_next_button(true);
}

// Вывести пояснение
function render_explanation(effect, value, right_answer){  
    let question_field = document.getElementById("question-text");
    let explanation = questions[question_number].explanation; 
    if (explanation != ""){
        question_field .innerHTML += `<hr><p class="explanation">${explanation}</p>`;
    }
    result_array[question_number] = effect; 
    disable_buttons(value, right_answer);
    render_latex();
}

// Отключить возможность нажимать кнопки
function disable_buttons(value, right_answer){
    let buttons = document.getElementsByName("button");
    buttons.forEach(function(button) {
        button.disabled = true;
        if (button.id != right_answer){
            if (button.id == value) {button.style = "background: #ff8f8c;"}
            else {button.style = "background: #ffc5c3;"}
        } else {
            if (button.id == value){ button.style = "background: #cdffca;"}
            else {button.style = "background: #edffec;"}
        }
    });
    disable_next_button(false);
}

// Поменять состояние кнопки "вперёд"
function disable_next_button(bool) {
    let next_button = document.getElementById("next-button");
    if (bool) {
        next_button.disabled = true; 
        next_button.style = "background:grey;cursor:not-allowed;"
    } else {
        next_button.disabled = false; 
        next_button.style = "background:#85a4ed;cursor:pointer;"
    }
}
// Отобразить варианты ответов
function render_answers(){
    let options_field = document.getElementById("options")
    let answers = questions[question_number].answers;
    let right_answer = questions[question_number].true;
    Object.keys(answers).forEach(
        function(key) {
            let effect = key == right_answer; 
            let value = answers[key];
            options_field.innerHTML += 
            `<button class="option" name="button" id="${key}"
            onclick="render_explanation(${effect}, '${key}', '${right_answer}');">
                ${value}
            </button>`;
     });
     render_latex();
}

// Отрендерить латех
function render_latex(){
    MathJax.typeset();
}

// Перейти к результатам
function results() {
    let max_result = questions.length; 
    results_link = `results.html?theme=${theme}&result=${result_array.reduce((a, b) => a + b, 0)}&max_result=${max_result}`;
    location.href = results_link; 
}
