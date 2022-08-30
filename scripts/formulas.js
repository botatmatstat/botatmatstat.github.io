// Не используется 
function render_formula(key, value){
    let question_field = document.getElementById(key);
    try {
        MathJax.typeset();
        question_field.innerHTML
        += MathJax.tex2chtml(value, {display: true}).outerHTML;
        MathJax.typeset();
    } catch (error) {
        console.log(error);
        question_field.innerHTML += value; 
    }
}

function render_latex(){
    MathJax.typeset();
    MathJax.startup.document.state(0);
    MathJax.typeset();
}