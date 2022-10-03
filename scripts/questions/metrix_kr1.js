questions = [{
            "question": String.raw `В модели парной линейной регрессии со свободным членом \(\,Y_i=\beta_0+\beta_1 X_i+\varepsilon_i\,\)несмещённой оценкой дисперсии оценки МНК \(\,\hat\beta_1\,\)является`,
            "answers": {
                "A": String.raw `\(\,\sum(Y_i-\bar Y)^2/(n-1)\,\)`,
                "B": String.raw `\(\,RSS/n\,\)`,
                "C": String.raw `\(\,RSS/(n-2)\,\)`,
                "D": String.raw `\(\,RSS/((n-2)\sum_i(X_i-\bar X)^2)\,\)`,
                "E": String.raw `\(\,\sum(Y_i-\bar Y)^2/(n-2)\,\)`,
            },
            "true": "A",
            "explanation": "",
        }, {
            "question": String.raw `Чебурашка оценил модель \(\,Y_i=\beta_0+\beta_1 X_i+\varepsilon_i\,\),а Крокодил Гена---модель \(\,X_i=\gamma_0+\gamma_1 Y_i+u_i\,\).Оказалось,что \(\,\hat\gamma_1=0.25/\hat\beta_1\,\).Величина \(\,R^2\,\)в регрессии Чебурашки равна`,
            "answers": {
                "A": String.raw `\(\,1\,\)`,
                "B": String.raw `\(\,0\,\)`,
                "C": String.raw `\(\,0.75\,\)`,
                "D": String.raw `\(\,0.5\,\)`,
                "E": String.raw `\(\,0.25\,\)`,
            },
            "true": "A",
            "explanation": "",
        }, {
            "question": String.raw `По 20 наблюдениям Чебурашка оценил модель \(\,Y_i=\beta_0+\beta_1 X_i+\varepsilon_i\,\).Известно,что \(\,\sum X_i=-10\,\),\(\,\sum X_i^2=40\,\),\(\,\sum X_i Y_i=10\,\),\(\,\sum Y_i=50\,\).Сумма оценок МНК коэффициентов \(\,\hat \beta_0+\hat \beta_1\,\)равна`,
            "answers": {
                "A": String.raw `\(\,4\,\)`,
                "B": String.raw `\(\,5\,\)`,
                "C": String.raw `\(\,3\,\)`,
                "D": String.raw `\(\,2\,\)`,
                "E": String.raw `\(\,1\,\)`,
            },
            "true": "A",
            "explanation": "",
        }, {
            "question": String.raw `Крокодил Гена оценил с помощью МНК зависимость \(\,Y_i=\beta_0+\beta_1 X_i+\varepsilon_i\,\).Оказалось,что \(\,\hat \beta_0=90\,\),а \(\,\hat\beta_1=3\,\).Чебурашка увеличил переменные \(\,X\,\)и \(\,Y\,\)на 10%и снова оценил уравнение регрессии.В результате этой корректировки`,
            "answers": {
                "A": String.raw `оценка \(\,\hat\beta_0\,\)увеличилась,а оценка \(\,\hat\beta_1\,\)не;изменилась`,
                "B": String.raw `оценки \(\,\hat\beta_0\,\)и \(\,\hat\beta_1\,\)не изменились`,
                "C": String.raw `оценки \(\,\hat\beta_0\,\)и \(\,\hat\beta_1\,\)увеличились`,
                "D": String.raw `оценки \(\,\hat\beta_0\,\)и \(\,\hat\beta_1\,\)уменьшились`,
                "E": String.raw `оценка \(\,\hat\beta_0\,\)уменьшилась,а оценка \(\,\hat\beta_1\,\)не;изменилась`,
            },
            "true": "A",
            "explanation": "",
        }, {
            "question": String.raw `Рассмотрим модель множественной регрессии \(\,Y=X\beta+\varepsilon\,\),где \(\,\hat Y=X\hat\beta\,\),\(\,e=Y-\hat Y\,\).Величина \(\,RSS\,\)---это квадрат длины вектора`,
            "answers": {
                "A": String.raw `\(\,\hat Y-\bar Y\,\)`,
                "B": String.raw `\(\,e\,\)`,
                "C": String.raw `\(\,\varepsilon\,\)`,
                "D": String.raw `\(\,\hat Y\,\)`,
                "E": String.raw `\(\,Y-\bar Y\,\)`,
            },
            "true": "A",
            "explanation": "",
        }, {
            "question": String.raw `Оценки МНК вектора коэффициентов регрессии \(\,Y=X\beta+\varepsilon\,\)находятся по формуле`,
            "answers": {
                "A": String.raw `\(\,(XX')^{-1}X'Y\,\)`,
                "B": String.raw `\(\,X'Y(X'X)^{-1}\,\)`,
                "C": String.raw `\(\,(X'X)^{-1}X'Y\,\)`,
                "D": String.raw `\(\,(X'X)^{-1}YX\,\)`,
                "E": String.raw `\(\,(XX')^{-1}Y'`,
            }
        }
    ]

init_question();
var result_array=new Array(questions.length);