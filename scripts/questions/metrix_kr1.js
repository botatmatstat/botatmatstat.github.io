questions = [{
    "question": String.raw`В модели парной линейной регрессии со свободным членом \(\,Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\,\) несмещённой оценкой дисперсии оценки МНК \(\,\hat\beta_1\,\) является`,
    "answers": {
    
            "A": String.raw`
                \(\,\sum (Y_i - \bar Y)^2 / (n-1)\,\)
            `,
            "B": String.raw`
                \(\,RSS/n\,\)
            `,
            "C": String.raw`
                \(\,RSS/(n-2)\,\)
            `,
            "D": String.raw`
                \(\,RSS/((n-2)\sum_i (X_i - \bar X)^2)\,\)
            `,
            "E": String.raw`
                \(\,\sum (Y_i - \bar Y)^2 / (n-2)\,\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Чебурашка оценил модель \(\,Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\,\), а Крокодил Гена --- модель \(\,X_i = \gamma_0 + \gamma_1 Y_i + u_i\,\). Оказалось, что \(\,\hat\gamma_1 = 0.25/\hat\beta_1\,\). Величина \(\,R^2\,\) в регрессии Чебурашки равна`,
    "answers": {
    
            "A": String.raw`
                \(\,1\,\)
            `,
            "B": String.raw`
                \(\,0\,\)
            `,
            "C": String.raw`
                \(\,0.75\,\)
            `,
            "D": String.raw`
                \(\,0.5\,\)
            `,
            "E": String.raw`
                \(\,0.25\,\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`По 20 наблюдениям Чебурашка оценил модель \(\,Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\,\). Известно, что \(\,\sum X_i = -10\,\), \(\,\sum X_i^2 = 40\,\), \(\,\sum X_i Y_i = 10\,\), \(\,\sum Y_i = 50\,\).  Сумма оценок МНК коэффициентов \(\,\hat \beta_0 + \hat \beta_1\,\) равна`,
    "answers": {
    
            "A": String.raw`
                \(\,4\,\)
            `,
            "B": String.raw`
                \(\,5\,\)
            `,
            "C": String.raw`
                \(\,3\,\)
            `,
            "D": String.raw`
                \(\,2\,\)
            `,
            "E": String.raw`
                \(\,1\,\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Крокодил Гена оценил с помощью МНК зависимость \(\,Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\,\). Оказалось, что \(\,\hat \beta_0 = 90\,\), а \(\,\hat\beta_1 = 3\,\). Чебурашка увеличил переменные \(\,X\,\) и \(\,Y\,\) на 10% и снова оценил уравнение регрессии. В результате этой корректировки`,
    "answers": {
    
            "A": String.raw`
                оценка \(\,\hat\beta_0\,\) увеличилась, а оценка \(\,\hat\beta_1\,\) не
изменилась
            `,
            "B": String.raw`
                оценки \(\,\hat\beta_0\,\) и \(\,\hat\beta_1\,\) не изменились
            `,
            "C": String.raw`
                оценки \(\,\hat\beta_0\,\) и \(\,\hat\beta_1\,\) увеличились
            `,
            "D": String.raw`
                оценки \(\,\hat\beta_0\,\) и \(\,\hat\beta_1\,\) уменьшились
            `,
            "E": String.raw`
                оценка \(\,\hat\beta_0\,\) уменьшилась, а оценка \(\,\hat\beta_1\,\) не
изменилась
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Рассмотрим модель множественной регрессии \(\,Y=X\beta+\varepsilon\,\), где \(\,\hat Y = X\hat\beta\,\), \(\,e=Y-\hat Y\,\). Величина \(\,RSS\,\) --- это квадрат длины вектора`,
    "answers": {
    
            "A": String.raw`
                \(\,\hat Y - \bar Y\,\)
            `,
            "B": String.raw`
                \(\,e\,\)
            `,
            "C": String.raw`
                \(\,\varepsilon\,\)
            `,
            "D": String.raw`
                \(\,\hat Y\,\)
            `,
            "E": String.raw`
                \(\,Y-\bar Y\,\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Оценки МНК вектора коэффициентов регрессии \(\,Y=X\beta + \varepsilon\,\) находятся по формуле`,
    "answers": {
    
            "A": String.raw`
                \(\,(XX')^{-1}X'Y\,\)
            `,
            "B": String.raw`
                \(\,X'Y(X'X)^{-1}\,\)
            `,
            "C": String.raw`
                \(\,(X'X)^{-1}X'Y\,\)
            `,
            "D": String.raw`
                \(\,(X'X)^{-1}YX\,\)
            `,
            "E": String.raw`
                \(\,(XX')^{-1}Y'X\,\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Распределение случайной величины \(\,X\,\) задано таблицей  \begin{center} \begin{tabular}{ccccc} \toprule $x$ & 0 & 1 & 2 & 3 \\  $\operatorname{P}(X=x)$ & $-b$ & $0.5-b$ & $0.5+b$ & $b$ \\ \bottomrule \end{tabular} \end{center}  Вероятность \(\,\operatorname{P}(X=1)\,\) равна`,
    "answers": {
    
            "A": String.raw`
                \(\,0.2\,\)
            `,
            "B": String.raw`
                \(\,0.4\,\)
            `,
            "C": String.raw`
                \(\,0.5\,\)
            `,
            "D": String.raw`
                \(\,0\,\)
            `,
            "E": String.raw`
                \(\,0.3\,\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Храбрый исследователь Вениамин оценил регрессию \(\,\hat Y_i = \underset{(5)}{23} + \underset{(2)}{10}X_i\,\), в скобках приведены стандартные ошибки. Доверительный интервал для свободного члена равен \(\,[14; 32]\,\). Доверительный интервал для коэффициента наклона при том же уровне доверия будет равен`,
    "answers": {
    
            "A": String.raw`
                \(\,[6.08; 13.92]\,\)
            `,
            "B": String.raw`
                \(\,[6; 14]\,\)
            `,
            "C": String.raw`
                \(\,[5; 15]\,\)
            `,
            "D": String.raw`
                \(\,[1; 19]\,\)
            `,
            "E": String.raw`
                \(\,[6.4; 13.6]\,\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Крокодил Гена оценивает модель регрессии \(\,Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\,\) с помощью МНК. Чебурашка получит такую же оценку коэффициента \(\,\beta_1\,\), если будет минимизировать`,
    "answers": {
    
            "A": String.raw`
                выборочную дисперсию объясняющей переменной
            `,
            "B": String.raw`
                коэффициент детерминации
            `,
            "C": String.raw`
                выборочную ковариацию регрессора и объясняемой переменной
            `,
            "D": String.raw`
                выборочную дисперсию объясняемой переменной
            `,
            "E": String.raw`
                выборочную дисперсию остатков
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`В модели \(\,Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\,\) при выполненных предпосылках теоремы Гаусса-Маркова и нормальных ошибках тестовая статистика \(\,(\hat\beta_1 - \beta_1)/se(\hat\beta_1)\,\) имеет распределение`,
    "answers": {
    
            "A": String.raw`
                \(\,t_{n-2}\,\)
            `,
            "B": String.raw`
                \(\,N(0;1)\,\)
            `,
            "C": String.raw`
                \(\,\chi^2_{n-2}\,\)
            `,
            "D": String.raw`
                \(\,\chi^2_1\,\)
            `,
            "E": String.raw`
                \(\,N(0;\sigma^2)\,\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    ]

init_question();   
var result_array = new Array(questions.length);